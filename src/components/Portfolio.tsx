import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const portfolioItems = [
  {
    id: 1,
    title: 'Modern Living Room',
    category: 'Living Spaces',
    image: 'https://ugc.same-assets.com/-esRKAuXRwDekw164niwyMDgFb98D5uc.jpeg',
    description: 'Elegant modern living space with warm tones and sophisticated design.'
  },
  {
    id: 2,
    title: 'Luxury Kitchen',
    category: 'Kitchen & Dining',
    image: 'https://ugc.same-assets.com/g8zHX6yGljPKdH31lZhREswox_HKlSeB.jpeg',
    description: 'Contemporary kitchen design with premium finishes and functional layout.'
  },
  {
    id: 3,
    title: 'Master Bedroom Suite',
    category: 'Bedrooms',
    image: 'https://ugc.same-assets.com/vQHwtWhoSy0BWVVSFvk93CZcxW38Ap_3.jpeg',
    description: 'Serene master bedroom with luxurious textures and calming colors.'
  },
  {
    id: 4,
    title: 'Open Concept Design',
    category: 'Living Spaces',
    image: 'https://ugc.same-assets.com/a50Q03HeoyeT1cZPtJj1sHsdgHedBWIs.jpeg',
    description: 'Seamless open concept living with kitchen, dining, and living areas.'
  },
  {
    id: 5,
    title: 'Elegant Dining Room',
    category: 'Kitchen & Dining',
    image: 'https://ugc.same-assets.com/pSrC45w2evqR515Cd2WGCTgruRFbILVS.jpeg',
    description: 'Sophisticated dining space perfect for entertaining guests.'
  },
  {
    id: 6,
    title: 'Contemporary Bedroom',
    category: 'Bedrooms',
    image: 'https://ugc.same-assets.com/Nr58BG2X4OhZwuRSBHKJ6Pmms5QBZEzP.jpeg',
    description: 'Modern vintage bedroom design with unique character and style.'
  },
]

const categories = ['All', 'Living Spaces', 'Kitchen & Dining', 'Bedrooms']

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our carefully curated collection of interior design projects.
            Each space tells a unique story of transformation and beauty.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === 'All' ? 'default' : 'outline'}
                className={category === 'All' ? 'bg-emerald-600 hover:bg-emerald-700' : 'hover:bg-emerald-50 hover:text-emerald-600'}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-emerald-600 font-medium mb-2">
                    {item.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>
                  <Button variant="ghost" className="text-emerald-600 hover:text-emerald-700 p-0">
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
            View Complete Portfolio <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
