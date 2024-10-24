# Coding Guidelines

## Naming Conventions and Code Structure

### 1. Component Naming

React components use PascalCase for naming. This applies to both functional and class components.

Example:
```javascript
function LandingPage() {
  // Component code
}

export default LandingPage;
```

### 2. File Naming

Files containing React components are named using PascalCase, matching the name of the main component they export.

Example: `LandingPage.js`, `KeyFeatures.js`

### 3. Function Naming

Non-component functions use camelCase for naming.

Example:
```javascript
const theme = createTheme({
  // Theme configuration
});
```

### 4. File Organization

- Components are organized in a `components` directory.
- Each major section of the application has its own component file.
- Utility files (like `theme.js`, `palette.js`) are placed in the `src` directory.

## Configuration and Environment Handling

### 1. Theme Configuration

The application uses a centralized theme configuration in `src/theme.js`. This file imports and combines various aspects of the theme, making it easy to maintain and update the global styling of the application.

Usage:
```javascript
import theme from './theme';
```

### 2. Environment-Specific Configuration

While not explicitly shown in the provided files, it's recommended to use environment variables for configuration that may change between environments. These can be managed using `.env` files and accessed via `process.env`.

## Commenting and Documentation

While the provided files don't show extensive commenting, it's recommended to add comments for complex logic and document components and functions using JSDoc style comments.

Example:
```javascript
/**
 * LandingPage component that renders the main sections of the landing page.
 * @returns {React.Component} The LandingPage component
 */
function LandingPage() {
  // Component code
}
```

## Code Quality and Linting

The project uses ESLint for maintaining code quality and consistency. The configuration can be found in `.eslintrc.js`. Key points:

- Extends configurations for React and React Hooks
- Disables prop-types checking

To run the linter, you can typically use:
```
npm run lint
```

## Reusable Patterns

### 1. Theme Configuration

The theme configuration is centralized in `src/theme.js`. This file imports and combines various aspects of the theme, making it easy to maintain and update the global styling of the application.

Usage:
```javascript
import theme from './theme';
```

### 2. CSS-in-JS Mixins

Reusable CSS-in-JS styles are defined in `src/mixins.js`. These mixins provide consistent styling patterns across the application.

Available mixins:
- flexCenter
- gridLayout
- cardHover
- responsivePadding

Usage:
```javascript
import mixins from './mixins';

// In your styled component
const StyledComponent = styled('div')(({ theme }) => ({
  ...theme.mixins.flexCenter,
  ...theme.mixins.responsivePadding,
}));
```

### 3. Component Composition

The `src/components/LandingPage.js` file demonstrates how to compose multiple components to create a page layout. This pattern can be reused for other pages in the application.

Usage:
```javascript
import React from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';

function PageComponent() {
  return (
    <div>
      <ComponentA />
      <ComponentB />
    </div>
  );
}

export default PageComponent;
```

### 4. Theme Provider Usage

The `src/App.js` file shows how to wrap the entire application with the ThemeProvider and apply the custom theme. This pattern ensures consistent theming across all components.

Usage:
```javascript
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Your app components */}
    </ThemeProvider>
  );
}

export default App;
```

### 5. Spacing Configuration

A base spacing unit is defined in `src/spacing.js` and used throughout the application for consistent spacing.

Usage:
```javascript
import spacing from './spacing';

// In your theme configuration
const theme = createTheme({
  spacing,
  // other theme properties
});
```

### 6. Grid v2 Usage

The project uses Material-UI's Grid v2 for layout. This newer version of Grid provides improved performance and flexibility.

Usage:
```javascript
import Grid from '@mui/material/Grid2';

function GridExample() {
  return (
    <Grid container spacing={4} justifyContent="center">
      <Grid item size={6}>
        <Item>Content</Item>
      </Grid>
      <Grid item size={{ xs: 12, md: 6 }}>
        <Item>Responsive Content</Item>
      </Grid>
    </Grid>
  );
}
```

