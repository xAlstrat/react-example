import React from 'react';
import { Box } from '@mui/material';
import { styled, keyframes } from '@mui/system';

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: #ffffff; }
`;

const EditorContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#1e1e1e',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(2),
  fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
  fontSize: '14px',
  lineHeight: 1.5,
  overflow: 'hidden',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
}));

const CodeLine = styled('div')({
  color: '#d4d4d4',
  marginBottom: '4px',
});

const Comment = styled('span')({
  color: '#6a9955',
});

const Keyword = styled('span')({
  color: '#569cd6',
});

const String = styled('span')({
  color: '#ce9178',
});

const TypedLine = styled(CodeLine)(({ delay }) => ({
  overflow: 'hidden',
  borderRight: '2px solid #ffffff',
  whiteSpace: 'nowrap',
  animation: `${typing} 2s steps(40, end) ${delay}s forwards, ${blinkCaret} 0.75s step-end infinite`,
}));

const CodeEditor = () => {
  return (
    <EditorContainer>
      <CodeLine><Comment>{`// Pluscoder in action`}</Comment></CodeLine>
      <CodeLine><Keyword>import</Keyword> Pluscoder <Keyword>from</Keyword> <String>&apos;pluscoder&apos;</String>;</CodeLine>
      <CodeLine />
      <TypedLine delay={0}><Keyword>const</Keyword> codeAssistant = <Keyword>new</Keyword> Pluscoder();</TypedLine>
      <TypedLine delay={2}>
        <Keyword>const</Keyword> enhancedCode = codeAssistant.improveCode(myCode);
      </TypedLine>
      <TypedLine delay={4}>
        <Keyword>const</Keyword> bugFixes = codeAssistant.findBugs(enhancedCode);
      </TypedLine>
      <TypedLine delay={6}>
        <Keyword>const</Keyword> optimizedCode = codeAssistant.optimize(bugFixes);
      </TypedLine>
      <TypedLine delay={8}>
        <Comment>{`// Ship with confidence!`}</Comment>
      </TypedLine>
    </EditorContainer>
  );
};

export default CodeEditor;