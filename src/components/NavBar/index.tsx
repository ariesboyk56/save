import styles from './HeadingBar.module.scss'

const HeadingBar = () => {
    return (
        <div className="grid">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className={styles.content}>
                        <div className={styles.contact}>
                            <div className={styles.item}>
                                <a href="mailto:default@gmail.com">
                                    <i className="far fa-envelope mr-10"></i>
                                    <span>default@gmail.com</span>
                                </a>
                            </div>

                            <div className={styles.item}>
                                <a href="tel:0123456789">
                                    <i className="fas fa-phone-volume mr-10"></i>
                                    <span>0123-456-789</span>
                                </a>
                            </div>
                        </div>

                        <div className={styles.action}>
                            <div className={styles.item}>
                                <span>English</span>
                                <i className=" ml-4 fas fa-angle-down"></i>
                            </div>

                            <div className={styles.item}>
                                <span>USD</span>
                                <i className=" ml-4 fas fa-angle-down"></i>
                            </div>

                            <div className={styles.item}>
                                <span>Login</span>
                                <i className=" ml-4 far fa-user"></i>
                            </div>

                            <div className={styles.item}>
                                <span>Wishlist</span>
                                <i className=" ml-4 far fa-heart"></i>
                            </div>

                            <div className={styles.item}>
                                <i className="fas fa-shopping-cart ml-4"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeadingBar
