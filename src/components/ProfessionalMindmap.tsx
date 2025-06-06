'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaGlobe, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaDownload,
  FaCode,
  FaGraduationCap,
  FaProjectDiagram,
  FaUser,
  FaExpand,
  FaCompress
} from 'react-icons/fa';
import { PersonalInfo, Project, Skill } from '@/types';

interface ProfessionalMindmapProps {
  personalInfo: PersonalInfo;
  projects: Project[];
  skills: Skill[];
}

interface MindmapNode {
  id: string;
  label: string;
  x: number;
  y: number;
  type: 'center' | 'category' | 'item';
  icon?: React.ReactNode;
  url?: string;
  color: string;
  children?: MindmapNode[];
}

export default function ProfessionalMindmap({ personalInfo, projects, skills }: ProfessionalMindmapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Create mindmap data structure
  const createMindmapData = (): MindmapNode => {
    const centerX = 400;
    const centerY = 300;
    const radius = 200;
    
    const featuredProjects = projects.filter(p => p.featured).slice(0, 3);
    const topSkills = skills.filter(s => s.proficiency === 'advanced').slice(0, 4);

    const categories: Omit<MindmapNode, 'x' | 'y'>[] = [
      {
        id: 'social',
        label: 'Social Links',
        type: 'category',
        icon: <FaGlobe />,
        color: '#3B82F6',
        children: [
          {
            id: 'github',
            label: 'GitHub',
            type: 'item',
            icon: <FaGithub />,
            url: personalInfo.socialLinks.github,
            color: '#333333',
            x: 0, y: 0
          },
          {
            id: 'linkedin',
            label: 'LinkedIn',
            type: 'item',
            icon: <FaLinkedin />,
            url: personalInfo.socialLinks.linkedin,
            color: '#0077B5',
            x: 0, y: 0
          },
          {
            id: 'twitter',
            label: 'Twitter',
            type: 'item',
            icon: <FaTwitter />,
            url: personalInfo.socialLinks.twitter,
            color: '#1DA1F2',
            x: 0, y: 0
          }
        ]
      },
      {
        id: 'contact',
        label: 'Contact Info',
        type: 'category',
        icon: <FaEnvelope />,
        color: '#10B981',
        children: [
          {
            id: 'email',
            label: personalInfo.email,
            type: 'item',
            icon: <FaEnvelope />,
            url: `mailto:${personalInfo.email}`,
            color: '#DC2626',
            x: 0, y: 0
          },
          {
            id: 'phone',
            label: personalInfo.phone || '',
            type: 'item',
            icon: <FaPhone />,
            url: `tel:${personalInfo.phone}`,
            color: '#059669',
            x: 0, y: 0
          },
          {
            id: 'location',
            label: personalInfo.location,
            type: 'item',
            icon: <FaMapMarkerAlt />,
            color: '#7C3AED',
            x: 0, y: 0
          }
        ]
      },
      {
        id: 'resume',
        label: 'Resume/CV',
        type: 'category',
        icon: <FaDownload />,
        color: '#F59E0B',
        children: [
          {
            id: 'download-resume',
            label: 'Download PDF',
            type: 'item',
            icon: <FaDownload />,
            url: '/resume.pdf', // You'll need to add your resume file
            color: '#DC2626',
            x: 0, y: 0
          }
        ]
      },
      {
        id: 'education',
        label: 'Current Studies',
        type: 'category',
        icon: <FaGraduationCap />,
        color: '#8B5CF6',
        children: [
          {
            id: 'current-education',
            label: personalInfo.title,
            type: 'item',
            icon: <FaGraduationCap />,
            color: '#6366F1',
            x: 0, y: 0
          }
        ]
      },
      {
        id: 'projects',
        label: 'Featured Projects',
        type: 'category',
        icon: <FaProjectDiagram />,
        color: '#EF4444',
        children: featuredProjects.map(project => ({
          id: `project-${project.id}`,
          label: project.title,
          type: 'item' as const,
          icon: <FaCode />,
          url: project.githubUrl,
          color: '#F97316',
          x: 0, y: 0
        }))
      },
      {
        id: 'skills',
        label: 'Top Skills',
        type: 'category',
        icon: <FaCode />,
        color: '#06B6D4',
        children: topSkills.map(skill => ({
          id: `skill-${skill.name}`,
          label: skill.name,
          type: 'item' as const,
          icon: <FaCode />,
          color: '#0891B2',
          x: 0, y: 0
        }))
      }
    ];

    // Position categories around the center
    const positionedCategories = categories.map((category, index) => {
      const angle = (index * 2 * Math.PI) / categories.length;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      
      // Position children around each category
      const positionedChildren = category.children?.map((child, childIndex) => {
        const childAngle = angle + (childIndex - (category.children!.length - 1) / 2) * 0.3;
        const childRadius = 80;
        return {
          ...child,
          x: x + Math.cos(childAngle) * childRadius,
          y: y + Math.sin(childAngle) * childRadius
        };
      });

      return {
        ...category,
        x,
        y,
        children: positionedChildren
      };
    });

    return {
      id: 'center',
      label: personalInfo.name,
      x: centerX,
      y: centerY,
      type: 'center',
      icon: <FaUser />,
      color: '#6366F1',
      children: positionedCategories
    };
  };

  const mindmapData = createMindmapData();

  const handleNodeClick = (node: MindmapNode) => {
    if (node.url) {
      if (node.url.startsWith('mailto:') || node.url.startsWith('tel:')) {
        window.location.href = node.url;
      } else {
        window.open(node.url, '_blank', 'noopener,noreferrer');
      }
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const renderNode = (node: MindmapNode, index: number = 0) => {
    const isHovered = hoveredNode === node.id;
    const scale = isHovered ? 1.1 : 1;

    return (
      <motion.g
        key={node.id}
        initial={isMounted ? { opacity: 0, scale: 0 } : false}
        animate={isMounted ? { opacity: 1, scale: 1 } : false}
        transition={isMounted ? { delay: index * 0.1, duration: 0.5 } : undefined}
      >
        <motion.circle
          cx={node.x}
          cy={node.y}
          r={node.type === 'center' ? 40 : node.type === 'category' ? 25 : 18}
          fill={node.color}
          stroke="#ffffff"
          strokeWidth={node.type === 'center' ? 4 : 2}
          className={`cursor-pointer transition-all duration-200 ${isHovered ? 'drop-shadow-lg' : ''}`}
          whileHover={{ scale, transition: { duration: 0.2 } }}
          onMouseEnter={() => setHoveredNode(node.id)}
          onMouseLeave={() => setHoveredNode(null)}
          onClick={() => handleNodeClick(node)}
          style={{
            filter: isHovered ? 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' : 'none'
          }}
        />
        <foreignObject
          x={node.x - (node.type === 'center' ? 15 : 10)}
          y={node.y - (node.type === 'center' ? 15 : 10)}
          width={node.type === 'center' ? 30 : 20}
          height={node.type === 'center' ? 30 : 20}
          className="pointer-events-none"
        >
          <div className={`flex items-center justify-center text-white ${
            node.type === 'center' ? 'text-xl' : 'text-sm'
          }`}>
            {node.icon}
          </div>
        </foreignObject>
        <motion.text
          x={node.x}
          y={node.y + (node.type === 'center' ? 55 : node.type === 'category' ? 40 : 33)}
          textAnchor="middle"
          className={`fill-gray-700 dark:fill-gray-300 font-medium ${
            node.type === 'center' ? 'text-sm' : 'text-xs'
          }`}
          style={{ fontSize: node.type === 'center' ? '14px' : '10px' }}
          animate={{ opacity: isHovered ? 1 : 0.8 }}
        >
          {node.label.length > 15 ? `${node.label.substring(0, 15)}...` : node.label}
        </motion.text>

        {/* Tooltip on hover */}
        {isHovered && node.type !== 'center' && (
          <motion.g
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            <rect
              x={node.x - 50}
              y={node.y - 70}
              width={100}
              height={25}
              rx={5}
              fill="rgba(0,0,0,0.8)"
              className="pointer-events-none"
            />
            <text
              x={node.x}
              y={node.y - 52}
              textAnchor="middle"
              className="fill-white text-xs font-medium pointer-events-none"
              style={{ fontSize: '10px' }}
            >
              {node.url ? 'Click to visit' : node.label}
            </text>
          </motion.g>
        )}
      </motion.g>
    );
  };

  const renderConnections = (parentNode: MindmapNode, childNode: MindmapNode) => {
    const isHovered = hoveredNode === parentNode.id || hoveredNode === childNode.id;

    return (
      <motion.line
        key={`${parentNode.id}-${childNode.id}`}
        x1={parentNode.x}
        y1={parentNode.y}
        x2={childNode.x}
        y2={childNode.y}
        stroke={isHovered ? "#6366F1" : "#E5E7EB"}
        strokeWidth={isHovered ? 3 : 2}
        className="dark:stroke-gray-600 transition-all duration-200"
        initial={isMounted ? { pathLength: 0 } : false}
        animate={isMounted ? { pathLength: 1 } : false}
        transition={isMounted ? { duration: 1, delay: 0.5 } : undefined}
      />
    );
  };

  return (
    <section id="mindmap" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-purple-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Network
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Interactive mindmap of my professional connections, projects, and key information
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden ${
            isFullscreen ? 'fixed inset-4 z-50' : ''
          }`}
        >
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={toggleFullscreen}
              className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              {isFullscreen ? <FaCompress /> : <FaExpand />}
            </button>
          </div>

          <div className="p-6">
            <svg
              ref={svgRef}
              width="100%"
              height={isFullscreen ? "calc(100vh - 8rem)" : "600"}
              viewBox="0 0 800 600"
              className="w-full"
            >
              {isMounted && (
                <>
                  {/* Render connections first */}
                  {mindmapData.children?.map(category => (
                    <g key={`connections-${category.id}`}>
                      {renderConnections(mindmapData, category)}
                      {category.children?.map(item => renderConnections(category, item))}
                    </g>
                  ))}

                  {/* Render nodes */}
                  {renderNode(mindmapData, 0)}
                  {mindmapData.children?.map((category, categoryIndex) => (
                    <g key={`category-${category.id}`}>
                      {renderNode(category, categoryIndex + 1)}
                      {category.children?.map((item, itemIndex) =>
                        renderNode(item, categoryIndex * 3 + itemIndex + 7)
                      )}
                    </g>
                  ))}
                </>
              )}

              {/* Fallback for SSR */}
              {!isMounted && (
                <g>
                  <circle
                    cx={400}
                    cy={300}
                    r={40}
                    fill="#6366F1"
                    stroke="#ffffff"
                    strokeWidth={4}
                  />
                  <text
                    x={400}
                    y={370}
                    textAnchor="middle"
                    className="fill-gray-700 dark:fill-gray-300 font-medium text-sm"
                  >
                    Loading Professional Network...
                  </text>
                </g>
              )}
            </svg>
          </div>

          <div className="px-6 pb-6">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Legend */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Legend</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-indigo-600 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-300">Center - My Profile</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-300">Categories</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-300">Clickable Items</span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Quick Stats</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Featured Projects:</span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {projects.filter(p => p.featured).length}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Top Skills:</span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {skills.filter(s => s.proficiency === 'advanced').length}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Social Links:</span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {Object.values(personalInfo.socialLinks).filter(Boolean).length}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center text-sm text-gray-600 dark:text-gray-400">
              <p>Click on any node to visit the link or get more information • Hover for tooltips</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
