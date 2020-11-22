import React from 'react';
import style from './style.css';
import Slider from "react-slick";
import {Link} from "react-router-dom";
import data from '../../data/home-page/homePageContent.json';
import imagesData from '../../data/blog-pages/pagesBlog.json';
import Popup from '../../components/Popup/Popup'
import {show} from "../../store/actions/popup";
import {connect} from "react-redux";

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
        link: ''
    }

    createBannerSlider = () => {
        return imagesData.map((item, index) => {
                const pageUrl = "/blog-html-page-" + index;
                return (
                    <div key={index} className={style.imageWrapper}>
                        <img className={style.bannerImg} src={window.location.origin + '/images/banner/' + item.image}
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
                        this.createUrl(index, this.props.show())
                    }}/>
                </li>
            )
        )
    }

    createUrl = (index) => {
        if (this.props.showPopup) {
            this.setState(() => {
                return {
                    link: ""
                }
            })
        } else if (!this.props.showPopup) {
            this.setState(() => {
                return {
                    link: data.content.links[index]
                }
            })
        }
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
                <Popup additionalFunction={this.createUrl}>
                    <div className={style.contentWrapper}>
                        <iframe src={this.state.link} frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="video"/>
                    </div>
                </Popup>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        showPopup: state.popup.showPopup
    }
}

function mapDispatchToProps(dispatch) {
    return {
        show: () => dispatch(show())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
