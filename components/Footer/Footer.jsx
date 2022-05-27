import styles from './Footer.module.css';
import Image from 'next/image';

const Footer = () => {
    return(
        <>
            <section>
                <div className={styles.container}>
                    <ul>
                        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                        <p>binarcarrental@gmail.com</p>
                        <p>081-233-334-808</p>
                    </ul>
                    <ul>
                        <p>Our Services</p>
                        <p>Why Us</p>
                        <p>Testimonal</p>
                        <p>FAQ</p>
                    </ul>
                    <ul>
                        <p>Connect With Us</p>
                        <Image 
                        width="32"
                        height="32"
                        src='/images/icon_facebook.svg'
                        alt='fb'/>
                        <Image 
                        width="32"
                        height="32"
                        src='/images/icon_instagram.svg'
                        alt='ig'/>
                        <Image 
                        width="32"
                        height="32"
                        src='/images/icon_mail.svg'
                        alt='mail'/>
                        <Image 
                        width="32"
                        height="32"
                        src='/images/icon_twitch.svg'
                        alt='twitch'/>
                        <Image 
                        width="32"
                        height="32"
                        src='/images/icon_twitter.svg'
                        alt='twitter'/>
                    </ul>
                    <ul>
                        <p>Copyright 2022</p>
                        <Image 
                        width="100"
                        height="34"
                        src='/images/logo.svg'
                        alt="logo"/>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Footer;