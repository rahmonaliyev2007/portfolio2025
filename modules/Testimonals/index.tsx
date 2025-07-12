import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import React from 'react'

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

const Testimonals = () => {
  return (
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
  )
}

export default Testimonals