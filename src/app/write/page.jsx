"use client"

import React, { useState } from 'react'
import styles from "./write.module.css"
import { FaPlus } from "react-icons/fa6";
import { FcAddImage } from "react-icons/fc";
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.bubble.css"

const Write = () => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")

    return (
        <div className={styles.container}>
            <input type="text" placeholder='Title' className={styles.input} />
            <div className={styles.editor}>
                <button className={styles.button}>
                    <FaPlus onClick={() => setOpen(!open)} style={{ fontSize: 18 }} />
                </button>
                {
                    open &&
                    (
                        <div className={styles.add}>
                            <button className={styles.addButton}>
                                <FcAddImage />
                            </button>
                        </div>
                    )
                }
                <ReactQuill className={styles.textArea} theme='bubble' value={value} onChange={setValue} placeholder='Enter contents...' />
            </div>

            <button className={styles.publish}>Publish</button>
        </div>
    )
}

export default Write