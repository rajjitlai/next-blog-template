"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from "./bottomnavigation.module.css";
import classNames from 'classnames';
import { FaBlog, FaCompass, FaHome} from 'react-icons/fa';
import { MdEmail } from "react-icons/md";

const BottomNavigation = () => {
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
        <div className={classNames(styles.bottomNav, { [styles.show]: show })}>
            <div className={styles.links}>
                <Link href="/" className={styles.link}>
                    <FaHome />
                </Link>
                <Link href="/about" className={styles.link}>
                    <FaCompass />
                </Link>
                <Link href="/blog" className={styles.link}>
                    <FaBlog />
                </Link>
                <Link href="/contact" className={styles.link}>
                    <MdEmail />
                </Link>
            </div>
        </div>
    );
};

export default BottomNavigation;
