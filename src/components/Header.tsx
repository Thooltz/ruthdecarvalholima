import { useState, useEffect } from 'react'
import styles from './Header.module.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    setIsMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>Ruth de Carvalho Lima</div>
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <a href="#inicio" onClick={(e) => handleNavClick(e, 'inicio')}>Início</a>
          <a href="#sobre" onClick={(e) => handleNavClick(e, 'sobre')}>Sobre</a>
          <a href="#atuacao" onClick={(e) => handleNavClick(e, 'atuacao')}>Atuação Criminal</a>
          <a href="#como-atendo" onClick={(e) => handleNavClick(e, 'como-atendo')}>Como Atendo</a>
          <a href="#duvidas" onClick={(e) => handleNavClick(e, 'duvidas')}>Dúvidas</a>
          <a href="#contato" onClick={(e) => handleNavClick(e, 'contato')}>Contato</a>
        </nav>
        <a
          href="https://wa.me/5513997260053?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Ruth."
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsappButton}
          aria-label="Falar no WhatsApp"
        >
          WhatsApp
        </a>
        <button
          className={`${styles.menuToggle} ${isMenuOpen ? styles.menuToggleOpen : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
