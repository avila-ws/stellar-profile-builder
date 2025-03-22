# Internationalization (i18n) Guide

This guide explains how to use internationalization (i18n) in this project.

## Table of Contents

1. [Overview](#overview)
2. [Directory Structure](#directory-structure)
3. [Using Translations](#using-translations)
4. [Adding New Languages](#adding-new-languages)
5. [Adding New Translation Keys](#adding-new-translation-keys)
6. [Best Practices](#best-practices)

## Overview

This project uses `i18next` and `react-i18next` for internationalization. The system supports:

- Multiple languages (currently English and Spanish)
- Namespaced translations (common, profile, etc.)
- Language auto-detection and persistence
- Simple API for component usage

## Directory Structure

```
project/
├── src/
│   ├── locales/           # Translation files
│   │   ├── en/
│   │   │   ├── common.json    # General UI text
│   │   │   └── profile.json   # Profile-specific text
│   │   └── es/
│   │       ├── common.json    # Spanish general UI text
│   │       └── profile.json   # Spanish profile-specific text
│   ├── hooks/
│   │   └── useLanguage.ts     # Custom language hook
│   ├── i18n/
│   │   └── config.ts          # i18n configuration
│   └── components/
│       └── ui/
│           ├── language-toggle.tsx    # Simple toggle button 
│           └── language-selector.tsx  # Dropdown selector
```

## Using Translations

### Basic Usage

```tsx
import { useLanguage } from '@/hooks/useLanguage';

function MyComponent() {
  const { t } = useLanguage();
  
  return (
    <div>
      <h1>{t('some.translation.key')}</h1>
      <p>{t('another.key')}</p>
    </div>
  );
}
```

### Using Different Namespaces

```tsx
import { useLanguage } from '@/hooks/useLanguage';

function ProfileComponent() {
  // Explicitly specify the 'profile' namespace
  const { t } = useLanguage('profile');
  
  return (
    <div>
      <h1>{t('name')}</h1>
      <p>{t('summary')}</p>
    </div>
  );
}
```

### Using Multiple Namespaces

```tsx
import { useLanguage } from '@/hooks/useLanguage';

function ComplexComponent() {
  // Use different namespaces with different aliases
  const { t: tCommon } = useLanguage('common');
  const { t: tProfile } = useLanguage('profile');
  
  return (
    <div>
      <h1>{tCommon('navigation.home')}</h1>
      <p>{tProfile('summary')}</p>
    </div>
  );
}
```

### Changing Languages

```tsx
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';

function LanguageControl() {
  const { currentLanguage, toggleLanguage, setLanguage } = useLanguage();
  
  return (
    <div>
      {/* Toggle between English and Spanish */}
      <Button onClick={toggleLanguage}>
        Switch to {currentLanguage === 'en' ? 'Spanish' : 'English'}
      </Button>
      
      {/* Set to a specific language */}
      <Button onClick={() => setLanguage('en')}>English</Button>
      <Button onClick={() => setLanguage('es')}>Spanish</Button>
    </div>
  );
}
```

### Built-in Components

The project includes ready-to-use language selector components:

```tsx
import { LanguageToggle } from '@/components/ui/language-toggle';
import { LanguageSelector } from '@/components/ui/language-selector';

function Header() {
  return (
    <header>
      {/* Simple toggle button */}
      <LanguageToggle />
      
      {/* Dropdown selector with language names */}
      <LanguageSelector />
    </header>
  );
}
```

## Adding New Languages

1. Create a new language folder in `src/locales/` (e.g., `fr/` for French)
2. Copy the JSON files from an existing language folder
3. Translate all values in the copied JSON files
4. Update the language list in the `i18n/config.ts` file:

```typescript
// In src/i18n/config.ts
import commonEN from '@/locales/en/common.json';
import commonES from '@/locales/es/common.json';
import profileEN from '@/locales/en/profile.json';
import profileES from '@/locales/es/profile.json';
import commonFR from '@/locales/fr/common.json';
import profileFR from '@/locales/fr/profile.json';

const resources = {
  en: {
    common: commonEN,
    profile: profileEN
  },
  es: {
    common: commonES,
    profile: profileES
  },
  fr: {
    common: commonFR,
    profile: profileFR
  }
};
```

5. Update the Language type in `useLanguage.ts`:

```typescript
// In src/hooks/useLanguage.ts
type Language = 'en' | 'es' | 'fr';
```

6. Add the new language to the selector component:

```typescript
// In src/components/ui/language-selector.tsx
const languages = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" }
];
```

## Adding New Translation Keys

1. Add the new key to the JSON files for all supported languages
2. Use a consistent naming structure (dot notation for hierarchy)
3. Update your components to use the new keys

## Best Practices

1. **Use namespaces** to organize translations by feature or section
2. **Use nested keys** for better organization (e.g., `navigation.home` instead of `navigationHome`)
3. **Avoid string concatenation** in translated texts; use interpolation instead:

```tsx
// Good
t('greeting', { name: userName }) // "Hello, {name}!"

// Bad
t('hello') + ' ' + userName + '!' // "Hello" + " " + "John" + "!"
```

4. **Keep translation files organized** with consistent key structures
5. **Document translation keys** with comments for complex texts
6. **Test with different languages** to ensure layouts don't break with longer texts
7. **Always use the `@` alias** for imports rather than relative paths 