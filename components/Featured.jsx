import Image  from "next/image";
import { useState } from "react";
import styles from '../styles/Featured.module.css';
const Featured = () =>{
    const [index,setIndex] = useState(0);

    const handlearrow =(dir)=>{
        if(dir ==="l"){
            setIndex(index!==0 ? index-1 : 2)
        }
        if(dir ==='r'){
            setIndex(index!==2 ? index + 1 :0)
        }
    }
    console.log(index);
    const images =[
        '/images/featured1.jpg',
        '/images/featured1.jpg',
        '/images/featured1.jpg'
    ];
    return(
        <div className={styles.container}>
           <div className={styles.arrowContainer} style={{left:0}} onClick={()=>handlearrow("l")}>
              <Image src='/images/arrowl.png' alt="" fill/>
           </div>
            <div className={styles.wrapper} style={{transform:`translate(${-100*index}vw)`}}>
                <div className={styles.imageContainer}>
                  {images.map((img,i)=>(
                    <Image  src={img}  key={i} alt="" fill
                    sizes="100vw"
                    style={{
                      objectFit: 'contain',
                    }}/>
                  ))}
                </div>
            </div>
            <div className={styles.arrowContainer} style={{right:0}} onClick={()=>handlearrow("r")}>
              <Image src='/images/arrowr.png' alt="" fill />
           </div>        
           </div>
    )
}

export default Featured ;