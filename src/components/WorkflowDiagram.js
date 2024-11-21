import React, { memo, useCallback, useEffect, useMemo } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import styled from '@emotion/styled';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
} from '@xyflow/react';
import ProcessIcon from '@mui/icons-material/Settings';
import ConsoleIcon from '@mui/icons-material/Terminal';
import DescriptionIcon from '@mui/icons-material/Description';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CloudIcon from '@mui/icons-material/Cloud';
import GitHubIcon from '@mui/icons-material/GitHub';

import '@xyflow/react/dist/base.css';
import TurboEdge from './TurboEdge';

import { Handle, Position } from '@xyflow/react';

const NodeBase = styled.div`
  font-size: 10px;
  background: ${({ active }) => active ? 
    'linear-gradient(165deg, rgba(142, 45, 226, 1), rgba(74, 0, 224, 1))' :
    'linear-gradient(165deg, rgba(142, 45, 226, 0.6), rgba(74, 0, 224, 0.6))'
  };
  border-radius: 12px;
  color: #ffffff;
  opacity: ${({ active, inactive }) => inactive ? 0.4 : 1};
  font-weight: 300;
  padding: 0px;
  text-align: center;
  box-shadow: 0 4px 24px rgba(142, 45, 226, 0.3),
              inset 0 0 12px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  width: 140px;
  height: 100px;
  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 210px;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    box-shadow: 0 8px 32px rgba(142, 45, 226, 0.4),
                inset 0 0 12px rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  &.selected {
    box-shadow: 0 0 0 2px rgba(255, 0, 255, 0.6),
                0 8px 32px rgba(142, 45, 226, 0.4);
  }
`;

const TurboNodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TurboNodeIcon = styled.div`
`;

const TurboNodeTitle = styled.div`
  font-weight: bold;
`;

const DataNode = styled.div`
  width: 125px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  border: 1px solid ${({ active }) => 
    active ? 'rgba(174, 83, 186, 0.8)' : 'rgba(174, 83, 186, 0.4)'};
  opacity: ${({ inactive }) => inactive ? 0.4 : 1};
  border-radius: 4px;
  position: relative;
  background: rgba(174, 83, 186, 0.05);
  gap: 10px;
  backdrop-filter: blur(8px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 12px rgba(174, 83, 186, 0.1);

  &:hover {
    border-color: rgba(174, 83, 186, 0.6);
    background: rgba(174, 83, 186, 0.08);
    box-shadow: 0 4px 20px rgba(174, 83, 186, 0.2);
    transform: translateY(-1px);
  }
`;

const DataNodeTitle = styled.div`
  font-size: 12px;
  color: #ae53ba;
  font-weight: 500;
`;

const GradientIcon = styled.div`
  font-size: 20px;
  background: linear-gradient(135deg, #ae53ba, #2a8af6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  align-items: center;
  filter: drop-shadow(0 2px 4px rgba(174, 83, 186, 0.2));
  transition: all 0.3s ease;

  &:hover {
    filter: drop-shadow(0 2px 8px rgba(174, 83, 186, 0.4));
    transform: scale(1.05);
  }
`;

const SquaredNode = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  border: 2px dashed rgba(174, 83, 186, 0.6);
  background: rgba(174, 83, 186, 0.03);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 12px rgba(174, 83, 186, 0.1);
  backdrop-filter: blur(8px);

  &:hover {
    border-color: rgba(174, 83, 186, 0.8);
    background: rgba(174, 83, 186, 0.06);
    box-shadow: 0 4px 20px rgba(174, 83, 186, 0.2);
    transform: translateY(-1px);
  }
`;

const SquaredNodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SquaredNodeTitle = styled.div`
  font-size: 12px;
  margin-bottom: 5px;
  text-align: center;
