import { useState } from 'react'
import styles from './FAQ.module.css'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Fui preso em flagrante. O que fazer?',
      answer: 'É importante buscar orientação jurídica imediatamente. Entre em contato via WhatsApp para que possamos avaliar a situação e orientar sobre os próximos passos.'
    },
    {
      question: 'Quanto tempo leva um processo criminal?',
      answer: 'O tempo de duração de um processo criminal varia conforme a complexidade do caso, a fase processual e outros fatores. Entre em contato para uma análise mais específica da sua situação.'
    },
    {
      question: 'Você atende finais de semana?',
      answer: 'O atendimento é mediante agendamento. Entre em contato via WhatsApp para verificar disponibilidade e agendar uma consulta.'
    },
    {
      question: 'Como funciona a consulta?',
      answer: 'A consulta inicia com o primeiro contato via WhatsApp. Após análise inicial do caso e documentação, definimos a estratégia e os próximos passos.'
    },
    {
      question: 'Quais documentos eu preciso?',
      answer: 'Os documentos necessários variam conforme o caso. Entre em contato via WhatsApp para que possamos orientar sobre a documentação específica para sua situação.'
    },
    {
      question: 'Atende online?',
      answer: 'Sim, é possível realizar atendimento online mediante agendamento. Entre em contato via WhatsApp para mais informações.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="duvidas" className={`${styles.faq} section`}>
      <div className={styles.container}>
        <h2 className={styles.title}>Dúvidas Frequentes</h2>
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                className={`${styles.faqQuestion} ${openIndex === index ? styles.open : ''}`}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{faq.question}</span>
                <span className={styles.icon}>{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className={styles.faqAnswer}
                  role="region"
                >
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
