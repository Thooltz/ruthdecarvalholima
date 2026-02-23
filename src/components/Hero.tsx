import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
          }
        })
      },
      { threshold: 0.1 }
    )

    const contentEl = contentRef.current
    const imageEl = imageRef.current

    if (contentEl) observer.observe(contentEl)
    if (imageEl) observer.observe(imageEl)

    return () => {
      if (contentEl) observer.unobserve(contentEl)
      if (imageEl) observer.unobserve(imageEl)
    }
  }, [])

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5513997260053?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Ruth.', '_blank')
  }

  const handleScrollToAtuacao = () => {
    const element = document.getElementById('atuacao')
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

  return (
    <section id="inicio" className={`${styles.hero} section`}>
      <div className={styles.container}>
        <div ref={contentRef} className={styles.content}>
          <h1 className={styles.title}>Ruth de Carvalho Lima</h1>
          <h2 className={styles.subtitle}>Advogada Criminalista</h2>
          <p className={styles.description}>
            Atendimento mediante agendamento • Orientação e defesa no âmbito penal
          </p>
          <div className={styles.ctaGroup}>
            <button
              onClick={handleWhatsAppClick}
              className={styles.ctaPrimary}
              aria-label="Falar no WhatsApp"
            >
              <span>Falar no WhatsApp</span>
            </button>
            <button
              onClick={handleScrollToAtuacao}
              className={styles.ctaSecondary}
              aria-label="Ver atuação criminal"
            >
              Ver atuação criminal
            </button>
          </div>
        </div>
        <div ref={imageRef} className={styles.imageWrapper}>
          <div className={styles.imageOverlay}></div>
          <img
            src="/images/ruth.jpg"
            alt="Ruth de Carvalho Lima - Advogada Criminalista"
            className={styles.image}
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
