import styles from '../styles/PizzaList.module.css';
import PizzaCard from './PizzaCard';
const PizzaList = () => {
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>BEST PIZZA IN TWON</h1>
            <p className={styles.desc}>YouTube
Food Ordering App UI Design Using React Next.js | Responsive Restaurant Website
Responsive pizza restaurant food ordering app UI design using React | Next.js. Design restaurant app using React Next.js and </p>
        <div className={styles.wrapper}>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
        </div>
        </div>
    )
}

export default PizzaList ;