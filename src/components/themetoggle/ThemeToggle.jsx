"use client"

import React, { useContext } from 'react'
import styles from "./theme.module.css"
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext'

const ThemeToggle = () => {
    const { toggle, theme } = useContext(ThemeContext)

    return (
        <div className={styles.container} onClick={toggle} style={theme === "dark" ? { backgroundColor: "white" } : { backgroundColor: "#0f172a" }}>
            <Image src="/moon.svg" alt='x' width={14} height={14} />
            <div className={styles.ball} style={
                theme === "dark" ?
                    { left: 1, background: "#0f172a" } :
                    { right: 1, background: "#fff" }}>
            </div>
            <Image src="/sun.svg" alt='o' width={14} height={14} />
        </div>
    )
}

export default ThemeToggle