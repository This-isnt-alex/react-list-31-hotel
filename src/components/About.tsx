import { Button } from '@/components/ui/button'
import { CheckCircle, Heart, Users, Trophy } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Pretty Homes Interiors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about creating beautiful, functional spaces that reflect your personality and enhance your lifestyle.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Our Story
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2014, Pretty Homes Interiors began with a simple mission: to make beautiful,
              professional interior design accessible to everyone. What started as a small studio has
              grown into a full-service design firm serving clients across the region.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our team of experienced designers brings creativity, expertise, and a deep understanding
              of how spaces impact our daily lives. We believe that good design should be both beautiful
              and functional, creating environments where you love to live, work, and play.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Award-winning design team',
                'Sustainable design practices',
                'Personalized approach',
                'Full-service solutions'
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
              Meet Our Team
            </Button>
          </div>

          <div className="relative">
            <img
              src="https://ugc.same-assets.com/ccBh_sbG_D1xFyDd6gQs-6Ri735eYspw.png"
              alt="Beautiful interior design workspace"
              className="rounded-lg shadow-lg w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-emerald-600">10+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Our Values
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Passion for Design',
                description: 'We pour our heart into every project, ensuring each space tells a unique story and reflects your personality.'
              },
              {
                icon: Users,
                title: 'Client-Centered',
                description: 'Your vision drives our process. We listen, collaborate, and work tirelessly to exceed your expectations.'
              },
              {
                icon: Trophy,
                title: 'Excellence',
                description: 'We maintain the highest standards in design, craftsmanship, and service, delivering results that stand the test of time.'
              }
            ].map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
                    <Icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Team Preview */}
        <div className="bg-white rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Meet Our Design Team
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our talented designers bring diverse backgrounds and expertise to create spaces that are uniquely yours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Lead Interior Designer',
                image: 'https://images.unsplash.com/photo-1494790108755-2616b612b1af?w=400&h=400&fit=crop&crop=face',
                bio: '15+ years experience in luxury residential design'
              },
              {
                name: 'Michael Chen',
                role: 'Commercial Design Specialist',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
                bio: 'Expert in sustainable and modern commercial spaces'
              },
              {
                name: 'Emily Rodriguez',
                role: 'Color & Lighting Consultant',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
                bio: 'Specialist in creating perfect ambiance through design'
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
