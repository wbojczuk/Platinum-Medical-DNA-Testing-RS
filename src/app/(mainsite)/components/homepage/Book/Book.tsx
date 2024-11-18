"use client"

import Link from 'next/link';
import styles from './book.module.css';

export default function Book(){
return (
 <div className={styles.find}>

    <h2>Book an Appointment <span className="underline">Today!</span></h2>

    <h3>Get the answers you need privately and with certainty. Contact us today so we can help you with your unanswered questions</h3>

    <div className={`center ${styles.linkWrapper}`}>
    <Link className='main-link' href={`/contact`}>Contact</Link>
    </div>
 
    <img src='/img/book.png' alt='Image of woman' className='bg-img' />
    <div style={{backgroundColor: "rgba(41,1,48,0.83)"}} className='shader'></div>
 </div>
)};