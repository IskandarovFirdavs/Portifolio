"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Star,
  GitFork,
  Code,
  Database,
  Server,
  Globe,
  Send,
  Download,
  Play,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

// Portfolio data
const portfolioData = {
  name: "Firdavs Iskandarov",
  title: "Full-Stack Developer",
  bio: "Crafting the future of web experiences with cutting-edge technologies. Specialized in React, Django, and modern web architectures that push the boundaries of what's possible.",
  location: "Available Worldwide",
  email: "iskandarovfirdavs09@gmail.com",
  social: {
    github: "https://github.com/IskandarovFirdavs",
    linkedin: "https://linkedin.com/in/firdavs-iskandarov",
    email: "mailto:iskandarovfirdavs09@gmail.com",
  },
  skills: {
    frontend: [
      "JavaScript",
      "React.js",
      "Vue.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
    backend: ["Python", "Django", "Django REST Framework"],
    database: ["PostgreSQL", "MySQL", "SQLite"],
    tools: ["Git", "Heroku", "Vercel", "Netlify"],
  },
  projects: [
    {
      id: 1,
      name: "IMDB Clone Backend",
      description:
        "Robust backend for an IMDB-style movie database built with Django Rest Framework. Supports authentication, reviews, ratings, watchlists, and dynamic movie data handling with JWT support.",
      technologies: [
        "Python",
        "Django Rest Framework",
        "JWT Authentication",
        "SQLite",
        "Django ORM",
      ],
      githubUrl: "https://github.com/IskandarovFirdavs/IMDB-clone-Back-DRF",
      liveUrl: "",
      stars: 0,
      forks: 0,
      updatedAt: "2025-06-10",
      category: "Backend",
      color: "from-yellow-600 to-gray-800",
    },
    {
      id: 2,
      name: "Instagram Clone Backend",
      description:
        "A Django-based backend for a full-featured Instagram-like application supporting posts, likes, comments, media handling, auto-deleting stories, and real-time chat via WebSockets.",
      technologies: [
        "Python",
        "Django",
        "Django REST Framework",
        "Django Channels",
        "Redis",
        "Pillow",
        "Celery",
        "JWT Authentication",
        "WebSocket ",
        "SQLite",
      ],
      githubUrl: "https://github.com/IskandarovFirdavs/instagram-clone-Django",
      liveUrl: "",
      stars: 0,
      forks: 0,
      updatedAt: "2025-06-15",
      category: "Full-Stack",
      color: "from-pink-500 to-purple-600",
    },
    {
      id: 3,
      name: "FC Unwanted Boys ReactJS",
      description:
        "Interactive football club UI built with React.js, showcasing player stats, latest matches, and embedded multimedia content from the Unwanted Boys media football team.",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Axios",
        "React Router",
        "YouTube API",
      ],
      githubUrl: "https://github.com/IskandarovFirdavs/fc_unwantedboys-ReactJS",
      liveUrl: "https://unwantedboys.vercel.app/",
      stars: "0",
      forks: "0",
      updatedAt: "2025-02-02",
      category: "Frontend",
      color: "from-blue-500 to-indigo-500",
    },
    {
      id: 4,
      name: "Yuksalish School Bot",
      description:
        "Telegram bot built for Yuksalish School using Aiogram and Django. Handles role-based interactions for students, curators, and parents with secure video submissions and task management.",
      technologies: [
        "Python",
        "Django",
        "Aiogram",
        "SQLite",
        "Telegram Bot API",
      ],
      githubUrl: "https://github.com/GayratovJavohir/Yuksalish-School-Bot",
      liveUrl: "https://t.me/yuksalish_dj_uz_bot",
      stars: 1,
      forks: 0,
      updatedAt: "2025-05-30",
      category: "Backend",
      color: "from-green-500 to-emerald-600",
    },
    {
      id: 6,
      name: "Weather Forecast App",
      description:
        "Simple weather app providing real-time weather data for any city using OpenWeatherMap API. Clean UI and fast fetch using async requests.",
      technologies: [
        "Vue.js",
        "JavaScript",
        "OpenWeatherMap API",
        "HTML5",
        "CSS3",
      ],
      githubUrl: "https://github.com/IskandarovFirdavs/weather-app",
      liveUrl: "https://weather-two-gules.vercel.app",
      stars: 0,
      forks: 0,
      updatedAt: "2025-07-21",
      category: "Frontend",
      color: "from-cyan-500 to-blue-500",
    },
    {
      id: 7,
      name: "Mobile App React Native",
      description:
        "Cross-platform mobile application built with React Native, featuring multiple screens, navigation, and responsive UI components.",
      technologies: [
        "React Native",
        "JavaScript",
        "Expo",
        "React Navigation",
        "Android & iOS",
      ],
      githubUrl: "https://github.com/IskandarovFirdavs/Mobile-App-ReactNative",
      liveUrl: "",
      stars: 0,
      forks: 0,
      updatedAt: "2025-03-01",
      category: "Frontend",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 8,
      name: "Netflix Clone",
      description:
        "A responsive Netflix clone built with React.js and styled-components, featuring movie trailers, categories, and interactive UI. Powered by TMDB API for dynamic content.",
      technologies: [
        "React.js",
        "JavaScript",
        "Styled-Components",
        "TMDB API",
        "Axios",
      ],
      githubUrl: "https://github.com/IskandarovFirdavs/Netflix-ReactJS",
      liveUrl: "https://netflix-react-js-seven.vercel.app",
      stars: 0,
      forks: 0,
      updatedAt: "2025-06-03",
      category: "Frontend",
      color: "from-red-600 to-black",
    },
    {
      id: 9,
      name: "IMDB Clone Frontend",
      description:
        "Frontend of an IMDB-style movie database built with React.js and Tailwind CSS. Integrates with a Django REST API and supports authentication, search, watchlists, ratings, and reviews.",
      technologies: [
        "React.js",
        "JavaScript",
        "Tailwind CSS",
        "React Router",
        "JWT Authentication",
        "Axios",
      ],
      githubUrl:
        "https://github.com/IskandarovFirdavs/IMDB-clone-Front-ReactJs",
      liveUrl: "https://imdb-clone-reactjs.vercel.app",
      stars: 0,
      forks: 0,
      updatedAt: "2025-06-12",
      category: "Frontend",
      color: "from-gray-900 to-yellow-600",
    },
    {
      id: 10,
      name: "Toy Shop Backend",
      description:
        "A Django-based backend for an e-commerce toy shop platform. Includes product management, shopping cart, user authentication, and order handling.",
      technologies: [
        "Python",
        "Django",
        "Django Admin",
        "SQLite",
        "Bootstrap (Admin UI)",
      ],
      githubUrl: "https://github.com/IskandarovFirdavs/ToyShop-Django",
      liveUrl: "",
      stars: 0,
      forks: 0,
      updatedAt: "2025-05-05",
      category: "Full-Stack",
      color: "from-orange-400 to-yellow-500",
    },
    {
      id: 11,
      name: "To-Do List App",
      description:
        "A simple and functional to-do list application built with Django. Allows users to create, update, complete, and delete tasks with a clean web interface.",
      technologies: ["Python", "Django", "HTML", "CSS", "SQLite"],
      githubUrl: "https://github.com/IskandarovFirdavs/ToDoList-Django",
      liveUrl: "",
      stars: 0,
      forks: 0,
      updatedAt: "2025-04-28",
      category: "Full-Stack",
      color: "from-sky-500 to-indigo-500",
    },
  ],
};

