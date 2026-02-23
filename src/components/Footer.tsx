import styles from './Footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          © {currentYear} Ruth de Carvalho Lima. Todos os direitos reservados.
        </p>
        <p className={styles.disclaimer}>
          Conteúdo informativo. Consulte um advogado para orientação específica.
        </p>
      </div>
    </footer>
  )
}

export default Footer
