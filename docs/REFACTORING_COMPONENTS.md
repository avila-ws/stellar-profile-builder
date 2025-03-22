# Component Refactoring Guide

This document outlines the components that need refactoring and the approach to take for each.

## 1. Components to Refactor

### High Priority

1. **Large/Monolithic Components**
   - [ ] `HeroSection.tsx` - Should be split into smaller subcomponents
   - [ ] `WorkExperience.tsx` - Can be broken into individual experience cards
   - [ ] `ProjectsSection.tsx` - Should extract project cards as reusable components

2. **Components with Hardcoded Text**
   - [ ] All navigation components - Should use i18n
   - [ ] Section headers and titles - Should use i18n
   - [ ] Error messages and notifications - Should use i18n
   - [ ] Form labels and placeholders - Should use i18n

### Medium Priority

3. **Components with Duplicated Logic**
   - [ ] Card-like components - Should extract shared logic
   - [ ] Form components - Should extract validation logic
   - [ ] Layout components - Should consolidate shared styles

4. **Components with Mixed Concerns**
   - [ ] Components that handle both UI and data fetching
   - [ ] Components with inline styles that could use theme variables

### Low Priority

5. **Outdated Component Patterns**
   - [ ] Class components (if any) - Convert to functional components with hooks
   - [ ] Components using old context patterns - Modernize context usage

## 2. Refactoring Approach

### Component Architecture

1. **Composition over Inheritance**
   - Use smaller, focused components that can be composed together
   - Create "compound components" for related UI elements

2. **Container/Presentation Pattern**
   - Separate data handling from presentation
   - Create "container" components for data/state logic
   - Create "presentation" components for rendering

3. **Custom Hooks**
   - Extract shared logic into custom hooks
   - Make components simpler by moving complex logic to hooks

### Code Organization

1. **Folder Structure**
   - Group related components together
   - Consider domain-driven structure for larger applications

2. **Naming Conventions**
   - Use consistent naming patterns (e.g., `Button.tsx`, `ButtonGroup.tsx`)
   - Name files according to their primary export

3. **Component Documentation**
   - Add JSDoc comments to components
   - Document props with TypeScript interfaces

## 3. i18n Integration

1. **Text Extraction**
   - Move all hardcoded text to translation files
   - Use nested keys for better organization

2. **Component Updates**
   - Update components to use the `useLanguage` hook
   - Replace static text with translation keys

3. **Namespace Organization**
   - Organize translations by feature or component domain
   - Use consistent key naming patterns

## 4. Testing Considerations

1. **Component Testing**
   - Update tests when refactoring components
   - Ensure components are testable (avoid direct DOM manipulation)
   - Test components in isolation

2. **i18n Testing**
   - Test components with different languages
   - Ensure translations don't break layouts

## 5. Accessibility Improvements

1. **During Refactoring**
   - Add proper ARIA attributes
   - Ensure keyboard navigation works correctly
   - Maintain focus management in interactive components

2. **Color and Contrast**
   - Ensure text meets contrast guidelines
   - Don't rely solely on color for conveying information

## Next Steps

1. Start with high-priority components
2. Create a pull request template for refactoring
3. Update documentation as components are refactored
4. Track progress in this document by checking off completed items 