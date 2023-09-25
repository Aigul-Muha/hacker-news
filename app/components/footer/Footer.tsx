import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.line}></div>
      <p className={styles.text}>Applications are open for YC Winter 2024</p>
      <nav className={styles.nav}>
        <Link href="#">Guidelines</Link>
        <Link href="#">FAQ</Link>
        <Link href="#">Lists</Link>
        <Link href="#">API</Link>
        <Link href="#">Security</Link>
        <Link href="#">Legal</Link>
        <Link href="#">Apply to YC</Link>
        <Link href="#">Contact</Link>
      </nav>
    </footer>
  );
}
