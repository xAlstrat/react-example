import React, { memo, useCallback, useMemo } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import styled from '@emotion/styled';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
} from '@xyflow/react';
import ProcessIcon from '@mui/icons-material/Settings';
import ApiIcon from '@mui/icons-material/Api';
import FolderIcon from '@mui/icons-material/Folder';
import DescriptionIcon from '@mui/icons-material/Description';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CloudIcon from '@mui/icons-material/Cloud';
import GitHubIcon from '@mui/icons-material/GitHub';

import '@xyflow/react/dist/base.css';
import TurboEdge from './TurboEdge';

import { Handle, Position } from '@xyflow/react';

const NodeBase = styled.div`
  font-size: 10px;
  background: linear-gradient(135deg, #8e2de2, #4a00e0);
  border-radius: 8px;
  color: #ffffff;
  font-weight: 300;
  padding: 0px;
  text-align: center;
  box-shadow: 0 0 20px rgba(142, 45, 226, 0.6);
  transition: all 0.3s ease;
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

  &:hover {
    box-shadow: 0 0 30px rgba(142, 45, 226, 0.8);
  }

  &.selected {
    box-shadow: 0 0 0 2px #ff00ff, 0 0 30px rgba(142, 45, 226, 0.8);
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
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border: 2px solid #ae53ba;
  border-radius: 4px;
  position: relative;
  background: transparent;
  gap: 8px;
`;

const DataNodeTitle = styled.div`
  font-size: 12px;
  color: #ae53ba;
  font-weight: 500;
`;

const GradientIcon = styled.div`
  font-size: 18px;
  background: linear-gradient(to right, #ae53ba, #2a8af6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  align-items: center;
`;

const SquaredNode = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 4px;
  border: 2px dashed #ae53ba;
  display: flex;
  justify-content: center;
  align-items: center;
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
    stroke-width: 2;
  }

  .react-flow__edge-text {
    font-size: 10px;
  }

  .react-flow__edge-textwrapper {
    display: none;
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
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <NodeBase>
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
    <DataNode>
      <GradientIcon>{data.icon}</GradientIcon>
      <DataNodeTitle>{data.title}</DataNodeTitle>
      {data.targetHandlePosition && <Handle type="target" position={data.targetHandlePosition} style={{opacity: 0}}/>}
      {data.sourceHandlePosition && <Handle type="source" position={data.sourceHandlePosition || Position.Right} style={{opacity: 0}}/>}
    </DataNode>
  );
};

const MainNode = memo(_MainNode);
const SubDataNode = memo(_SubDataNode);
const TurboNode = memo(_TurboNode);
const ModelNode = memo(_ModelNode);

const initialNodes = [
  {
    id: '1',
    position: { x: 100 - 29, y: 150 - 32},
    data: { 
      icon: <ProcessIcon />, 
      title: 'Trigger', 
      sourceHandlePosition: Position.Right,
    },
    type: 'data',
  },
  {
    id: '2',
    position: { x: 200 - 40, y: 98 },
    data: { 
      icon: <SmartToyIcon />, 
      title: '+CODER', 
    },
    type: 'main',
  },
  {
    id: '3a',
    position: { x: 135, y: 0 },
    data: { 
      icon: <ApiIcon />, 
      title: 'API',
      titlePosition: 'bottom',
      sourceHandlePosition: Position.Bottom
    },
    type: 'data',
  },
  {
    id: '3b',
    position: { x: 200, y: 0 },
    data: { 
      icon: <FolderIcon />, 
      title: 'Repository',
      titlePosition: 'bottom',
      sourceHandlePosition: Position.Bottom
    },
    type: 'data',
  },
  {
    id: '3c',
    position: { x: 265, y: 0 },
    data: { 
      icon: <DescriptionIcon />, 
      title: 'Guidelines',
      titlePosition: 'bottom',
      sourceHandlePosition: Position.Bottom
    },
    type: 'data',
  },
  {
    id: '5',
    position: { x: 200 - 6, y: 230 },
    data: { 
      icon: <SmartToyIcon />, 
      title: 'Your Model API', 
    },
    type: 'model',
  },
  {
    id: '4a',
    position: { x: 330, y: 80 },
    data: { 
      icon: <CloudIcon />,
      title: 'Cloud Events', 
      targetHandlePosition: Position.Left
    },
    type: 'data',
  },
  {
    id: '4b',
    position: { x: 330, y: 140 },
    data: { 
      icon: <GitHubIcon />,
      title: 'Repo Commits', 
      targetHandlePosition: Position.Left
    },
    type: 'data',
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', label: 'Triggers', animated: true},
  { id: 'e3a-2', source: '3a', target: '2', label: 'Injects data', animated: true, targetHandle: "top" },
  { id: 'e3b-2', source: '3b', target: '2', label: 'Injects data', animated: true, targetHandle: "top" },
  { id: 'e3c-2', source: '3c', target: '2', label: 'Injects data', animated: true, targetHandle: "top" },
  { id: 'e5-2', source: '5', target: '2', label: 'Provides LLM', animated: true, targetHandle: "bottom" },
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

const WorkflowDiagram = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const mobileNodes = useMemo(() => initialNodes.map(node => {
    const getSourcePosition = (id) => {
      if (['3a', '3b', '3c'].includes(id)) return Position.Bottom;
      if (id === '1') return Position.Right;
      if (id === '2') return Position.Bottom;
      return Position.Left;
    };

    const getTargetPosition = (id) => {
      if (['4a', '4b'].includes(id)) return Position.Top;
      return Position.Left;
    };
    if (node.id === '5') return null; // Remove Model API node
    
    switch(node.id) {
      case '1': // Trigger
        return { 
          ...node, 
          position: { x: 100 - 29, y: 30 },
          data: {
            ...node.data,
            sourceHandlePosition: Position.Bottom,
            targetHandlePosition: getTargetPosition(node.id)
          }
        };
      case '2': // Main node
        return { ...node, position: { x: 100, y: 120 } };
      case '3a': // API
      case '3b': // Repository  
      case '3c': // Guidelines
        const xPositions = {
          '3a': 135,
          '3b': 200,
          '3c': 265
        };
        return { 
          ...node, 
          position: { 
            x: xPositions[node.id], 
            y: 30
          },
          data: {
            ...node.data,
            sourceHandlePosition: getSourcePosition(node.id),
            targetHandlePosition: getTargetPosition(node.id)
          }
        };
      case '4a': // Cloud Events
      case '4b': // Repo Commits
        return {
          ...node,
          position: {
            x: node.id === '4a' ? 120 : 240,
            y: 270
          },
          data: {
            ...node.data,
            sourceHandlePosition: getSourcePosition(node.id),
            targetHandlePosition: getTargetPosition(node.id)
          }
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

  const [nodes, , onNodesChange] = useNodesState(isMobile ? mobileNodes : initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(isMobile ? mobileEdges : initialEdges);

  return (
    <StyledReactFlow
      style={{ height: isMobile ? '400px' : '500px' }}
      nodes={nodes}
      edges={edges}
      fitView
      nodeTypes={nodeTypes}
      // onNodesChange={onNodesChange}
      // onEdgesChange={onEdgesChange}
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
