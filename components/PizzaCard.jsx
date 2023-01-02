import styles from '../styles/PizzaCard.module.css';
import Image from 'next/image';

const PizzaCard = ()=>{
    return(
        <div className={styles.container}> 
        <Image src="/images/pizza.png" alt='' width="300" height="300"/>
        <h1 className={styles.title}>FORI DI ZUCCA</h1>
        <span className={styles.price}>$19.9</span>
        <p className={styles.desc}>
        YouTube
Food Ordering App UI Design Using React Next.js
        </p>
        </div>
    );
}

export default PizzaCard ;