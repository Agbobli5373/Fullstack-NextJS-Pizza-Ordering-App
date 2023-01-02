import styles from '../../styles/Cart.module.css';
import Image from 'next/image';
const Cart =() =>{
    return (
        <div className={styles.container}>
            <div className={styles.left}>
              <table>
                <tbody>
                    <tr>
                    <td>Product</td>
                    <td>Name</td>
                    <td>Extras</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Total</td>  
                    </tr>
                </tbody>
              </table>
            </div>
            <div className={styles.right}>
            
        </div>
        </div>
    )
}

export default Cart ;