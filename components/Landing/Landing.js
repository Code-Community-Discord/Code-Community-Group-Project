import Head from 'next/head'
import styles from './Landing.module.css'

export default function Landing(){
    return (
        <div className={`${styles.formCard}`}>
            <form className={styles.form}>
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Password" />
                <button>Log In</button>
                <p>Forgot password?</p>
                <hr />
                <button style={{marginBottom: 0}}>Sign up</button>
            </form>
        </div>
    )
}