// 3D Planets Component (Optimized - No heavy animations)
const SpacePlanets = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Planet 1 - Large Earth-like Planet */}
      <div
        className="absolute"
        style={{
          top: "15%",
          right: "8%",
          width: "220px",
          height: "220px",
          transform: "perspective(1000px) rotateX(15deg) rotateY(25deg)",
          animation:
            "float 25s ease-in-out infinite, rotate3d 40s linear infinite",
        }}
      >
        <div
          className="w-full h-full rounded-full relative"
          style={{
            background: `
              radial-gradient(circle at 35% 25%, #60a5fa 0%, #3b82f6 30%, #1e40af 60%, #1e3a8a 100%),
              radial-gradient(circle at 70% 60%, rgba(34, 197, 94, 0.3) 0%, transparent 50%)
            `,
            boxShadow: `
              0 0 80px rgba(96, 165, 250, 0.6),
              inset -30px -30px 60px rgba(0, 0, 0, 0.4),
              inset 20px 20px 40px rgba(255, 255, 255, 0.1)
            `,
          }}
        >
          {/* Continent-like patterns */}
          <div
            className="absolute inset-0 rounded-full opacity-40"
            style={{
              background: `
                radial-gradient(ellipse 60px 40px at 40% 30%, rgba(34, 197, 94, 0.8) 0%, transparent 70%),
                radial-gradient(ellipse 80px 50px at 65% 70%, rgba(34, 197, 94, 0.6) 0%, transparent 70%),
                radial-gradient(ellipse 40px 60px at 20% 80%, rgba(34, 197, 94, 0.7) 0%, transparent 70%)
              `,
            }}
          />
          {/* Atmospheric glow */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle, transparent 70%, rgba(96, 165, 250, 0.3) 100%)",
            }}
          />
        </div>
      </div>

      {/* Planet 2 - Purple Gas Giant */}
      <div
        className="absolute"
        style={{
          top: "55%",
          left: "3%",
          width: "160px",
          height: "160px",
          transform: "perspective(1000px) rotateX(-10deg) rotateY(-15deg)",
          animation:
            "float 20s ease-in-out infinite reverse, rotate3d 35s linear infinite reverse",
          animationDelay: "5s",
        }}
      >
        <div
          className="w-full h-full rounded-full relative"
          style={{
            background: `
              radial-gradient(circle at 30% 20%, #c084fc 0%, #a855f7 40%, #7c3aed 70%, #5b21b6 100%)
            `,
            boxShadow: `
              0 0 60px rgba(168, 85, 247, 0.5),
              inset -25px -25px 50px rgba(0, 0, 0, 0.5),
              inset 15px 15px 30px rgba(255, 255, 255, 0.1)
            `,
          }}
        >
          {/* Gas bands */}
          <div
            className="absolute inset-0 rounded-full opacity-60"
            style={{
              background: `
                linear-gradient(0deg, 
                  transparent 0%, 
                  rgba(91, 33, 182, 0.4) 20%, 
                  transparent 25%,
                  rgba(124, 58, 237, 0.3) 45%,
                  transparent 50%,
                  rgba(168, 85, 247, 0.4) 75%,
                  transparent 80%
                )
              `,
            }}
          />
        </div>
      </div>

      {/* Planet 3 - Mars-like Red Planet */}
      <div
        className="absolute"
        style={{
          top: "20%",
          left: "12%",
          width: "100px",
          height: "100px",
          transform: "perspective(1000px) rotateX(20deg) rotateY(45deg)",
          animation:
            "float 15s ease-in-out infinite, rotate3d 25s linear infinite",
          animationDelay: "8s",
        }}
      >
        <div
          className="w-full h-full rounded-full relative"
          style={{
            background: `
              radial-gradient(circle at 35% 25%, #fb923c 0%, #ea580c 50%, #c2410c 80%, #9a3412 100%)
            `,
            boxShadow: `
              0 0 40px rgba(251, 146, 60, 0.4),
              inset -15px -15px 30px rgba(0, 0, 0, 0.4),
              inset 10px 10px 20px rgba(255, 255, 255, 0.1)
            `,
          }}
        >
          {/* Surface craters */}
          <div
            className="absolute inset-0 rounded-full opacity-50"
            style={{
              background: `
                radial-gradient(circle 8px at 60% 40%, rgba(154, 52, 18, 0.8) 0%, transparent 70%),
                radial-gradient(circle 6px at 30% 70%, rgba(154, 52, 18, 0.6) 0%, transparent 70%),
                radial-gradient(circle 4px at 80% 20%, rgba(154, 52, 18, 0.7) 0%, transparent 70%)
              `,
            }}
          />
        </div>
      </div>

      {/* Planet 4 - Green Forest Planet */}
      <div
        className="absolute"
        style={{
          bottom: "18%",
          right: "15%",
          width: "180px",
          height: "180px",
          transform: "perspective(1000px) rotateX(-25deg) rotateY(35deg)",
          animation:
            "float 22s ease-in-out infinite reverse, rotate3d 45s linear infinite",
          animationDelay: "12s",
        }}
      >
        <div
          className="w-full h-full rounded-full relative"
          style={{
            background: `
              radial-gradient(circle at 30% 30%, #34d399 0%, #10b981 40%, #059669 70%, #047857 100%)
            `,
            boxShadow: `
              0 0 70px rgba(52, 211, 153, 0.4),
              inset -28px -28px 55px rgba(0, 0, 0, 0.5),
              inset 18px 18px 35px rgba(255, 255, 255, 0.1)
            `,
          }}
        >
          {/* Forest patterns */}
          <div
            className="absolute inset-0 rounded-full opacity-50"
            style={{
              background: `
                radial-gradient(ellipse 50px 30px at 45% 25%, rgba(4, 120, 87, 0.8) 0%, transparent 70%),
                radial-gradient(ellipse 70px 40px at 70% 60%, rgba(4, 120, 87, 0.6) 0%, transparent 70%),
                radial-gradient(ellipse 35px 50px at 25% 75%, rgba(4, 120, 87, 0.7) 0%, transparent 70%)
              `,
            }}
          />
        </div>
      </div>

      {/* Planet 5 - Ice Planet */}
      <div
        className="absolute"
        style={{
          top: "40%",
          right: "30%",
          width: "80px",
          height: "80px",
          transform: "perspective(1000px) rotateX(10deg) rotateY(-20deg)",
          animation:
            "float 12s ease-in-out infinite, rotate3d 20s linear infinite reverse",
          animationDelay: "3s",
        }}
      >
        <div
          className="w-full h-full rounded-full relative"
          style={{
            background: `
              radial-gradient(circle at 40% 25%, #e0f2fe 0%, #22d3ee 30%, #0891b2 60%, #0e7490 100%)
            `,
            boxShadow: `
              0 0 35px rgba(34, 211, 238, 0.5),
              inset -12px -12px 25px rgba(0, 0, 0, 0.3),
              inset 8px 8px 15px rgba(255, 255, 255, 0.2)
            `,
          }}
        >
          {/* Ice caps */}
          <div
            className="absolute inset-0 rounded-full opacity-60"
            style={{
              background: `
                radial-gradient(ellipse 30px 15px at 50% 10%, rgba(224, 242, 254, 0.9) 0%, transparent 70%),
                radial-gradient(ellipse 25px 12px at 50% 90%, rgba(224, 242, 254, 0.8) 0%, transparent 70%)
              `,
            }}
          />
        </div>
      </div>

      {/* Nebula clouds */}
      <div
        className="absolute opacity-20"
        style={{
          top: "10%",
          left: "60%",
          width: "300px",
          height: "200px",
          background:
            "radial-gradient(ellipse, rgba(168, 85, 247, 0.3) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 100%)",
          filter: "blur(40px)",
          animation: "float 30s ease-in-out infinite",
        }}
      />
      <div
        className="absolute opacity-15"
        style={{
          bottom: "20%",
          left: "10%",
          width: "250px",
          height: "150px",
          background:
            "radial-gradient(ellipse, rgba(34, 211, 238, 0.3) 0%, rgba(16, 185, 129, 0.2) 50%, transparent 100%)",
          filter: "blur(35px)",
          animation: "float 25s ease-in-out infinite reverse",
          animationDelay: "10s",
        }}
      />
    </div>
  );
};

