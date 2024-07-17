import Link from "next/link"
import styles from "./comments.module.css"
import React from 'react'
import Image from "next/image";

const Comments = () => {
    const status = "authenticated"

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Comments
            </h1>
            {status === "authenticated" ? (
                <div className={styles.write}>
                    <textarea placeholder="Write a comment..." className={styles.input} />
                    <button className={styles.button}>
                        Send
                    </button>
                </div>
            ) : (
                <Link href="/login">
                    Login to comment
                </Link>
            )}
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/images/rajjitlaishram.jpg" alt="rajjitlaishram" className={styles.userImage} width={50} height={50} />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>Rajjit Laishram</span>
                            <span className={styles.date}>
                                09-07-2024
                            </span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Hello, this is my blog!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Comments