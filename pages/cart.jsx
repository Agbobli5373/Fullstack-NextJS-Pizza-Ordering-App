import styles from "../styles/Cart.module.css";
import Image from "next/image";
const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.tr}>
              <td className={styles.th}>Product</td>
              <td className={styles.th}>Name</td>
              <td className={styles.th}>Extras</td>
              <td className={styles.th}>Price</td>
              <td className={styles.th}>Quantity</td>
              <td className={styles.th}>Total</td>
            </tr>
            <tr className={styles.tr}>
              <td >
                <div className={styles.imageContainer}>
                  <Image
                    src="/images/pizza.png"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </td>
              <td>
                <span className={styles.name}> CARALZO</span>
              </td>
              <td>
                <span className={styles.extras}>
                  {" "}
                  Double ingredients, Spicy, Garlic
                </span>
              </td>
              <td>
                <span className={styles.price}> $19.0</span>
              </td>
              <td>
                <span className={styles.quantity}> 2</span>
              </td>
              <td>
                <span className={styles.total}> $18.0</span>
              </td>
            </tr>
            <tr className={styles.tr}>
              <td>
                <div className={styles.imageContainer}>
                  <Image
                    src="/images/pizza.png"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </td>
              <td>
                <span className={styles.name}> CARALZO</span>
              </td>
              <td>
                <span className={styles.extras}>
                  {" "}
                  Double ingredients, Spicy, Garlic
                </span>
              </td>
              <td>
                <span className={styles.price}> $19.0</span>
              </td>
              <td>
                <span className={styles.quantity}> 2</span>
              </td>
              <td>
                <span className={styles.total}> $18.0</span>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal</b> $79.60
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount</b> $0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total</b> $79.60
          </div>
          <button className={styles.button}>CHECK NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
