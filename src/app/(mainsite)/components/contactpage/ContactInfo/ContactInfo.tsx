"use client"
import styles from './contactinfo.module.css';

export default function ContactInfo(){
return (
 <div className={styles.contactInfo}>
    <div className={styles.infoWrapper}>

    <div className={styles.info}>
            <div className={styles.iconWrapper}>
                <div className={styles.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M152.27 37.93a8 8 0 0 1 9.8-5.66a86.22 86.22 0 0 1 61.66 61.66a8 8 0 0 1-5.66 9.8a8.23 8.23 0 0 1-2.07.27a8 8 0 0 1-7.73-5.94a70.35 70.35 0 0 0-50.33-50.33a8 8 0 0 1-5.67-9.8m-2.33 41.8c13.79 3.68 22.65 12.54 26.33 26.33A8 8 0 0 0 184 112a8.23 8.23 0 0 0 2.07-.27a8 8 0 0 0 5.66-9.8c-5.12-19.16-18.5-32.54-37.66-37.66a8 8 0 1 0-4.13 15.46m81.94 95.35A56.26 56.26 0 0 1 176 224C96.6 224 32 159.4 32 80a56.26 56.26 0 0 1 48.92-55.88a16 16 0 0 1 16.62 9.52l21.12 47.15v.12A16 16 0 0 1 117.39 96c-.18.27-.37.52-.57.77L96 121.45c7.49 15.22 23.41 31 38.83 38.51l24.34-20.71a8.12 8.12 0 0 1 .75-.56a16 16 0 0 1 15.17-1.4l.13.06l47.11 21.11a16 16 0 0 1 9.55 16.62m-15.88-2h-.11l-47-21.05l-24.35 20.71a8.44 8.44 0 0 1-.74.56a16 16 0 0 1-15.75 1.14c-18.73-9.05-37.4-27.58-46.46-46.11a16 16 0 0 1 1-15.7a6.13 6.13 0 0 1 .57-.77L104 87.15l-21-47a.61.61 0 0 1 0-.12A40.2 40.2 0 0 0 48 80a128.14 128.14 0 0 0 128 128a40.21 40.21 0 0 0 40-34.93Z"></path></svg>
                </div>
            </div>
            <div className={styles.textInfo}>
                <h2>Phone</h2>
                <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUM}`}>{process.env.NEXT_PUBLIC_PHONE_NUM_FORMATTED}</a>
            </div>
        </div>

        <div className={styles.info}>
            <div className={styles.iconWrapper}>
                <div className={styles.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm3.519 0L12 11.671L18.481 6zM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16z"></path></svg>
                </div>
            </div>
            <div className={styles.textInfo}>
                <h2>Email</h2>
                <a className={styles.email} href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`}>{process.env.NEXT_PUBLIC_EMAIL_ADDRESS}</a>
            </div>
        </div>

        <div className={styles.info}>
            <div className={styles.iconWrapper}>
                <div className={styles.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m-26.37 144h52.74C149 186.34 140 202.87 128 215.89c-12-13.02-21-29.55-26.37-47.89M98 152a145.72 145.72 0 0 1 0-48h60a145.72 145.72 0 0 1 0 48Zm-58-24a87.61 87.61 0 0 1 3.33-24h38.46a161.79 161.79 0 0 0 0 48H43.33A87.61 87.61 0 0 1 40 128m114.37-40h-52.74C107 69.66 116 53.13 128 40.11c12 13.02 21 29.55 26.37 47.89m19.84 16h38.46a88.15 88.15 0 0 1 0 48h-38.46a161.79 161.79 0 0 0 0-48m32.16-16h-35.43a142.39 142.39 0 0 0-20.26-45a88.37 88.37 0 0 1 55.69 45M105.32 43a142.39 142.39 0 0 0-20.26 45H49.63a88.37 88.37 0 0 1 55.69-45M49.63 168h35.43a142.39 142.39 0 0 0 20.26 45a88.37 88.37 0 0 1-55.69-45m101.05 45a142.39 142.39 0 0 0 20.26-45h35.43a88.37 88.37 0 0 1-55.69 45"></path></svg>
                </div>
            </div>
            <div className={styles.textInfo}>
                <h2>Socials</h2>
                {/* <a className={styles.socialIcon} target='_blank' href={`https://www.facebook.com/wshwtr?mibextid=ZbWKwL`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"></path></svg>
                </a> */}
                <a className={styles.socialIcon} target='_blank' href={`https://www.instagram.com/platinummedicaldnatesting/`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path></svg>
                </a>
            </div>
        </div>

    </div>
 </div>
)};