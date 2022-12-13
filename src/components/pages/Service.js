import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Service = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log("current", form.current);
        emailjs.sendForm('service_y24v1fq', 'template_q4g2usf', form.current, 'rH_rcDzmrZ-Ro-Udd')
            .then((result) => {
                console.log(result.text);
                console.log("send succsess");
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="block">
            <label>Name</label>
            <input type="text" name="name" />
            <label>Email</label>
            <input type="email" name="email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    );
};

export default Service;