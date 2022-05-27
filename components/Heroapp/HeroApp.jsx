import styles from './Hero.module.css';
import Image from 'next/image';

const HeroApp = () => {
    return(
        <>
            <section className={styles.container}>
                <div className={styles.left}>
                    <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                    <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. 
                        Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                    <button>Mulai Sewa Mobil</button>
                </div>
                    <Image 
                    width= "704"
                    height= "407"
                    src='/images/img_car.png'
                    alt="mobil"
                    />
            </section>
        </>
    )
}

export default HeroApp;