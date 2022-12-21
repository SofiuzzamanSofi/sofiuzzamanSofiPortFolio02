import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const ContactMe = () => {

    const form = useRef();
    const [loading, setLoading] = useState();
    // const handleSubmit = () => {
    //     toast.success("kam ok")
    //     toast.error("kam hoi nai")
    // }

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data);
        // console.log(errors);
    }

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(process.env.REACT_APP_SERVICE_ID);
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                toast.success(`Dear ${e.target?.name.value}, Your Valuable Feedback/Message is Submitted.`)
            }, (error) => {
                console.log(error.text);
                toast.error(`Dear ${e.target?.name.value}, Something error.`)
            });
    };


    return (
        <div className="py-10" id="contact">
            <div className="flex flex-col md:flex-row md justify-between gap-5">
                <div className='w-full'>
                    <div className="text-center lg:text-left grid gap-5">
                        <p className='text-3xl md:text-5xl'>Contact Me <span className='text-primary'>...</span></p>
                        <p>If you have any query or suggestion or any other pls tell me in detail without any hesitate .</p>
                    </div>
                </div>
                {/* <div className="text-center lg:text-left">
                    <img src={contactMe} alt="" className="w-full sm:w-96 rounded-md" />
                </div> */}
                <div className="w-full">
                    {/* <form onSubmit={handleSubmit(onSubmit)} ref={form} onSubmit={sendEmail}> */}
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='flex flex-col sm:flex-row gap-5 '>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" required placeholder="Your Name" className="input input-bordered"
                                    {...register("name", { required: true, minLength: 6 })} />
                                <p className='text-red-800'>{errors?.name ? "At least 6 character" : ""}</p>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" required placeholder="example@mail.com" className="input input-bordered"
                                    {...register("email", { required: "Email is required" })}
                                />
                                <p className='text-red-800'>{errors?.email ? errors?.email?.message : ""}</p>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea name="message" required id="" cols="30" rows="10" className="input h-28" placeholder="describe your feedback/message"
                                {...register("message", { required: true, maxLength: 20 })}
                            />
                            <p className='text-red-800'>{errors?.message ? "Feedback/Message at least 20 character" : ""}</p>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Submit" className="input input-bordered text-white cursor-pointer bg-primary hover:bg-[#4800ff]" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;