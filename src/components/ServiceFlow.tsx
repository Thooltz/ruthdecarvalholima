import styles from './ServiceFlow.module.css'

const ServiceFlow = () => {
  const steps = [
    {
      number: '1',
      title: 'Primeiro contato via WhatsApp',
      description: 'Entre em contato para agendar uma consulta inicial.'
    },
    {
      number: '2',
      title: 'Análise inicial do caso e documentos',
      description: 'Análise detalhada da situação e documentação apresentada.'
    },
    {
      number: '3',
      title: 'Definição de estratégia e próximos passos',
      description: 'Planejamento da defesa e orientação sobre os procedimentos.'
    }
  ]

  return (
    <section id="como-atendo" className={`${styles.flow} section`}>
      <div className={styles.container}>
        <h2 className={styles.title}>Como Atendo</h2>
        <div className={styles.steps}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.disclaimer}>
          <p>
            Este site possui caráter informativo e não substitui consulta jurídica.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ServiceFlow
