import React from 'react'
import styles from './Notification.module.css'

const Notification = ({message}) => {
    if(!message) return null;

  return (
    <div className={styles.error}>
        {message}
    </div>
  )
}

export default Notification