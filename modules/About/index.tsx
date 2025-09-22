import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const skills = [
    { name: "HTML & CSS", level: 70 },
    { name: "JavaScript (ES6+)", level: 70 },
    { name: "TypeScript", level: 80 },
    { name: "React.js & Next.js", level: 85 },
    { name: "TailwindCSS & ShadCN", level: 88 },
    { name: "UI Design (Basic)", level: 15 },
    { name: "Team Leadership", level: 55 }
];

const About = () => {
    return (
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
                                Download Rezume
                                <Download className="ml-2 w-4 h-4" />
                            </Link>
                        </Button>
                    </div>

                    <div className="relative">
                        <div className="relative z-10 rounded-lg overflow-hidden border border-purple-500/30 shadow-xl shadow-purple-900/30">
                            <img
                                src=""
                                alt="Abdulaziz Portrait"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -top-4 -right-4 w-full h-full border-2 border-purple-500/50 rounded-lg z-0"></div>
                        <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-pink-500/50 rounded-lg z-0"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About