import React from 'react';
import { Typography, Avatar, Grid, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';

const TestimonialsSection = styled('section')(({ theme }) => ({
  padding: theme.spacing(8, 2),
  background: theme.palette.background.default,
}));

const TestimonialCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(3),
  textAlign: 'center',
}));

const testimonials = [
  {
    name: 'Alice Johnson',
    role: 'Frontend Developer',
    content: 'Pluscoder has revolutionized the way I work. It\'s like having a brilliant coding partner always by my side!',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: 'Bob Smith',
    role: 'Startup Founder',
    content: 'Thanks to Pluscoder, I was able to build my MVP in record time. It\'s an indispensable tool for any entrepreneur.',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
  {
    name: 'Carol Davis',
    role: 'Full Stack Developer',
    content: 'The AI suggestions from Pluscoder are incredibly accurate. It\'s dramatically improved my coding efficiency.',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
];

const Testimonials = () => {
  return (
    <TestimonialsSection>
      <Typography variant="h2" align="center" gutterBottom>
        What Our Users Say
      </Typography>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} md={4} key={index}>
            <TestimonialCard>
              <Avatar
                src={testimonial.avatar}
                alt={testimonial.name}
                sx={{ width: 80, height: 80, mb: 2 }}
              />
              <Typography variant="h6" gutterBottom>
                {testimonial.name}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                {testimonial.role}
              </Typography>
              <CardContent>
                <Typography variant="body2">
                  &ldquo;{testimonial.content}&rdquo;
                </Typography>
              </CardContent>
            </TestimonialCard>
          </Grid>
        ))}
      </Grid>
    </TestimonialsSection>
  );
};

export default Testimonials;