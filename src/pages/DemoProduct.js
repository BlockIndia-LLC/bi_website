import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import {useDocTitle} from '../components/CustomHook';
import axios from 'axios';
import emailjs from 'emailjs-com';
import Notiflix from 'notiflix';

const DemoProduct = (props) => {

    useDocTitle('BlocksIndia | Demo our products')

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [demoProducts, setDemoProducts ] = useState([])
    const [errors, setErrors] = useState([])


    const handleChange = (e) => {
        const value = e.target.value
        const checked = e.target.checked
        errors.products = []
        if(checked) {
            setDemoProducts([
                ...demoProducts, value
            ])
        } else {
            setDemoProducts(demoProducts.filter( (e) => (e !== value )))
        }

    }
    const clearErrors = () => {
        setErrors([])
    }

    const clearInput = () => {
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhone('')
        setMessage('')
    }

    function sendEmail(e) {
        e.preventDefault();
        document.getElementById('submitBtn').disabled = true;
        document.getElementById('submitBtn').innerHTML = 'Loading...';
        let fData = new FormData();
        fData.append('first_name', firstName)
        fData.append('last_name', lastName)
        fData.append('email', email)
        fData.append('phone_number', phone)
        fData.append('message', message)
        fData.append('products', demoProducts)

        emailjs.sendForm('service_4j9sodf', 'template_83d8uij', e.target, 'qGZlyFg-cE6G5U4S9')
          .then((result) => {
              console.log(result.text);
              Notiflix.Report.success(
                'Success',
                '"Thanks for sending a message, we\'ll be in touch soon."',
                'Okay',
                );
          }, (error) => {
              console.log(error.text);
              Notiflix.Report.failure(
                'An error occured',
                'Please try sending the message again.',
                'Okay',
                );
          });

        axios({
            method: "post",
            url: process.env.REACT_APP_DEMO_REQUEST_API,
            data: fData,
            headers: {
                'Content-Type':  'multipart/form-data'
            }
        })
        .then(function (response) {
            document.getElementById('submitBtn').disabled = false;
            document.getElementById('submitBtn').innerHTML = 'Send Message';
            clearInput()
            Notiflix.Report.success(
                'Success',
                response.data.message,
                'Okay',
            );
        })
        .catch(function (error) {
            document.getElementById('submitBtn').disabled = false;
            document.getElementById('submitBtn').innerHTML = 'Send Message';
            const { response } = error;
            if(response.status === 500) {
                Notiflix.Report.failure(
                    'An error occurred',
                    response.data.message,
                    'Okay',
                );
            }
            if(response.data.errors !== null) {
                setErrors(response.data.errors)
            }

        });
    }
    return (
        <>
            <NavBar />

            {/* Page hero strip */}
            <div className="bg-surface-950 pt-28 pb-16">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-white">Demo our products</h1>
                    <p className="mt-3 text-surface-200/70">Select the products you're interested in and we'll get back to you.</p>
                </div>
            </div>

            {/* Form section */}
            <div className="max-w-7xl mx-auto px-6 -mt-8 pb-20" data-aos="fade-up">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Form card */}
                    <div className="lg:col-span-2 bg-white rounded-2xl border border-surface-200 shadow-sm p-8 md:p-12">
                        <form onSubmit={sendEmail} id="demoProductForm">
                            <h3 className="text-lg font-semibold text-surface-900 mb-4">Select products</h3>
                            <div className="grid sm:grid-cols-2 gap-3 mb-6">
                                <label className="flex items-center gap-3 p-3 rounded-xl border border-surface-200 hover:border-primary-200 hover:bg-primary-50/50 transition-all duration-200 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5 rounded-lg border-surface-300 text-primary-600 focus:ring-primary-500/20 focus:ring-2"
                                        value="business_management_system" onChange={handleChange}
                                    />
                                    <span className="text-sm font-medium text-surface-800">DeFi Application Development</span>
                                </label>
                                <label className="flex items-center gap-3 p-3 rounded-xl border border-surface-200 hover:border-primary-200 hover:bg-primary-50/50 transition-all duration-200 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5 rounded-lg border-surface-300 text-primary-600 focus:ring-primary-500/20 focus:ring-2"
                                        value="school_management_portal" onChange={handleChange}
                                    />
                                    <span className="text-sm font-medium text-surface-800">NFT Marketplaces</span>
                                </label>
                                <label className="flex items-center gap-3 p-3 rounded-xl border border-surface-200 hover:border-primary-200 hover:bg-primary-50/50 transition-all duration-200 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5 rounded-lg border-surface-300 text-primary-600 focus:ring-primary-500/20 focus:ring-2"
                                        value="payroll_management_system" onChange={handleChange}
                                    />
                                    <span className="text-sm font-medium text-surface-800">Blockchain Games</span>
                                </label>
                                <label className="flex items-center gap-3 p-3 rounded-xl border border-surface-200 hover:border-primary-200 hover:bg-primary-50/50 transition-all duration-200 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5 rounded-lg border-surface-300 text-primary-600 focus:ring-primary-500/20 focus:ring-2"
                                        value="event_management_system" onChange={handleChange}
                                    />
                                    <span className="text-sm font-medium text-surface-800">Smart Contract Development</span>
                                </label>
                            </div>
                            {errors &&
                                <p className="text-red-500 text-sm mb-4">{errors.products}</p>
                            }

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-medium text-surface-800 mb-2">First Name</label>
                                    <input
                                        name="first_name"
                                        className="w-full px-4 py-3 rounded-xl border border-surface-200 bg-surface-50 text-surface-900 placeholder-surface-800/40 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-200"
                                        type="text"
                                        placeholder="John"
                                        value={firstName}
                                        onChange={(e)=> setFirstName(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors &&
                                        <p className="text-red-500 text-sm mt-1">{errors.first_name}</p>
                                    }
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-surface-800 mb-2">Last Name</label>
                                    <input
                                        name="last_name"
                                        className="w-full px-4 py-3 rounded-xl border border-surface-200 bg-surface-50 text-surface-900 placeholder-surface-800/40 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-200"
                                        type="text"
                                        placeholder="Doe"
                                        value={lastName}
                                        onChange={(e)=> setLastName(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors &&
                                        <p className="text-red-500 text-sm mt-1">{errors.last_name}</p>
                                    }
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-surface-800 mb-2">Email</label>
                                    <input
                                        name="email"
                                        className="w-full px-4 py-3 rounded-xl border border-surface-200 bg-surface-50 text-surface-900 placeholder-surface-800/40 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-200"
                                        type="email"
                                        placeholder="you@example.com"
                                        value={email}
                                        onChange={(e)=> setEmail(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors &&
                                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                    }
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-surface-800 mb-2">Phone</label>
                                    <input
                                        name="phone_number"
                                        className="w-full px-4 py-3 rounded-xl border border-surface-200 bg-surface-50 text-surface-900 placeholder-surface-800/40 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-200"
                                        type="number"
                                        placeholder="+1 (555) 000-0000"
                                        value={phone}
                                        onChange={(e)=> setPhone(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors &&
                                        <p className="text-red-500 text-sm mt-1">{errors.phone_number}</p>
                                    }
                                </div>
                            </div>

                            <div className="mt-5">
                                <label className="block text-sm font-medium text-surface-800 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    placeholder="Your message..."
                                    className="w-full px-4 py-3 rounded-xl border border-surface-200 bg-surface-50 text-surface-900 placeholder-surface-800/40 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-200 h-36 resize-none"
                                    value={message}
                                    onChange={(e)=> setMessage(e.target.value)}
                                    onKeyUp={clearErrors}
                                ></textarea>
                                {errors &&
                                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                                }
                            </div>

                            <button type="submit" id="submitBtn" className="mt-6 inline-flex items-center px-8 py-3.5 text-base font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-xl transition-all duration-200 shadow-md shadow-primary-500/25 hover:shadow-lg hover:shadow-primary-500/30">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact info sidebar */}
                    <div className="bg-surface-950 rounded-2xl p-8 text-white flex flex-col justify-between">
                        <div className="space-y-8">
                            <div>
                                <h3 className="font-semibold text-lg mb-2">Office Address</h3>
                                <p className="text-surface-200/70 text-sm">Bangalore, India, 560103</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                                <p className="text-surface-200/70 text-sm">Tel: 08055384406</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-2">Email</h3>
                                <p className="text-surface-200/70 text-sm">contact@blocksindia.com</p>
                            </div>
                        </div>
                        <div className="flex gap-3 mt-8">
                            <a href="https://www.facebook.com/ENLIGHTENEERING/" target="_blank" rel="noreferrer"
                                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors duration-200" aria-label="Facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className='fill-current'><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path></svg>
                            </a>
                            <a href="https://www.linkedin.com/company/enlighteneering-inc-" target="_blank" rel="noreferrer"
                                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors duration-200" aria-label="LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className='fill-current'><circle cx="4.983" cy="5.009" r="2.188"></circle><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default DemoProduct;
