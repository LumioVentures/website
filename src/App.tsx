import React, { useState, useEffect } from 'react';
import { ArrowRight, Upload, Mail, Calendar, Github, Linkedin, Twitter } from 'lucide-react';
import ParticleBackground from './components/ParticleBackground';
import TimelineArrow from './components/TimelineArrow';

function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [email, setEmail] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    pitchDeck: null as File | null
  });

  const timelineSteps = [
    { title: "Pitch to Lumio", description: "Submit your idea and pitch deck" },
    { title: "Investment Decision", description: "We evaluate and decide within 48 hours" },
    { title: "Design Review", description: "Collaborative design and architecture planning" },
    { title: "2-Week Build Sprint", description: "Our team builds your MVP" },
    { title: "Delivery", description: "Launch-ready product delivered" },
    { title: "VC Intros + Growth Support", description: "Connect with our network for scaling" }
  ];

  const teamMembers = [
    {
      name: "Pratyush Muthukumar",
      role: "Founding Managing Partner",
      image: "/pratyush-muthukumar.jpeg",
      description: "NVIDIA GenAI Data Science. Ex-Tesla, NASA JPL. United Nations AI For Good Speaker / Panelist. MS Computer Science (AI Specialization) from Stanford."
    },
    {
      name: "Janmesh Kalra",
      role: "Founding Managing Partner",
      image: "/janmesh-kalra.jpeg",
      description: "NVIDIA GenAI Engineering. Previously ML Research at NASA JPL and AI Software Engineering at Northrup Grumman. MS Data Science from UC Berkeley."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % timelineSteps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen text-white font-inter relative overflow-x-hidden">
      <ParticleBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/20 backdrop-blur-xl border-b border-corporate-blue/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="/lumio-brand-logo-simple.png" alt="Lumio Ventures" className="h-12 w-12 animate-glow" />
              <span className="text-xl font-bold font-inter tracking-wide text-slate-100">
                LUMIO VENTURES
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'process', 'about', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="hover:text-corporate-blue transition-all duration-300 font-inter font-medium tracking-wide uppercase text-sm hover:glow-text"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-corporate-blue/5 via-transparent to-accent-blue/5"></div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <div className="mb-12 animate-float-hero mt-16">
            <img 
              src="/lumio-brand-logo-no-bg.png" 
              alt="Lumio Ventures" 
              className="h-48 w-48 mx-auto mb-8 animate-glow-pulse" 
            />
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black mb-8 font-inter tracking-wide">
            <span className="bg-gradient-to-r from-corporate-blue via-accent-blue to-corporate-blue bg-clip-text text-transparent animate-gradient-shift">
              LUMIO
            </span>
            <br />
            <span className="bg-gradient-to-r from-accent-blue via-corporate-blue to-accent-blue bg-clip-text text-transparent animate-gradient-shift-delayed">
              VENTURES
            </span>
          </h1>
          
          <div className="space-y-6 mb-16">
            <p className="text-3xl md:text-5xl font-bold font-inter text-white animate-pulse-glow">
              Our investment is your MVP.
            </p>
            <p className="text-xl md:text-3xl font-inter font-light text-slate-300 tracking-wide">
              We don't write checks. We write code.
            </p>
          </div>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="group relative px-12 py-5 bg-gradient-to-r from-corporate-blue to-accent-blue 
            hover:from-corporate-blue/90 hover:to-accent-blue/90 rounded-none font-semibold text-xl font-inter 
            tracking-wide uppercase transition-all duration-300 transform hover:scale-105 
            hover:shadow-2xl hover:shadow-corporate-blue/20 border border-corporate-blue/50 hover:border-corporate-blue
            animate-glow-button"
            style={{
              clipPath: 'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)'
            }}
          >
            <span className="relative z-10">Get Started</span>
            <ArrowRight className="inline-block ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-corporate-blue/20 to-accent-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="process" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black mb-8 font-inter tracking-wide">
              <span className="bg-gradient-to-r from-corporate-blue to-accent-blue bg-clip-text text-transparent">
                OUR PROCESS
              </span>
            </h2>
            <p className="text-2xl text-slate-400 font-inter tracking-wide">
              From pitch to product in weeks, not months
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
            {timelineSteps.map((step, index) => (
              <TimelineArrow
                key={index}
                title={step.title}
                description={step.description}
                isActive={activeStep === index}
                index={index}
                onHover={() => setActiveStep(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-corporate-blue/3 to-accent-blue/3"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-6xl font-black mb-8 font-inter tracking-wide">
            <span className="bg-gradient-to-r from-corporate-blue to-accent-blue bg-clip-text text-transparent">
              STAY IN THE LOOP
            </span>
          </h2>
          <p className="text-xl text-slate-400 mb-16 font-inter tracking-wide">
            Get updates on our latest builds and investment opportunities
          </p>
          
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-6 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-8 py-4 bg-slate-900/50 border border-corporate-blue/30 
              focus:border-corporate-blue focus:outline-none text-white placeholder-slate-400 
              font-inter tracking-wide backdrop-blur-sm transition-all duration-300
              hover:border-corporate-blue/60 focus:shadow-lg focus:shadow-corporate-blue/15"
              style={{
                clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)'
              }}
              required
            />
            <button
              type="submit"
              className="px-10 py-4 bg-gradient-to-r from-corporate-blue to-accent-blue 
              hover:from-corporate-blue/90 hover:to-accent-blue/90 font-semibold font-inter tracking-wide 
              uppercase transition-all duration-300 transform hover:scale-105 border 
              border-corporate-blue/50 hover:border-corporate-blue hover:shadow-lg hover:shadow-corporate-blue/20"
              style={{
                clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)'
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black mb-8 font-inter tracking-wide">
              <span className="bg-gradient-to-r from-corporate-blue to-accent-blue bg-clip-text text-transparent">
                BUILT BY BUILDERS
              </span>
            </h2>
            <p className="text-xl text-slate-400 font-inter tracking-wide">
              Meet the team turning ideas into reality
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden bg-slate-900/30 backdrop-blur-sm 
                border border-slate-700/50 hover:border-corporate-blue/60 transition-all duration-500
                hover:shadow-2xl hover:shadow-corporate-blue/15 animate-float-card"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
                }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 
                    transition-all duration-700 transform group-hover:scale-110"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent 
                opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl font-bold mb-2 font-inter tracking-wide text-slate-100">
                      {member.name}
                    </h3>
                    <p className="text-corporate-blue font-semibold mb-4 font-inter tracking-wide uppercase">
                      {member.role}
                    </p>
                    <p className="text-sm text-slate-300 font-inter leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
                
                <div className="p-8 group-hover:opacity-0 transition-opacity duration-500">
                  <h3 className="text-2xl font-bold mb-2 font-inter tracking-wide text-slate-100">
                    {member.name}
                  </h3>
                  <p className="text-corporate-blue font-semibold font-inter tracking-wide uppercase">
                    {member.role}
                  </p>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-corporate-blue/30 
                transition-all duration-500 pointer-events-none"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
                }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-corporate-blue/3 to-accent-blue/5"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black mb-8 font-inter tracking-wide">
              <span className="bg-gradient-to-r from-corporate-blue to-accent-blue bg-clip-text text-transparent">
                LET'S BUILD
              </span>
            </h2>
            <p className="text-xl text-slate-400 font-inter tracking-wide">
              Ready to turn your idea into reality? Let's talk.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <form onSubmit={handleSubmit} className="space-y-8">
              {[
                { placeholder: "Your Name", value: formData.name, key: 'name', type: 'text' },
                { placeholder: "Email Address", value: formData.email, key: 'email', type: 'email' },
                { placeholder: "Company Name", value: formData.company, key: 'company', type: 'text' }
              ].map((field, index) => (
                <div key={field.key}>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={field.value}
                    onChange={(e) => setFormData({...formData, [field.key]: e.target.value})}
                    className="w-full px-8 py-5 bg-slate-900/50 border border-corporate-blue/30 
                    focus:border-corporate-blue focus:outline-none text-white placeholder-slate-400 
                    font-inter tracking-wide backdrop-blur-sm transition-all duration-300
                    hover:border-corporate-blue/60 focus:shadow-lg focus:shadow-corporate-blue/15"
                    style={{
                      clipPath: 'polygon(12px 0, 100% 0, calc(100% - 12px) 100%, 0 100%)'
                    }}
                    required={field.type === 'email' || field.key === 'name'}
                  />
                </div>
              ))}
              
              <div>
                <label className="block w-full px-8 py-5 bg-slate-900/50 border border-corporate-blue/30 
                hover:border-corporate-blue/60 cursor-pointer transition-all duration-300 backdrop-blur-sm
                hover:shadow-lg hover:shadow-corporate-blue/10"
                style={{
                  clipPath: 'polygon(12px 0, 100% 0, calc(100% - 12px) 100%, 0 100%)'
                }}>
                  <div className="flex items-center space-x-4">
                    <img src="/lumio-brand-logo-no-bg.png" alt="Lumio Ventures" className="h-14 w-14 animate-glow" />
                    <span className="text-2xl font-bold font-inter tracking-wide text-slate-100">
                      LUMIO VENTURES
                    </span>
                  </div>
                  <input
                    type="file"
                    accept=".pdf,.ppt,.pptx"
                    onChange={(e) => setFormData({...formData, pitchDeck: e.target.files?.[0] || null})}
                    className="hidden"
                  />
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full py-5 bg-gradient-to-r from-corporate-blue to-accent-blue 
                hover:from-corporate-blue/90 hover:to-accent-blue/90 font-semibold font-inter tracking-wide 
                uppercase transition-all duration-300 transform hover:scale-105 border 
                border-corporate-blue/50 hover:border-corporate-blue hover:shadow-lg hover:shadow-corporate-blue/20"
                style={{
                  clipPath: 'polygon(12px 0, 100% 0, calc(100% - 12px) 100%, 0 100%)'
                }}
              >
                Submit
              </button>
            </form>

            <div className="space-y-8">
              {[
                {
                  icon: Calendar,
                  title: "Schedule a Call",
                  description: "Book a 30-minute discovery call to discuss your project",
                  link: "https://calendly.com/lumio-ventures",
                  linkText: "Book Now"
                },
                {
                  icon: Mail,
                  title: "Direct Contact",
                  description: "Prefer email? Reach out directly",
                  link: "mailto:hello@lumioventures.com",
                  linkText: "hello@lumioventures.com"
                }
              ].map((item, index) => (
                <div key={index} className="p-8 bg-slate-900/30 backdrop-blur-sm border border-slate-700/50 
                hover:border-corporate-blue/60 transition-all duration-500 hover:shadow-lg hover:shadow-corporate-blue/15"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))'
                }}>
                  <item.icon className="text-corporate-blue mb-6" size={36} />
                  <h3 className="text-2xl font-bold mb-3 font-inter tracking-wide text-slate-100">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 mb-6 font-inter tracking-wide leading-relaxed">
                    {item.description}
                  </p>
                  <a
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center text-corporate-blue hover:text-accent-blue 
                    font-semibold font-inter tracking-wide transition-colors duration-300 hover:glow-text"
                  >
                    {item.linkText} <ArrowRight className="ml-2" size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-corporate-blue/20 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-8 md:mb-0">
              <img src="/lumio-brand-logo-no-bg.png" alt="Lumio Ventures" className="h-10 w-10 animate-glow" />
              <span className="text-2xl font-bold font-inter tracking-wide text-slate-100">
                LUMIO VENTURES
              </span>
            </div>
            <div className="flex space-x-8">
              {[Twitter, Linkedin, Github].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-slate-400 hover:text-corporate-blue transition-all duration-300 
                  transform hover:scale-110 hover:glow-icon"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-400 font-inter tracking-wide">
            <p>&copy; 2024 Lumio Ventures. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;