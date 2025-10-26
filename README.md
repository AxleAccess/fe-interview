# Calendar Interview Exercise

A frontend interview exercise focused on building a month calendar view with event rendering.

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the dev server**
   ```bash
   npm start
   ```

3. **Navigate to** [http://localhost:4200](http://localhost:4200)

## Exercise Instructions

- **Main spec**: See `INTERVIEW_EXERCISE.md` for full requirements
- **Level guide**: See `INTERVIEW_LEVELS.md` for progressive difficulty levels
- **Mock data**: Events are available in `src/app/mock-events.ts`

## Project Structure

```
src/app/
├── app.ts              # Main component (starting point)
├── app.html            # Main template
├── mock-events.ts      # Event data for the calendar
```

## Tech Stack

- **Angular 20** (standalone components)
- **TypeScript 5.8**
- **Tailwind CSS 3**
- **ESLint** for code quality

## Available Commands

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint

## Tips

- The calendar should start on **October 19, 2025** (Sunday)
- Display **5 weeks** (35 days total)
- Focus on correctness over visual polish initially
- Use Angular signals for reactive state management
- All components should use `ChangeDetectionStrategy.OnPush`

## Expected Outcome

A functional calendar that handles:
- Multi-day events spanning across weeks
- Overlapping events on the same day
- Non-contiguous date ranges
- Proper visual styling and borders

Good luck!
