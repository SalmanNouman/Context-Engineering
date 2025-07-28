# Project Rules

This document defines the global rules and guidelines for the project. AI assistants should follow these rules for all implementations.

## Code Style and Conventions

### Naming Conventions
- Variables and functions: `camelCase`
- Classes and components: `PascalCase`
- Constants: `UPPER_SNAKE_CASE`
- Private properties/methods: `_prefixWithUnderscore`

### Formatting
- Indentation: 2 spaces
- Maximum line length: 80 characters
- Use semicolons at the end of statements
- Use single quotes for strings unless the string contains single quotes

### File Organization
- One component/class per file
- Group related files in directories
- Use meaningful file names that reflect their content

## Architecture and Design Patterns

### Application Structure
- Follow [specify architecture pattern: MVC, MVVM, etc.]
- Separate business logic from UI components
- Use dependency injection for service dependencies

### Component Design
- Keep components small and focused on a single responsibility
- Minimize component coupling
- Use composition over inheritance
- Implement proper error handling at all levels

## Testing Requirements

### Unit Testing
- All business logic must have unit tests
- Use [specify testing framework]
- Aim for [specify coverage percentage]% code coverage

### Integration Testing
- Test all API endpoints
- Verify component interactions
- Test with realistic data scenarios

### Test Organization
- Group tests by feature or component
- Use descriptive test names
- Follow Arrange-Act-Assert pattern

## Documentation Standards

### Code Documentation
- Document all public functions and classes
- Include parameter descriptions and return values
- Document complex algorithms and business logic
- Add comments for non-obvious code sections

### Project Documentation
- Maintain up-to-date README with setup instructions
- Document architecture decisions
- Include diagrams for complex systems
- Keep API documentation current

## Performance Guidelines

### Efficiency
- Optimize critical paths for performance
- Minimize unnecessary re-renders (for UI components)
- Use appropriate data structures for operations

### Resource Usage
- Minimize memory usage
- Clean up resources (event listeners, subscriptions)
- Implement pagination for large data sets

## Security Requirements

### Data Protection
- Never store sensitive data in plain text
- Use proper authentication and authorization
- Validate all user inputs
- Protect against common vulnerabilities (XSS, CSRF, etc.)

### API Security
- Use HTTPS for all API communications
- Implement proper rate limiting
- Use secure token management

## Accessibility Standards

### WCAG Compliance
- Follow WCAG 2.1 AA standards
- Ensure proper keyboard navigation
- Use semantic HTML elements
- Provide alternative text for images

### Inclusive Design
- Support screen readers
- Ensure sufficient color contrast
- Design for various input methods
- Test with accessibility tools

## Version Control Practices

### Commits
- Use descriptive commit messages
- Keep commits focused on a single change
- Reference issue numbers in commit messages

### Branching
- Use feature branches for new development
- Create pull requests for code review
- Maintain a clean main/master branch

## Additional Project-Specific Rules

[Add any additional rules specific to your project here]

---

**Note to AI Assistant:** These rules should be applied consistently across all implementations. If there's a valid reason to deviate from these rules, please explain your reasoning.
