# Digital Portfolio

A modern, responsive digital portfolio built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases projects, education, work experience, skills, awards, and extracurricular activities with beautiful animations and a clean design.

## ✨ Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **TypeScript**: Fully typed for better development experience
- **SEO Optimized**: Built with Next.js for excellent SEO performance
- **Easy to Customize**: Well-structured code and data files for easy customization

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Main page
├── components/         # React components
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills section
│   ├── Projects.tsx    # Projects showcase
│   ├── Education.tsx   # Education timeline
│   ├── Experience.tsx  # Work experience
│   ├── AwardsActivities.tsx # Awards and activities
│   ├── Contact.tsx     # Contact form and info
│   ├── Navigation.tsx  # Navigation bar
│   └── Footer.tsx      # Footer component
├── data/
│   └── portfolio.ts    # Portfolio data (customize this!)
└── types/
    └── index.ts        # TypeScript type definitions

public/
├── images/             # Image assets
│   ├── profile.jpg     # Your profile photo
│   └── projects/       # Project screenshots
└── resume.pdf          # Your resume (optional)
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### 1. Update Your Information

Edit `src/data/portfolio.ts` to add your personal information:

```typescript
export const personalInfo: PersonalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... update all fields with your information
};
```

### 2. Add Your Projects

Update the `projects` array in `src/data/portfolio.ts`:

```typescript
export const projects: Project[] = [
  {
    id: "1",
    title: "Your Project",
    description: "Project description...",
    technologies: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/yourusername/project",
    liveUrl: "https://your-project.com",
    featured: true
  },
  // ... add more projects
];
```

### 3. Add Your Photos

- **Profile Photo**: Add your photo as `public/images/profile.jpg` (400x400px recommended)
- **Project Screenshots**: Add project images in `public/images/projects/`
- **Resume**: Add your resume as `public/resume.pdf`

See `public/images/README.md` for detailed image guidelines.

### 4. Update Other Sections

Customize the following arrays in `src/data/portfolio.ts`:
- `education` - Your educational background
- `experiences` - Work experience and internships
- `skills` - Technical skills and proficiency levels
- `awards` - Awards and recognition
- `activities` - Extracurricular activities

## 🎨 Customization Options

### Colors and Styling

The portfolio uses Tailwind CSS with a custom color scheme. To change colors:

1. **Primary Color**: The portfolio uses Indigo as the primary color. Search and replace `indigo` with your preferred color in the component files.

2. **Custom Styles**: Add custom styles in `src/app/globals.css`

### Adding New Sections

1. Create a new component in `src/components/`
2. Add the component to `src/app/page.tsx`
3. Update the navigation in `src/components/Navigation.tsx`

## 📱 Responsive Design

The portfolio is fully responsive and tested on:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

<!-- ## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Deploy on Netlify

1. Build the project: `npm run build`
2. Upload the `out` folder to Netlify
3. Configure redirects if needed

### Deploy on Other Platforms

The portfolio can be deployed on any platform that supports static sites or Node.js applications.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you have any questions or need help customizing your portfolio, feel free to reach out! -->
