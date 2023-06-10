import React from 'react'
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import ContactForm from './Contact1';
import './Contact.css';



const Contact = () => {
    return (
        
        <Container style={{ padding: '60px' }} >
            <Particle />
            
            <ContactForm />
        

        </Container>
    )
}

export default Contact