// Glitch text effect
const GlitchText = ({ children, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 text-cyan-400 opacity-70 animate-pulse clip-top">
        {children}
      </span>
      <span className="absolute inset-0 text-pink-400 opacity-70 animate-pulse clip-bottom">
        {children}
      </span>
    </div>
  );
};

// Holographic card component
const HolographicCard = ({ children, className = "", ...props }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden rounded-2xl backdrop-blur-xl glass border shadow-2xl hover:shadow-cyan-500 transition-all duration-500 ${className}`}
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 50%)`,
      }}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

// Button component
const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  disabled = false,
  ...props
}) => {
  const baseClasses = "btn";
  const variantClasses = {
    primary: "btn-primary",
    outline: "btn-outline",
  };
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${
        sizeClasses[size]
      } ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

// Badge component
const Badge = ({ children, className = "" }) => {
  return <span className={`badge ${className}`}>{children}</span>;
};

// Input component
const Input = ({ className = "", ...props }) => {
  return <input className={`input ${className}`} {...props} />;
};

// Textarea component
const Textarea = ({ className = "", ...props }) => {
  return <textarea className={`textarea ${className}`} {...props} />;
};

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const filteredProjects =
    selectedCategory === "All"
      ? portfolioData.projects
      : portfolioData.projects.filter(
          (project) => project.category === selectedCategory
        );

  const categories = ["All", "Frontend", "Backend", "Full-Stack"];

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "b7d2b6d0-3f7e-4070-b086-3349412a3abf",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to: "iskandarovfirdavs09@gmail.com",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      // Clear status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Cursor follower */}
      <motion.div
        className="fixed w-6 h-6 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          background: "linear-gradient(45deg, #22d3ee, #3b82f6)",
        }}
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* 3D Space Background */}
      <SpacePlanets />

      {/* Navigation - Clean Modern Style */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed inset-x-0 top-0 z-40 backdrop-blur-md"
        style={{
          background:
            "linear-gradient(135deg, rgba(0, 0, 0, 0.1), rgba(255, 255, 255, 0.05))",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-500"
                style={{
                  background:
                    "linear-gradient(135deg, #22d3ee, #3b82f6, #8b5cf6)",
                }}
              >
                FI
              </div>
              <div
                className="absolute inset-0 rounded-xl blur-xl opacity-50 animate-pulse"
                style={{
                  background:
                    "linear-gradient(135deg, #22d3ee, #3b82f6, #8b5cf6)",
                }}
              />
            </motion.div>

            {/* Navigation Links - Clean Style */}
            <div className="hidden md:flex items-center space-x-2">
              {["home", "about", "projects", "contact"].map(
                (section, index) => (
                  <motion.button
                    key={section}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(section)}
                    className={`relative capitalize text-sm font-medium px-6 py-2 rounded-full transition-all duration-300 ${
                      activeSection === section
                        ? "text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                    style={{
                      background:
                        activeSection === section
                          ? "linear-gradient(135deg, rgba(34, 211, 238, 0.2), rgba(59, 130, 246, 0.2))"
                          : "transparent",
                    }}
                  >
                    {section}
                    {activeSection === section && (
                      <motion.div
                        layoutId="activeNavBg"
                        className="absolute inset-0 rounded-full border border-cyan-400/30"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(34, 211, 238, 0.1), rgba(59, 130, 246, 0.1))",
                        }}
                      />
                    )}
                  </motion.button>
                )
              )}
            </div>

            {/* Resume Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center space-x-4"
            >
              <a
                href="/resume.pdf"
                download
                className="flex items-center px-4 py-2 text-sm font-medium text-cyan-400 rounded-full border border-cyan-400/30 hover:bg-cyan-400/10 transition-all duration-300"
                style={{
                  background: "rgba(34, 211, 238, 0.05)",
                }}
              >
                <Download size={16} className="mr-2" />
                Resume
              </a>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center"
        style={{ paddingTop: "5rem" }}
      >
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(30, 58, 138, 0.1), rgba(91, 33, 182, 0.1), rgba(6, 182, 212, 0.1))",
            }}
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Avatar with holographic effect */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.5, type: "spring" }}
              className="relative w-40 h-40 mx-auto mb-8"
            >
              <div
                className="absolute inset-0 rounded-full animate-spin-slow z-0"
                style={{
                  background:
                    "linear-gradient(135deg, #22d3ee, #3b82f6, #8b5cf6)",
                }}
              />
              <div className="absolute inset-2 rounded-full overflow-hidden z-10">
                <img
                  src="/me.jpg"
                  alt="My Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="absolute inset-0 rounded-full blur-xl opacity-50 animate-pulse z-0"
                style={{
                  background:
                    "linear-gradient(135deg, #22d3ee, #3b82f6, #8b5cf6)",
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <h1 className="text-6xl md:text-8xl font-black mb-6 text-white text-center">
                {portfolioData.name}
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="text-2xl md:text-3xl text-gray-300 mb-4 font-light"
            >
              {portfolioData.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              {portfolioData.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
            >
              <Button
                onClick={() => scrollToSection("projects")}
                className="group relative overflow-hidden shadow-lg shadow-blue-500 transform hover:scale-105"
                size="lg"
              >
                <span className="relative z-10 flex items-center">
                  <Play size={20} className="mr-2" />
                  Explore My Universe
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>

              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="backdrop-blur-sm"
                size="lg"
              >
                <Send size={20} className="mr-2" />
                Connect
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              className="flex justify-center space-x-8"
            >
              {[
                {
                  icon: Github,
                  href: portfolioData.social.github,
                  color: "hover:text-purple-400",
                },
                {
                  icon: Linkedin,
                  href: portfolioData.social.linkedin,
                  color: "hover:text-blue-400",
                },
                {
                  icon: Mail,
                  href: portfolioData.social.email,
                  color: "hover:text-cyan-400",
                },
              ].map(({ icon: Icon, href, color }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-gray-400 ${color} transition-all duration-300 p-3 rounded-full backdrop-blur-sm glass border`}
                >
                  <Icon size={28} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative py-32 z-20"
        style={{
          background:
            "linear-gradient(135deg, rgba(55, 65, 81, 0.3), rgba(0, 0, 0, 0.7))",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 gradient-text">
              Neural Architecture
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Architecting the future of digital experiences through
              quantum-level precision and neural network optimization. Every
              line of code is a pathway to tomorrow's possibilities.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <HolographicCard className="p-8">
                <h3 className="text-3xl font-bold mb-8 text-cyan-400">
                  Quantum Skill Matrix
                </h3>

                <div className="space-y-8">
                  {[
                    {
                      category: "Frontend Synthesis",
                      skills: portfolioData.skills.frontend,
                      icon: Globe,
                      gradient: "from-cyan-500 to-blue-500",
                    },
                    {
                      category: "Backend Architecture",
                      skills: portfolioData.skills.backend,
                      icon: Server,
                      gradient: "from-purple-500 to-pink-500",
                    },
                    {
                      category: "Data Nexus",
                      skills: [
                        ...portfolioData.skills.database,
                        ...portfolioData.skills.tools,
                      ],
                      icon: Database,
                      gradient: "from-emerald-500 to-teal-500",
                    },
                  ].map(({ category, skills, icon: Icon, gradient }, index) => (
                    <motion.div
                      key={category}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="flex items-center mb-4">
                        <div
                          className="p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300"
                          style={{
                            background:
                              "linear-gradient(45deg, #22d3ee, #3b82f6)",
                          }}
                        >
                          <Icon size={24} className="text-white" />
                        </div>
                        <h4 className="text-xl font-semibold text-white">
                          {category}
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: skillIndex * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            className="px-4 py-2 rounded-full border border-white/20 text-sm font-medium text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                            style={{ background: "rgba(255, 255, 255, 0.05)" }}
                          >
                            {skill}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </HolographicCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {[
                {
                  title: "Quantum Frontend Engineering",
                  description:
                    "Crafting immersive user experiences that transcend traditional boundaries using React.js, Vue.js, and cutting-edge web technologies.",
                  icon: Code,
                  gradient: "from-cyan-500 to-blue-500",
                },
                {
                  title: "Neural Backend Systems",
                  description:
                    "Building intelligent server architectures with Django and Django REST Framework that adapt and evolve with user needs.",
                  icon: Server,
                  gradient: "from-purple-500 to-pink-500",
                },
                {
                  title: "Holographic Integration",
                  description:
                    "Seamlessly connecting multi-dimensional systems through advanced APIs, real-time data synchronization, and quantum-encrypted communications.",
                  icon: Database,
                  gradient: "from-emerald-500 to-teal-500",
                },
              ].map(({ title, description, icon: Icon, gradient }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <HolographicCard className="p-6 group hover:scale-105 transition-all duration-500">
                    <div className="flex items-start space-x-4">
                      <div
                        className="p-3 rounded-xl group-hover:scale-110 transition-transform duration-300"
                        style={{
                          background:
                            "linear-gradient(45deg, #22d3ee, #3b82f6)",
                        }}
                      >
                        <Icon size={24} className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-3">
                          {title}
                        </h4>
                        <p className="text-gray-300 leading-relaxed">
                          {description}
                        </p>
                      </div>
                    </div>
                  </HolographicCard>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <HolographicCard
                  className="p-6 border-cyan-400/30"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1))",
                  }}
                >
                  <div className="text-center">
                    <h4 className="text-xl font-semibold text-cyan-400 mb-2">
                      Ready for Quantum Collaboration
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Available for interdimensional projects and revolutionary
                      web experiences
                    </p>
                  </div>
                </HolographicCard>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="relative py-32 z-20"
        style={{
          background:
            "linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(55, 65, 81, 0.3))",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2
              className="text-5xl md:text-6xl font-black mb-6"
              style={{
                background: "linear-gradient(45deg, #a855f7, #ec4899, #ef4444)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Quantum Creations
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Explore my interdimensional portfolio of revolutionary
              applications that push the boundaries of what's possible in the
              digital realm.
            </p>

            {/* Category Filter */}
            <div className="flex justify-center space-x-4 mb-12">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? "text-white shadow-lg shadow-purple-500"
                      : "text-gray-300 hover:text-white backdrop-blur-sm border border-white/10 hover:bg-white/10"
                  }`}
                  style={
                    selectedCategory === category
                      ? {
                          background:
                            "linear-gradient(45deg, #8b5cf6, #ec4899)",
                        }
                      : {
                          background: "rgba(255, 255, 255, 0.05)",
                        }
                  }
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <HolographicCard className="h-full group overflow-hidden">
                    <div
                      className="h-2"
                      style={{
                        background: project.color.includes("purple")
                          ? "linear-gradient(45deg, #8b5cf6, #ec4899)"
                          : project.color.includes("cyan")
                          ? "linear-gradient(45deg, #06b6d4, #3b82f6)"
                          : project.color.includes("emerald")
                          ? "linear-gradient(45deg, #10b981, #14b8a6)"
                          : project.color.includes("orange")
                          ? "linear-gradient(45deg, #f97316, #ef4444)"
                          : project.color.includes("blue")
                          ? "linear-gradient(45deg, #3b82f6, #6366f1)"
                          : "linear-gradient(45deg, #8b5cf6, #a855f7)",
                      }}
                    />
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                            {project.name}
                          </h3>
                          <Badge
                            className="text-xs border-0 text-white"
                            style={{
                              background: project.color.includes("purple")
                                ? "linear-gradient(45deg, #8b5cf6, #ec4899)"
                                : project.color.includes("cyan")
                                ? "linear-gradient(45deg, #06b6d4, #3b82f6)"
                                : project.color.includes("emerald")
                                ? "linear-gradient(45deg, #10b981, #14b8a6)"
                                : project.color.includes("orange")
                                ? "linear-gradient(45deg, #f97316, #ef4444)"
                                : project.color.includes("blue")
                                ? "linear-gradient(45deg, #3b82f6, #6366f1)"
                                : "linear-gradient(45deg, #8b5cf6, #a855f7)",
                            }}
                          >
                            {project.category}
                          </Badge>
                        </div>
                        <div className="flex space-x-2">
                          <motion.a
                            href={project.githubUrl}
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            className="text-gray-400 hover:text-white transition-colors p-2 rounded-full backdrop-blur-sm"
                            style={{ background: "rgba(255, 255, 255, 0.05)" }}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github size={18} />
                          </motion.a>
                          {project.liveUrl && (
                            <motion.a
                              href={project.liveUrl}
                              whileHover={{ scale: 1.2, rotate: -5 }}
                              className="text-gray-400 hover:text-cyan-400 transition-colors p-2 rounded-full backdrop-blur-sm"
                              style={{
                                background: "rgba(255, 255, 255, 0.05)",
                              }}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink size={18} />
                            </motion.a>
                          )}
                        </div>
                      </div>

                      <p className="text-gray-300 text-sm leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: techIndex * 0.05 }}
                            className="px-3 py-1 text-xs font-medium text-gray-300 rounded-full backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300"
                            style={{ background: "rgba(255, 255, 255, 0.1)" }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Star size={14} className="text-yellow-400" />
                            <span>{project.stars}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <GitFork size={14} />
                            <span>{project.forks}</span>
                          </div>
                        </div>
                        <span className="text-xs">
                          {new Date(project.updatedAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </HolographicCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Button
              variant="outline"
              className="backdrop-blur-sm px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 group bg-transparent border-purple-500/50 text-purple-400 hover:bg-purple-500/10"
              onClick={() => window.open(portfolioData.social.github, "_blank")}
            >
              <Github
                size={20}
                className="mr-2 group-hover:rotate-12 transition-transform duration-300"
              />
              Explore Quantum Repository
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative py-32 z-20"
        style={{
          background:
            "linear-gradient(135deg, rgba(55, 65, 81, 0.3), rgba(0, 0, 0, 0.8))",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 gradient-text">
              Quantum Connection
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to embark on an interdimensional journey of digital
              innovation? Let's create something extraordinary together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <HolographicCard className="p-8">
                <h3 className="text-3xl font-bold mb-8 text-cyan-400">
                  Neural Network Access
                </h3>

                <div className="space-y-6 mb-8">
                  {[
                    {
                      icon: Mail,
                      label: "Quantum Mail",
                      value: portfolioData.email,
                      href: `mailto:${portfolioData.email}`,
                    },
                    {
                      icon: Github,
                      label: "Code Repository",
                      value: "GitHub Profile",
                      href: portfolioData.social.github,
                    },
                    {
                      icon: Linkedin,
                      label: "Professional Network",
                      value: "LinkedIn Profile",
                      href: portfolioData.social.linkedin,
                    },
                  ].map(({ icon: Icon, label, value, href }, index) => (
                    <motion.a
                      key={label}
                      href={href}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className="flex items-center space-x-4 p-4 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                      style={{ background: "rgba(255, 255, 255, 0.05)" }}
                    >
                      <div
                        className="p-3 rounded-xl group-hover:scale-110 transition-transform duration-300"
                        style={{
                          background:
                            "linear-gradient(45deg, #06b6d4, #3b82f6)",
                        }}
                      >
                        <Icon size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{label}</p>
                        <p className="text-white font-medium">{value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-6 text-white">
                    Quantum Services Matrix:
                  </h4>
                  <div className="space-y-3">
                    {[
                      "🚀 Full-stack quantum applications (React + Django)",
                      "🎨 Holographic frontend experiences (React.js, Vue.js)",
                      "⚡ Neural backend architectures (Django REST Framework)",
                      "🗄️ Quantum database optimization & design",
                      "🌐 Interdimensional deployment & maintenance",
                      "🧠 AI-powered technical consulting & code review",
                    ].map((service, index) => (
                      <motion.div
                        key={service}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="text-gray-300 text-sm leading-relaxed hover:text-cyan-400 transition-colors duration-300 cursor-default"
                      >
                        {service}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </HolographicCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <HolographicCard className="p-8">
                <h3 className="text-3xl font-bold mb-8 text-purple-400">
                  Initiate Transmission
                </h3>

                {/* Status Messages */}
                <AnimatePresence>
                  {submitStatus && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className={`mb-6 p-4 rounded-xl flex items-center space-x-3 ${
                        submitStatus === "success"
                          ? "bg-green-500/20 border border-green-500/30 text-green-400"
                          : "bg-red-500/20 border border-red-500/30 text-red-400"
                      }`}
                    >
                      {submitStatus === "success" ? (
                        <CheckCircle size={20} />
                      ) : (
                        <AlertCircle size={20} />
                      )}
                      <span>
                        {submitStatus === "success"
                          ? "Message sent successfully! I'll get back to you soon."
                          : "Failed to send message. Please try again or contact me directly."}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        className="h-12 rounded-xl"
                        required
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Quantum Email"
                        className="h-12 rounded-xl"
                        required
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project Dimension (e.g., Web App, API, Neural Network)"
                      className="h-12 rounded-xl"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe your quantum vision... What revolutionary experience do you want to create?"
                      rows={6}
                      className="rounded-xl"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl text-lg font-semibold shadow-lg shadow-purple-500 transition-all duration-300 transform hover:scale-105 group"
                      style={{
                        background: "linear-gradient(45deg, #8b5cf6, #ec4899)",
                      }}
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="mr-2"
                        >
                          <Send size={20} />
                        </motion.div>
                      ) : (
                        <Send
                          size={20}
                          className="mr-2 group-hover:translate-x-1 transition-transform duration-300"
                        />
                      )}
                      {isSubmitting ? "Launching..." : "Launch Transmission"}
                    </Button>
                  </motion.div>
                </form>
              </HolographicCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 bg-black border-t border-white/10 z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 mb-2">
              © 2024 {portfolioData.name} • Quantum-Engineered with React.js
            </p>
            <p className="text-gray-500 text-sm">
              Full-Stack Quantum Developer • Available for Interdimensional
              Projects
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;
