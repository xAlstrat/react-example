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
import Grid from '@mui/material/Unstable_Grid2';

function GridExample() {
  return (
    <Grid container spacing={2}>
      <Grid xs={12} sm={6} md={4}>
        <Item>xs=12 sm=6 md=4</Item>
      </Grid>
      <Grid xs={12} sm={6} md={4}>
        <Item>xs=12 sm=6 md=4</Item>
      </Grid>
      <Grid xs={12} sm={6} md={4}>
        <Item>xs=12 sm=6 md=4</Item>
      </Grid>
    </Grid>
  );
}
```

Key points for Grid v2:
- Import from `@mui/material/Unstable_Grid2`
- Uses `xs`, `sm`, `md`, `lg`, `xl` props for responsive layouts
- `container` prop for parent grid, no need for `item` prop on child grids
- Supports spacing prop for gaps between grid items

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
import Grid from '@mui/material/Unstable_Grid2';

function GridExample() {
  return (
    <Grid container spacing={2}>
      <Grid xs={12} sm={6} md={4}>
        <Item>xs=12 sm=6 md=4</Item>
      </Grid>
      <Grid xs={12} sm={6} md={4}>
        <Item>xs=12 sm=6 md=4</Item>
      </Grid>
      <Grid xs={12} sm={6} md={4}>
        <Item>xs=12 sm=6 md=4</Item>
      </Grid>
    </Grid>
  );
}
```

Key points for Grid v2:
- Import from `@mui/material/Unstable_Grid2`
- Uses `xs`, `sm`, `md`, `lg`, `xl` props for responsive layouts
- `container` prop for parent grid, no need for `item` prop on child grids
- Supports spacing prop for gaps between grid items

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