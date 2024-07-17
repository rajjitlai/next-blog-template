import React from 'react'
import styles from "./menu.module.css"
import Link from 'next/link'
import Image from 'next/image'
import MenuPost from '../menupost/MenuPost'
import MenuCategories from '../menucategories/MenuCategories'

const Menu = () => {
    return (
        <div className={styles.container}>
            <div>
                <h2 className={styles.subtitle}>Top contents</h2>
                <h1 className={styles.title}>Most Popular</h1>
                <MenuPost withImage={false} />
            </div>
            <div>
                <h2 className={styles.subtitle}>Browse topics</h2>
                <h1 className={styles.title}>Categories</h1>
                <MenuCategories />
            </div>
            <div>
                <h2 className={styles.subtitle}>Created by the Editor</h2>
                <h1 className={styles.title}>Editor&apos;s Picks</h1>
                <MenuPost withImage={true} />
            </div>
        </div>
    )
}

export default Menu