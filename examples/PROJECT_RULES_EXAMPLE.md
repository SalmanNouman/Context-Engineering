# Project Rules: Student Task Management Application

This document defines the global rules and guidelines for the Student Task Management Application. All implementations should adhere to these standards.

## Code Style and Conventions

### Naming Conventions
- Variables and functions: `camelCase`
- React components: `PascalCase`
- Types and interfaces: `PascalCase` with descriptive names
- Constants: `UPPER_SNAKE_CASE`
- Files: Component files use `PascalCase.tsx`, utility files use `camelCase.ts`

### Formatting
- Indentation: 2 spaces
- Maximum line length: 80 characters
- Use semicolons at the end of statements
- Use single quotes for strings
- Always use curly braces for control structures, even for single-line blocks

### File Organization
```
src/
├── components/
│   ├── common/         # Reusable components
│   ├── layout/         # Layout components
│   └── features/       # Feature-specific components
├── hooks/              # Custom React hooks
├── contexts/           # React context providers
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── styles/             # Global styles and themes
└── pages/              # Page components
```

## Architecture and Design Patterns

### Application Structure
- Follow the component-based architecture pattern
- Use React Context API for global state management
- Implement custom hooks for reusable logic
- Keep components small and focused on a single responsibility

### Component Design
- Use functional components with hooks
- Separate presentational and container components
- Implement proper prop validation with TypeScript
- Use composition over inheritance
- Handle errors at appropriate levels

## Testing Requirements

### Unit Testing
- Use Jest and React Testing Library
- Test all utility functions
- Test custom hooks with renderHook
- Test components for correct rendering and behavior
- Aim for 80% code coverage

### Test Organization
- Group tests by feature or component
- Use descriptive test names that explain the expected behavior
- Follow the Arrange-Act-Assert pattern
- Mock external dependencies

## Documentation Standards

### Code Documentation
- Document all interfaces and types
- Add JSDoc comments for all public functions
- Include examples for complex functions
- Document component props and their purpose

### Component Documentation
```typescript
/**
 * TaskItem displays a single task with actions for managing it
 * 
 * @example
 * <TaskItem
 *   task={{ id: '1', title: 'Learn Context Engineering', completed: false }}
 *   onToggleComplete={handleToggleComplete}
 *   onDelete={handleDelete}
 * />
 */
interface TaskItemProps {
  /** The task to display */
  task: Task;
  /** Callback when task completion status is toggled */
  onToggleComplete: (id: string) => void;
  /** Callback when task is deleted */
  onDelete: (id: string) => void;
}
```

## Performance Guidelines

### Efficiency
- Use React.memo for components that render often but rarely change
- Implement useMemo and useCallback for expensive calculations and callbacks
- Use virtualization for long lists
- Minimize state updates and re-renders

### Resource Usage
- Keep bundle size small by avoiding unnecessary dependencies
- Implement code splitting for larger features
- Optimize images and assets
- Use localStorage efficiently (stay under 5MB)

## Accessibility Standards

### WCAG Compliance
- Follow WCAG 2.1 AA standards
- Use semantic HTML elements
- Implement proper heading hierarchy
- Provide alternative text for images
- Ensure sufficient color contrast (minimum 4.5:1)

### Keyboard Navigation
- All interactive elements must be keyboard accessible
- Use proper tab order
- Implement focus indicators
- Support standard keyboard shortcuts

## Browser Compatibility

- Must work on latest versions of:
  - Chrome
  - Firefox
  - Safari
  - Edge
- Must be responsive for:
  - Desktop (1024px+)
  - Tablet (768px - 1023px)
  - Mobile (320px - 767px)

## Security Requirements

### Data Protection
- Never store sensitive data in localStorage
- Validate all user inputs
- Sanitize data before rendering to prevent XSS
- Use secure coding practices

## Additional Project-Specific Rules

### Task Management Features
- Tasks must have unique IDs (use UUID)
- Task titles must be between 3-100 characters
- Due dates must not be more than 1 year in the future
- Maximum of 10 categories allowed
- Priority levels: Low, Medium, High

### UI/UX Guidelines
- Use the provided color palette:
  - Primary: #3498db
  - Secondary: #2ecc71
  - Accent: #e74c3c
  - Background: #f8f9fa
  - Text: #2c3e50
- Follow Material Design principles for components
- Animations should be subtle and enhance usability
- Support both light and dark themes

---

**Note to AI Assistant:** These rules should be applied consistently across all implementations. If there's a valid reason to deviate from these rules, please explain your reasoning.
