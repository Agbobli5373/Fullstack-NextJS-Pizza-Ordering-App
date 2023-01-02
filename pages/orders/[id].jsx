import styles from "../../styles/Orders.module.css";
import Image from "next/image";
const Order = () => {
    const status = 0 ;
    const statusClass = (index) =>{
          if(index - status < 1) return styles.done;
          if(index - status === 1 ) return styles.inProgress;
          if(index - status > 1) return styles.undone;
    }
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tbody>
              <tr className={styles.tr}>
                <td className={styles.th}>Order ID</td>
                <td className={styles.th}>Customer</td>
                <td className={styles.th}>Address</td>
                <td className={styles.th}>Total</td>
              </tr>
              <tr className={styles.tr}>
                <td>
                  <span className={styles.id}> 567890098765</span>
                </td>
                <td>
                  <span className={styles.name}>John Doe</span>
                </td>
                <td>
                  <span className={styles.address}> Anloga 8485</span>
                </td>
                <td>
                  <span className={styles.total}> $18.0</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.row}>
            <div className={statusClass(0)}>
                <Image src='/images/paid.png' alt='' height={30} width={30}/>
                <span>Payment</span>
                <div className={styles.checkedIcon}>
                <Image className={styles.checkedIcon} src='/images/checked.png' alt='' height={20} width={20}/>
                </div>
            </div>
            <div className={statusClass(1)}>
                <Image src='/images/bake.png' alt='' height={30} width={30}/>
                <span>Preparing</span>
                <div className={styles.checkedIcon}>
                <Image className={styles.checkedIcon} src='/images/checked.png' alt='' height={20} width={20}/>
                </div>
            </div>
            <div className={statusClass(2)}>
                <Image src='/images/bike.png' alt='' height={30} width={30}/>
                <span>On the way</span>
                <div className={styles.checkedIcon}>
                <Image  className={styles.checkedIcon} src='/images/checked.png' alt='' height={20} width={20}/>
                </div>
            </div>

            <div className={statusClass(3)}>
                <Image src='/images/delivered.png' alt='' height={30} width={30}/>
                <span>Delivered</span>
                <div className={styles.checkedIcon}>
                <Image className={styles.checkedIcon} src='/images/checked.png' alt='' height={20} width={20}/>
                </div>
            </div>
        </div>
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
          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
