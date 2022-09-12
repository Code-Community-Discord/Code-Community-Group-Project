import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer(){
    return (
        <footer className={`${styles.footer}`}>
            <p>Copyright 2022 Company Name</p>
            <Image src="/cc_logo.png" width={50} height={50}></Image>
        </footer>
    )
}