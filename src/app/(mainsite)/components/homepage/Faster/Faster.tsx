import styles from "./faster.module.css"

export default function Faster() {
  return (
    <div className={styles.faster}>
        <div className={styles.fasterItem}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M219.68 117.26a12 12 0 0 0-7.47-8.5l-54.44-20.41l14-70a12 12 0 0 0-20.54-10.54l-112 120a12 12 0 0 0 4.56 19.43l54.44 20.41l-14 70a12 12 0 0 0 20.54 10.54l112-120a12 12 0 0 0 2.91-10.93m-103.63 83.67l7.72-38.58a12 12 0 0 0-7.56-13.59L69 131.07l70.93-76l-7.72 38.58a12 12 0 0 0 7.56 13.59L187 124.93Z"></path></svg>
            <h3><span className="highlight">Fast</span></h3>
            <span>We offer a 48-hour turnaround result time for an additional fee.</span>
        </div>
        <div className={styles.fasterItem}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0zm-2 0V7a4 4 0 0 0-8 0v1zm-9 3v2h2v-2zm0 3v2h2v-2zm0 3v2h2v-2z"></path></svg>
            <h3><span className="highlight">Private</span></h3>
            <span>Quality professional & private DNA testing for your families needs, whatever they may be.</span>
        </div>
        <div className={styles.fasterItem}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12.75 3.94c1-.72 2.16-1.08 3.47-1.08c.72 0 1.51.19 2.37.59q1.29.585 2.04 1.38c1.03 1.28 1.46 2.77 1.31 4.47c-.16 1.7-.72 3.03-1.69 3.97l-7.59 7.59c-.19.19-.43.28-.71.28s-.51-.09-.7-.28a.94.94 0 0 1-.28-.7c0-.28.09-.52.28-.71l4.59-4.59c.25-.22.25-.45 0-.7s-.48-.25-.7 0l-4.59 4.59a.95.95 0 0 1-.71.28c-.28 0-.51-.09-.7-.28a.94.94 0 0 1-.28-.7c0-.28.09-.52.28-.71l4.59-4.59q.405-.375 0-.75c-.23-.25-.45-.25-.7 0l-4.59 4.64a.98.98 0 0 1-.71.28c-.28 0-.52-.09-.73-.28c-.2-.19-.3-.42-.3-.7q0-.42.33-.75l4.6-4.6c.25-.25.25-.48 0-.7s-.49-.22-.71 0L6.28 14.5c-.22.2-.45.31-.7.31c-.28 0-.52-.1-.7-.31c-.19-.2-.29-.44-.29-.72s.1-.51.29-.7C7.94 10 9.83 8.14 10.55 7.45l3.56 3.52c.39.37.84.56 1.39.56c.7 0 1.25-.28 1.66-.84c.28-.41.38-.86.3-1.36s-.29-.92-.63-1.27zm2.06 6.33L10.55 6l-7.08 7.08c-.84-.85-1.32-2.15-1.43-3.92c-.11-1.76.37-3.29 1.43-4.57c1.19-1.18 2.61-1.78 4.26-1.78c1.66 0 3.07.6 4.22 1.78l4.27 4.27c.19.19.28.42.28.7s-.09.52-.28.71c-.19.18-.42.28-.72.28c-.27 0-.5-.1-.69-.28"></path></svg>
            <h3><span className="highlight">Quality</span></h3>
            <span>We work hand in hand with one of the largest laboratories in the country with an extensive history in DNA Testing.</span>
        </div>
    </div>
  )
}
