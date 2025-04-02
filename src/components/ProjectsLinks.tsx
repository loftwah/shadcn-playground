import React from 'react';
import type { FC } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
  icon: string;
}

interface ProjectData {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: string;
}

interface ContentData {
  title: string;
  description: string;
  url: string;
  category: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ title, description, url, icon }) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noreferrer" 
      className="block p-6 bg-card border rounded-lg transition-all hover:shadow-md hover:-translate-y-1"
    >
      <div className="flex items-center gap-4">
        <div className="bg-primary/10 p-3 rounded-full">
          <i className={`${icon} text-primary`}></i>
        </div>
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        </div>
      </div>
    </a>
  );
};

const ProjectsLinks: FC = () => {
  // Featured projects from the profile
  const featuredProjects: ProjectData[] = [
    {
      id: "blog",
      title: "My Blog",
      description: "My blog where I write about stuff.",
      url: "https://blog.deanlofts.xyz",
      icon: "fa-solid fa-blog"
    },
    {
      id: "lfp",
      title: "Linux for Pirates! 1 & 2",
      description: "The home of my Linux for Pirates! and Ruby on Whales.",
      url: "https://linuxforpirates.deanlofts.xyz",
      icon: "fa-solid fa-terminal"
    },
    {
      id: "grabit",
      title: "GRABIT.SH",
      description: "A powerful CLI tool for gathering and summarising key information from Git repositories.",
      url: "https://grabit.sh",
      icon: "fa-solid fa-magnifying-glass"
    },
    {
      id: "bogan-hustler",
      title: "Bogan Hustler",
      description: "A remake of Dope Wars but Straya",
      url: "https://boganhustler.deanlofts.xyz",
      icon: "fa-solid fa-people-robbery"
    }
  ];

  // Content from tagged work
  const taggedWork: ContentData[] = [
    {
      title: "Build a Powerful Product Catalog Explorer",
      description: "A guide on building a product catalog explorer using AI technologies.",
      url: "https://blog.deanlofts.xyz/blog/rag-product-catalog/",
      category: "AI/ML"
    },
    {
      title: "Unlocking the Power of GGUF Models with Ollama",
      description: "Tutorial on working with local language models.",
      url: "https://blog.deanlofts.xyz/blog/ollama/",
      category: "AI/ML"
    },
    {
      title: "Building an Astro 5 App with Cloudflare Pages and D1",
      description: "A guide on building an Astro 5 app with Cloudflare Pages and D1.",
      url: "https://blog.deanlofts.xyz/guides/astro-cloudflare/",
      category: "Astro"
    },
    {
      title: "Deploying FastAPI with UV, Nginx, and AWS ECS",
      description: "A guide for deploying Python applications with UV.",
      url: "https://blog.deanlofts.xyz/guides/uv-fastapi-ecs/",
      category: "Python (uv)"
    }
  ];

  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map(project => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              url={project.url}
              icon={project.icon}
            />
          ))}
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-6">Latest Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {taggedWork.map((work, index) => (
            <a 
              key={index} 
              href={work.url} 
              target="_blank" 
              rel="noreferrer" 
              className="block p-6 bg-card border rounded-lg transition-all hover:shadow-md hover:-translate-y-1"
            >
              <span className="inline-block px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs mb-2">
                {work.category}
              </span>
              <h3 className="font-medium">{work.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{work.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsLinks;