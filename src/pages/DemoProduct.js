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
            <div id='demo' className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
                <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
                    <form onSubmit={sendEmail} id="demoProductForm">
                        <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                            <div className="flex">
                                <h1 className="font-bold text-center lg:text-left text-zinc-900 uppercase text-4xl">Demo our products</h1>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                                <label className="flex items-center gap-3 p-3 rounded-xl border border-surface-200 hover:border-primary-200 hover:bg-primary-50/50 transition-all duration-200 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5 rounded-lg border-surface-300 text-primary-600 focus:ring-primary-500/20 focus:ring-2"
                                        value="defi_application_development" onChange={handleChange}
                                    />
                                    <span className="text-sm font-medium text-surface-800">DeFi Application Development</span>
                                </label>
                                <label className="flex items-center gap-3 p-3 rounded-xl border border-surface-200 hover:border-primary-200 hover:bg-primary-50/50 transition-all duration-200 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5 rounded-lg border-surface-300 text-primary-600 focus:ring-primary-500/20 focus:ring-2"
                                        value="nft_marketplaces" onChange={handleChange}
                                    />
                                    <span className="text-sm font-medium text-surface-800">NFT Marketplaces</span>
                                </label>
                                <label className="flex items-center gap-3 p-3 rounded-xl border border-surface-200 hover:border-primary-200 hover:bg-primary-50/50 transition-all duration-200 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5 rounded-lg border-surface-300 text-primary-600 focus:ring-primary-500/20 focus:ring-2"
                                        value="blockchain_games" onChange={handleChange}
                                    />
                                    <span className="text-sm font-medium text-surface-800">Blockchain Games</span>
                                </label>
                                <label className="flex items-center gap-3 p-3 rounded-xl border border-surface-200 hover:border-primary-200 hover:bg-primary-50/50 transition-all duration-200 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5 rounded-lg border-surface-300 text-primary-600 focus:ring-primary-500/20 focus:ring-2"
                                        value="smart_contract_development" onChange={handleChange}
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
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default DemoProduct;
