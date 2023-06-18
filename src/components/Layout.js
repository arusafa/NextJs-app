import Link from "next/link"
import styles from '../styles/Home.module.css'

/* Menu Component here */
function Menu() {
    return(
        <ul>
            <Link href="/"><div>Home</div></Link>&nbsp;
            <Link href="/contacts"><div>Contacts</div></Link>
        </ul>
    )
}

export default function Layout({children }) {
    return(
        <div className={styles.container}>
            {/* insert Menu here */}
            <Menu />
            {children}
        </div>)
}