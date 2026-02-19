# Good Will Builders - Real Estate Website

A production-level real estate website built with React, TypeScript, and Vite for Good Will Builders construction company.

## 🏗️ Project Overview

Good Will Builders is a premium construction and real estate development company specializing in residential and commercial properties. This website showcases their portfolio, services, and company information with a modern, responsive design.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Hero Carousel**: Full-width image carousel with smooth transitions
- **Project Portfolio**: Filterable gallery of completed and ongoing projects
- **Project Detail Pages**: Detailed views with image galleries and amenities
- **Contact Form**: Interactive contact form with validation
- **About Section**: Company story, team, and achievements
- **Modern UI**: Clean, professional design with orange gradient branding
- **Performance**: Lazy loading, optimized components, and fast navigation

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router v6 with lazy loading
- **Styling**: Tailwind CSS with custom theme
- **State Management**: React Context API
- **Architecture**: Atomic Design pattern
- **Icons**: Heroicons (inline SVG)

## 📁 Project Structure

```
src/
├── assets/           # Static assets
├── components/       # Reusable UI components
│   ├── atoms/       # Smallest reusable elements
│   ├── molecules/   # Combinations of atoms
│   └── organisms/   # Complex UI sections
├── context/         # React Context providers
├── data/           # Mock data and types
├── hooks/          # Custom React hooks
├── pages/          # Route components
├── routes/         # Routing configuration
├── theme/          # Design system and theme
└── utils/          # Utility functions
```

## 🎨 Design System

### Color Palette
- **Primary**: Orange gradient (#ff7a00 → #ff4500)
- **Secondary**: Brick red (#b52b2b), Deep blue (#1f3b57)
- **Neutral**: Light background (#f8f9fa), White, Gray scale

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Scale**: Responsive typography system
- **Weights**: 300-800 for visual hierarchy

## 📱 Pages

1. **Home** (`/`)
   - Hero carousel with call-to-action
   - Featured projects grid
   - Company statistics
   - About preview section

2. **Projects** (`/projects`)
   - Filterable project gallery
   - Status badges (Ongoing/Completed)
   - Responsive grid layout

3. **Project Detail** (`/projects/:id`)
   - Large hero banner
   - Image gallery with navigation
   - Detailed specifications
   - Amenities list
   - Contact sidebar

4. **About** (`/about`)
   - Company mission and values
   - Achievement statistics
   - Leadership team
   - Company history

5. **Contact** (`/contact`)
   - Contact form with validation
   - Business hours
   - Contact information
   - Location details

## 🏛️ Architecture Patterns

### Atomic Design
- **Atoms**: Basic UI elements (buttons, inputs)
- **Molecules**: Simple component combinations (cards, forms)
- **Organisms**: Complex sections (navbar, footer, hero)

### Context API
- **MobileMenuContext**: Mobile navigation state
- **ProjectFilterContext**: Project filtering state
- **AppContext**: Global theme and app state

### Performance Optimizations
- **Lazy Loading**: Route-based code splitting
- **Image Optimization**: Responsive images with lazy loading
- **Component Memoization**: Prevent unnecessary re-renders

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd goodwill-builders
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix linting issues


### Adding New Projects
1. Update `src/data/mockData.ts`
2. Add new project objects to the projects array
3. Include all required fields and images

### Modifying Theme
1. Update `src/theme/colors.ts` for color changes
2. Update `src/theme/typography.ts` for font changes
3. Update `src/theme/theme.ts` for spacing and breakpoints

### Adding New Pages
1. Create component in `src/pages/`
2. Add route in `src/routes/router.tsx`
3. Update navigation in `src/components/organisms/Navbar.tsx`

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

### Environment Variables
Create a `.env.production` file for production configuration:

```env
VITE_API_URL=https://api.goodwillbuilders.com
VITE_CONTACT_EMAIL=info@goodwillbuilders.com
```

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.




Built with ❤️ for Good Will Builders
