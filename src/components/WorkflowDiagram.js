import React, { memo, useCallback } from 'react';
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import {
  ReactFlow,
  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
} from '@xyflow/react';
import ProcessIcon from '@mui/icons-material/Settings';
import ResultIcon from '@mui/icons-material/Done';
import ApiIcon from '@mui/icons-material/Api';
import FolderIcon from '@mui/icons-material/Folder';
import DescriptionIcon from '@mui/icons-material/Description';
import SmartToyIcon from '@mui/icons-material/SmartToy';

import '@xyflow/react/dist/base.css';
import TurboEdge from './TurboEdge';

import { Handle, Position } from '@xyflow/react';

const NodeBase = styled.div`
  font-size: 10px;
  background: linear-gradient(135deg, #8e2de2, #4a00e0);
  border-radius: 8px;
  color: #ffffff;
  font-weight: 300;
  padding: 15px;
  text-align: center;
  box-shadow: 0 0 20px rgba(142, 45, 226, 0.6);
  transition: all 0.3s ease;

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
  font-size: 20px;
  margin-bottom: 5px;
`;

const TurboNodeText = styled.div`
  text-align: center;
`;

const TurboNodeTitle = styled.div`
  font-weight: bold;
  margin-bottom: 2px;
`;

const TurboNodeSubline = styled.div`
  font-size: 8px;
`;

const DataNode = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  position: relative;
`;

const DataNodeTitle = styled.div`
  font-size: 10px;
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  ${props => props.position === 'top' ? 'bottom: 100%;' : 'top: 100%;'}
`;

const GradientIcon = styled.div`
  font-size: 24px;
  background: linear-gradient(to right, #ae53ba, #2a8af6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const CircularNode = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px dashed #ae53ba;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CircularNodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CircularNodeTitle = styled.div`
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
`;

const _TurboNode = ({ data }) => {
  return (
    <CircularNodeContainer>
      <CircularNodeTitle>{data.title}</CircularNodeTitle>
      <CircularNode>
        <GradientIcon>{data.icon}</GradientIcon>
      </CircularNode>
      <Handle type="target" position={Position.Left} style={{top: "calc(50% + 12px)"}} />
      <Handle type="source" position={Position.Right} style={{top: "calc(50% + 12px)"}} />
    </CircularNodeContainer>
  );
};

const _MainNode = ({ data }) => {
  return (
    <NodeBase>
      <Handle type="target" position={Position.Left} />
      <Handle type="target" position={Position.Top} id='top' />
      <TurboNodeContainer>
        <TurboNodeIcon>{data.icon}</TurboNodeIcon>
        <TurboNodeText>
          <TurboNodeTitle>{data.title}</TurboNodeTitle>
          <TurboNodeSubline>{data.subline}</TurboNodeSubline>
        </TurboNodeText>
      </TurboNodeContainer>
      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Bottom} id='bottom' />
    </NodeBase>
  );
};

const _ModelNode = ({ data }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <GradientIcon>{data.icon}</GradientIcon>
      <div style={{ fontSize: '10px', marginTop: '5px' }}>{data.title}</div>
      <Handle type="source" position={Position.Top} />
    </div>
  );
};

const _TaskNode = ({ data }) => {

  return (
    <div style={{ 
      border: '2px solid #ae53ba', 
      borderRadius: '4px', 
      padding: '10px', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      overflow: 'hidden'
    }}>
      <div style={{ fontSize: '14px', fontWeight: 'bold', marginTop: '5px', marginBottom: '10px' }}>{data.title}</div>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
};


const _SubDataNode = ({ data }) => {
  return (
    <DataNode>
      <GradientIcon>{data.icon}</GradientIcon>
      <DataNodeTitle position={data.titlePosition || 'bottom'}>{data.title}</DataNodeTitle>
      <Handle type="source" position={data.sourceHandlePosition || Position.Bottom} />
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
    position: { x: 100 - 29, y: 150 - 31},
    data: { 
      icon: <SmartToyIcon />, 
      title: 'Your process', 
      sourceHandlePosition: Position.Right
    },
    type: 'data',
  },
  {
    id: '2',
    position: { x: 200 - 29, y: 150 - 50 },
    data: { 
      icon: <ProcessIcon />, 
      title: 'Pluscoder Agents', 
      subline: '.git repo',
    },
    type: 'main',
  },
  {
    id: '3a',
    position: { x: 135, y: 0 },
    data: { 
      icon: <ApiIcon />, 
      title: 'API',
      titlePosition: 'top',
    },
    type: 'data',
  },
  {
    id: '3b',
    position: { x: 200, y: 0 },
    data: { 
      icon: <FolderIcon />, 
      title: 'Repository',
      titlePosition: 'top',
    },
    type: 'data',
  },
  {
    id: '3c',
    position: { x: 265, y: 0 },
    data: { 
      icon: <DescriptionIcon />, 
      title: 'Documents',
      titlePosition: 'top',
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
    id: '4',
    position: { x: 330, y: 100 - 6 },
    data: { 
      icon: <ResultIcon />, 
      title: 'Result', 
    },
    type: 'turbo',
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', label: 'Triggers', animated: true},
  { id: 'e3a-2', source: '3a', target: '2', label: 'Injects data', animated: true, targetHandle: "top" },
  { id: 'e3b-2', source: '3b', target: '2', label: 'Injects data', animated: true, targetHandle: "top" },
  { id: 'e3c-2', source: '3c', target: '2', label: 'Injects data', animated: true, targetHandle: "top" },
  { id: 'e5-2', source: '5', target: '2', label: 'Provides LLM', animated: true, targetHandle: "bottom" },
  { id: 'e2-4', source: '2', target: '4', label: 'Produces' },
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
  markerEnd: 'edge-circle',
};

const WorkflowDiagram = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((els) => addEdge(params, els)),
    [],
  );

  return (
    <StyledReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      defaultEdgeOptions={defaultEdgeOptions}
      panOnScroll={false}
      panOnDrag={false}
      nodesDraggable={false}
      elementsSelectable={false}
      nodesConnectable={false}
      zoomOnDoubleClick={false}
      zoomOnScroll={false}
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
