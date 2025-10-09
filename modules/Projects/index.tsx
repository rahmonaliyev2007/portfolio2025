import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Github, LayoutGrid } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

 const projects = [
    {
      id: 1,
      title: "Greenshop",
      category: "E-Commerce",
      image: "https://i.postimg.cc/sDKJSrv5/temp-Imageo-Q7-W0-A.avif",
      description: "Gul do'konlari uchun onlayn savdo platformasi.",
      github: "https://github.com/rahmonaliyev2007/greenshop-react-ts",
      demo: "https://greenshop-react-ts.vercel.app",
      used: ["ReactJS", "TypeScript", "TailwindCSS", "Redux Toolkit", "RTK Query", "SwiperJS", "Ant Design"]
    },
    {
      id: 2,
      title: "Human Space",
      category: "Web development",
      image: "https://i.postimg.cc/htgn4KzY/photo-2025-10-09-22-35-43.jpg",
      description: "HeadHunter ga o'xshab, ish qidirish sayti. (Admin paneli bilan)",
      github: "https://github.com/rahmonaliyev2007/human-space",
      demo: "https://human-space.vercel.app",
      used: ["NextJS", "TypeScript", "TailwindCSS", "RTK Query", "ShadCN UI"]
    },
     {
      id: 3,
      title: "Lama IT Studio",
      category: "Landing page",
      image: "https://i.postimg.cc/8cKZ2BvF/Screenshot-2025-10-09-at-22-46-23.png",
      description: "Lama IT Studio MCHJ haqida malumot beruvchi sayt.",
      github: "https://github.com/rahmonaliyev2007/lama-it-studio",
      demo: "https://rahmonaliyev202506.vercel.app",
      used: ["NextJS", "TypeScript", "TailwindCSS", "CSS"]
    },
    {
      id: 4,
      title: "Business Card",
      category: "Contact page",
      image: "https://i.postimg.cc/PfSLQrQf/temp-Imagegsz-LCk.avif",
      description: "Shaxsiy biznes kartochkam.",
      demo: "https://rahmonaliyev202506.vercel.app",
      used: ["NextJS", "TypeScript", "TailwindCSS"]
    },
   
  ];

const Projects = () => {
      const router = useRouter();
  return (
   <section id="work" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold mb-4">My Projects</h2>
              <p className="text-purple-200/70 max-w-2xl mx-auto">
                A selection of my recent work spanning various industries and technologies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card key={project.id} onClick={() => router.push(`${project.demo}`)} className="overflow-hidden bg-purple-900/30 backdrop-blur-md border-purple-700/50 hover:border-purple-500/70 transition-all duration-300 group cursor-pointer">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-950 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div>
                        {/* <Badge className="mb-2 bg-purple-500/80 hover:bg-purple-500 text-xs">{project.category}</Badge> */}
                        {/* <h3 className="text-lg font-medium text-white">{project.title}</h3> */}
                    <p className="text-sm text-purple-200/70 mb-3">{project.description}</p>

                      </div>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="text-lg font-medium mb-1 text-pink-200">{project.title}</h3>
                    <div>
                      {project.used && project.used.length > 0 && project.used.map((tech, idx) => (
                      <Badge key={idx} className="mr-1 mb-2 bg-purple-800/50 text-xs text-purple-300">{tech}</Badge>
                    ))}
                    </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <Badge variant="outline" className="text-xs border-purple-500/50 text-purple-300">{project.category}</Badge>
                      <div>
                        {project.github && (
                          <Button variant="ghost" size="sm" onClick={()=> router.push(project.github)} className="text-purple-300 hover:text-white hover:bg-purple-800/50 cursor-pointer !rounded-button">
                        <span className="mr-1">Github</span>
                        <Github />
                      </Button>
                        )}
                      <Button variant="ghost" size="sm" onClick={()=> router.push(project.demo)} className="text-purple-300 hover:text-white hover:bg-purple-800/50 cursor-pointer !rounded-button">
                        <span className="mr-1">Demo </span>
                        <ArrowRight />
                      </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* <div className="mt-12 text-center">
              <Button onClick={() => router.push('projects')} className="bg-purple-800/50 hover:bg-purple-700/70 border border-purple-600/50 cursor-pointer !rounded-button">
                View All Projects
                <LayoutGrid />
              </Button>
            </div> */}
          </div>
        </section>
  )
}

export default Projects