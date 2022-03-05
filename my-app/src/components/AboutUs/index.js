import React from "react"
import styles from "./AboutUs.module.css"
import Header from "../Header"
import Footer from "../Footer"
const AboutUs = () =>{
    return (
        <div>
            <Header />
            <div className={styles.aboutUs}>
                <div className="container">
                    <h2 className={styles.heading}>About Us</h2>
                    <div className={`${styles.myTeam}`}>
                        <h4 className={styles.headingMyTeam}>We’re here to guarantee your success</h4>
                        <div className={styles.descMyTeam}>
                            <span >ConsultUs provides consulting services that help business owners and leaders build a more valuable business. We worked with their founder to build a professional, modern site that follows the StoryBrand framework to clearly communicates the value it adds to potential clients</span>
                        </div>
                    </div>
                    <div className={styles.ourTeam}>
                        <h3 className={styles.headingOurTeam}>Our Team</h3>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <img className={styles.avatar} src="./img/thanhtuan.png" alt="" />
                            <h4 className={styles.nameAvatar}>Huỳnh Đức Thanh Tuấn</h4>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <img className={styles.avatar} src="./img/thanhtuan.png" alt="" />
                            <h4 className={styles.nameAvatar}>Huỳnh Đức Thanh Tuấn</h4>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <img className={styles.avatar} src="./img/thanhtuan.png" alt="" />
                            <h4 className={styles.nameAvatar}>Huỳnh Đức Thanh Tuấn</h4>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <img className={styles.avatar} src="./img/thanhtuan.png" alt="" />
                            <h4 className={styles.nameAvatar}>Huỳnh Đức Thanh Tuấn</h4>
                        </div>
                    </div>
                    {/* arrow_back  arrow_forward panorama_fish_eye*/}

                    <div className={styles.carouselItem}>
                        <i className="small material-icons">arrow_back </i> 
                        <div className={styles.nextItem}>
                            <i className="tiny material-icons">panorama_fish_eye </i> 
                            <i className="tiny material-icons">panorama_fish_eye </i> 
                            <i className="tiny material-icons">panorama_fish_eye </i> 
                        </div>
                        <i className="small material-icons">arrow_forward </i> 
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUs

