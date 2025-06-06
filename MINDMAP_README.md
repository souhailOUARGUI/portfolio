# Professional Mindmap Feature

## Overview
The Professional Mindmap is an interactive visual representation of your professional network, skills, projects, and important information. It provides a unique and engaging way for visitors to explore your professional profile.

## Features

### 🎯 Central Hub
- **Your Profile**: The center node represents you with your name and profile information
- **Interactive Navigation**: Click on any node to access relevant links or information

### 📱 Categories Included

1. **Social Links**
   - GitHub profile
   - LinkedIn profile  
   - Twitter profile
   - Personal website

2. **Contact Information**
   - Email address (clickable to compose email)
   - Phone number (clickable to call)
   - Location information

3. **Resume/CV**
   - Direct download link to your PDF resume
   - Located in `/public/resume.pdf`

4. **Current Studies**
   - Your current educational status
   - Academic focus area

5. **Featured Projects**
   - Top 3 featured projects from your portfolio
   - Direct links to GitHub repositories
   - Showcases your best work

6. **Top Skills**
   - Advanced-level skills from your skill set
   - Highlights your core competencies

### 🎨 Interactive Features

- **Hover Effects**: Nodes scale and show tooltips on hover
- **Animated Connections**: Lines between nodes highlight when hovering
- **Fullscreen Mode**: Expand the mindmap for better viewing
- **Responsive Design**: Works on all device sizes
- **Dark Mode Support**: Adapts to your site's theme

### 📊 Quick Stats
The mindmap includes a stats panel showing:
- Number of featured projects
- Count of advanced skills
- Number of social media links

## Technical Implementation

### Components Used
- **Framer Motion**: For smooth animations and interactions
- **React Icons**: For consistent iconography
- **SVG Graphics**: For scalable vector graphics
- **TypeScript**: For type safety

### Data Sources
The mindmap automatically pulls data from:
- `personalInfo` object (contact details, social links)
- `projects` array (featured projects only)
- `skills` array (advanced proficiency skills only)

## Customization

### Adding New Categories
To add new categories to the mindmap, edit the `createMindmapData` function in `ProfessionalMindmap.tsx`:

```typescript
const categories: Omit<MindmapNode, 'x' | 'y'>[] = [
  // ... existing categories
  {
    id: 'new-category',
    label: 'New Category',
    type: 'category',
    icon: <YourIcon />,
    color: '#YOUR_COLOR',
    children: [
      // ... child nodes
    ]
  }
];
```

### Updating Colors
Each node has a customizable color. Update the `color` property in the node definition to change the appearance.

### Modifying Layout
The mindmap uses a circular layout with categories positioned around the center. Adjust the `radius` and angle calculations in `createMindmapData` to modify the layout.

## File Structure
```
src/
├── components/
│   └── ProfessionalMindmap.tsx    # Main mindmap component
├── app/
│   └── page.tsx                   # Updated to include mindmap
└── data/
    └── portfolio.ts               # Data source for mindmap

public/
└── resume.pdf                     # Your resume file
```

## Usage Tips

1. **Keep Resume Updated**: Regularly update the `resume.pdf` file in the public directory
2. **Featured Projects**: Mark your best projects as `featured: true` in the portfolio data
3. **Skill Levels**: Set important skills to `proficiency: 'advanced'` to appear in the mindmap
4. **Social Links**: Ensure all social media URLs are current and working

## Browser Compatibility
- Modern browsers with SVG support
- Mobile-friendly responsive design
- Touch interactions supported

## Performance
- Lightweight SVG-based graphics
- Optimized animations with Framer Motion
- Lazy loading of external links
