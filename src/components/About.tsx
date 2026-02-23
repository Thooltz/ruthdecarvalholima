import styles from './About.module.css'

const About = () => {
  const diferenciais = [
    'Atendimento com discrição',
    'Clareza e transparência',
    'Estratégia e responsabilidade',
    'Compromisso com prazos e acompanhamento'
  ]

  return (
    <section id="sobre" className={`${styles.about} section`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Sobre</h2>
          <p className={styles.text}>
            Atuação na advocacia criminal com foco em atendimento humanizado, estratégia de defesa e acompanhamento claro de cada etapa.
          </p>
          <div className={styles.diferenciais}>
            <h3 className={styles.subtitle}>Diferenciais</h3>
            <ul className={styles.list}>
              {diferenciais.map((item, index) => (
                <li key={index} className={styles.listItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img
            src="/images/ruth.jpg"
            alt="Ruth de Carvalho Lima"
            className={styles.image}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export default About
