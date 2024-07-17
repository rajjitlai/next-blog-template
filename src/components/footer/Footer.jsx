import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaGithub, FaGlobe, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.info}>
                    <div className={styles.logo}>
                        <Image src="/icon.png" alt='logo' width={50} height={50} />
                        <h1 className={styles.logoText}>RJ&apos;s Blog<span>.</span></h1>
                    </div>
                    <p className={styles.desc}>
                        RJ&apos;s Blog<span>.</span> is a blog website for programming, useful notes and skills development. <br />
                        You are currently viewing the Homepage 😊
                    </p>
                    <div className={styles.icons}>
                        <div className={styles.social}>
                            <Link href="https://facebook.com/rajjitlaishram" target='_blank' className={styles.iconDef}>
                                <FaFacebook />
                            </Link>
                            <Link href="https://x.com/rajjitlai" target='_blank' className={styles.iconDef}>
                                <FaXTwitter />
                            </Link>
                            <Link href="https://instagram.com/rajjitlaishram" target='_blank' className={styles.iconDef}>
                                <FaInstagram />
                            </Link>
                            <Link href="https://youtube.com/@rjinstitute.rajjit?sub_confirmation=1" target='_blank' className={styles.iconDef}>
                                <FaYoutube />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.links}>
                    <div className={styles.list}>
                        <span className={styles.listTitle}>Useful Links</span>
                        <Link href="/">Home</Link>
                        <Link href="/">About</Link>
                        <Link href="/">Blog</Link>
                        <Link href="/">Contact</Link>
                    </div>
                    <div className={styles.list}>
                        <span className={styles.listTitle}>Tags</span>
                        <Link href="/">Chemistry</Link>
                        <Link href="/">Physics</Link>
                        <Link href="/">Programming</Link>
                        <Link href="/">English</Link>
                    </div>
                    <div className={styles.list}>
                        <span className={styles.listTitle}>Social</span>
                        <Link href="https://github.com./rajjitlai" target='_blank'>
                            <FaGithub />
                        </Link>
                        <Link href="https://linkedin.com/in/rajjit-laishram-a03a02255" target='_blank'>
                            <FaLinkedin />
                        </Link>
                        <Link href="https://mypersonalportfolio-rl.netlify.app" target='_blank'>
                            <FaGlobe />
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.cpInfo}>
                <p className={styles.copyright}>
                    &copy; 2023-2024 RJ&apos;s Blog<span>.</span> All rights reserved.
                </p>
            </div>
        </>

    )
}

export default Footer 