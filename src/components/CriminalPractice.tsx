import styles from './CriminalPractice.module.css'

const CriminalPractice = () => {
  const areas = [
    {
      title: 'Flagrante e audiência de custódia',
      description: 'Orientação imediata e acompanhamento na fase inicial do processo.'
    },
    {
      title: 'Inquérito policial e investigações',
      description: 'Assistência e estratégias na fase inicial de investigação.'
    },
    {
      title: 'Defesa em processos criminais',
      description: 'Acompanhamento do início ao fim do processo criminal.'
    },
    {
      title: 'Habeas corpus e medidas urgentes',
      description: 'Atuação quando cabível para medidas urgentes.'
    },
    {
      title: 'Violência doméstica e medidas protetivas',
      description: 'Orientação e atuação conforme o caso específico.'
    },
    {
      title: 'Crimes contra a honra',
      description: 'Calúnia, difamação e injúria.'
    },
    {
      title: 'Crimes patrimoniais',
      description: 'Furto, roubo, estelionato — conforme o caso.'
    },
    {
      title: 'Execução penal',
      description: 'Progressão, benefícios e acompanhamento.'
    }
  ]

  return (
    <section id="atuacao" className={`${styles.practice} section`}>
      <div className={styles.container}>
        <h2 className={styles.title}>Atuação Criminal</h2>
        <p className={styles.intro}>
          Atuação nas principais áreas do Direito Penal, com orientação clara e estratégia adequada a cada caso.
        </p>
        <div className={styles.grid}>
          {areas.map((area, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.cardTitle}>{area.title}</h3>
              <p className={styles.cardDescription}>{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CriminalPractice
