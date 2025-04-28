"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight, Briefcase, ChevronDown, Code, Cog, Download, Github, GridIcon, HomeIcon, Instagram, LayoutGrid, LayoutTemplate, Linkedin, Mail, MapIcon, MenuIcon, Paintbrush, Phone, Plane, Send, User, Users } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import 'animate.css';
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

  const projects = [
    {
      id: 1,
      title: "Nebula Dashboard",
      category: "UI/UX Design",
      image: "https://readdy.ai/api/search-image?query=3D%20UI%20dashboard%20visualization%20with%20dark%20purple%20theme%2C%20futuristic%20interface%20with%20glowing%20elements%2C%20data%20visualization%20charts%20and%20graphs%2C%20high%20detail%20quality%2C%20clean%20modern%20look%2C%20dark%20background%20with%20purple%20accents&width=600&height=450&seq=1&orientation=landscape",
      description: "A futuristic dashboard interface with advanced data visualization capabilities."
    },
    {
      id: 2,
      title: "Quantum Gallery",
      category: "Web Development",
      image: "https://readdy.ai/api/search-image?query=3D%20art%20gallery%20website%20mockup%20on%20laptop%20screen%2C%20modern%20minimalist%20design%20with%20purple%20accent%20colors%2C%20portfolio%20layout%20with%20image%20grid%2C%20interactive%20elements%2C%20high%20detail%20quality%2C%20professional%20web%20design%2C%20dark%20theme&width=600&height=450&seq=2&orientation=landscape",
      description: "Interactive art gallery platform with immersive viewing experience."
    },
    {
      id: 3,
      title: "Pulse App",
      category: "Mobile Design",
      image: "https://readdy.ai/api/search-image?query=3D%20mobile%20app%20interface%20for%20health%20tracking%2C%20dark%20purple%20theme%20with%20neon%20accents%2C%20futuristic%20UI%20design%20on%20smartphone%20screen%2C%20health%20metrics%20visualization%2C%20heart%20rate%20monitor%2C%20clean%20modern%20design%2C%20high%20detail%20quality&width=600&height=450&seq=3&orientation=landscape",
      description: "Health tracking application with real-time biometric monitoring."
    },
    {
      id: 4,
      title: "Cosmos E-commerce",
      category: "Web Development",
      image: "https://readdy.ai/api/search-image?query=3D%20e-commerce%20website%20mockup%20with%20space%20theme%20products%2C%20dark%20purple%20interface%20with%20glowing%20elements%2C%20product%20grid%20layout%2C%20shopping%20cart%20interface%2C%20modern%20web%20design%2C%20high%20detail%20quality%2C%20professional%20UI%2C%20dark%20theme&width=600&height=450&seq=4&orientation=landscape",
      description: "Space-themed online store with immersive shopping experience."
    },
    {
      id: 5,
      title: "Synth Wave",
      category: "Sound Design",
      image: "https://readdy.ai/api/search-image?query=3D%20audio%20visualization%20interface%20with%20purple%20and%20blue%20neon%20waves%2C%20music%20production%20software%20mockup%2C%20sound%20waveforms%2C%20equalizer%20display%2C%20futuristic%20audio%20controls%2C%20dark%20background%20with%20glowing%20elements%2C%20high%20detail%20quality&width=600&height=450&seq=5&orientation=landscape",
      description: "Audio visualization platform with interactive sound manipulation."
    },
    {
      id: 6,
      title: "Neural Network",
      category: "AI Project",
      image: "https://readdy.ai/api/search-image?query=3D%20visualization%20of%20neural%20network%20with%20glowing%20purple%20connections%2C%20futuristic%20AI%20interface%2C%20data%20nodes%20and%20pathways%2C%20abstract%20representation%20of%20machine%20learning%2C%20dark%20background%20with%20neon%20elements%2C%20high%20detail%20quality%2C%20technological%20aesthetic&width=600&height=450&seq=6&orientation=landscape",
      description: "Artificial intelligence visualization with interactive learning modules."
    }
  ];

  const skills = [
    { name: "HTML & CSS", level: 95 },
    { name: "JavaScript (ES6+)", level: 90 },
    { name: "TypeScript", level: 80 },
    { name: "React.js & Next.js", level: 85 },
    { name: "TailwindCSS & ShadCN", level: 88 },
    { name: "UI Design (Basic)", level: 20 },
    { name: "Team Leadership", level: 85 }
  ];

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
      title: "UI Development",
      icon: <Paintbrush />,
      description: "Creating clean, user-friendly, and accessible designs using TailwindCSS and ShadCN UI components."
    },
    {
      title: "Team Leadership",
      icon: <Users />,
      description: "Leading development teams effectively by managing tasks, maintaining code quality, and promoting collaboration."
    }
  ];

  const testimonials = [
    {
      name: "Bekmirzo Ismoilov",
      position: "Frontend Developer",
      company: "NextGen Solutions",
      avatar: "https://readdy.ai/api/search-image?query=professional%20headshot%20of%20young%20frontend%20developer%2C%20male%2C%20uzbek%2C%20smart%20casual%2C%20confident%2C%20neutral%20background%2C%20professional%20lighting&width=100&height=100&seq=5&orientation=squarish",
      text: "Working with Abdulaziz was incredibly efficient. His clean code and attention to responsive design took our project to a much higher level."
    },
    {
      name: "Dilshod Rahimov",
      position: "Project Manager",
      company: "Digital Bridge",
      avatar: "https://readdy.ai/api/search-image?query=professional%20headshot%20of%20project%20manager%2C%20male%2C%20uzbek%2C%20business%20casual%2C%20friendly%20smile%2C%20neutral%20background%2C%20professional%20lighting&width=100&height=100&seq=6&orientation=squarish",
      text: "The portfolio website designed by Abdulaziz exceeded our expectations in both design and functionality. Every detail showed his strong sense of precision."
    },
    {
      name: "Aziza Karimova",
      position: "Startup Founder",
      company: "Innovate Hub",
      avatar: "https://readdy.ai/api/search-image?query=professional%20headshot%20of%20startup%20founder%2C%20female%2C%20uzbek%2C%20elegant%2C%20young%20professional%2C%20neutral%20background%2C%20high%20quality%2C%20realistic%20portrait&width=100&height=100&seq=7&orientation=squarish",
      text: "Thanks to Abdulaziz, our platform stood out with unique animations and engaging interactive elements. His creative approach impressed us a lot."
    }
  ];

  const socialLinks = [
    { icon: <Github />, link: '' },
    { icon: <Linkedin />, link: '' },
    { icon: <Instagram />, link: '' },
    { icon: <Mail />, link: '' },
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
              <span className="block animate__animated animate__fadeIn animate__delay-2s">Front-end Developer</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 animate__animated animate__fadeIn animate__delay-0.1s">Abdulaziz Raxmonaliyev</span>
            </h1>
            <p className="max-w-xl mx-auto mb-10 text-lg text-purple-100/80 animate__animated animate__fadeIn animate__delay-3s">
              I am a frontend developer who designs and develops immersive digital experiences by blending creativity with cutting-edge technology. My expertise lies in creating interactive interfaces and motion design.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center animate__animated animate__fadeIn animate__delay-3s">
              <Button onClick={() => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })} className="bg-gradient-to-r duration-500 transition-all from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white cursor-pointer !rounded-button ">
                View My Work <ArrowRight />
              </Button>

              <Button variant="outline" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} className="border-purple-400 text-purple-500 hover:bg-purple-800/30 hover:text-white cursor-pointer !rounded-button">
                Contact Me
              </Button>
            </div>
            <div className="flex justify-center w-full animate-bounce text-purple-300 items-end mt-10 animate__animated animate__fadeIn animate__delay-7s">
              <ChevronDown className='text-purple-300' size={20} />
            </div>
          </div>
        </section>

        <section id="work" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
              <p className="text-purple-200/70 max-w-2xl mx-auto">
                A selection of my recent work spanning various industries and technologies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card key={project.id} className="overflow-hidden bg-purple-900/30 backdrop-blur-md border-purple-700/50 hover:border-purple-500/70 transition-all duration-300 group cursor-pointer">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-950 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div>
                        <Badge className="mb-2 bg-purple-500/80 hover:bg-purple-500 text-xs">{project.category}</Badge>
                        <h3 className="text-lg font-medium text-white">{project.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium mb-1 text-pink-200">{project.title}</h3>
                    <p className="text-sm text-purple-200/70 mb-3">{project.description}</p>
                    <div className="flex justify-between items-center">
                      <Badge variant="outline" className="text-xs border-purple-500/50 text-purple-300">{project.category}</Badge>
                      <Button variant="ghost" size="sm" className="text-purple-300 hover:text-white hover:bg-purple-800/50 cursor-pointer !rounded-button">
                        <span className="mr-1">View</span>
                        <ArrowRight />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button onClick={() => router.push('projects')} className="bg-purple-800/50 hover:bg-purple-700/70 border border-purple-600/50 cursor-pointer !rounded-button">
                View All Projects
                <LayoutGrid />
              </Button>
            </div>
          </div>
        </section>

        {/* About section */}
        <section id="about" className="py-20 px-6 bg-purple-950/30 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">About Me</h2>

                <p className="text-purple-200/80 mb-4">
                  I'm a passionate Frontend Developer with a strong foundation in HTML, CSS, JavaScript, TypeScript, React, and Next.js. I love building clean, fast, and user-friendly web applications that deliver great digital experiences.
                </p>
                <p className="text-purple-200/80 mb-6">
                  With experience in team leadership and a focus on both code quality and design aesthetics, I bring a balanced approach to every project. I specialize in crafting responsive interfaces, using modern libraries like TailwindCSS, ShadCN UI, and always striving to blend creativity with functionality.
                </p>
                <div className="mb-8">
                  <h3 className="text-xl font-medium mb-4">My Skills</h3>
                  <div className="space-y-4">
                    {skills.map((skill: { name: string; level: number }) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">{skill.name}</span>
                          <span className="text-sm text-purple-300">{skill.level}%</span>
                        </div>
                        <div className="w-full h-2 bg-purple-900/50 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="bg-purple-800/50 hover:bg-purple-700/70 border border-purple-600/50 cursor-pointer !rounded-button">
                  <Link href="/rezume.pdf" download className="flex items-center">
                    Download Resume
                    <Download className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>

              <div className="relative">
                <div className="relative z-10 rounded-lg overflow-hidden border border-purple-500/30 shadow-xl shadow-purple-900/30">
                  <img
                    src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20creative%20designer%20in%20studio%2C%20dramatic%20lighting%20with%20purple%20accent%20lights%2C%20artistic%20atmosphere%2C%20high%20quality%20professional%20photography%2C%20modern%20creative%20workspace%20background%2C%20stylish%20individual%20with%20confident%20pose&width=600&height=800&seq=10&orientation=portrait"
                    alt="Alex Portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-purple-500/50 rounded-lg z-0"></div>
                <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-pink-500/50 rounded-lg z-0"></div>
              </div>
            </div>
          </div>
        </section>

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
        <section className="py-20 px-6 bg-purple-950/30 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
              <p className="text-purple-200/70 max-w-2xl mx-auto">
                What clients are saying about working with me.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-purple-900/20 backdrop-blur-md border-purple-700/30 hover:border-purple-500/50 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <Avatar className="mr-3 border-2 border-purple-500">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium text-purple-200">{testimonial.name}</h4>
                        <p className="text-xs text-purple-300">{testimonial.position}, {testimonial.company}</p>
                      </div>
                    </div>
                    <p className="text-sm text-purple-200/80 italic">"{testimonial.text}"</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

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