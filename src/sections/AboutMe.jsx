import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const statsRef = useRef(null);

  useGSAP(() => {
    // Section entrance animation
    gsap.fromTo(sectionRef.current, 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Content stagger animation
    gsap.fromTo(".about-content-item",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Image reveal animation
    gsap.fromTo(imageRef.current,
      { scale: 0.8, opacity: 0, rotationY: 10 },
      {
        scale: 1,
        opacity: 1,
        rotationY: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 75%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Stats counter animation
    gsap.fromTo(".stat-number",
      { textContent: 0 },
      {
        textContent: (i, target) => {
          const value = parseInt(target.getAttribute('data-value'));
          return value;
        },
        duration: 2,
        ease: "power2.out",
        snap: { textContent: 1 },
        stagger: 0.3,
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const expertise = [
    { category: "Frontend", items: ["React.js", "Next.js", "TypeScript", "Svelte"] },
    { category: "Styling", items: ["TailwindCSS", "Bootstrap", "MaterialUI", "Styled-Components", "SASS"] },
    { category: "Backend", items: ["Node.js", "Express.js", "MongoDB", "MySQL"] },
    { category: "Tools", items: ["Git", "Vercel", "Framer Motion", "Redux"] }
  ];

  const featuredProjects = [
    { name: "Lusso Labs", description: "AI Content Creation Platform", tech: ["React", "Node.js", "AI APIs"] },
    { name: "Sharek KFU", description: "Management System", tech: ["Next.js", "MongoDB"] },
    { name: "GIG Admin", description: "Enterprise Portal", tech: ["React", "TypeScript"] },
    { name: "KFund", description: "Financial Management", tech: ["React", "Node.js"] }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="min-h-screen relative overflow-hidden  py-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 about-content-item">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gray-800/50 border border-gray-700/50 mb-6 backdrop-blur-sm">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">React.js Architect</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
            Crafting Digital
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Excellence</span>
          </h2>
          <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Transforming complex business requirements into scalable, high-performance web applications
          </p>
        </div>

        <div className="grid-12-cols items-center gap-16">
          {/* Left Column - Content */}
          <div ref={contentRef} className="xl:col-span-7 space-y-8">
            {/* Introduction */}
            <div className="about-content-item">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Hello, I'm <span className="text-cyan-400">Zahid Hussain</span>
              </h3>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>
                  I'm a passionate <span className="text-cyan-400 font-semibold">React.js Architect</span> with 3+ years of expertise in building enterprise-grade applications that scale and perform.
                </p>
                <p>
                  My journey spans from creating modern UI landing pages to architecting complex SaaS platforms like <span className="text-cyan-400">Lusso Labs</span> and <span className="text-cyan-400">Sharek KFU</span>, handling everything from frontend interfaces to backend integrations.
                </p>
                <p>
                  I believe in <span className="text-cyan-400">clean code, scalable architecture, and user-centric design</span> to create solutions that deliver real business value and exceptional user experiences.
                </p>
              </div>
            </div>

            {/* Expertise Areas */}
            <div className="about-content-item">
              <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
                Technology Arsenal
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {expertise.map((area, index) => (
                  <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300 group">
                    <h5 className="text-cyan-400 font-bold text-lg mb-4 group-hover:translate-x-2 transition-transform duration-300">
                      {area.category}
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {area.items.map((item, itemIndex) => (
                        <span 
                          key={itemIndex}
                          className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300 border border-gray-600/50 hover:bg-cyan-400/10 hover:border-cyan-400/30 hover:text-cyan-300 transition-all duration-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Projects */}
            <div className="about-content-item">
              <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full"></div>
                Featured Enterprise Projects
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {featuredProjects.map((project, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-purple-400/30 transition-all duration-300 group">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="text-white font-bold text-lg">{project.name}</h5>
                      <span className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full">
                        Enterprise
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="text-xs text-gray-500 bg-gray-700/50 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div ref={statsRef} className="about-content-item">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: 3, label: "Years Experience", icon: "🚀" },
                  { value: 50, label: "Projects Completed", icon: "💼" },
                  { value: 10, label: "Enterprise Clients", icon: "🏢" },
                  { value: 99, label: "Success Rate", icon: "🎯" }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-500 group">
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                      <span className="stat-number" data-value={stat.value}>0</span>+
                    </div>
                    <div className="text-gray-400 text-sm font-medium group-hover:text-gray-300 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Image & Personal Info */}
          <div className="xl:col-span-5">
            <div className="relative">
              {/* Main Image Container */}
              <div 
                ref={imageRef}
                className="relative rounded-3xl overflow-hidden group"
              >
                {/* Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Image */}
                <div className="relative rounded-3xl overflow-hidden bg-gray-800 m-1">
                  <img 
                    src="/images/pro.jpeg" 
                    alt="Zahid Hussain - React.js Architect"
                    className="w-full h-96 object-cover rounded-3xl transform group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent rounded-3xl"></div>
                  
                  {/* Floating Info Cards */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-700/50">
                      <h4 className="text-white font-bold text-lg mb-1">Zahid Hussain</h4>
                      <p className="text-cyan-400 text-sm mb-2">React.js Architect</p>
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <span>3+ Years Experience</span>
                        <span>•</span>
                        <span>Frontend Specialist</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-2xl rotate-12 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center">
                <span className="text-white font-bold text-sm">🏗️ Architect</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-cyan-500/20 rounded-2xl -rotate-12 backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center">
                <span className="text-white font-bold text-sm">⚡ Fast</span>
              </div>
            </div>

            {/* Quick Info */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 about-content-item">
              {[
                { icon: "📍", label: "Focus", value: "React.js & Next.js" },
                { icon: "💼", label: "Status", value: "Open for Projects" },
                { icon: "🎯", label: "Specialty", value: "SaaS Platforms" },
                { icon: "🚀", label: "Level", value: "Senior Architect" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300 group">
                  <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">{item.label}</div>
                    <div className="text-white font-semibold">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Philosophy Card */}
            <div className="mt-8 about-content-item">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-cyan-400/20 backdrop-blur-sm">
                <div className="text-cyan-400 text-lg font-bold mb-3">🎯 Professional Philosophy</div>
                <p className="text-gray-300 text-sm italic">
                  "Excellence in software development isn't just about writing code—it's about crafting solutions that scale, perform, and delight users while maintaining architectural integrity."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 about-content-item">
          <div className="inline-flex flex-col sm:flex-row gap-6 items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl hover:scale-105 transform transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40">
              Download Resume
            </button>
            <button className="px-8 py-4 border border-cyan-400/30 text-cyan-400 font-bold rounded-2xl hover:bg-cyan-400/10 hover:scale-105 transform transition-all duration-300">
              View All Projects
            </button>
            <button className="px-8 py-4 border border-purple-400/30 text-purple-400 font-bold rounded-2xl hover:bg-purple-400/10 hover:scale-105 transform transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;