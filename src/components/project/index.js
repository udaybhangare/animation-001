'use client'

import React from "react"
import styles from "./styles.module.css"

export default function index({index, title, setModal}) {
  return(
    <div onMouseEnter={()=>{setModal({active: true, index: index})}} onMouseLeave={()=>{setModal({active: false, index: index})}} className={styles.project}>
      <h2>{title}</h2>
      <p>Design and Development</p>
    </div>
  )
}