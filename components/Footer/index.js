import styles from './Footer.module.css'

export default function Footer() {
    return(
        <>
        <footer className={styles.footerComponents}>
            <div className={styles.footerList}>
                <p>Meta</p>
                <p>About</p>
                <p>Blog</p>
                <p>Jobs</p>
                <p>Help</p>
                <p>API</p>
                <p>Privacy</p>
                <p>Terms</p>
                <p>Locations</p>
                <p>Threads</p>
                <p>Contact Uploading & Non-Users</p>
                <p>Meta Verified</p>
            </div>
            <div className={styles.footerPartTwo}>
                <p>English</p>
                <p>© 2024 Instagram from Meta</p>

            </div>

        </footer>
        
        
        </>
    )

}