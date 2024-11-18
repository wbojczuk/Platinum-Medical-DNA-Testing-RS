import Link from 'next/link';
import styles from './servicearea.module.css';

export default function ServiceArea(){
return (
 <div className={styles.serviceArea}>
    <div className={styles.textWrapper}>
        <h2>
            <span className="underline">Located In</span> <br />
            <span className="underline">Bridgeton, MO</span> <br />
        </h2>
        <Link className='main-link light' href={`/contact`}>Contact</Link>
    </div>
    <div className={styles.mapWrapper}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99541.99937097845!2d-90.50843240329475!3d38.77087142098917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87df31a9ef48d671%3A0x6b69e6a43e5bdb24!2sBridgeton%2C%20MO!5e0!3m2!1sen!2sus!4v1731893221913!5m2!1sen!2sus" style={{"border":0}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
 </div>
)};