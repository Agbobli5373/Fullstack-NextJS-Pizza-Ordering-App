import styles from '../styles/Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
const Navbar = () =>{
    return(
        <div className={styles.container} style={{position:`sticky`}}>
            <div className={styles.item}>
               <div className={styles.callButton}>
                 <Image src="/images/telephone.png" alt='' width="32" height="32"/>
               </div>
               <div className={styles.text}>
               <div className={styles.texts}> ORDER NOW</div>
               <div className={styles.texts}> 233 54 021 8724</div>
               </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>Homepage</li>
                    <li className={styles.listItem}>Product</li>
                    <li className={styles.listItem}>Menu</li>
                    <li className={styles.listItem}>Events</li>
                    <li className={styles.listItem}>Blog</li>
                </ul>
            </div>
            <div className={styles.item}>
                <div className={styles.cart}>
                <Image src='/images/cart.png' alt='' width="30" height="30"/>
                <div className={styles.counter}>2</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar ;