"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowDown, ArrowRight, Briefcase, ChevronDown, Code, Cog, Github, HomeIcon, Instagram, LayoutTemplate, Linkedin, Mail, MapIcon, Paintbrush, Phone, Send, User, Users } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import 'animate.css';
import Projects from '@/modules/Projects';
import Testimonals from '@/modules/Testimonals';
import About from '@/modules/About';
const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState("work");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const particlesRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setCursorVisible(true);
    };

    const handleMouseLeave = () => {
      setCursorVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Create particles
    if (particlesRef.current) {
      for (let i = 0; i < 50; i++) {
        createParticle();
      }
    }

    // Text reveal animation
    if (heroRef.current) {
      const text = heroRef.current.querySelector('h1');
      if (text) {
        text.classList.add('animate-reveal');
      }
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const createParticle = (): void => {
    if (!particlesRef.current) return;

    const particle = document.createElement('div');
    particle.classList.add('particle');
    const size: number = Math.random() * 5 + 2;
    const posX: number = Math.random() * window.innerWidth;
    const posY: number = Math.random() * window.innerHeight;
    const duration: number = Math.random() * 20 + 10;
    const delay: number = Math.random() * 5;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}px`;
    particle.style.top = `${posY}px`;
    particle.style.opacity = (Math.random() * 0.5 + 0.3).toString();
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;

    particlesRef.current.appendChild(particle);

    // Remove particle after animation completes
    setTimeout(() => {
      if (particlesRef.current && particlesRef.current.contains(particle)) {
        particlesRef.current.removeChild(particle);
        createParticle(); // Create a new particle to replace
      }
    }, (duration + delay) * 1000);
  };

  const services = [
    {
      title: "Frontend Development",
      icon: <Code />,
      description: "Building fast, responsive, and dynamic web applications using modern frameworks like React and Next.js."
    },
    {
      title: "TypeScript Development",
      icon: <LayoutTemplate />,
      description: "Writing scalable and maintainable code with TypeScript to build robust web solutions."
    },
   {
    title: "UI Implementation",
    icon: <Paintbrush />,
    description:
      "Translating ready-made designs into pixel-perfect, responsive layouts using TailwindCSS and ShadCN UI.",
  },
  {
    title: "Collaboration",
    icon: <Users />,
    description:
      "Working efficiently in teams, contributing to clean codebases, and following best practices for performance and maintainability.",
  },
  ];

  const socialLinks = [
    { icon: <Github />, link: 'https://github.com/rahmonaliyev2007' },
    { icon: <Linkedin />, link: '' },
    { icon: <Instagram />, link: 'https://instagram.com/rahmonali_ev' },
    { icon: <Mail />, link: 'mailto:rahmonaliyev2007@icloud.com' },
  ];

  const sendUserInfoToTelegram = async ({ name, surname, email, phone, message }: { name: string, surname: string, email: string, phone: string, message: string }) => {
    try {
      await fetch(`https://api.telegram.org/bot7696673947:AAEj2CAlIWe-9IHkHNKbM-D1UUwPNpCmKwA/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: 7498582082,
          text: `<b>You have a new inquiry</b>
          
<b>Client:</b> ${name} ${surname}
          
<b>Email:</b> ${email}
          
${phone ? `<b>Phone Number:</b> ${phone}` : ""}
          
<b>Message:</b> ${message}`,
          parse_mode: 'HTML',
        }),
      });
    } catch (telegramErr) {
      console.error(telegramErr);
    }
  };

  const [formData, setFormData] = useState({ name: "", surname: "", email: "", phone: "", message: "", });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await sendUserInfoToTelegram(formData);
    setFormData({ name: "", surname: "", email: "", phone: "", message: "" });
    alert("Message sent successfully!");
  };
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden text-white">
      <div className="fixed inset-0 bg-gradient-to-br from-purple-950 via-purple-900 to-purple-800 z-0"></div>
      <div ref={particlesRef} className="fixed inset-0 z-0 overflow-hidden pointer-events-none"></div>
      <div className={`fixed rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px`, width: '40px', height: '40px', backgroundColor: 'white', transform: 'translate(-50%, -50%)' }} />

      <div className="relative z-10">
        <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-4 backdrop-blur-md bg-purple-950/30">
          <div className="flex items-center justify-between max-sm:justify-center max-w-6xl mx-auto">
            <div className="text-xl font-bold tracking-wider">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">RAXMONALIYEV.DEV</span>
            </div>
            <div className="hidden sm:flex space-x-8">
              {['Home', 'Work', 'About', 'Services', 'Contact'].map((item) => (
                <button key={item} onClick={() => document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })} className="relative overflow-hidden group cursor-pointer text-sm font-medium tracking-wide" >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-300 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

          </div>
        </nav>

        <section id="home" ref={heroRef} className="flex flex-col items-center justify-center min-h-screen px-6 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl animate__animated animate__fadeIn animate__delay-2s">
              <span className="block animate__animated animate__fadeIn animate__delay-2s">Frontend Developer</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 animate__animated animate__fadeIn animate__delay-0.1s" style={{fontFamily:"serif"}}>Abdulaziz Raxmonaliyev</span>
            </h1>
            <p className="max-w-xl mx-auto mb-10 text-lg text-purple-100/80 animate__animated animate__fadeIn animate__delay-3s">
              I’m Abdulaziz, a frontend developer focused on building modern and responsive web applications. Check out my projects below or get in touch to collaborate. 
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center animate__animated animate__fadeIn animate__delay-3s">
              <Button onClick={() => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })} className="bg-gradient-to-r duration-500 transition-all from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white cursor-pointer !rounded-button ">
                View My Works <ArrowDown />
              </Button>

              <Button variant="outline" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} className="border-purple-400 text-purple-500 hover:bg-purple-800/30 hover:text-white cursor-pointer !rounded-button">
                Get in Touch <Mail />
              </Button>
            </div>
            <div className="flex justify-center w-full !animate-bounce text-purple-300 items-end mt-10 animate__animated animate__fadeIn animate__delay-3s">
              <ChevronDown className='text-purple-300' size={20} />
            </div>
          </div>
        </section>

          <Projects/>

        {/* About section */}
        <About/>

        {/* Services section */}
        <section id="services" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold mb-4">My Services</h2>
              <p className="text-purple-200/70 max-w-2xl mx-auto">
                I offer a range of creative services to help bring your digital projects to life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="bg-purple-900/20 backdrop-blur-md border-purple-700/30 hover:border-purple-500/50 transition-all duration-300 group cursor-pointer">
                  <div className="py-6 px-2 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 text-purple-200 rounded-full text-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-medium mb-3 text-purple-200">{service.title}</h3>
                    <p className="text-sm text-purple-200/70">{service.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials section */}
       <Testimonals/>

        {/* Contact section */}
        <section id="contact" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
              <p className="text-purple-200/70 max-w-2xl mx-auto">
                Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
              </p>
            </div>

            <Card className="bg-purple-900/20 backdrop-blur-md border-purple-700/30">
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-medium mb-4 text-pink-100/80">Contact Information</h3>
                    <div className="space-y-4 mb-6">
                      <Link href={'mailto:rahmonaliyev2007@icloud.com'} className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-purple-800/50 flex items-center justify-center mr-3 text-purple-300">
                          <Mail />
                        </div>
                        <div>
                          <p className="text-sm text-purple-300">Email</p>
                          <p className="font-medium text-pink-100/80">rahmonaliyev2007@icloud.com</p>
                        </div>
                      </Link>
                      <Link href={'tel:+998908166707'} className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-purple-800/50 flex items-center justify-center mr-3 text-purple-300">
                          <Phone />
                        </div>
                        <div>
                          <p className="text-sm text-purple-300">Phone</p>
                          <p className="font-medium text-pink-100/80">+998 90 816 6707</p>
                        </div>
                      </Link>
                      <Link href="https://maps.google.com/?q=Tashkent, Uzbekistan" target="_blank" className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-purple-800/50 flex items-center justify-center mr-3 text-purple-300">
                          <MapIcon />
                        </div>
                        <div>
                          <p className="text-sm text-purple-300">Location</p>
                          <p className="font-medium text-pink-100/80">Tashkent , Uzbekistan</p>
                        </div>
                      </Link>
                    </div>

                    <h4 className="text-lg font-medium mb-3 text-pink-100/80">Connect With Me</h4>
                    <div className="flex space-x-4">
                      {socialLinks.map((item, index) => (
                        <Link key={index} href={item.link} className="w-10 h-10 rounded-full text-purple-300 bg-purple-800/50 hover:bg-purple-700 flex items-center justify-center transition-colors duration-300 cursor-pointer" >
                          {item.icon}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-4 text-pink-100/80">Send Me a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Input value={formData.name} onChange={handleChange} required={true} name='name' type="text" placeholder="Your Name" className="bg-purple-900/30 border-purple-700/50 focus:border-purple-500 text-white placeholder:text-purple-400/70" />
                        </div>
                        <div>
                          <Input value={formData.surname} onChange={handleChange} required={true} name='surname' type="text" placeholder="Your Surname" className="bg-purple-900/30 border-purple-700/50 focus:border-purple-500 text-white placeholder:text-purple-400/70" />
                        </div>
                      </div>
                      <div>
                        <Input value={formData.email} onChange={handleChange} required={true} name='email' type="email" placeholder="Your Email" className="bg-purple-900/30 border-purple-700/50 focus:border-purple-500 text-white placeholder:text-purple-400/70" />
                      </div>
                      <div>
                        <Input value={formData.phone} onChange={handleChange} type="tel" name='phone' placeholder="Your Phone number (optional)" className="bg-purple-900/30 border-purple-700/50 focus:border-purple-500 text-white placeholder:text-purple-400/70" />
                      </div>
                      <div>
                        <Textarea value={formData.message} onChange={handleChange} required={true} name='message' placeholder="Your Message" rows={4} className="bg-purple-900/30 border-purple-700/50 focus:border-purple-500 text-white placeholder:text-purple-400/70" />
                      </div>
                      <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white cursor-pointer !rounded-button">
                        Send Message
                        <Send />
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-purple-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <div className="text-xl font-bold tracking-wider">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">RAXMONALIYEV.DEV</span>
                </div>
              </div>
              <div className="text-center md:text-right">
                <p className="text-sm text-purple-300/70">
                  © {new Date().getFullYear()} RAXMONALIYEV.DEV All rights reserved.
                </p>
                <p className="text-xs text-purple-400/50 mt-1">
                  Bulit by <i className="fas fa-heart text-pink-500"></i> Abdulaziz
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Mobile navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-purple-950/80 backdrop-blur-md border-t border-purple-800/50">
        <div className="grid grid-cols-5 h-16">
          {[
            { name: 'Home', icon: <HomeIcon /> },
            { name: 'Work', icon: <Briefcase /> },
            { name: 'About', icon: <User /> },
            { name: 'Services', icon: <Cog /> },
            { name: 'Contact', icon: <Mail /> }
          ].map((item) => (
            <button key={item.name} onClick={() => document.querySelector(`#${item.name.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })} className="flex flex-col items-center justify-center cursor-pointer">
              {item.icon} <span className="text-xs">{item.name}</span>
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(720deg);
            opacity: 0;
          }
        }
        
        .particle {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(to right, rgba(149, 76, 233, 0.5), rgba(193, 76, 233, 0.5));
          pointer-events: none;
          animation: float linear infinite;
        }
        
        .animate-reveal {
          animation: reveal 1.5s ease forwards;
          opacity: 0;
        }
        
        @keyframes reveal {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default App;