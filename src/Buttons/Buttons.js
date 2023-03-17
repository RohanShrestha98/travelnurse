import React from 'react'

import styles from './button.module.css'
// const PrimaryButton = ({ text }) => {
//   return (
//     <button className="btn-gradient rounded-full py-4 px-6">
//         {text}
//     </button>
//   )
// }

const PrimaryButton = ({ text }) => {
  return (
    <button className={styles.button}>
        <div className={styles.button__line}></div>
        <div className={styles.button__line}></div>
        <span className={styles.button__text}>{text}</span>
        <div className={styles.button__drow1}></div>
        <div className={styles.button__drow2}></div>
    </button>
  )
}

const SecondaryButton = ({ text }) => {
    return (
        <button className={styles.button}>
            <div className={styles.button__line}></div>
            <div className={styles.button__line}></div>
            <span className={styles.button__text}>{text}</span>
        </button>
    )
}

const FlatButton = ({ text }) => {
    return (
        <button className="bg-transparent border-none px-6 py-4 font-bold text-secondary hover:tracking-widest transition-all">
            {text}
        </button>
    )
}

export { PrimaryButton, SecondaryButton, FlatButton }