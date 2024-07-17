import Link from "next/link"
import styles from "./menucategories.module.css"

const MenuCategories = () => {
    return (
        <div className={styles.categoryList}>
            <Link href="/blog?cat=chemistry" className={`${styles.categoryItem} ${styles.chemistry}`}>
                Chemistry
            </Link>
            <Link href="/blog?cat=physics" className={`${styles.categoryItem} ${styles.physics}`}>
                Physics
            </Link>
            <Link href="/blog?cat=programming" className={`${styles.categoryItem} ${styles.programming}`}>
                Programming
            </Link>
            <Link href="/blog?cat=english" className={`${styles.categoryItem} ${styles.english}`}>
                English
            </Link>
        </div>
    )
}

export default MenuCategories