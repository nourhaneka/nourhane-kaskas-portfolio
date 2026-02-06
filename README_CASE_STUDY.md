# Case Study Template Setup

This template provides a production-ready, highly responsive case study page.

## 🛠 Features
- **Dynamic Routing**: `src/app/projects/[slug]/page.tsx`
- **Type Safety**: `src/types/project.ts`
- **Animations**: Framer Motion for scroll reveals
- **Components**: `HeroSection.tsx`, `CaseStudyNav.tsx`

## 🚀 How to Add a New Case Study
1. Open `src/app/projects/[slug]/page.tsx`.
2. Locate the `getProjectData` function.
3. Add a new `case` to the mock data or connect your CMS/Database.

```typescript
if (slug === "your-new-slug") {
  return {
    slug: "your-new-slug",
    title: "Project Title",
    // ... rest of data
  };
}
```

## 🎨 Customization
- **Colors**: Edit global styles or Tailwind classes (currently using `teal-600` and `neutral-900`).
- **Animations**: Modify `HeroSection.tsx` or `CaseStudyNav.tsx` Framer Motion variants.
