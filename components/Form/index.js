import styles from './Form.module.css'
import InstagramButtons from '../Buttons'
import InputFields from '../InputFields'
import Footer from '../Footer'


export default function Form() { 
    return(
        <>
            <div className={styles.formOuterContainer}>
                <div className={styles.formContainer}>
                    <form className={styles.form}>
                        <fieldSet className={styles.fieldSet}>
                            <legend><img src="https://www.dafont.com/forum/attach/orig/8/1/815933.png?1" alt="instagram logo" width="150px"/></legend>
                            <InputFields/>
                            <InstagramButtons/>
                            <div className={styles.line}>
                                <hr width="50%" size="2" color="#e5e5e5"/><span className={styles.orLine}>OR</span><hr width="150" size="2" color="e5e5e5"/>
                            </div>
                            <p className={styles.loginFacebook}><img className={styles.facebookIcon}src="https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19748.png" alt="Facebook login"/>Login with Facebook</p>
                            <p className={styles.forgotPassword}>Forgot Password?</p>
                        </fieldSet>
                        <div className={styles.signUpBox}>
                            <p className={styles.account}>Don't have an account?<span className={styles.signUp}> Sign up</span></p>
                        </div>
                        <p className={styles.getApp}>Get the app.</p>
                        <img className={styles.appLogo} src="./Images/apps.png" alt="app logo"/>
                    </form>
                   
                </div>
            </div>
            <Footer/>
        </>
    )
}