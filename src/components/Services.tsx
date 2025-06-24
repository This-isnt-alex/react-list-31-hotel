import { Button } from '@/components/ui/button'
import { Home, Palette, Layout, Lightbulb, Sofa, Building } from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Full Home Design',
    description: 'Complete interior design transformation from concept to completion for your entire home.',
    icon: Home,
    features: ['Space Planning', 'Color Schemes', 'Furniture Selection', 'Project Management']
  },
  {
    id: 2,
    title: 'Room Makeovers',
    description: 'Transform individual rooms with our expert design consultation and styling services.',
    icon: Palette,
    features: ['Single Room Focus', 'Budget-Friendly', 'Quick Turnaround', 'Style Consultation']
  },
  {
    id: 3,
    title: 'Space Planning',
    description: 'Optimize your space with functional layouts that maximize both style and efficiency.',
    icon: Layout,
    features: ['3D Visualizations', 'Flow Optimization', 'Furniture Layouts', 'Storage Solutions']
  },
  {
    id: 4,
    title: 'Lighting Design',
    description: 'Create the perfect ambiance with professional lighting design and fixture selection.',
    icon: Lightbulb,
    features: ['Ambient Lighting', 'Task Lighting', 'Accent Features', 'Smart Controls']
  },
  {
    id: 5,
    title: 'Furniture Curation',
    description: 'Carefully selected furniture pieces that complement your style and meet your needs.',
    icon: Sofa,
    features: ['Custom Selection', 'Quality Pieces', 'Style Matching', 'Budget Planning']
  },
  {
    id: 6,
    title: 'Commercial Design',
    description: 'Professional interior design services for offices, restaurants, and retail spaces.',
    icon: Building,
    features: ['Brand Integration', 'Functional Layouts', 'Compliance Standards', 'Scalable Solutions']
  }
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From complete home transformations to individual room makeovers,
            we offer comprehensive interior design services tailored to your vision and budget.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.id} className="group">
                <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className="flex items-center mb-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mr-4 group-hover:bg-emerald-600 transition-colors duration-300">
                      <Icon className="h-6 w-6 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>

                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button variant="outline" className="w-full hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-600">
                    Learn More
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Process Section */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Design Process
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a proven process to ensure your project is completed on time,
              within budget, and exceeds your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Initial meeting to understand your vision and requirements' },
              { step: '02', title: 'Design', desc: 'Create detailed design plans and 3D visualizations' },
              { step: '03', title: 'Implementation', desc: 'Execute the design with careful project management' },
              { step: '04', title: 'Completion', desc: 'Final walkthrough and styling touches' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-600 text-white rounded-full text-lg font-bold mb-4">
                  {item.step}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
