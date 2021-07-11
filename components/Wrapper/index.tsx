import { FC } from 'react'
import styles from './styles.module.css'

export const Wrapper: FC = ({ children }) => (
    <div className={styles.wrapper}>
        <div className={styles.container}>{children}</div>
    </div>
)
