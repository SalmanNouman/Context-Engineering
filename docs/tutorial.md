# Context Engineering Tutorial

This step-by-step tutorial will guide you through using Context Engineering principles to create better AI-assisted projects.

## Prerequisites

- Basic understanding of programming concepts
- A project idea you want to implement
- Access to an AI coding assistant (Claude, ChatGPT, GitHub Copilot, etc.)

## Tutorial Overview

In this tutorial, you'll learn how to:
1. Define project rules and constraints
2. Create detailed feature requests
3. Generate implementation plans
4. Execute plans with validation
5. Iterate effectively

## Step 1: Define Project Rules

Project rules establish global guidelines that apply throughout your project. They help ensure consistency and quality in AI-generated code.

### Exercise:

1. Open `templates/PROJECT_RULES.md`
2. Customize it for your project by defining:
   - Code style and conventions
   - Architecture patterns
   - Testing requirements
   - Documentation standards
   - Performance expectations

Example:
```markdown
# Project Rules

## Code Style
- Use camelCase for variables and functions
- Use PascalCase for classes and components
- Maximum line length: 80 characters
- Use meaningful variable names

## Architecture
- Follow Model-View-Controller pattern
- Keep components small and focused
- Separate business logic from UI

## Testing
- All functions must have unit tests
- Minimum test coverage: 80%
- Use descriptive test names

## Documentation
- All public functions must have JSDoc comments
- Include usage examples for complex functions
- Document known limitations
```

## Step 2: Create a Feature Request

Feature requests clearly define what you want to build, providing the AI with comprehensive context.

### Exercise:

1. Open `templates/FEATURE_REQUEST.md`
2. Fill it out with details about your feature:
   - Feature name and description
   - User stories or use cases
   - Functional requirements
   - Non-functional requirements
   - Examples and references

Example:
```markdown
# Feature Request: User Authentication System

## Description
Implement a secure user authentication system that allows users to register, log in, and manage their accounts.

## User Stories
- As a new user, I want to create an account so I can access the application
- As a registered user, I want to log in securely to access my data
- As a user, I want to reset my password if I forget it
- As a user, I want to update my profile information

## Requirements
- Support registration with email and password
- Implement secure password hashing using bcrypt
- Create JWT-based authentication
- Add password reset functionality via email
- Implement account lockout after failed attempts

## Examples
See `examples/sample-code/auth-example.js` for reference implementation
```

## Step 3: Generate an Implementation Plan

An implementation plan breaks down the feature into manageable steps with validation criteria.

### Exercise:

1. Open `templates/IMPLEMENTATION_PLAN.md`
2. Create a detailed plan that includes:
   - Step-by-step implementation tasks
   - Dependencies between tasks
   - Validation criteria for each step
   - Potential challenges and solutions

Example:
```markdown
# Implementation Plan: User Authentication System

## Step 1: Set Up Database Models
- Create User model with fields: email, password, name, createdAt
- Implement password hashing middleware
- Add validation for email format and password strength
- Validation: Verify model creation and validation works correctly

## Step 2: Implement Registration Endpoint
- Create POST /api/auth/register endpoint
- Add input validation
- Handle duplicate email errors
- Send welcome email
- Validation: Test registration with valid and invalid data

## Step 3: Implement Login Endpoint
- Create POST /api/auth/login endpoint
- Verify credentials and generate JWT
- Track login attempts
- Validation: Verify JWT generation and validation

## Step 4: Implement Password Reset
- Create forgot password endpoint
- Generate and store reset tokens
- Create password reset form
- Validation: Test complete password reset flow
```

## Step 4: Execute the Plan

With a comprehensive plan in place, you can now work with your AI assistant to implement each step.

### Exercise:

1. Start implementing your plan one step at a time
2. For each step:
   - Provide the AI with relevant context from your project rules and feature request
   - Ask the AI to implement the specific step
   - Validate the output against your criteria
   - Make adjustments as needed before moving to the next step

Example prompt:
```
I'm implementing a user authentication system following these project rules:
[paste relevant rules]

Here's my feature request:
[paste feature request]

I'm currently working on Step 2 of my implementation plan:
[paste step 2 details]

Please help me implement the registration endpoint based on these requirements.
```

## Step 5: Validate the Implementation

Validation ensures that the implemented feature meets all requirements and works correctly.

### Exercise:

1. Open `templates/VALIDATION_CHECKLIST.md`
2. Create a checklist for your feature that includes:
   - Functional requirements validation
   - Code quality checks
   - Testing coverage
   - Documentation completeness

Example:
```markdown
# Validation Checklist: User Authentication System

## Functionality
- [ ] User can register with email and password
- [ ] User receives welcome email after registration
- [ ] User can log in with valid credentials
- [ ] User cannot log in with invalid credentials
- [ ] User can reset password via email link
- [ ] Account locks after 5 failed login attempts

## Code Quality
- [ ] All functions have appropriate error handling
- [ ] Password is properly hashed and not stored in plain text
- [ ] JWT implementation follows security best practices
- [ ] Input validation is thorough

## Testing
- [ ] Unit tests for all authentication functions
- [ ] Integration tests for authentication flow
- [ ] Edge cases are tested (invalid inputs, network errors)

## Documentation
- [ ] API endpoints are documented
- [ ] Authentication flow is explained
- [ ] Security measures are described
```

## Next Steps

Congratulations! You've completed the Context Engineering tutorial. To continue improving your skills:

1. Try applying these principles to a real project
2. Experiment with different levels of detail in your documentation
3. Share your experiences and contribute to this guide
4. Check out the best practices document for more advanced techniques

Remember, Context Engineering is about providing comprehensive context to AI assistants, not just writing better prompts. The more structured and detailed your approach, the better results you'll get from AI tools.
