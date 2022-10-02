import Link from "next/link"

const Nav = () => {
  return (
    <Link href="/dashboard">
      <div className="nav">
          <a className="logo-title disable-select">Speedy Reader</a>
      </div>
    </Link>
    
  )
}

export default Nav