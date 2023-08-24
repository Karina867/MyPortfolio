import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../..//assets/img/me.jpeg"
import './Banner.css';
import { HashLink } from 'react-router-hash-link';

class Banner extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loopNum: 0,
            isDeleting: false,
            textToRotate: this.props.data.toRotate,
            text: "",
            period: 1000,
            setDelta: 300 - Math.random() * 100,
            connected: false,
        };
        this.connectClick = this.connectClick.bind(this);
    }


    componentDidMount() {
        setInterval(
            () => this.tick(),
            this.state.setDelta
        );
    }


    tick() {

        let i = this.state.loopNum % this.state.textToRotate.length;
        let fullText = this.state.textToRotate[i];
        let updatedText = this.state.isDeleting ? fullText.substring(0, this.state.text.length - 1) : fullText.substring(0, this.state.text.length + 1);
        this.setState({
            text: updatedText
        });

        if (this.state.isDeleting) {
            this.setState({
                setDelta: this.state.setDelta / 2
            })
        }
        if (!this.state.isDeleting && updatedText === fullText) {
            this.setState({
                setDelta: this.state.period,
                isDeleting: true
            })

        } else if (this.state.isDeleting && updatedText === '') {
            this.setState({
                isDeleting: false,
                loopNum: this.state.loopNum + 1,
                setDelta: 5000
            })

        }

    }

    connectClick() {
        this.setState({
            connected: !this.state.connected
        });
    }

    render() {

        return (
            <section className='banner' id='home'>
                <Container >
                    <Row className="align-items-center">
                        <Col xs={12} md={6} xl={7}>
                            <span className='tagline'>{this.props.data.title} </span>
                            <h1>{this.props.data.myselfPresentation}<span className='wrap'> {this.state.text} </span></h1>
                            <p>{this.props.data.myselftDescription}</p>
                            <HashLink to='#contact'>
                            <button className='connect' onClick={this.connectClick}> <span>Let’s Connect</span> <ArrowRightCircle size={25}></ArrowRightCircle></button>
                            </HashLink>
                            
                        </Col>
                        <Col xs={12} md={6} xl={5} >
                            <img src={headerImg} alt="Header Img" height="370" />
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}



export default Banner;