Key points for Grid v2:
- Import from `@mui/material/Grid2`
- Use `container` prop for parent grid
- Use `item` prop for child grid elements
- Use `spacing` prop on container for gaps between grid items
- Use `justifyContent` prop for alignment of grid items
- Use `size` prop for responsive layouts:
  - Single value: `size={6}` for fixed size across all breakpoints
  - Object: `size={{ xs: 12, md: 6 }}` for responsive sizes
- Available breakpoints: xs, sm, md, lg, xl
- Values for `size` prop range from 1 to 12, representing the number of columns the item should span

Best Practices:
- Use Grid system for creating responsive layouts
- Nest Grid components for complex layouts
- Combine with Box component for additional styling when needed
- Use the `spacing` prop consistently for uniform gaps between items
- Leverage responsive `size` props to create mobile-friendly designs

By following these reusable patterns, you can maintain consistency and improve the maintainability of the codebase.

### 7. DelayedList Usage

The DelayedList component provides an animated list where items appear with a delay. This can be used to create engaging and dynamic user interfaces.

Usage:
```javascript
import DelayedList from '../components/DelayedList';
import { Code, BugReport, Description, RateReview, Rule, Science, Update } from '@mui/icons-material';

function DelayedListExample() {
  const items = [
    { icon: <Code />, text: "Automated code refactoring", color: "#1976d2" },
    { icon: <BugReport />, text: "AI-driven bug detection", color: "#d32f2f" },
    { icon: <Description />, text: "Documentation generation", color: "#388e3c" },
    { icon: <RateReview />, text: "Code review assistance", color: "#f57c00" },
    { icon: <Rule />, text: "Standards and guidelines enforcement", color: "#7b1fa2" },
    { icon: <Science />, text: "Test case generation", color: "#0288d1" },
    { icon: <Update />, text: "Legacy code modernization", color: "#00796b" },
  ];

  return (
    <DelayedList
      items={items}
      itemDelay={500}
      startDelay={250}
    />
  );
}
```

Key points for DelayedList:
- Import from the appropriate path where DelayedList is located
- `items` prop: An array of objects, each with `icon`, `text`, and `color` properties
  - `icon`: A Material-UI icon component
  - `text`: The text content of the item
  - `color`: A color string (e.g., hex code) for the item
- `itemDelay` prop: The delay in milliseconds between each item appearing
- `startDelay` prop: The initial delay before the first item appears

Performance considerations:
- For large lists, consider using virtualization techniques to improve performance
- Be mindful of the total delay time for long lists, as it may impact user experience

By using the DelayedList component, you can create visually appealing, animated lists that gradually reveal their content to the user.

### 8. AnimatedElement Usage

The AnimatedElement component provides a way to animate elements as they enter the viewport. This can be used to create engaging and dynamic user interfaces with fade-in and slide-up effects.

Usage:
```javascript
import AnimatedElement from '../components/AnimatedElement';

function ExampleComponent() {
  return (
    <AnimatedElement delay={0.2}>
      <YourComponentOrElement />
    </AnimatedElement>
  );
}
```

Key points for AnimatedElement:
- Import from the appropriate path where AnimatedElement is located
- Wrap the component or element you want to animate with AnimatedElement
- `delay` prop: Optional. Specifies the delay in seconds before the animation starts (default is 0)

Example with multiple animated elements:
```javascript
function SectionWithAnimations() {
  return (
    <div>
      <AnimatedElement>
        <h2>Section Title</h2>
      </AnimatedElement>
      <AnimatedElement delay={0.2}>
        <p>First paragraph with a slight delay</p>
      </AnimatedElement>
      <AnimatedElement delay={0.4}>
        <button>Call to Action</button>
      </AnimatedElement>
    </div>
  );
}
```

Performance considerations:
- Use AnimatedElement judiciously, especially for frequently re-rendered components
- For long lists or grids, consider using virtualization techniques along with AnimatedElement
- Be mindful of the total delay time and the number of animated elements on a page to maintain good performance

By using the AnimatedElement component, you can easily add subtle animations to your UI elements, enhancing the overall user experience and drawing attention to important parts of your interface.

