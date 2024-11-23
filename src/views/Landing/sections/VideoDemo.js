
import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import Section from 'components/Section';
import HighlightedText from 'components/HighlightedText';
import AnimatedElement from 'components/AnimatedElement';

const VideoDemo = () => {
  return (
    <Section id="video-demo" bgColor="dark1">
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <AnimatedElement>
            <Typography 
              variant="h2" 
              component="h2" 
              align="center" 
              gutterBottom 
              sx={{ 
                fontWeight: 'bold',
                mb: 6,
                color: 'common.white'
              }}
            >
              See <HighlightedText>Pluscoder</HighlightedText> in Action
            </Typography>
          </AnimatedElement>
          
          <AnimatedElement delay={0.2}>
            <Box
              sx={{
                position: 'relative',
                paddingTop: '56.25%', // 16:9 Aspect Ratio
                width: '100%',
                borderRadius: 2,
                overflow: 'hidden'
              }}
            >
              <video
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                controls
                muted
                loop
              >
                <source src="/pluscoder_demo_f.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Box>
          </AnimatedElement>
        </Container>
      </Box>
    </Section>
  );
};

export default VideoDemo;
