import styles from '../styles/Footer.module.css'
import Image from 'next/image';
const Footer = ()=>{
    return(
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/images/bg.png" alt='' layout='fill'/>
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.moto}>
                    Food Ordering App UI Design Using React Next.js 
                    </h2>
                </div>
                <div>
                <h1 className={styles.title}>Find Our Store</h1>

                <p className={styles.text}>Address hhks kjf
                <br/> Ghana Anloga
                <br/> 03095 5006</p>

                <p className={styles.text}>Address hhks kjf
                <br/> Ghana Anloga
                <br/> 03095 5006</p>

                
                <p className={styles.text}>Address hhks kjf
                <br/> Ghana Anloga
                <br/> 03095 5006</p>

               </div>
               <div className={styles.card}>
                <h1 className={styles.title}>WORKING HOURS</h1>
                 <p className={styles.text}>
                    Monday Until Friday <br/>
                    9:00 - 22:00
                 </p>
                 <p className={styles.text}>
                    Sunday - Saturday <br/>
                    12:00 - 24:00
                 </p>
             </div>
        </div>
        </div>
    
    );
}

export default Footer ;