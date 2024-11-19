import Link from 'next/link';
import styles from './learnmore.module.css';

export default function LearnMore(){
return (
 <div className={styles.detailing}>
    <div className={styles.textWrapper}>
        <h2>How it Works</h2>
        <p>Getting a DNA test with Platinum Medical & DNA Testing is simple and professional. Contact us to select the right test, discuss pricing, and schedule your appointment. At our Bridgeton, MO office, we collect samples using a quick jaw swab, which is sent to our trusted lab for analysis. With accuracy and professionalism, we help you get the answers you need.</p>
        <Link className='main-link' href={`/contact`}>Contact</Link>
    </div>
    <div className={styles.imgWrapper}>
        <img src="/img/learnmore.webp" alt="image of a woman on couch relaxing" className="bg-img" />
        <div className={`shader ${styles.shader}`}></div>
    </div>
 </div>
)};