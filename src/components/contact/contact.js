import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../assets/img/contact-img.svg";
import { Formik, Form, ErrorMessage } from 'formik';

import TrackVisibility from 'react-on-screen';
import '../contact/contact.css';

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});



    const submit = async (val) => {
        console.log('Test: ' + JSON.stringify(val));
        setButtonText("Sending...");
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Send");
        let result = await response.json();
       
        if (result.code == 200) {
            setStatus({ succes: true, message: 'Message sent successfully' });
        } else {
            setStatus({ succes: false, message: 'Something went wrong, please try again later.' });
        }
    };

    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
                            }
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Get In Touch</h2>

                                    <Formik initialValues={{
                                        firstName: '',
                                        lastName: '',
                                        email: '',
                                        phone: '',
                                        message: ''
                                    }}
                                    validate={(val) => {
                                            let errors = {}
                                            if (!val.firstName) {
                                                errors.nombre = 'Ingrese su nombre';
                                            }
                                            if (!val.lastName) {
                                                errors.apellido = 'Ingrese su apellido';
                                            }
                                            if (!val.phone) {
                                                errors.phone = 'Ingrese su numero de telefono';
                                            }
                                            return errors;
                                        }}
                                        onSubmit={async (values) => {
                                        console.log('onSumit', values);
                                            submit(values);
                                        }}
                                    >
                                        {({ values, errors, handleChange }) => (
                                            <Form  >
                                                <Row>
                                                    <Col size={12} sm={6} className="px-1">
                                                        <input type="text" value={values.firstName} id='firstName' placeholder="First Name" onChange={handleChange} />
                                                        <ErrorMessage name="firstName" component="div" />
                                                    </Col>
                                                    <Col size={12} sm={6} className="px-1">
                                                        <input type="text" value={values.lastName} id='lastName' placeholder="Last Name" onChange={handleChange} />
                                                        <ErrorMessage name="lastName" component="div" />
                                                    </Col>
                                                    <Col size={12} sm={6} className="px-1">
                                                        <input type="email" value={values.email} id="email" placeholder="Email Address" onChange={handleChange} />
                                                    </Col>
                                                    <Col size={12} sm={6} className="px-1">
                                                        <input type="tel" value={values.phone} id='phone' placeholder="Phone No." onChange={handleChange} />
                                                        <ErrorMessage name="phone" component="div" />
                                                    </Col>
                                                    <Col size={12} className="px-1">
                                                        <textarea rows="6" value={values.message} id='message' placeholder="Message" onChange={handleChange} ></textarea>
                                                        <button type="submit"><span>{buttonText}</span></button>
                                                    </Col>
                                                    {
                                                        status.message &&
                                                        <Col>
                                                            <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                                        </Col>
                                                    }
                                                </Row>
                                            </Form >
                                        )}



                                    </Formik>


                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}