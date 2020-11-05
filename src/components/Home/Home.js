import React from 'react';
import styles from './style.css';
import {Link} from "react-router-dom";
import Slider from "react-slick";
import data from '../../data/home-page/homePageContent.json';
import imagesData from '../../data/home-page/bannerImages.json';

const Home = () => {
    const carouselSettings = {
        dots: false,
        infinite: true,
        speed: 800,
        autoplaySpeed: 5000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1

    }
    
    const createBannerSlider = () => {
        return imagesData.map((item, index) => (
                <div key={index}>
                    <img className={styles.bannerImg} src={window.location.origin + '/images/banner/' + item} alt="image"/>
                </div>
            )
        )
    }

    const renderLinks = () => {
        return data.content.icons.map((item, index) => (
                <li className={styles.ceil} key={index.toString()}>
                    <img src={window.location.origin + '/images/home-page/' + item} alt=""/>
                    <Link className={styles.link} to="/"/>
                </li>
            )
        )
    }

    return (
        <React.Fragment>
            <Slider {...carouselSettings}>
                {createBannerSlider()}
            </Slider>
            <div>
                <h1 className={styles.title}>{data.pageText.pageTitle}</h1>
                <p>{data.pageText.pageAfterTitle}</p>
            </div>
            <ul className={styles.linksWrapper}>
                {renderLinks()}
            </ul>
        </React.Fragment>
    )
}

export default Home;
