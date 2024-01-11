import styles from './Form.module.css'

export default function Form() { 
    return(
        <>
            <div className={styles.formOuterContainer}>
                <div className={styles.formContainer}>
                    <form className={styles.form}>
                        <fieldSet className={styles.fieldSet}>
                            <legend><img src="https://www.dafont.com/forum/attach/orig/8/1/815933.png?1" alt="instagram logo" width="190px"/></legend>

                            <input
                                id="firstName"
                                className={styles.firstNameInput}
                                type="text"
                                placeholder="Phone number, username, or email"
                            />


                            <input
                                id="password"
                                className={styles.passwordInput}
                                type="password"
                                placeholder="Password"
                            />
                             <button className={styles.buttonClass}>Log in</button>
                        </fieldSet>
                    </form>
                   
                </div>
            </div>
        
        
        
        
        
        </>
    )
}