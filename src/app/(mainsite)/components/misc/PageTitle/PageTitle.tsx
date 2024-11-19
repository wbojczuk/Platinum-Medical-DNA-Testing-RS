import styles from "./pagetitle.module.css"

export default function PageTitle(props: {pageTitle: string}) {
  return (
    <header className={styles.pageTitle}>
        <h1><span className="highlight">{props.pageTitle}</span></h1>

        <img src="/img/pagetitle-bg.webp" className="bg-img" aria-hidden />
        <div className="shader" style={{backgroundColor: "rgba(41,1,48,.7)"}}></div>
    </header>
  )
}
