import Image from "next/image"
import styles from "./card.module.css"
import Link from "next/link"

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/resources/python-part-26.png" alt="python-part-26" fill className={styles.image} />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.details}>
                    <span className={styles.date}>07-07-2024</span>
                    <span> - </span>
                    <span className={`${styles.category} ${styles.chemistry}`}>Chemistry</span>
                </div>
                <Link href="/">
                    <h2 className={styles.title}>Python Programming Part 26 - Inheritance in Python</h2>
                </Link>
                <p className={styles.desc}>Inheritance allows a class to inherit attributes and methods from another class. The class that is inherited from is called the parent or superclass...</p>
                <Link href="/" className={styles.link}>Read more</Link>
            </div>
        </div>
    )
}

export default Card