# React Intersection Hooks

[![CI](https://github.com/heba-dora/react-intersection-hooks/actions/workflows/ci.yml/badge.svg)](https://github.com/heba-dora/react-intersection-hooks/actions/workflows/ci.yml)

A highly performant, SSR-safe React hook wrapper for the Intersection Observer API.

## Installation

```bash
npm install react-intersection-hooks
```

## Features
- 🚀 **Performant**: Directly utilizes native IntersectionObserver API.
- 🛡️ **SSR Safe**: Checks environment safely, no hydration errors.
- 📦 **Strictly Typed**: Full TypeScript support.
- ✅ **Tested**: Comprehensive Jest coverage.

## Usage

```tsx
import { useIntersectionObserver } from 'react-intersection-hooks';

function App() {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0.5,
  });

  return (
    <div ref={ref}>
      {entry?.isIntersecting ? 'Visible!' : 'Hidden'}
    </div>
  );
}
```

## License
MIT

*SSR safely tested on Next.js 14 and modern Remix architectures.*
