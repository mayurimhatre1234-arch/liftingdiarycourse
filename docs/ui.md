# UI Coding Standards

This document outlines the UI coding standards for this project. **All code must adhere to these guidelines.**

## Component Library

### shadcn/ui Components Only

**ONLY shadcn/ui components are permitted in this project.**

- **DO NOT** create custom components
- **DO NOT** build UI elements from scratch
- **DO NOT** use other component libraries (Material UI, Chakra, Ant Design, etc.)

All UI must be built exclusively using [shadcn/ui](https://ui.shadcn.com/) components.

### Adding New Components

To add a new shadcn/ui component:

```bash
npx shadcn@latest add <component-name>
```

Example:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
```

### Using Components

Import components from the `@/components/ui` directory:

```tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
```

## Date Formatting

### Library

Use **date-fns** for all date formatting operations.

```bash
npm install date-fns
```

### Standard Format

All dates in the UI must be formatted as follows:

| Example | Format |
|---------|--------|
| 1st Sept 2025 | `do MMM yyyy` |
| 2nd Aug 2025 | `do MMM yyyy` |
| 3rd Jan 2026 | `do MMM yyyy` |
| 4th Jun 2024 | `do MMM yyyy` |

### Implementation

```tsx
import { format } from "date-fns";

// Format a date
const formattedDate = format(new Date(), "do MMM yyyy");
// Output: "4th Feb 2026"

// Format from a date string
const date = new Date("2025-09-01");
const formatted = format(date, "do MMM yyyy");
// Output: "1st Sept 2025"
```

### Usage Example

```tsx
import { format } from "date-fns";

function WorkoutCard({ date }: { date: Date }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{format(date, "do MMM yyyy")}</CardTitle>
      </CardHeader>
    </Card>
  );
}
```

## Summary

| Requirement | Standard |
|-------------|----------|
| Component Library | shadcn/ui only |
| Custom Components | **NOT ALLOWED** |
| Date Library | date-fns |
| Date Format | `do MMM yyyy` (e.g., "1st Sept 2025") |