`;

const StyledReactFlow = styled(ReactFlow)`
  .react-flow {
    position: relative;
  }

  .react-flow__edge-path {
    stroke: url(#edge-gradient);
    stroke-width: 1.5;
    filter: drop-shadow(0 2px 4px rgba(174, 83, 186, 0.2));
    transition: all 0.3s ease;
  }

  .react-flow__edge:hover .react-flow__edge-path {
    stroke-width: 2;
    filter: drop-shadow(0 4px 8px rgba(174, 83, 186, 0.4));
  }

  .react-flow__edge-text {
    font-size: 10px;
    font-weight: 500;
    fill: rgba(174, 83, 186, 0.8);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  .react-flow__edge-textwrapper {
    display: none;
  }

  .react-flow__handle {
    width: 8px;
    height: 8px;
    background: rgba(174, 83, 186, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
`;

const _TurboNode = ({ data }) => {
  return (
    <SquaredNodeContainer>
      <SquaredNodeTitle>{data.title}</SquaredNodeTitle>
      <SquaredNode>
        <GradientIcon>{data.icon}</GradientIcon>
      </SquaredNode>
      <Handle type="target" position={Position.Left} style={{top: "calc(50% + 12px)", opacity: 0}} />
      <Handle type="source" position={Position.Right} style={{top: "calc(50% + 12px)", opacity: 0}} />
    </SquaredNodeContainer>
  );
};

const _MainNode = ({ data }) => {
  const theme = useTheme();
  const active = data.active;
  const inactive = data.inactive;
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <NodeBase active={active} inactive={inactive}>
      {isMobile ? (
        <>
          <Handle type="target" position={Position.Top} id='input' style={{opacity: 0, left: '30%'}}/>
          <Handle type="target" position={Position.Top} id='sources' style={{opacity: 0, left: '70%'}}/>
          <Handle type="source" position={Position.Bottom} id='output' style={{opacity: 0}}/>
        </>
      ) : (
        <>
          <Handle type="target" position={Position.Left} style={{opacity: 0}} />
          <Handle type="target" position={Position.Top} id='top' style={{opacity: 0}}/>
          <Handle type="source" position={Position.Right} style={{opacity: 0}}/>
          <Handle type="target" position={Position.Bottom} id='bottom' style={{opacity: 0}}/>
        </>
      )}
      <TurboNodeContainer>
        <TurboNodeIcon>{data.icon}</TurboNodeIcon>
        <TurboNodeTitle style={{ fontSize: '16px' }}>{data.title}</TurboNodeTitle>
      </TurboNodeContainer>
      {isMobile ? (
        <>
          <div style={{ position: 'absolute', top: '3px', left: '30%', transform: 'translateX(-50%)', fontSize: '8px', color: 'white', textTransform: "uppercase" }}>input</div>
          <div style={{ position: 'absolute', top: '3px', left: '70%', transform: 'translateX(-50%)', fontSize: '8px', color: 'white', textTransform: "uppercase" }}>sources</div>
          <div style={{ position: 'absolute', bottom: '3px', left: '50%', transform: 'translateX(-50%)', fontSize: '8px', color: 'white', textTransform: "uppercase" }}>output</div>
        </>
      ) : (
        <>
          <div style={{ position: 'absolute', top: '3px', left: '50%', transform: 'translateX(-50%)', fontSize: '8px', color: 'white', textTransform: "uppercase" }}>sources</div>
          <div style={{ position: 'absolute', bottom: '3px', left: '50%', transform: 'translateX(-50%)', fontSize: '8px', color: 'white', textTransform: "uppercase" }}>llm</div>
          <div style={{ position: 'absolute', left: '-2px', top: '50%', transform: 'translateY(-50%) rotate(-90deg)', fontSize: '8px', color: 'white', textTransform: "uppercase" }}>input</div>
          <div style={{ position: 'absolute', right: '-6px', top: '50%', transform: 'translateY(-50%) rotate(90deg)', fontSize: '8px', color: 'white', textTransform: "uppercase" }}>output</div>
        </>
      )}
    </NodeBase>
  );
};

const _ModelNode = ({ data }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <GradientIcon>{data.icon}</GradientIcon>
      <div style={{ fontSize: '10px', marginTop: '5px' }}>{data.title}</div>
      <Handle type="source" position={Position.Top} style={{opacity: 0}}/>
    </div>
  );
};

const _SubDataNode = ({ data }) => {
  return (
    <DataNode active={data.active} inactive={data.inactive}>
      <GradientIcon>{data.icon}</GradientIcon>
      <DataNodeTitle position={data.titlePosition || 'bottom'}>{data.title}</DataNodeTitle>
      {data.targetHandlePosition && <Handle type="target" position={data.targetHandlePosition} style={{opacity: 0}}/>}
      {data.sourceHandlePosition && <Handle type="source" position={data.sourceHandlePosition || Position.Right} style={{opacity: 0}}/>}
    </DataNode>
  );
};

const MainNode = memo(_MainNode);
const SubDataNode = memo(_SubDataNode);
const TurboNode = memo(_TurboNode);
const ModelNode = memo(_ModelNode);

const horizontalGap = 100;
const horizontalAdjust = 40; // New variable for fine-tuning horizontal positions
const verticalOffset = 10;
const verticalMargin = 20;
const iconSize = "small";

const initialNodes = [
  {
    id: '1a',
    position: { x: 60 - horizontalGap + horizontalAdjust, y: 115 - verticalMargin + verticalOffset},
    data: { 
      icon: <ConsoleIcon fontSize={iconSize} />, 
      title: 'User', 
      sourceHandlePosition: Position.Right,
    },
    type: 'data',
  },
  {
    id: '1b',
    position: { x: 60 - horizontalGap + horizontalAdjust, y: 115 + verticalMargin + verticalOffset },
    data: { 
      icon: <GitHubIcon fontSize={iconSize} />, 
      title: 'Repository', 
      sourceHandlePosition: Position.Right
    },
    type: 'data',
  },
  {
    id: '2',
    position: { x: 201, y: 80 + verticalOffset },
    data: { 
      icon: <SmartToyIcon fontSize={iconSize} />, 
      title: '+CODER', 
    },
    type: 'main',
  },
  {
    id: '3a',
    position: { x: 120 - horizontalAdjust, y: 0 },
    data: { 
      icon: <DescriptionIcon fontSize={iconSize} />, 
      title: 'Guidelines',
      titlePosition: 'bottom',
      sourceHandlePosition: Position.Bottom
    },
    type: 'data',
  },
  {
    id: '3c',
    position: { x: 280 - horizontalAdjust, y: 0 },
    data: { 
      icon: <ProcessIcon fontSize={iconSize} />, 
      title: 'Agents config',
      titlePosition: 'bottom',
      sourceHandlePosition: Position.Bottom
    },
    type: 'data',
  },
  {
    id: '4a',
    position: { x: 200 + 140 + horizontalGap, y: 115 - verticalMargin + verticalOffset },
    data: { 
      icon: <CloudIcon fontSize={iconSize} />,
      title: 'Cloud Events', 
      targetHandlePosition: Position.Left
    },
    type: 'data',
  },
  {
    id: '4b',
    position: { x: 200 + 140 + horizontalGap, y: 115 + verticalMargin + verticalOffset },
    data: { 
      icon: <GitHubIcon fontSize={iconSize} />,
      title: 'Commit', 
      targetHandlePosition: Position.Left
    },
    type: 'data',
  },
];

const initialEdges = [
  { id: 'e1a-2', source: '1a', target: '2', label: 'Triggers', animated: true},
  { id: 'e1b-2', source: '1b', target: '2', label: 'Provides LLM', animated: true},
  { id: 'e3a-2', source: '3a', target: '2', label: 'Injects data', animated: true, targetHandle: "top" },
  { id: 'e3c-2', source: '3c', target: '2', label: 'Injects data', animated: true, targetHandle: "top" },
  { id: 'e2-4a', source: '2', target: '4a', label: 'Produces', animated: true, },
  { id: 'e2-4b', source: '2', target: '4b', label: 'Produces', animated: true, },
];

const nodeTypes = {
  turbo: TurboNode,
  main: MainNode,
  data: SubDataNode,
  model: ModelNode,
};

const edgeTypes = {
  turbo: TurboEdge,
};

const defaultEdgeOptions = {
  type: 'turbo',
  //markerEnd: 'edge-circle',
};

const WorkflowDiagram = ({ activeNodeIds = [], inactiveNodeIds = [], onNodeClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const mobileNodes = useMemo(() => initialNodes.map(node => {
    const mobileHorizontalAdjustment = 50; // Amount to adjust positions in mobile
    
    switch(node.id) {
      case '1a':
        return {
          ...node,
          position: { x: node.position.x + mobileHorizontalAdjustment, y: node.position.y }
        };
      case '1b':
        return {
          ...node,
          position: { x: node.position.x + mobileHorizontalAdjustment, y: node.position.y }
        };
      case '3a':
        return {
          ...node,
          position: { x: node.position.x - mobileHorizontalAdjustment, y: node.position.y }
        };
      case '3c':
        return {
          ...node,
          position: { x: node.position.x - mobileHorizontalAdjustment, y: node.position.y }
        };
      default:
        return node;
    }
  }).filter(Boolean), []);

  const mobileEdges = useMemo(() => initialEdges
    .filter(edge => edge.source !== '5' && edge.target !== '5')
    .map(edge => {
      if (edge.source === '1') {
        return { ...edge, targetHandle: 'input' };
      }
      if (['3a', '3b', '3c'].includes(edge.source)) {
        return { ...edge, targetHandle: 'sources' };
      }
      if (edge.source === '2') {
        return { ...edge, sourceHandle: 'output' };
      }
      return edge;
    }), []);

  const [nodes, setNodes , onNodesChange] = useNodesState(initialNodes);
  useEffect(() => {
    const baseNodes = isMobile ? mobileNodes : initialNodes;
    setNodes(baseNodes.map(node => ({
      ...node,
      data: {
        ...node.data,
        active: activeNodeIds.includes(node.id),
        inactive: inactiveNodeIds.includes(node.id)
      }
    })));
  }, [isMobile, activeNodeIds, inactiveNodeIds]);

  const [edges, setEdges, onEdgesChange] = useEdgesState(isMobile ? mobileEdges : initialEdges);

  return (
    <StyledReactFlow
      style={{ height: isMobile ? '300px' : '300px' }}
      nodes={nodes}
      edges={edges}
      fitView
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      defaultEdgeOptions={defaultEdgeOptions}
      preventScrolling={false}
      connectOnClick={false}
      panOnScroll={false}
      panOnDrag={false}
      nodesDraggable={true}
      elementsSelectable={false}
      nodesConnectable={false}
      zoomOnDoubleClick={false}
      zoomOnScroll={false}
      zoomOnPinch={false}
      onNodeClick={onNodeClick}
      
    >

      <svg>
        <defs>
          <linearGradient id="edge-gradient">
            <stop offset="0%" stopColor="#ae53ba" />
            <stop offset="100%" stopColor="#2a8af6" />
          </linearGradient>

          <marker
            id="edge-circle"
            viewBox="-5 -5 10 10"
            refX="0"
            refY="0"
            markerUnits="strokeWidth"
            markerWidth="10"
            markerHeight="10"
            orient="auto"
          >
            <circle stroke="#2a8af6" strokeOpacity="0.75" r="2" cx="0" cy="0" />
          </marker>
        </defs>
      </svg>
      <Box sx={{position: "absolute", left: 0, top: 0, width: 58, height: 19, backgroundColor:"#4a00e0"}} />
    </StyledReactFlow>
  );
};

export default WorkflowDiagram;