### 9. Section Component and Title Styling

When creating a new section in the application, use the Section base component and follow these guidelines for consistent styling and structure.

### 10. CTA Button Usage

The CTA (Call to Action) button component provides a consistent, animated button style across the application. It's designed for primary actions and includes smooth scroll functionality.

Usage:
```javascript
import CTA from 'components/Button/CTA';

function ExampleComponent() {
  return (
    <CTA>Start Free Trial</CTA>
  );
}
```

Key points for CTA Button:
- Import from `components/Button/CTA`
- Props:
  - `children`: The button text content
  - `scrollTo`: Optional. The ID of the section to scroll to (default: 'pricing')
  - All other Material-UI Button props are supported
- Features:
  - Consistent styling with theme
  - Hover animation with elevation change
  - Smooth scroll functionality
  - Secondary color by default
  - Bold text weight

Best Practices:
- Use for primary actions only
- Keep button text concise and action-oriented
- Place in prominent positions within sections
- Wrap with AnimatedElement for entrance animations when needed
- Maintain consistent text across similar actions

Usage:
```javascript
import React from 'react';
import { Typography, Box, Container, useTheme } from '@mui/material';
import Section from 'components/Section';
import HighlightedText from 'components/HighlightedText';

const ExampleSection = () => {
  const theme = useTheme();

  return (
    <Section id="example-section" bgColor="dark1">
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
            component="h2" 
            align="center" 
            gutterBottom 
            sx={{ 
              fontWeight: 'bold', 
              mb: 6, 
              color: theme.palette.common.white 
            }}
          >
            Section Title with <HighlightedText>Emphasis</HighlightedText>
          </Typography>
          {/* Section content goes here */}
        </Container>
      </Box>
    </Section>
  );
};

export default ExampleSection;
```

Key points for Section and Title styling:
- Use the `Section` component as the main wrapper for your section
- Provide an `id` prop for navigation purposes
- Use the `bgColor` prop to set the background color (e.g., "dark1", "light1")
- Wrap the section content in a `Box` component with vertical padding
- Use a `Container` component to constrain the content width
- Style the title using `Typography` with the following properties:
  - `variant="h2"`
  - `component="h2"`
  - `align="center"`
  - `gutterBottom`
  - Use the `sx` prop for additional styling:
    - `fontWeight: 'bold'`
    - `mb: 6` for margin bottom
    - `color: theme.palette.common.white` for light text on dark backgrounds
- Use the `HighlightedText` component to emphasize parts of the title

Best Practices:
- Keep sections consistent by always using the Section component
- Use meaningful `id` values for each section to facilitate navigation
- Maintain a consistent title style across all sections
- Use HighlightedText sparingly to emphasize key points in the title
- Adjust the `maxWidth` prop of the Container component based on the content needs
- Consider using AnimatedElement for subtle animations within the section

By following these guidelines, you can create visually consistent and well-structured sections throughout the application.

## Reusable Patterns

### 1. Theme Configuration

The theme configuration is centralized in `src/theme.js`. This file imports and combines various aspects of the theme, making it easy to maintain and update the global styling of the application.

Usage:
```javascript
import theme from './theme';
```

### 2. CSS-in-JS Mixins

Reusable CSS-in-JS styles are defined in `src/mixins.js`. These mixins provide consistent styling patterns across the application.

Available mixins:
- flexCenter
- gridLayout
- cardHover
- responsivePadding

Usage:
```javascript
import mixins from './mixins';

// In your styled component
const StyledComponent = styled('div')(({ theme }) => ({
  ...theme.mixins.flexCenter,
  ...theme.mixins.responsivePadding,
}));
```

### 3. Component Composition

The `src/components/LandingPage.js` file demonstrates how to compose multiple components to create a page layout. This pattern can be reused for other pages in the application.

Usage:
```javascript
import React from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';

function PageComponent() {
  return (
    <div>
      <ComponentA />
      <ComponentB />
    </div>
  );
}

export default PageComponent;
```

### 4. Theme Provider Usage

