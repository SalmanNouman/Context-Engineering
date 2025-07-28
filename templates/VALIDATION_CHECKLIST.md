# Validation Checklist

## Feature: [Name of the feature]

Use this checklist to validate that the implemented feature meets all requirements and quality standards.

## Functional Requirements Validation

### Core Functionality
- [ ] Requirement 1: [Description and validation method]
- [ ] Requirement 2: [Description and validation method]
- [ ] Requirement 3: [Description and validation method]

### Edge Cases
- [ ] Edge case 1: [Description and expected behavior]
- [ ] Edge case 2: [Description and expected behavior]
- [ ] Edge case 3: [Description and expected behavior]

### Error Handling
- [ ] Error scenario 1: [Description and expected behavior]
- [ ] Error scenario 2: [Description and expected behavior]
- [ ] Error scenario 3: [Description and expected behavior]

## Code Quality Validation

### Architecture and Design
- [ ] Follows project architecture patterns
- [ ] Properly separates concerns
- [ ] Uses appropriate design patterns
- [ ] Maintains loose coupling between components

### Code Style
- [ ] Follows naming conventions in PROJECT_RULES.md
- [ ] Properly formatted according to style guide
- [ ] No magic numbers or hardcoded values
- [ ] Consistent error handling approach

### Performance
- [ ] Meets performance requirements specified in feature request
- [ ] Optimized algorithms and data structures
- [ ] Efficient resource usage
- [ ] Acceptable response times under load

### Security
- [ ] Input validation implemented
- [ ] Authentication/authorization checks in place
- [ ] No sensitive data exposure
- [ ] Protected against common vulnerabilities

## Testing Validation

### Unit Tests
- [ ] All business logic has unit tests
- [ ] Tests cover happy paths
- [ ] Tests cover error paths
- [ ] Tests cover edge cases
- [ ] Tests are isolated and deterministic

### Integration Tests
- [ ] Component interactions tested
- [ ] API endpoints tested
- [ ] Database interactions tested
- [ ] External service integrations tested

### End-to-End Tests
- [ ] Complete user flows tested
- [ ] UI interactions tested
- [ ] System behavior matches requirements

### Test Coverage
- [ ] Meets minimum coverage requirements (specify %)
- [ ] No critical paths left untested

## Documentation Validation

### Code Documentation
- [ ] Public APIs documented
- [ ] Complex logic explained
- [ ] Function parameters and return values documented
- [ ] Assumptions and constraints documented

### User Documentation
- [ ] Feature usage documented
- [ ] UI elements explained
- [ ] Error messages are helpful

### Technical Documentation
- [ ] Architecture decisions documented
- [ ] Integration points documented
- [ ] Configuration options documented

## Accessibility Validation

- [ ] Meets WCAG standards specified in requirements
- [ ] Works with keyboard navigation
- [ ] Works with screen readers
- [ ] Sufficient color contrast
- [ ] No flashing content that could cause seizures

## Cross-Browser/Platform Validation

- [ ] Works in all required browsers
- [ ] Works on all required devices/screen sizes
- [ ] Consistent appearance across platforms
- [ ] Graceful degradation where appropriate

## User Acceptance Validation

- [ ] Meets all user stories from feature request
- [ ] User flows are intuitive
- [ ] Error messages are user-friendly
- [ ] Performance is acceptable from user perspective

## Final Validation

- [ ] All acceptance criteria from feature request met
- [ ] No regressions in existing functionality
- [ ] Feature works in integration with the rest of the system
- [ ] Documentation is complete and accurate
- [ ] All tests pass

## Notes and Observations

[Add any notes, observations, or concerns discovered during validation]

---

**Note to AI Assistant:** Use this checklist to validate your implementation. Mark items as complete only when you have verified them. If any items fail validation, address the issues before considering the feature complete.
