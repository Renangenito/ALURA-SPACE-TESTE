import React from 'react'
import Styles from './Button.module.scss'

export default function Button({children}) {
  return (
    <button className={Styles.button}>{children}</button>
  )
}