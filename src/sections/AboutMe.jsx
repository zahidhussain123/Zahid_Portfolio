import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState, useEffect } from "react";
import {
  achievements,
  expertise,
  featuredProjects,
  journeyMilestones,
} from "../constants";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const statsRef = useRef(null);
  const carouselRef = useRef(null);
  const [activeSkillCategory, setActiveSkillCategory] = useState("Frontend");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying || !featuredProjects?.length) return;

    const interval = setInterval(() => {
      setCurrentProjectIndex((prev) =>
        prev === featuredProjects.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useGSAP(() => {
    if (!isInView) return;

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".about-content-item",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      imageRef.current,
      { scale: 0.9, opacity: 0, rotationY: 5 },
      {
        scale: 1,
        opacity: 1,
        rotationY: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".stat-number",
      { textContent: 0 },
      {
        textContent: (i, target) => parseInt(target.getAttribute("data-value")),
        duration: 2,
        ease: "power2.out",
        snap: { textContent: 1 },
        stagger: 0.2,
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [isInView]);

  const nextProject = () => {
    setCurrentProjectIndex((prev) =>
      prev === featuredProjects?.length - 1 ? 0 : prev + 1
    );
    setIsAutoPlaying(false);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) =>
      prev === 0 ? featuredProjects?.length - 1 : prev - 1
    );
    setIsAutoPlaying(false);
  };

  const goToProject = (index) => {
    setCurrentProjectIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section
      id="aboutme"
      ref={sectionRef}
      className="min-h-screen relative overflow-hidden py-20"
    >
      {/* Advanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl transition-all duration-300"
          style={{
            left: `${mousePosition.x / 50}px`,
            top: `${mousePosition.y / 50}px`,
          }}
        />
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      {/* Enhanced Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20 about-content-item">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-6 backdrop-blur-sm">
            <div className="relative">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <div className="absolute inset-0 w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
            </div>
            <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">
              React.js Architect
            </span>
            <span className="text-gray-500">•</span>
            <span className="text-purple-400 text-sm font-medium">
              3+ Years Experience
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Crafting Digital
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>

          <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-8">
            Transforming complex business requirements into{" "}
            <span className="text-cyan-400 font-semibold">scalable</span>,{" "}
            <span className="text-purple-400 font-semibold">
              high-performance
            </span>{" "}
            web applications
          </p>

          {/* Journey Timeline */}
          <div className="flex justify-center items-center gap-2 md:gap-4 flex-wrap mt-8">
            {journeyMilestones?.map((milestone, idx) => (
              <div key={idx} className="group relative">
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300">
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    {milestone.icon}
                  </span>
                  <span className="text-sm text-gray-400 group-hover:text-cyan-400">
                    {milestone.year}
                  </span>
                </div>
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {milestone.event}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 items-start gap-16">
          {/* Left Column - Enhanced Content */}
          <div ref={contentRef} className="xl:col-span-7 space-y-8">
            {/* Introduction with Highlights */}
            <div className="about-content-item">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 rounded-full" />
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 pl-4">
                  Hello, I'm{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Zahid Hussain
                  </span>
                </h3>
              </div>

              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-cyan-400 before:rounded-full">
                  A passionate{" "}
                  <span className="text-cyan-400 font-semibold">
                    React.js Architect
                  </span>{" "}
                  with{" "}
                  <span className="text-purple-400 font-semibold">
                    3+ years
                  </span>{" "}
                  of expertise in building{" "}
                  <span className="text-blue-400 font-semibold">
                    enterprise-grade applications
                  </span>{" "}
                  that scale and perform.
                </p>
                <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-purple-400 before:rounded-full">
                  My journey spans from creating modern UI landing pages to
                  architecting complex{" "}
                  <span className="text-cyan-400 font-semibold">
                    SaaS platforms
                  </span>{" "}
                  like Lusso Labs and Sharek KFU, handling everything from{" "}
                  <span className="text-purple-400">frontend interfaces</span>{" "}
                  to <span className="text-blue-400">backend integrations</span>{" "}
                  and <span className="text-pink-400">AI-powered features</span>
                  .
                </p>
                <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-400 before:rounded-full">
                  I believe in{" "}
                  <span className="text-cyan-400 font-semibold">
                    clean code
                  </span>
                  ,{" "}
                  <span className="text-purple-400 font-semibold">
                    scalable architecture
                  </span>
                  , and{" "}
                  <span className="text-blue-400 font-semibold">
                    user-centric design
                  </span>{" "}
                  to create solutions that deliver real business value and
                  exceptional user experiences.
                </p>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="about-content-item">
              <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-3xl">🏆</span>
                Key Achievements
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements?.map((achievement, idx) => (
                  <div
                    key={idx}
                    className="group relative overflow-hidden bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />
                    <div className="relative z-10">
                      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                        {achievement.icon}
                      </div>
                      <h5 className="text-white font-bold text-lg mb-2">
                        {achievement.title}
                      </h5>
                      <p className="text-gray-400 text-sm">
                        {achievement.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Tech Stack */}
            <div className="about-content-item">
              <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full" />
                Technology Arsenal
              </h4>

              {/* Category Tabs */}
              <div className="flex flex-wrap gap-3 mb-6">
                {Object.keys(expertise)?.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveSkillCategory(category)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      activeSkillCategory === category
                        ? `bg-gradient-to-r ${expertise[category].color} text-white shadow-lg`
                        : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50"
                    }`}
                  >
                    <span className="mr-2">{expertise[category].icon}</span>
                    {category}
                  </button>
                ))}
              </div>

              {/* Active Category Content */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">
                    {expertise[activeSkillCategory].icon}
                  </span>
                  <div>
                    <h5
                      className={`text-xl font-bold bg-gradient-to-r ${expertise[activeSkillCategory].color} bg-clip-text text-transparent`}
                    >
                      {activeSkillCategory}
                    </h5>
                    <p className="text-gray-400 text-sm">
                      {expertise[activeSkillCategory].description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {expertise[activeSkillCategory]?.items?.map((item, idx) => (
                    <span
                      key={idx}
                      className={`px-4 py-2 bg-gradient-to-r ${expertise[activeSkillCategory].color} bg-opacity-10 rounded-full text-sm font-semibold border border-gray-600/50 hover:scale-105 transition-transform duration-300`}
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Featured Projects Carousel */}
            <div className="about-content-item">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-2xl font-bold text-white flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full" />
                  Featured Enterprise Projects
                </h4>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
                    title={isAutoPlaying ? "Pause" : "Play"}
                  >
                    <span className="text-xl">
                      {isAutoPlaying ? "⏸️" : "▶️"}
                    </span>
                  </button>
                  <span className="text-sm text-gray-400">
                    {currentProjectIndex + 1} / {featuredProjects?.length}
                  </span>
                </div>
              </div>

              <div className="relative" ref={carouselRef}>
                {/* Main Carousel Container */}
                <div className="relative overflow-hidden rounded-3xl">
                  {/* Carousel Wrapper */}
                  <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{
                      transform: `translateX(-${currentProjectIndex * 100}%)`,
                    }}
                  >
                    {featuredProjects?.map((project, idx) => (
                      <div key={idx} className="min-w-full">
                        <div className="group relative overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-purple-400/30 transition-all duration-300">
                          {/* Background Gradient Effect */}
                          <div
                            className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 blur-3xl transition-all duration-700`}
                          />
                          <div
                            className={`absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr ${project.gradient} opacity-5 blur-2xl`}
                          />

                          <div className="relative z-10">
                            {/* Project Header */}
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <div
                                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-2xl shadow-lg`}
                                  >
                                    {project.icon || "🚀"}
                                  </div>
                                  <div>
                                    <h5 className="text-white font-bold text-2xl md:text-3xl group-hover:text-cyan-400 transition-colors">
                                      {project?.name}
                                    </h5>
                                    {project.level && (
                                      <span
                                        className={`inline-block mt-1 text-xs bg-gradient-to-r ${project.gradient} text-white px-3 py-1 rounded-full font-semibold`}
                                      >
                                        {project?.level}
                                      </span>
                                    )}
                                  </div>
                                </div>
                                <p className="text-gray-300 text-base md:text-lg mb-4 leading-relaxed">
                                  {project?.description}
                                </p>
                              </div>
                            </div>

                            {/* Tech Stack */}
                            <div className="mb-6">
                              <h6 className="text-sm text-gray-400 font-semibold mb-3 uppercase tracking-wider">
                                Tech Stack
                              </h6>
                              <div className="flex flex-wrap gap-3">
                                {project?.tech?.map((tech, techIdx) => (
                                  <span
                                    key={techIdx}
                                    className="px-4 py-2 text-sm font-semibold text-cyan-400 bg-cyan-400/10 rounded-xl border border-cyan-400/30 hover:bg-cyan-400/20 hover:scale-105 transition-all duration-300"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Project Features */}
                            {project.features && (
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                {project.features.map((feature, fIdx) => (
                                  <div
                                    key={fIdx}
                                    className="flex items-start gap-3 p-4 bg-gray-800/30 rounded-xl border border-gray-700/30"
                                  >
                                    <span className="text-green-400 text-xl">
                                      ✓
                                    </span>
                                    <span className="text-gray-300 text-sm">
                                      {feature}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Project Impact */}
                            {project.impact && (
                              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/30">
                                <span className="text-2xl">🎯</span>
                                <div>
                                  <span className="text-xs text-green-400 font-semibold uppercase tracking-wider block mb-1">
                                    Impact
                                  </span>
                                  <span className="text-gray-300 text-sm font-medium">
                                    {project.impact}
                                  </span>
                                </div>
                              </div>
                            )}

                            {/* View Project Button */}
                            {/* <div className="mt-6 flex gap-3">
                              <button className={`flex-1 px-6 py-3 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg`}>
                                View Project Details
                              </button>
                              <button className="px-6 py-3 border border-gray-600/50 text-gray-300 font-semibold rounded-xl hover:bg-gray-700/30 transition-all duration-300">
                                Live Demo
                              </button>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevProject}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-full flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 group"
                  aria-label="Previous project"
                >
                  <span className="text-2xl text-gray-400 group-hover:text-cyan-400 transition-colors">
                    ‹
                  </span>
                </button>
                <button
                  onClick={nextProject}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-full flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 group"
                  aria-label="Next project"
                >
                  <span className="text-2xl text-gray-400 group-hover:text-cyan-400 transition-colors">
                    ›
                  </span>
                </button>

                {/* Dot Indicators */}
                <div className="flex justify-center gap-3 mt-6">
                  {featuredProjects?.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goToProject(idx)}
                      className={`transition-all duration-300 rounded-full ${
                        currentProjectIndex === idx
                          ? "w-12 h-3 bg-gradient-to-r from-cyan-400 to-blue-500"
                          : "w-3 h-3 bg-gray-600 hover:bg-gray-500"
                      }`}
                      aria-label={`Go to project ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Progress Bar */}
                {isAutoPlaying && (
                  <div className="mt-4 h-1 bg-gray-700/50 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                      style={{
                        animation: "progress 5s linear infinite",
                        animationPlayState: isAutoPlaying
                          ? "running"
                          : "paused",
                      }}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Animated Stats */}
            <div ref={statsRef} className="about-content-item">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  {
                    value: 3,
                    label: "Years Experience",
                    icon: "🚀",
                    color: "cyan",
                  },
                  {
                    value: 15,
                    label: "Projects Delivered",
                    icon: "💼",
                    color: "purple",
                  },
                  {
                    value: 10,
                    label: "Enterprise Clients",
                    icon: "🏢",
                    color: "blue",
                  },
                  {
                    value: 90,
                    label: "Success Rate",
                    icon: "🎯",
                    color: "green",
                  },
                ]?.map((stat, idx) => (
                  <div
                    key={idx}
                    className="group relative overflow-hidden text-center p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-500"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-${stat.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />
                    <div className="relative z-10">
                      <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        {stat?.icon}
                      </div>
                      <div
                        className={`text-4xl md:text-5xl font-bold text-${stat?.color}-400 mb-2`}
                      >
                        <span className="stat-number" data-value={stat?.value}>
                          0
                        </span>
                        {stat?.value === 99 ? "%" : "+"}
                      </div>
                      <div className="text-gray-400 text-sm font-medium group-hover:text-gray-300 transition-colors">
                        {stat?.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Enhanced Visual Content */}
          <div className="xl:col-span-5">
            <div className="relative">
              {/* Enhanced Main Image Container */}
              <div
                ref={imageRef}
                className="relative rounded-3xl overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />

                <div className="relative rounded-3xl overflow-hidden bg-gray-800 m-1">
                  <img
                    src="/images/zahid_ofc.png"
                    alt="Zahid Hussain"
                    className="w-full h-96 object-cover rounded-3xl transform group-hover:scale-105 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent rounded-3xl" />

                  {/* Enhanced Info Card */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-gray-900/90 backdrop-blur-md rounded-2xl p-5 border border-gray-700/50 shadow-2xl">
                      <h4 className="text-white font-bold text-xl mb-1 animate-pulse">
                        Zahid Hussain
                      </h4>
                      <p className="text-cyan-400 text-sm font-semibold mb-3">
                        React.js Architect & Full-Stack Developer
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                          <span className="text-green-400">●</span>
                          <span>Available for Projects</span>
                        </div>
                        <span>•</span>
                        <span>3+ Years Experience</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Floating Elements */}
              <div className="absolute -top-6 -right-6 px-4 py-3 bg-purple-500/20 rounded-2xl rotate-12 backdrop-blur-sm border border-purple-500/30 shadow-lg">
                <div className="text-center">
                  <span className="block text-2xl mb-1">🏗️</span>
                  <span className="text-white font-bold text-xs">
                    Architect
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 px-4 py-3 bg-cyan-500/20 rounded-2xl -rotate-12 backdrop-blur-sm border border-cyan-500/30 shadow-lg">
                <div className="text-center">
                  <span className="block text-2xl mb-1">⚡</span>
                  <span className="text-white font-bold text-xs">Fast</span>
                </div>
              </div>

              <div className="absolute top-1/2 -right-8 px-4 py-3 bg-green-500/20 rounded-2xl rotate-6 backdrop-blur-sm border border-green-500/30 shadow-lg">
                <div className="text-center">
                  <span className="block text-2xl mb-1">🎯</span>
                  <span className="text-white font-bold text-xs">Precise</span>
                </div>
              </div>
            </div>

            {/* Enhanced Quick Info Cards */}
            <div className="mt-12 space-y-4 about-content-item">
              {[
                {
                  icon: "📍",
                  label: "Location",
                  value: "Hybrid (Remote/Onsite)",
                  color: "from-green-400 to-emerald-500",
                },
                {
                  icon: "🎯",
                  label: "Focus",
                  value: "React.js & Next.js",
                  color: "from-cyan-400 to-blue-500",
                },
                {
                  icon: "💼",
                  label: "Status",
                  value: "Open for Projects",
                  color: "from-purple-400 to-pink-500",
                },
                // {
                //   icon: "🚀",
                //   label: "Specialty",
                //   value: "Enterprise SaaS",
                //   color: "from-orange-400 to-red-500",
                // },
              ]?.map((item, idx) => (
                <div
                  key={idx}
                  className="group flex items-center gap-4 p-5 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div
                    className={`text-3xl p-3 rounded-xl bg-gradient-to-br ${item.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-gray-400 text-sm mb-1">
                      {item.label}
                    </div>
                    <div
                      className={`text-white font-bold text-lg bg-gradient-to-r ${item.color} bg-clip-text group-hover:text-transparent transition-all duration-300`}
                    >
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Philosophy Card */}
            <div className="mt-6 about-content-item">
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl p-6 border border-cyan-400/20 backdrop-blur-sm">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">🎯</span>
                    <h5 className="text-cyan-400 text-xl font-bold">
                      Professional Philosophy
                    </h5>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed italic">
                    "Excellence in software development isn't just about writing
                    code—it's about{" "}
                    <span className="text-cyan-400 font-semibold">
                      crafting solutions
                    </span>{" "}
                    that scale, perform, and delight users while maintaining{" "}
                    <span className="text-purple-400 font-semibold">
                      architectural integrity
                    </span>
                    ."
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Skills Highlight - Learning Progress */}
            {/* <div className="mt-6 about-content-item">
              <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl p-6 border border-purple-500/30 backdrop-blur-sm">
                <h5 className="text-purple-400 font-bold text-lg mb-4 flex items-center gap-2">
                  <span className="text-2xl">💡</span>
                  Current Learning Focus
                </h5>
                <div className="space-y-3">
                  {[
                    { skill: "Advanced Node.js", progress: 85 },
                    { skill: "AI Integration", progress: 80 },
                    { skill: "System Architecture", progress: 90 }
                  ]?.map((item, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-300">{item.skill}</span>
                        <span className="text-purple-400 font-semibold">{item.progress}%</span>
                      </div>
                      <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-400 to-pink-500 rounded-full transition-all duration-1000"
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div> */}

            {/* Languages & Communication */}
            <div className="mt-6 about-content-item">
              <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-2xl p-6 border border-blue-500/30 backdrop-blur-sm">
                <h5 className="text-cyan-400 font-bold text-lg mb-4 flex items-center gap-2">
                  <span className="text-2xl">🌍</span>
                  Languages & Communication
                </h5>
                <div className="flex flex-wrap gap-3">
                  {["English", "Urdu", "Pashto"].map((lang, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700/50"
                    >
                      <span className="text-sm font-semibold text-gray-300">
                        {lang}
                      </span>
                      <span className="text-green-400">●</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-20 about-content-item">
          <div className="mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let's Build Something{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Amazing
              </span>{" "}
              Together
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ready to transform your ideas into powerful digital solutions?
              Let's collaborate and create excellence.
            </p>
          </div>

          {/* <div className="flex flex-col sm:flex-row gap-6 items-center justify-center flex-wrap">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl overflow-hidden shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300">
              <span className="relative z-10 flex items-center gap-2">
                📄 Download Resume
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button className="group relative px-8 py-4 border-2 border-cyan-400/30 text-cyan-400 font-bold rounded-2xl overflow-hidden hover:bg-cyan-400/10 transition-all duration-300">
              <span className="flex items-center gap-2">
                🚀 View All Projects
              </span>
            </button>
            
            <button className="group relative px-8 py-4 border-2 border-purple-400/30 text-purple-400 font-bold rounded-2xl overflow-hidden hover:bg-purple-400/10 transition-all duration-300">
              <span className="flex items-center gap-2">
                📅 Schedule Consultation
              </span>
            </button>
          </div> */}

          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center flex-wrap">
            <a
              href="https://wa.me/923029488689?text=Hi%20Zahid,%20I'd%20like%20to%20discuss%20a%20project%20with%20you"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-2xl overflow-hidden shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2 animate-pulse">
                💬 Schedule WhatsApp Consultation
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>

          {/* Social Proof */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span>100% Client Satisfaction</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <span>Lightning Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🛡️</span>
              <span>Enterprise-Grade Quality</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
