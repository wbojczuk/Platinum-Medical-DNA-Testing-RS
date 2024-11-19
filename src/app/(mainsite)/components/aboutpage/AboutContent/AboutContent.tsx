import Link from 'next/link';
import styles from './aboutcontent.module.css';

export default function AboutContent(){
return (
 <div className={styles.detailing}>
    <div className={styles.textWrapper}>
        <h2>About Us</h2>
        <p>Platinum Medical & DNA Testing is a family-owned agency offering professional, private DNA testing tailored to your needs. From paternity and legal testing to health and sensitivity assessments, we provide accurate results through trusted labs. With discreet appointments, a simple jaw swab process, and optional 48-hour results, we prioritize accuracy, privacy, and personalized care.</p>
        <Link className='main-link' href={`/contact`}>Contact</Link>
    </div>
    <div className={styles.imgWrapper}>
        <img src="/img/about.webp" alt="image of a family" className="bg-img" />
        <div className={`shader ${styles.shader}`}></div>
    </div>
 </div>
)};