import Link from "next/link"
import styles from "../styles/Nav.module.css"

const Nav = () => {
  return (
    <Link href="/dashboard">
      <div className={styles.nav}>
          <a className={`${styles.title} disable-select`}>Speedy Reader</a>
      </div>
    </Link>
    
  )
}

export default Nav