import Link from "next/link"
import styles from "./menupost.module.css"
import Image from "next/image"

const MenuPost = ({ withImage }) => {
    return (
        <div className={styles.items}>
            <Link href="/" className={styles.item} >
                {withImage && (<div className={styles.imageContainer}>
                    <Image src="/icon.png" alt='creator' fill className={styles.image} />
                </div>)}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.programming}`}>Programming</span>
                    <h3 className={styles.postTitle}>Python Programming Part 26</h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>Admin</span>
                        <span> - </span>
                        <span className={styles.date}>07-07-2024</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MenuPost