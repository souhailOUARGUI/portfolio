# Images Directory

This directory contains all the images used in your portfolio website.

## Directory Structure

```
public/images/
├── profile.jpg          # Your profile photo (recommended: 400x400px)
├── projects/            # Project screenshots
│   ├── ecommerce.jpg    # E-commerce platform screenshot
│   ├── task-manager.jpg # Task management app screenshot
│   └── weather.jpg      # Weather dashboard screenshot
└── README.md           # This file
```

## Image Guidelines

### Profile Photo (`profile.jpg`)
- **Size**: 400x400px (square format)
- **Format**: JPG or PNG
- **Quality**: High resolution, professional looking
- **Background**: Clean, preferably solid color or simple

### Project Screenshots
- **Size**: 1200x800px (3:2 aspect ratio) recommended
- **Format**: JPG or PNG
- **Quality**: High resolution showing the project interface
- **Content**: Should clearly show the project's main features

## How to Add Your Images

1. **Profile Photo**: Replace the placeholder by adding your photo as `profile.jpg`
2. **Project Screenshots**: Add your project images in the `projects/` folder
3. **Update Data**: Make sure the image paths in `src/data/portfolio.ts` match your actual files

## Fallback Behavior

If images are not found, the portfolio will:
- Use a generated avatar for the profile photo
- Show placeholder images for projects with the project name
- Continue to function normally without breaking

## Optimization Tips

- Compress images to reduce file size while maintaining quality
- Use WebP format for better compression (modern browsers)
- Consider using Next.js Image optimization features
- Keep file sizes under 500KB for better loading performance
