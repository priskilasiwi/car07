import styles from "./Navbar.module.css";
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <>
            <nav className={styles.nav}>
                <section>
                    <div>
                        <Image
                            width="100"
                            height="34"
                            src="/images/logo.svg"
                            className={styles.logo} />
                        <ul>
                            <li>
                                <Link href="">Our Services</Link>
                            </li>
                            <li>
                                <Link href="">Why Us</Link>
                            </li>
                            <li>
                                <Link href="">Testimonial</Link>
                            </li>
                            <li>
                                <Link href="">FAQ</Link>
                            </li>
                            <button>Register</button>
                        </ul>
                    </div>
                </section>
            </nav>
        </>
    )
}

export default Navbar;