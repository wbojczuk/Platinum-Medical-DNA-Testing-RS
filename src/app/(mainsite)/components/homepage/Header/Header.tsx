"use client"
import styles from "./header.module.css"
import Link from "next/link"

export default function Header() {
  return (
    <header className={styles.header}>
        <h1>Private and Accurate<br />DNA Testing</h1>

        <p>Professional & private DNA testing for your families needs in St. Louis and surrounding areas.</p>
        

        <Link href="/contact" className="main-link">Contact</Link>

        {/* <h4>-- Bonded and Insured! --</h4> */}

        <img src="/img/header-bg.png" alt="" className="bg-img" />
        <div style={{backgroundColor: "rgba(0,0,0,.53)"}} className="shader"></div>

    </header>
  )
}
