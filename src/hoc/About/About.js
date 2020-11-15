import React from 'react';
import Slider from "react-slick";
import MessageForm from "../../components/MessageForm/MessageForm";
import data from '../../data/about-page/about.json'
import style from './style.css';

class About extends React.Component {
    state = {
        settings: {
            dots: false,
            infinite: true,
            speed: 800,
            slidesToShow: 4,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        autoplaySpeed: 4000,
                        autoplay: true,
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        autoplaySpeed: 4000,
                        autoplay: true,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        autoplaySpeed: 4000,
                        autoplay: true,
                    }
                }
            ]
        },
        popupClasses: [style.blindMessageForm]
    }

    createItems = () => {
        return data.info.map((item, index) => {
            return (
                <React.Fragment key={index}>
                    <div className={style.sliderItem}>
                        <img src={window.location.origin + '/icons/about-page/' + item.image} alt=""/>
                        <div className={style.textWrapper}>
                            <p>{item.data}</p>
                            <p>{item.title}</p>
                        </div>
                    </div>
                </React.Fragment>
            )
        })
    }

    showForm = (event) => {
        const classes = [style.blindMessageForm];
        //event.preventDefault();
        if(this.state.popupClasses.indexOf(style.show) === -1 && event.target.tagName === 'BUTTON'){
            classes.push(style.show)
            this.setState({
                popupClasses: classes
            });
        } else if (event.target.tagName === 'DIV'){
            this.setState({
                popupClasses: [style.blindMessageForm]
            });
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className={style.bannerWrapper}>
                    <img src={window.location.origin + '/images/about/marvel-stud.jpg'} alt="marvel-studio"/>
                </div>
                <div className={style.sliderWrapper}>
                    <Slider {...this.state.settings}>
                        {this.createItems()}
                    </Slider>
                </div>
                <div className={style.aboutTextWrapper}>
                    <div>
                        <div className={style.imageWrapper}>
                            <img src={window.location.origin + '/images/about/image.jpg'} alt="about-project"/>
                        </div>
                        <div className={style.textWrapperAbout}>
                            <h1 className={style.title}>{data.about.title}</h1>
                            <p className={style.textTitle}><strong>{data.about.textTitle}</strong></p>
                            <p>{data.about.text}</p>
                        </div>
                    </div>
                </div>
                <div className={style.needProjectWrapper}>
                    <React.Fragment>
                        <h3>{data.needProject.title}</h3>
                        <p>{data.needProject.text}</p>
                        <span className={style.buttonWrap}>
                        <button onClick={this.showForm} className={style.button}>{"Lets Talk"}</button>
                        </span>
                    </React.Fragment>
                    <div className={this.state.popupClasses.join(' ')} onClick={this.showForm}>
                        <MessageForm formTitle={'Enter Your message'}
                        />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default About;
