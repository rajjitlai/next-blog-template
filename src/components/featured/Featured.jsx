import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Featured = () => {
    return (
        <div className={styles.container}>
            <div className={styles.intro}>
                <h1 className={styles.title}>
                    Welcome to <b>RJ&apos;s BLOG<span>.</span></b>
                </h1>
                <span className={styles.welcomeButton}>
                    Please support my works on&nbsp;
                    <Link className={styles.support} href="https://github.com/rajjitlai" target='_blank'>
                        GitHub
                    </Link>
                </span>
            </div>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/resources/python-part-26.png" alt="python-part-26" fill className={styles.image} />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>Python Programming Part 26 - Inheritance in Python</h1>
                    <p className={styles.postDescription}>
                        In this article, we will learn about inheritance in Python, which is a powerful feature that allows us to create new classes by inheriting properties and methods from existing classes. We will cover various types of inheritance, such as single inheritance, multiple inheritance, and super() function.
                    </p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Featured