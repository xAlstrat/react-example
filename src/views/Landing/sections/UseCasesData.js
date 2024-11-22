import React from 'react';
import ProcessIcon from '@mui/icons-material/Settings';
import DescriptionIcon from '@mui/icons-material/Description';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CloudIcon from '@mui/icons-material/Cloud';
import GitHubIcon from '@mui/icons-material/GitHub';
import Terminal from '@mui/icons-material/Terminal';
import { Handle, Position } from '@xyflow/react';

const horizontalGap = 100;
const verticalOffset = 10;
const verticalMargin = 20;
const iconSize = "small";

const USE_CASES = [
    {
      id: 'coding',
      title: 'Coding',
      description: 'Chat with an specialized Agent and instruct them to work in the repository',
      activeNodes: ['1a', '2', '3c'],
      inactiveNodes: ['3a', '4a', '4b'],
      steps: [
        'Developer initiates conversation with agent',
        'AI reads repository context and guidelines',
        'Agent performs requested changes'
      ],
      initialNodes: [
        {
          id: '1a',
          position: { x: 60 - horizontalGap, y: 115 - verticalMargin + verticalOffset},
          data: { 
            icon: <Terminal fontSize={iconSize} />, 
            title: 'Developer', 
            sourceHandlePosition: Position.Right,
          },
          type: 'data',
        },
        {
          id: '1b',
          position: { x: 60 - horizontalGap, y: 115 + verticalMargin + verticalOffset },
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
          id: '3c',
          position: { x: 208, y: 0 },
          data: { 
            icon: <DescriptionIcon fontSize={iconSize} />, 
            title: 'Guidelines',
            titlePosition: 'bottom',
            sourceHandlePosition: Position.Bottom
          },
          type: 'data',
        },
        {
          id: '4b',
          position: { x: 200 + 140 + horizontalGap, y: 124 },
          data: { 
            icon: <GitHubIcon fontSize={iconSize} />,
            title: 'Commit', 
            targetHandlePosition: Position.Left
          },
          type: 'data',
        },
      ],
      initialEdges: [
        { id: 'e1a-2', source: '1a', target: '2', label: 'Triggers', animated: true},
        { id: 'e1b-2', source: '1b', target: '2', label: 'Provides LLM', animated: true},
        { id: 'e3a-2', source: '3a', target: '2', label: 'Injects data', animated: true, targetHandle: "top" },
        { id: 'e3c-2', source: '3c', target: '2', label: 'Injects data', animated: true, targetHandle: "top" },
        { id: 'e2-4a', source: '2', target: '4a', label: 'Produces', animated: true, },
        { id: 'e2-4b', source: '2', target: '4b', label: 'Produces', animated: true, },
      ]
    },
    {
      id: 'brainstorming',
      title: 'Brainstorming',
      description: 'AI assists in brainstorming and requirements gathering by analyzing guidelines and existing codebase',
      activeNodes: ['1a', '2', '3c'],
      inactiveNodes: ['3a', '4a', '4b'],
      steps: [
        'Developer requests creative input',
        'AI analyzes requirements and guidelines',
        'Agent provides structured solutions'
      ],
      initialNodes: [
        {
          id: '1a',
          position: { x: 60 - horizontalGap, y: 115 - verticalMargin + verticalOffset},
          data: { 
            icon: <Terminal fontSize={iconSize} />, 
            title: 'Developer', 
            sourceHandlePosition: Position.Right,
          },
          type: 'data',
        },
        {
          id: '1b',
          position: { x: 60 - horizontalGap, y: 115 + verticalMargin + verticalOffset },
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
          active: true
        },
        {
          id: '3a',
          position: { x: 120, y: 0 },
          data: { 
            icon: <ProcessIcon fontSize={iconSize} />, 
            title: 'Agents config',
            titlePosition: 'bottom',
            sourceHandlePosition: Position.Bottom
          },
          type: 'data',
        },
        {
          id: '3c',
          position: { x: 280, y: 0 },
          data: { 
            icon: <DescriptionIcon fontSize={iconSize} />, 
            title: 'Guidelines',
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
      ],
      initialEdges: [
        { id: 'e1a-2', source: '1a', target: '2', label: 'Triggers', animated: true},
        { id: 'e1b-2', source: '1b', target: '2', label: 'Provides LLM', animated: true},
        { id: 'e3a-2', source: '3a', target: '2', label: 'Injects data', animated: true, targetHandle: "top" },
        { id: 'e3c-2', source: '3c', target: '2', label: 'Injects data', animated: true, targetHandle: "top" },
        { id: 'e2-4a', source: '2', target: '4a', label: 'Produces', animated: true, },
        { id: 'e2-4b', source: '2', target: '4b', label: 'Produces', animated: true, },
      ]
    },
    {
      id: 'onboarding',
      title: 'Developer Onboarding',
      description: 'New developers can interact with an agent that understands project guidelines and best practices',
      activeNodes: ['2', '3a', '3c'],
      inactiveNodes: ['1a', '4a', '4b'],
      steps: [
        'New developer asks about codebase',
        'AI processes guidelines and config',
        'Agent explains patterns and practices'
      ],
      initialNodes: [
        {
          id: '1a',
          position: { x: 60 - horizontalGap, y: 115 - verticalMargin + verticalOffset},
          data: { 
            icon: <ProcessIcon fontSize={iconSize} />, 
            title: 'Requirement', 
            sourceHandlePosition: Position.Right,
          },
          type: 'data',
        },
        {
          id: '1b',
          position: { x: 60 - horizontalGap, y: 115 + verticalMargin + verticalOffset },
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
          active: true
        },
        {
          id: '3a',
          position: { x: 120, y: 0 },
          data: { 
            icon: <ProcessIcon fontSize={iconSize} />, 
            title: 'Agents config',
            titlePosition: 'bottom',
            sourceHandlePosition: Position.Bottom
          },
          type: 'data',
        },
        {
          id: '3c',
          position: { x: 280, y: 0 },
          data: { 
            icon: <DescriptionIcon fontSize={iconSize} />, 
            title: 'Guidelines',
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
      ],
      initialEdges: [
        { id: 'e1a-2', source: '1a', target: '2', label: 'Triggers', animated: true},
        { id: 'e1b-2', source: '1b', target: '2', label: 'Provides LLM', animated: true},
        { id: 'e3a-2', source: '3a', target: '2', label: 'Injects data', animated: true, targetHandle: "top" },
        { id: 'e3c-2', source: '3c', target: '2', label: 'Injects data', animated: true, targetHandle: "top" },
        { id: 'e2-4a', source: '2', target: '4a', label: 'Produces', animated: true, },
        { id: 'e2-4b', source: '2', target: '4b', label: 'Produces', animated: true, },
      ]
    },
    {
      id: 'git-management',
      title: 'Git Issues Management',
      description: 'Automated creation and management of Git issues based on code analysis',
      activeNodes: ['1b', '2', '4b'],
      inactiveNodes: ['3a', '3c', '4a'],
      steps: [
        'System detects code changes',
        'AI analyzes changes and context',
        'Agent creates/updates issues'
      ],
      initialNodes: [
        {
          id: '1a',
          position: { x: 60 - horizontalGap, y: 115 - verticalMargin + verticalOffset},
          data: { 
            icon: <ProcessIcon fontSize={iconSize} />, 
            title: 'Requirement', 
            sourceHandlePosition: Position.Right,
          },
          type: 'data',
        },
        {
          id: '1b',
          position: { x: 60 - horizontalGap, y: 115 + verticalMargin + verticalOffset },
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
          active: true
        },
        {
          id: '3a',
          position: { x: 120, y: 0 },
          data: { 
            icon: <ProcessIcon fontSize={iconSize} />, 
            title: 'Agents config',
            titlePosition: 'bottom',
            sourceHandlePosition: Position.Bottom
          },
          type: 'data',
        },
        {
          id: '3c',
          position: { x: 280, y: 0 },
          data: { 
            icon: <DescriptionIcon fontSize={iconSize} />, 
            title: 'Guidelines',
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
      ],
      initialEdges: [
        { id: 'e1a-2', source: '1a', target: '2', label: 'Triggers', animated: true},
        { id: 'e1b-2', source: '1b', target: '2', label: 'Provides LLM', animated: true},
        { id: 'e3a-2', source: '3a', target: '2', label: 'Injects data', animated: true, targetHandle: "top" },
        { id: 'e3c-2', source: '3c', target: '2', label: 'Injects data', animated: true, targetHandle: "top" },
        { id: 'e2-4a', source: '2', target: '4a', label: 'Produces', animated: true, },
        { id: 'e2-4b', source: '2', target: '4b', label: 'Produces', animated: true, },
      ]
    }
  ];

export default USE_CASES;