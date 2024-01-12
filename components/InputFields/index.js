import styles from './InputFields.module.css'
export default function InputFields() { 
    return(
        <>
                <input
                    id="firstName"
                    className={styles.firstNameInput}
                    type="text"
                    placeholder="Phone number, username, or email"
                />


                <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    className={styles.passwordInput}
            />
        
        
        
        </>
    )
}