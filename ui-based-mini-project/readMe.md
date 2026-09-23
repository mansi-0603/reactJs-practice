# Prospective Customer Segmentation — Landing Section

A React + Vite landing page section for a digital banking platform, built to showcase prospective customer segments in a horizontally scrollable card layout.

## Tech Stack

- **React** – component-based UI
- **Vite** – dev server & build tooling with HMR
- **Tailwind CSS** – utility-first styling
- **Remixicon** – icon set (`remixicon/fonts/remixicon.css`)

## Project Structure

```
src/
├── Section1.jsx          # Top-level section: navbar + hero content
├── Navbar.jsx             # "Target Audience" / "Digital Banking Platform" pill nav
├── Page1Content.jsx       # Layout wrapper: left text block + right card carousel
├── LeftContent.jsx        # Composes HeroText + Arrow
├── HeroText.jsx           # Heading + description copy
├── Arrow.jsx               # Decorative directional icon
├── RightContent.jsx       # Horizontally scrollable list of RightCards
├── RightCard.jsx           # Individual card: background image + overlay content
└── RightCardContent.jsx   # Card overlay: index badge, description, tag, CTA
```

## Component Data Flow

`Section1` receives a `users` array as a prop and passes it down through
`Page1Content` → `RightContent`, which maps each entry into a `RightCard`.

Each `users` entry should look like:

```js
{
  img: "https://example.com/photo.jpg", // background image for the card
  color: "#4f46e5",                      // tag button background color
  tag: "Millennials"                     // label shown on the card
}
```

Example usage in `App.jsx`:

```jsx
import Section1 from './Section1'

const users = [
  { img: '/images/user1.jpg', color: '#4f46e5', tag: 'Millennials' },
  { img: '/images/user2.jpg', color: '#059669', tag: 'Gen Z' },
  { img: '/images/user3.jpg', color: '#dc2626', tag: 'Small Business' },
]

function App() {
  return <Section1 users={users} />
}

export default App
```

> **Note:** `users` defaults to an empty array in `Section1`, `Page1Content`,
> and `RightContent` to prevent crashes if the data hasn't loaded yet — but
> that also means the right-side cards will render empty until real data is
> passed in. Make sure `users` is populated (e.g. from an API call or local
> data file) before it reaches `Section1`.

## Getting Started

```bash
npm install
npm run dev
```

Then open the local dev server URL shown in your terminal.

## Build

```bash
npm run build
```

## Expanding the ESLint Configuration

If you are developing a production application, we recommend using
TypeScript with type-aware lint rules enabled. Check out the
[TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts)
for information on how to integrate TypeScript and
[`typescript-eslint`](https://typescript-eslint.io) in your project.