import styles from '../styles/Home.module.css';
import Navbar from "../components/Navbar/Navbar";
import HeroApp from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <>
        <title>Binar Car</title>
        <meta name="description" content="Generated by create next app" />
      <main className={styles.container}>
        <header>
          <Navbar />
        </header>
        <HeroApp />
        <Footer />
      </main>
    </>
  )
}