The `src/App.js` file shows how to wrap the entire application with the ThemeProvider and apply the custom theme. This pattern ensures consistent theming across all components.

Usage:
```javascript
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Your app components */}
    </ThemeProvider>
  );
}

export default App;
```

### 5. Spacing Configuration

A base spacing unit is defined in `src/spacing.js` and used throughout the application for consistent spacing.

Usage:
```javascript
import spacing from './spacing';

// In your theme configuration
const theme = createTheme({
  spacing,
  // other theme properties
});
```

### 6. Grid v2 Usage

The project uses Material-UI's Grid v2 for layout. This newer version of Grid provides improved performance and flexibility.

Usage:
```javascript
import Grid from '@mui/material/Grid2';

function GridExample() {
  return (
    <Grid container spacing={4} justifyContent="center">
      <Grid item size={6}>
        <Item>Content</Item>
      </Grid>
      <Grid item size={{ xs: 12, md: 6 }}>
        <Item>Responsive Content</Item>
      </Grid>
    </Grid>
  );
}
```

Key points for Grid v2:
- Import from `@mui/material/Grid2`
- Use `container` prop for parent grid
- Use `item` prop for child grid elements
- Use `spacing` prop on container for gaps between grid items
- Use `justifyContent` prop for alignment of grid items
- Use `size` prop for responsive layouts:
  - Single value: `size={6}` for fixed size across all breakpoints
  - Object: `size={{ xs: 12, md: 6 }}` for responsive sizes
- Available breakpoints: xs, sm, md, lg, xl
- Values for `size` prop range from 1 to 12, representing the number of columns the item should span

Best Practices:
- Use Grid system for creating responsive layouts
- Nest Grid components for complex layouts
- Combine with Box component for additional styling when needed
- Use the `spacing` prop consistently for uniform gaps between items
- Leverage responsive `size` props to create mobile-friendly designs

By following these reusable patterns, you can maintain consistency and improve the maintainability of the codebase.

### 7. DelayedList Usage

The DelayedList component provides an animated list where items appear with a delay. This can be used to create engaging and dynamic user interfaces.

Usage:
```javascript
import DelayedList from '../components/DelayedList';
import { Code, BugReport, Description, RateReview, Rule, Science, Update } from '@mui/icons-material';

function DelayedListExample() {
  const items = [
    { icon: <Code />, text: "Automated code refactoring", color: "#1976d2" },
    { icon: <BugReport />, text: "AI-driven bug detection", color: "#d32f2f" },
    { icon: <Description />, text: "Documentation generation", color: "#388e3c" },
    { icon: <RateReview />, text: "Code review assistance", color: "#f57c00" },
    { icon: <Rule />, text: "Standards and guidelines enforcement", color: "#7b1fa2" },
    { icon: <Science />, text: "Test case generation", color: "#0288d1" },
    { icon: <Update />, text: "Legacy code modernization", color: "#00796b" },
  ];

  return (
    <DelayedList
      items={items}
      itemDelay={500}
      startDelay={250}
    />
  );
}
```

Key points for DelayedList:
- Import from the appropriate path where DelayedList is located
- `items` prop: An array of objects, each with `icon`, `text`, and `color` properties
  - `icon`: A Material-UI icon component
  - `text`: The text content of the item
  - `color`: A color string (e.g., hex code) for the item
- `itemDelay` prop: The delay in milliseconds between each item appearing
- `startDelay` prop: The initial delay before the first item appears

Performance considerations:
- For large lists, consider using virtualization techniques to improve performance
- Be mindful of the total delay time for long lists, as it may impact user experience

By using the DelayedList component, you can create visually appealing, animated lists that gradually reveal their content to the user.

### 8. AnimatedElement Usage

The AnimatedElement component provides a way to animate elements as they enter the viewport. This can be used to create engaging and dynamic user interfaces with fade-in and slide-up effects.

Usage:
```javascript
import AnimatedElement from '../components/AnimatedElement';

function ExampleComponent() {
  return (
    <AnimatedElement delay={0.2}>
      <YourComponentOrElement />
    </AnimatedElement>
  );
}
```

