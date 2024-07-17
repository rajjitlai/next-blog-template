import React from 'react'
import styles from "./mainpage.module.css"
import Menu from '@/components/menu/Menu'
import Image from 'next/image'
import Comments from '@/components/comments/Comments'

const MainPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Python Programming Part 26 - Inheritance in Python</h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image src="/images/rajjitlaishram.jpg" alt='admin' fill className={styles.userImage} />
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>Rajjit Laishram (Admin)</span>
                            <span className={styles.date}>08-07-2024</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/resources/python-part-26.png" alt='python-part-26' fill className={styles.image} />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt cumque, eum dicta nisi ex molestiae eveniet natus pariatur, unde ipsam, accusantium at! Eum, omnis! Id accusantium facilis nisi? Molestiae, laborum?
                        </p>
                    </div>
                    <div className={styles.comments}>
                        <Comments />
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default MainPage