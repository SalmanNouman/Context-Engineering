# Context Engineering Best Practices

This document outlines advanced techniques and best practices for Context Engineering when working with AI coding assistants.

## Fundamental Principles

### 1. Be Explicit, Not Implicit

**Do:**
- Clearly state all requirements and constraints
- Define expected behavior for edge cases
- Specify error handling expectations

**Don't:**
- Assume the AI knows project conventions
- Leave critical details unspecified
- Use vague language like "standard implementation"

### 2. Provide Concrete Examples

**Do:**
- Include code snippets demonstrating preferred patterns
- Reference existing code that follows desired conventions
- Show both good and bad examples when relevant

**Don't:**
- Rely solely on descriptions without examples
- Provide outdated or inconsistent examples
- Overwhelm with irrelevant examples

### 3. Establish Clear Validation Criteria

**Do:**
- Define specific success criteria for each feature
- Include testable acceptance criteria
- Specify performance expectations

**Don't:**
- Accept implementations without validation
- Use subjective criteria like "looks good"
- Skip validation for "simple" features

## Advanced Techniques

### 1. Progressive Disclosure

Rather than overwhelming the AI with all information at once, strategically reveal context:

1. Start with high-level requirements and project rules
2. Provide specific details for the current implementation step
3. Add examples and references as needed
4. Include validation criteria for the current step

This approach helps the AI focus on the immediate task while maintaining awareness of the broader context.

### 2. Contextual Anchoring

Connect new features to existing code and concepts the AI already understands:

```
"This new feature should follow the same pattern as the user authentication system in auth.js, but applied to product management."
```

### 3. Constraint-Based Guidance

Define boundaries and constraints rather than prescribing exact implementations:

```
"The solution must:
- Process data in O(n) time complexity
- Not use more than 10MB of memory
- Handle null inputs gracefully
- Be testable in isolation"
```

### 4. Iterative Refinement

Break complex features into multiple iterations:

1. **Iteration 1:** Basic functionality with minimal features
2. **Iteration 2:** Add error handling and edge cases
3. **Iteration 3:** Optimize performance and refactor
4. **Iteration 4:** Add advanced features

### 5. Contextual Priming

Before requesting implementation, prime the AI with relevant context:

```
"We're working on a financial application that handles sensitive user data. Security and data validation are top priorities. The application uses a microservice architecture with strict API contracts."
```

## Common Pitfalls and Solutions

### 1. Context Overload

**Problem:** Providing too much information at once, overwhelming the AI.

**Solution:** Use progressive disclosure and focus on relevant context for the current task.

### 2. Context Fragmentation

**Problem:** Providing disjointed pieces of information without clear connections.

**Solution:** Create a coherent narrative that connects requirements, examples, and validation criteria.

### 3. Ambiguous Requirements

**Problem:** Using vague or ambiguous language that can be interpreted in multiple ways.

**Solution:** Be specific, provide examples, and define terms clearly.

### 4. Inconsistent Context

**Problem:** Providing contradictory information or examples.

**Solution:** Review and align all context before sharing with the AI.

### 5. Missing Validation

**Problem:** Not specifying how to validate the implementation.

**Solution:** Always include clear validation criteria for each feature or component.

## Context Engineering for Different Project Types

### Web Applications

- Define UI/UX expectations clearly
- Specify browser compatibility requirements
- Include responsive design guidelines
- Address accessibility requirements
- Provide API interaction patterns

### Data Science Projects

- Specify data preprocessing steps
- Define evaluation metrics
- Include validation and testing approaches
- Address performance requirements
- Specify visualization standards

### Mobile Applications

- Define platform-specific requirements
- Address offline functionality
- Specify performance on different devices
- Include UI/UX guidelines for mobile
- Address battery and resource usage

## Tools and Templates

### Context Engineering Checklist

Before submitting a request to an AI coding assistant, ensure you've provided:

- [ ] Project rules and conventions
- [ ] Specific feature requirements
- [ ] Examples of similar implementations
- [ ] Edge cases and how to handle them
- [ ] Validation criteria
- [ ] Performance expectations
- [ ] Documentation requirements

### Context Template for Bug Fixes

```markdown
## Bug Description
[Clear description of the bug]

## Expected Behavior
[What should happen]

## Current Behavior
[What actually happens]

## Reproduction Steps
[Steps to reproduce the bug]

## Relevant Code
[Code snippets or file references]

## Constraints
[Any constraints for the fix]

## Validation Criteria
[How to verify the bug is fixed]
```

### Context Template for New Features

```markdown
## Feature Description
[Clear description of the feature]

## User Stories
[User stories this feature addresses]

## Requirements
[Specific requirements for the feature]

## Examples
[Examples of similar features or patterns]

## Integration Points
[How this feature integrates with existing code]

## Validation Criteria
[How to verify the feature works correctly]
```

## Conclusion

Context Engineering is an evolving discipline that improves with practice. By following these best practices, you'll develop more effective communication with AI coding assistants, resulting in higher-quality implementations and fewer iterations.

Remember that the goal is not to micromanage the AI but to provide sufficient context for it to make informed decisions aligned with your project's needs and standards.