Key points for AnimatedElement:
- Import from the appropriate path where AnimatedElement is located
- Wrap the component or element you want to animate with AnimatedElement
- `delay` prop: Optional. Specifies the delay in seconds before the animation starts (default is 0)

Example with multiple animated elements:
```javascript
function SectionWithAnimations() {
  return (
    <div>
      <AnimatedElement>
        <h2>Section Title</h2>
      </AnimatedElement>
      <AnimatedElement delay={0.2}>
        <p>First paragraph with a slight delay</p>
      </AnimatedElement>
      <AnimatedElement delay={0.4}>
        <button>Call to Action</button>
      </AnimatedElement>
    </div>
  );
}
```

Performance considerations:
- Use AnimatedElement judiciously, especially for frequently re-rendered components
- For long lists or grids, consider using virtualization techniques along with AnimatedElement
- Be mindful of the total delay time and the number of animated elements on a page to maintain good performance

By using the AnimatedElement component, you can easily add subtle animations to your UI elements, enhancing the overall user experience and drawing attention to important parts of your interface.

### 9. Section Component and Title Styling

When creating a new section in the application, use the Section base component and follow these guidelines for consistent styling and structure.

### 10. CTA Button Usage

The CTA (Call to Action) button component provides a consistent, animated button style across the application. It's designed for primary actions and includes smooth scroll functionality.

Usage:
```javascript
import CTA from 'components/Button/CTA';

function ExampleComponent() {
  return (
    <CTA>Start Free Trial</CTA>
  );
}
```

Key points for CTA Button:
- Import from `components/Button/CTA`
- Props:
  - `children`: The button text content
  - `scrollTo`: Optional. The ID of the section to scroll to (default: 'pricing')
  - All other Material-UI Button props are supported
- Features:
  - Consistent styling with theme
  - Hover animation with elevation change
  - Smooth scroll functionality
  - Secondary color by default
  - Bold text weight

Best Practices:
- Use for primary actions only
- Keep button text concise and action-oriented
- Place in prominent positions within sections
- Wrap with AnimatedElement for entrance animations when needed
- Maintain consistent text across similar actions

Usage:
```javascript
import React from 'react';
import { Typography, Box, Container, useTheme } from '@mui/material';
import Section from 'components/Section';
import HighlightedText from 'components/HighlightedText';

const ExampleSection = () => {
  const theme = useTheme();

  return (
    <Section id="example-section" bgColor="dark1">
      <Box>
        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
            component="h2" 
            align="center" 
            gutterBottom 
            sx={{ 
              fontWeight: 'bold', 
              mb: 6, 
              color: theme.palette.common.white 
            }}
          >
            Section Title with <HighlightedText>Emphasis</HighlightedText>
          </Typography>
          {/* Section content goes here */}
        </Container>
      </Box>
    </Section>
  );
};

export default ExampleSection;
```

Key points for Section and Title styling:
- Use the `Section` component as the main wrapper for your section
- Provide an `id` prop for navigation purposes
- Use the `bgColor` prop to set the background color (e.g., "dark1", "light1")
- Wrap the section content in a `Box` component with vertical padding
- Use a `Container` component to constrain the content width
- Style the title using `Typography` with the following properties:
  - `variant="h2"`
  - `component="h2"`
  - `align="center"`
  - `gutterBottom`
  - Use the `sx` prop for additional styling:
    - `fontWeight: 'bold'`
    - `mb: 6` for margin bottom
    - `color: theme.palette.common.white` for light text on dark backgrounds
- Use the `HighlightedText` component to emphasize parts of the title

Best Practices:
- Keep sections consistent by always using the Section component
- Use meaningful `id` values for each section to facilitate navigation
- Maintain a consistent title style across all sections
- Use HighlightedText sparingly to emphasize key points in the title
- Adjust the `maxWidth` prop of the Container component based on the content needs
- Consider using AnimatedElement for subtle animations within the section

By following these guidelines, you can create visually consistent and well-structured sections throughout the application.