import React from 'react';
import style from './style.css';
import Slider from "react-slick";
import {Link} from "react-router-dom";
import data from '../../data/home-page/homePageContent.json';
import imagesData from '../../data/home-page/bannerImages.json';

class Home extends React.Component {
    state = {
        carouselSettings: {
            dots: false,
            infinite: true,
            speed: 800,
            autoplaySpeed: 5000,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1
        },
        flag: false,
        link: ''
    }

    createBannerSlider = () => {
        return imagesData.map((item, index) => {
                const pageUrl = "/blog-page-html-" + index;
                return (
                    <div key={index} className={style.imageWrapper}>
                        <img className={style.bannerImg} src={window.location.origin + '/images/banner/' + item}
                             alt="slide"/>
                        <Link to={pageUrl} className={style.buttonLink}>View</Link>
                    </div>
                )
            }
        )
    }

    renderPosters = () => {
        return data.content.icons.map((item, index) => (
                <li className={style.ceil} key={index.toString()}>
                    <img src={window.location.origin + '/images/home-page/' + item} alt="slide"/>
                    <span className={style.link} onClick={() => {
                        this.showPopup(index)
                    }}/>
                </li>
            )
        )
    }

    showPopup = (index) => {
        if (!this.state.flag) {
            this.setState((prevState) => {
                return {
                    flag: !prevState.flag,
                    link: data.content.links[index]
                }
            })
        } else {
            this.setState((prevState) => {
                return {
                    flag: !prevState.flag,
                    link: ''
                }
            })
        }
    }

    createPopup = () => {
        const classes = [style.popupWindow];
        if (this.state.flag) {
            classes.push(style.active);
        } else if (!this.state.flag && classes.indexOf('active') !== -1) {
            classes.splice(-1, 1);
        }
        return (
            <div className={classes.join(' ')} onClick={() => {
                this.showPopup(null)
            }}>
                <div className={style.contentWrapper}>
                    <iframe src={this.state.link} frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="video"/>
                </div>
            </div>
        )
    }

    render() {
        return (
            <React.Fragment>
                <Slider {...this.state.carouselSettings}>
                    {this.createBannerSlider()}
                </Slider>
                <div className={style.textWrapper}>
                    <h1 className={style.title}>{data.pageText.pageTitle}</h1>
                    <p className={style.text}>{data.pageText.pageAfterTitle}</p>
                </div>
                <ul className={style.linksWrapper}>
                    {this.renderPosters()}
                </ul>
                {this.createPopup()}
            </React.Fragment>
        )
    }
}

export default Home;
