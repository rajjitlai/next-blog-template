"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AuthLinks from '../authlinks/AuthLinks';
import styles from "./floatingnavbar.module.css";
import classNames from 'classnames';

const FloatingNavbar = () => {
    const [show, setShow] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setShow(true);
        } else {
            setShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => { window.removeEventListener('scroll', handleScroll); };
    }, []);

    return (
        <div className={classNames(styles.floatNav, { [styles.show]: show })}>
            <div className={styles.links}>
                <Link href="/" className={styles.link}>Home</Link>
                <Link href="/about" className={styles.link}>About</Link>
                <Link href="/blog" className={styles.link}>Blog</Link>
                <Link href="/contact" className={styles.link}>Contact</Link>
                <AuthLinks />
            </div>
        </div>
    );
};

export default FloatingNavbar;
