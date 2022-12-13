import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import contactMe from '../assets/contactMe.gif';

const ContactMe = () => {

    const [loading, setLoading] = useState();
    // const handleSubmit = () => {
    //     toast.success("kam ok")
    //     toast.error("kam hoi nai")
    // }

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        toast.success("kam ok")
        toast.error("kam hoi nai")
        console.log(data);
    }
    console.log(errors);


    return (
        <div className={`py-10 bg-${contactMe}`}>
            <div className="flex flex-col md:flex-row md justify-between gap-5">
                <div className='w-full'>
                    <div className="text-center lg:text-left grid gap-5">
                        <p className='text-2xl md:text-5xl'>Contact Me <span className='text-primary'>...</span></p>
                        <p>If you have any query or suggestion or any other pls tell me in detail without any hesitate .</p>
                    </div>
                </div>
                {/* <div className="text-center lg:text-left">
                    <img src={contactMe} alt="" className="w-full sm:w-96 rounded-md" />
                </div> */}
                <div className="w-full">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex flex-col sm:flex-row gap-5 '>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" className="input input-bordered"
                                    {...register("name", { required: true, minLength: 6 })} />
                                <p className='text-red-800'>{errors?.name ? "At least 6 character" : ""}</p>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="example@mail.com" className="input input-bordered"
                                    {...register("email", { required: "Email is required" })}
                                />
                                <p className='text-red-800'>{errors?.email ? errors?.email?.message : ""}</p>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea name="message" id="" cols="30" rows="10" className="input h-28"
                                {...register("message", { required: true, maxLength: 20 })}
                            />
                            <p className='text-red-800'>{errors?.message ? "Feedback/Message at least 20 character" : ""}</p>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;