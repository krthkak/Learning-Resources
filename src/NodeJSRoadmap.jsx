import { useState } from "react";
import { CheckCircle, Circle, ChevronDown, ChevronUp, BookOpen, Code, Server, Database, Globe, Linkedin, ExternalLink } from "lucide-react";

export default function NodeJSRoadmap() {
  const [expandedSections, setExpandedSections] = useState({
    fundamentals: true,
    core: true,
    frameworks: true,
    database: true,
    advanced: true,
    projects: true,
    community: true
  });

  const [expandedResources, setExpandedResources] = useState({});

  const [completedItems, setCompletedItems] = useState({});

  const toggleSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };

  const toggleResources = (itemId) => {
    setExpandedResources({
      ...expandedResources,
      [itemId]: !expandedResources[itemId]
    });
  };

  const toggleItem = (itemId) => {
    setCompletedItems({
      ...completedItems,
      [itemId]: !completedItems[itemId]
    });
  };

  const roadmapSections = [
    {
      id: "fundamentals",
      title: "JavaScript Fundamentals Refresher",
      icon: <BookOpen size={20} />,
      items: [
        { 
          id: "js-es6", 
          name: "Modern JavaScript (ES6+)",
          resources: [
            "MDN Web Docs - JavaScript Guide",
            "JavaScript.info - Modern JavaScript Tutorial",
            "Wes Bos - ES6 for Everyone (Course)",
            "You Don't Know JS (Book Series)",
          ]
        },
        { 
          id: "js-async", 
          name: "Asynchronous JavaScript (Promises, async/await)",
          resources: [
            "MDN Web Docs - Asynchronous JavaScript",
            "JavaScript.info - Promises, async/await",
            "Frontendmasters - Asynchronous Programming in JavaScript",
            "Exploring JS - Asynchronous Programming",
          ]
        },
        { 
          id: "js-modules", 
          name: "JavaScript modules and imports",
          resources: [
            "MDN Web Docs - JavaScript Modules",
            "JavaScript.info - Modules",
            "Node.js Docs - ECMAScript Modules",
            "V8 Blog - Understanding JavaScript Modules",
          ]
        },
        { 
          id: "js-functional", 
          name: "Functional programming concepts",
          resources: [
            "Mostly Adequate Guide to Functional Programming",
            "Functional-Light JavaScript (Book)",
            "Egghead.io - Just Enough Functional Programming",
            "Professor Frisby's Mostly Adequate Guide to Functional Programming",
          ]
        }
      ]
    },
    {
      id: "core",
      title: "Core Node.js",
      icon: <Server size={20} />,
      items: [
        { 
          id: "node-basics", 
          name: "Node.js architecture and event loop",
          resources: [
            "Node.js Official Docs - About Node.js",
            "What the heck is the event loop anyway? (YouTube)",
            "Understanding the Node.js Event Loop (NodeSource)",
            "Node.js Design Patterns (Book)",
          ]
        },
        { 
          id: "node-modules", 
          name: "CommonJS vs ES modules in Node.js",
          resources: [
            "Node.js Docs - ECMAScript Modules",
            "Node.js Modules: CommonJS vs ESM (LogRocket)",
            "Understanding ES modules in Node.js (Smashing Magazine)",
            "2ality Blog - ES modules vs CommonJS",
          ]
        },
        { 
          id: "node-npm", 
          name: "NPM ecosystem and package management",
          resources: [
            "npm Docs - Getting Started",
            "Node.js Package Manager Tutorial (DigitalOcean)",
            "npm vs Yarn vs pnpm (LogRocket)",
            "Creating and Publishing a Node.js Module (NodeSource)",
          ]
        },
        { 
          id: "node-fs", 
          name: "File system operations",
          resources: [
            "Node.js Docs - File System",
            "Working with Files in Node.js (DigitalOcean)",
            "Node.js File System Tutorial (W3Schools)",
            "Node.js File System Module (TutorialsPoint)",
          ]
        },
        { 
          id: "node-streams", 
          name: "Streams and buffers",
          resources: [
            "Node.js Docs - Stream",
            "Understanding Streams in Node.js (NodeSource)",
            "Streams Handbook (GitHub)",
            "Node.js Streams: Everything you need to know (Medium)",
          ]
        },
        { 
          id: "node-http", 
          name: "HTTP module and creating servers",
          resources: [
            "Node.js Docs - HTTP",
            "Creating a HTTP Server using Node.js (GeeksforGeeks)",
            "Node.js HTTP Module (TutorialsPoint)",
            "Building a Simple HTTP Server with Node.js (DigitalOcean)",
          ]
        }
      ]
    },
    {
      id: "frameworks",
      title: "Web Frameworks & APIs",
      icon: <Globe size={20} />,
      items: [
        { 
          id: "express", 
          name: "Express.js fundamentals",
          resources: [
            "Express.js Official Docs",
            "Express.js Crash Course (YouTube - Traversy Media)",
            "MDN Web Docs - Express/Node Introduction",
            "Express.js Tutorial (TutorialsPoint)",
          ]
        },
        { 
          id: "middleware", 
          name: "Middleware concepts and implementation",
          resources: [
            "Express.js Docs - Using middleware",
            "Understanding Express.js Middleware (DigitalOcean)",
            "Writing Express Middleware (Medium)",
            "Express.js Middleware Demystified (LogRocket)",
          ]
        },
        { 
          id: "routing", 
          name: "Routing and controllers",
          resources: [
            "Express.js Docs - Routing",
            "Node.js/Express.js - Controller and Routes Tutorial",
            "MVC Pattern with Express.js (Medium)",
            "Express Router and Routes (DigitalOcean)",
          ]
        },
        { 
          id: "rest-api", 
          name: "RESTful API design",
          resources: [
            "REST API Design Best Practices (DigitalOcean)",
            "Building RESTful APIs with Express.js (Medium)",
            "RESTful Web API Design with Node.js (LinkedIn Learning)",
            "Best Practices for Designing a Pragmatic RESTful API",
          ]
        },
        { 
          id: "graphql", 
          name: "GraphQL basics (Apollo Server)",
          resources: [
            "GraphQL Official Docs",
            "Apollo Server Documentation",
            "How to GraphQL - Node.js Tutorial",
            "Building a GraphQL Server with Node.js and Express",
          ]
        },
        { 
          id: "nestjs", 
          name: "NestJS (TypeScript-based framework)",
          resources: [
            "NestJS Official Documentation",
            "NestJS Crash Course (YouTube)",
            "Learn NestJS from Scratch (Dev.to)",
            "Enterprise Node.js + TypeScript with NestJS (Udemy)",
          ]
        }
      ]
    },
    {
      id: "database",
      title: "Database Integration",
      icon: <Database size={20} />,
      items: [
        { 
          id: "mongodb", 
          name: "MongoDB and Mongoose ODM",
          resources: [
            "MongoDB Official Docs",
            "Mongoose Documentation",
            "MongoDB University - Free Courses",
            "Complete MongoDB Tutorial (YouTube - Net Ninja)",
          ]
        },
        { 
          id: "sql", 
          name: "SQL databases with Sequelize or TypeORM",
          resources: [
            "Sequelize Documentation",
            "TypeORM Documentation",
            "SQL and PostgreSQL with Node.js (Udemy)",
            "Using Sequelize with Node.js and Express (DigitalOcean)",
          ]
        },
        { 
          id: "redis", 
          name: "Redis for caching",
          resources: [
            "Redis Official Documentation",
            "Redis and Node.js Tutorial (DigitalOcean)",
            "Using Redis with Node.js (NodeSource)",
            "Caching Strategies with Redis (Medium)",
          ]
        },
        { 
          id: "db-patterns", 
          name: "Database design patterns",
          resources: [
            "Node.js Design Patterns for Databases (Medium)",
            "Data Access Patterns in Node.js (LogRocket)",
            "MongoDB Design Patterns (MongoDB University)",
            "Database Transactions in Node.js Applications",
          ]
        }
      ]
    },
    {
      id: "advanced",
      title: "Advanced Topics",
      icon: <Code size={20} />,
      items: [
        { 
          id: "typescript", 
          name: "TypeScript with Node.js",
          resources: [
            "TypeScript Official Documentation",
            "TypeScript Node Starter (GitHub)",
            "TypeScript with Node.js (Microsoft Learn)",
            "Production-Grade TypeScript (Frontend Masters)",
          ]
        },
        { 
          id: "testing", 
          name: "Testing (Jest, Mocha, Supertest)",
          resources: [
            "Jest Documentation",
            "Mocha Documentation",
            "Testing Node.js Applications (Martin Fowler)",
            "Node.js & Express Testing Best Practices",
          ]
        },
        { 
          id: "auth", 
          name: "Authentication & Authorization (JWT, OAuth)",
          resources: [
            "JWT.io - Introduction to JSON Web Tokens",
            "OAuth.net - OAuth Guides",
            "Authentication and Authorization in Node.js (Medium)",
            "Node.js Security Best Practices (NodeSource)",
          ]
        },
        { 
          id: "deploy", 
          name: "Deployment & DevOps (Docker, CI/CD)",
          resources: [
            "Docker Documentation",
            "GitHub Actions for Node.js",
            "Deploying Node.js Applications (NodeSource)",
            "Deploying Node.js to AWS/Azure/GCP tutorials",
          ]
        },
        { 
          id: "microservices", 
          name: "Microservices architecture",
          resources: [
            "Microservices with Node.js (Medium)",
            "Building Microservices with Node.js (O'Reilly)",
            "Microservices Architecture in Node.js (LogRocket)",
            "Microservices Communication Patterns",
          ]
        },
        { 
          id: "websockets", 
          name: "Real-time applications with WebSockets/Socket.io",
          resources: [
            "Socket.io Documentation",
            "WebSockets API (MDN)",
            "Real-Time Web with Socket.io (Pluralsight)",
            "Building Real-Time Applications with WebSockets (DigitalOcean)",
          ]
        }
      ]
    },
    {
      id: "projects",
      title: "Practical Projects",
      icon: <Code size={20} />,
      items: [
        { 
          id: "project-api", 
          name: "Build a REST API with Express",
          resources: [
            "Building a RESTful CRUD API with Node.js (DigitalOcean)",
            "RESTful API design with Node, Express and MongoDB (YouTube)",
            "Node.js REST API Example Repository (GitHub)",
            "Express & MongoDB REST API Tutorial (Dev.to)",
          ]
        },
        { 
          id: "project-auth", 
          name: "Authentication system",
          resources: [
            "Node.js Authentication Tutorial (Dev.to)",
            "JWT Authentication Node.js Tutorial (YouTube)",
            "OAuth Implementation with Node.js (DigitalOcean)",
            "Role-based Access Control in Node.js (Medium)",
          ]
        },
        { 
          id: "project-realtime", 
          name: "Real-time application (chat, dashboard)",
          resources: [
            "Build a Real-Time Chat App with Socket.io (freeCodeCamp)",
            "Real-time Dashboard with Node.js and Socket.io (LogRocket)",
            "Building a Real-time Collaborative Editor (Medium)",
            "Real-time Data Visualization with Node.js (Smashing Magazine)",
          ]
        },
        { 
          id: "project-fullstack", 
          name: "Full-stack application with Node.js backend",
          resources: [
            "MERN Stack Tutorial (MongoDB, Express, React, Node)",
            "Building a Full Stack App with Next.js and Node.js",
            "Full Stack Projects for Your Portfolio (Medium)",
            "TypeScript Full Stack Project Tutorial (YouTube)",
          ]
        },
        { 
          id: "project-microservice", 
          name: "Simple microservice architecture",
          resources: [
            "Building Microservices with Node.js (Medium)",
            "Node.js Microservices Example (GitHub)",
            "Event-Driven Microservices with Node.js (YouTube)",
            "Communication Between Microservices (DigitalOcean)",
          ]
        }
      ]
    },
    {
      id: "community",
      title: "Community & Growth",
      icon: <Linkedin size={20} />,
      items: [
        { 
          id: "github", 
          name: "Contribute to open source Node.js projects",
          resources: [
            "First Contributions Guide (GitHub)",
            "How to Contribute to Node.js (Node.js GitHub)",
            "Good First Issues for Node.js Projects",
            "Open Source Etiquette (DigitalOcean)",
          ]
        },
        { 
          id: "meetups", 
          name: "Join Node.js meetups and communities",
          resources: [
            "Node.js Foundation Community",
            "Meetup.com - Node.js Groups",
            "Node.js Discord Communities",
            "Stack Overflow - Node.js Tag",
          ]
        },
        { 
          id: "blog", 
          name: "Write blog posts about your Node.js journey",
          resources: [
            "Technical Writing Tips for Developers (dev.to)",
            "How to Start a Technical Blog (freeCodeCamp)",
            "Medium - JavaScript and Node.js Publications",
            "Hashnode - Developer Blogging Platform",
          ]
        },
        { 
          id: "portfolio", 
          name: "Build a portfolio showcasing Node.js projects",
          resources: [
            "Developer Portfolio Examples and Templates",
            "Building an Effective Developer Portfolio",
            "GitHub Pages for Portfolio Hosting",
            "Netlify/Vercel for Easy Portfolio Deployment",
          ]
        }
      ]
    }
  ];

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-2 text-blue-700">Node.js Developer Learning Roadmap</h1>
      <p className="text-gray-600 mb-6">A personalized transition plan from Salesforce to Node.js development</p>
      
      <div className="space-y-4">
        {roadmapSections.map((section) => (
          <div key={section.id} className="border border-gray-200 rounded-md bg-white">
            <button 
              onClick={() => toggleSection(section.id)}
              className="w-full flex items-center justify-between p-4 text-left font-medium text-gray-800 hover:bg-gray-50"
            >
              <span className="flex items-center gap-2">
                {section.icon}
                {section.title}
              </span>
              {expandedSections[section.id] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            
            {expandedSections[section.id] && (
              <div className="p-4 pt-0 border-t border-gray-100">
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item.id} className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => toggleItem(item.id)}
                          className="text-gray-600 hover:text-blue-600"
                        >
                          {completedItems[item.id] ? 
                            <CheckCircle size={20} className="text-green-500" /> : 
                            <Circle size={20} className="text-gray-400" />}
                        </button>
                        <span className={completedItems[item.id] ? "line-through text-gray-400" : "text-gray-700"}>
                          {item.name}
                        </span>
                        
                        <button 
                          onClick={() => toggleResources(item.id)}
                          className="ml-auto text-gray-500 hover:text-blue-600 text-xs flex items-center"
                        >
                          <span>Resources</span>
                          {expandedResources[item.id] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>
                      </div>
                      
                      {expandedResources[item.id] && (
                        <div className="ml-8 mt-2 bg-blue-50 p-3 rounded-md">
                          <ul className="space-y-1 text-sm">
                            {item.resources.map((resource, idx) => (
                              <li key={idx} className="flex items-start gap-1">
                                <ExternalLink size={14} className="text-blue-500 mt-1 flex-shrink-0" />
                                <span className="text-gray-700">{resource}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-md">
        <h3 className="font-medium text-blue-800 mb-2">Tips for Salesforce Developers Transitioning to Node.js</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
          <li>Leverage your full-stack experience with Apex and JavaScript</li>
          <li>Apply your API design knowledge from Salesforce to REST/GraphQL APIs</li>
          <li>Use your Salesforce integration experience when working with databases and external services</li>
          <li>Your UI development skills with Lightning/Visualforce will transfer to frontend frameworks</li>
        </ul>
      </div>
    </div>
  );
}