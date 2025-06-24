import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Portfolio } from '@/components/Portfolio'
import { Services } from '@/components/Services'
import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
