import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import CriminalPractice from './components/CriminalPractice'
import ServiceFlow from './components/ServiceFlow'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <CriminalPractice />
        <ServiceFlow />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
