import Link from 'next/link';
import styles from './keep.module.css';

export default function Keep(){
return (
 <div className={styles.detailing}>
    <div className={styles.textWrapper}>
        <h2>Keeping Your<br />Information Confidential</h2>
        <p>Private DNA testing with Platinum Medical & DNA Testing offers a comfortable, confidential way to receive accurate results without visiting a lab. This personalized service allows you to gather important answers securely and discreetly, ensuring peace of mind throughout the process.</p>
        <Link className='main-link' href={`/contact`}>Contact</Link>
    </div>
    <div className={styles.imgWrapper}>
        <img src="/img/keep.png" alt="image of a woman on couch relaxing" className="bg-img" />
        <div className={`shader ${styles.shader}`}></div>
    </div>
 </div>
)};