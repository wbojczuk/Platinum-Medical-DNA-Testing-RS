"use client"

import styles from "./footer.module.css"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>

        <img src="/img/logo.png" width={512} height={512} className={styles.logo} alt="Main Logo"/>

        <div className={styles.links}>
          <aside>
              <h3 className={styles.listTitle}>Quick Links</h3>
              <ul className={styles.list}>
                
                <li className={styles.listItem}>
                  <Link href="/">Home</Link>
                </li>
                <li className={styles.listItem}>
                  <Link href="/about">About</Link>
                </li>
                <li className={styles.listItem}>
                  <Link href="/contact">Contact</Link>
                </li>
                <li className={styles.listItem}>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>

              </ul>
            </aside>

            <aside>
              <h3 className={styles.listTitle}>Categories</h3>
              <ul className={styles.list}>

                <span className={styles.listItem}>Category</span>
                <span className={styles.listItem}>Category</span>
                <span className={styles.listItem}>Category</span>
              
              </ul>
            </aside>

            <aside>
              <h3 className={styles.listTitle}>Contact</h3>
              <ul className={styles.list}>

                <aside className={`${styles.contactItem} ${styles.listItem}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"></path></svg>
                  <a href={"tel:" + process.env.NEXT_PUBLIC_PHONE_NUM} target="_blank">{process.env.NEXT_PUBLIC_PHONE_NUM_FORMATTED}</a>
                </aside>
                
                <aside className={`${styles.contactItem} ${styles.listItem}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"></path></svg>
                  <a href={"mailto:" + process.env.NEXT_PUBLIC_EMAIL_ADDRESS} target="_blank">{process.env.NEXT_PUBLIC_EMAIL_ADDRESS}</a>
                </aside>
                
                <aside className={`${styles.contactItem} ${styles.listItem}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"></path></svg>
                  <a href="https://google.com" target="_blank">{process.env.NEXT_PUBLIC_BUSINESS_CITY_STATE}</a>
                </aside>

              </ul>
            </aside>
          </div>

      </div>

      <div className={styles.copyright}>© Copyright 2024 to Present - <a href="https://www.romesites.co" target="_blank">Rome Sites</a></div>
        
       
    </footer>
  )
}
