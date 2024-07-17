import React from 'react'
import styles from "./navbar.module.css"
import Link from 'next/link'
import AuthLinks from '../authlinks/AuthLinks'
import ThemeToggle from '../themetoggle/ThemeToggle'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.social}>
                <Link href="https://facebook.com/rajjitlaishram" target='_blank' className={styles.iconDef}>
                    <FaFacebook />
                </Link>
                <Link href="https://x.com/rajjitlai" target='_blank' className={styles.iconDef}>
                    <FaXTwitter/>
                </Link>
                <Link href="https://instagram.com/rajjitlaishram" target='_blank' className={styles.iconDef}>
                    <FaInstagram />
                </Link>
                <Link href="https://youtube.com/@rjinstitute.rajjit?sub_confirmation=1" target='_blank' className={styles.iconDef}>
                    <FaYoutube />
                </Link>
            </div>
            <div className={styles.logo}>
                <p>RJ&apos;s BLOG<span>.</span></p>
            </div>
            <div className={styles.links}>
                <ThemeToggle />
                <Link href="/" className={styles.link}>Home</Link>
                <Link href="/" className={styles.link}>About</Link>
                <Link href="/" className={styles.link}>Blog</Link>
                <Link href="/" className={styles.link}>Contact</Link>
                <AuthLinks />
            </div>
        </div>
    )
}

export default Navbar