import React from 'react'
import styles from "./categorylist.module.css"
import Link from 'next/link'
import Image from 'next/image'

const CategoryList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Popular Categories</h1>
            <div className={styles.categories}>
                <Link href="/blog?cat=chemistry" className={`${styles.category} ${styles.chemistry}`}>
                    <Image src="/assets/chemistry.jpg" alt='chemistry' width={32} height={32} className={styles.image} />
                    Chemistry
                </Link>
                <Link href="/blog?cat=physics" className={`${styles.category} ${styles.physics}`}>
                    <Image src="/assets/physics.jpg" alt='physics' width={32} height={32} className={styles.image} />
                    Physics
                </Link>
                <Link href="/blog?cat=programming" className={`${styles.category} ${styles.programming}`}>
                    <Image src="/assets/programming.jpg" alt='programming' width={32} height={32} className={styles.image} />
                    Programming
                </Link>
                <Link href="/blog?cat=english" className={`${styles.category} ${styles.english}`}>
                    <Image src="/assets/english.jpg" alt='english' width={32} height={32} className={styles.image} />
                    English
                </Link>
            </div>
        </div>
    )
}

export default CategoryList