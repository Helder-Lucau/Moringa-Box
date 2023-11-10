import React from "react";
import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import ImageOne from '../assets/image1.png'
import ImageTwo from '../assets/image2.png'
import ImageThree from '../assets/image3.png'
import ImageFour from '../assets/image4.png'
import Typed from "react-typed";
import Navbar from "./Navbar";

function Home() {
    return (
        <div>
        <Navbar />
            <div className="bg-[#1e232a]">
                <div className="max-w-[800px] py-32 mx-auto text-center flex flex-col">
                    <Typed className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 py-4 text-white" strings={['Secure cloud for your data.', 'Your data your choice.', 'Be in control of your data']} typeSpeed={120} backSpeed={140} loop />
                    <div>
                        <p className="md:text-2xl text-xl text-gray-600 font-bold">The best place to keep your files and memories protected, up to date, and easily accessible across all your devices.</p>
                    </div>
                    <div className="">
                        <button className="w-[200px] rounded-2xl shadow-xl my-6 mx-auto py-2 bg-[#ba324f] hover:bg-[#9eb3c2] transition-color duration-200">
                            <Link to="/signup" className="text-white no-underline">Create a Free Account</Link>
                        </button>
                    </div>
                </div>
            </div>

            {/*INTRO SECTION*/}
            <div className="mx-auto max-w-[800px] py-20 sm:py-30 lg:py-20 text-black w-full ">
                <div className="text-center">
                    <div className="max-w-2xl mx-auto tracking-widest">
                        <h1 className="font-medium text-gray-600">Introducing M-<span className="text-red-600">BOX.</span></h1>
                        <p className="leading-8 text-lg mt-6 font-saira ">
                            Imagine your life without limits. What would you do?
                            M-BOX. is designed to meet the needs of enterprise users and individuals alike,
                            providing a secure environment for confidential files, allowing you to safeguard your data
                            while enjoying convenient and file management with friendly features.
                            By ensuring compliance with industry regulations, M-BOX grants you peace of mind as you effortlessly
                            access your files anytime, anywhere.

                        </p>
                    </div>
                </div>
            </div>

            <div className="border-b border-gray-600 mx-auto lg:max-w-[800px] max-w-[500px]">
            </div>

            {/*FEATURES SECTION*/}
            <div className="w-full py-[2rem]">
                <div className="py-8 px-4 text-center">
                    <h1 className="md:text-4xl text-2xl tracking-[.4em] text-gray-600 font-medium">FEATURES</h1>
                    <p className="md:text-2xl text-xl py-4 tracking-widest">Keep your files safe wherever you go</p>
                </div>

                {/*Cards*/}
                <div className="w-full py-[5rem] px-4">
                    <div className="mx-auto max-w-[1240px] grid md:grid-cols-2 gap-8">
                        <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
                            <img className="w-50 mx-auto mt-[-3rem] bg-white" src={ImageOne} alt="/" />
                            <div className="mx-8 text-center font-medium py-4">
                                <h2 className="md:text-3xl sm:text-3xl text-2xl font-medium py-2">Access your files wherever you are</h2>
                                <p className="font-saira">
                                    Save and easily access your cloud files through your computer, phone or tablet.
                                    Whether you’re at the office, at home or in the mountains, M-BOX. always at hand.
                                    You will be able to see the latest files, no matter where you are.
                                </p>
                            </div>
                        </div>
                        <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
                            <img className="w-50 mx-auto mt-[-3rem] bg-white" src={ImageTwo} alt="/" />
                            <div className="flex flex-col justify-center mx-8 text-center font-medium py-4">
                                <h2 className="md:text-3xl sm:text-3xl text-2xl font-medium py-2">Organize files in folders</h2>
                                <p className="font-saira">
                                    By default your files are already sorted from newest to oldest. Once you start adding files to M-BOX
                                    you can use folders to help organize them. Folders work just like folders on your computer.
                                </p>
                            </div>
                        </div>
                        <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
                            <img className="w-50 mx-auto mt-[-3rem] bg-white" src={ImageThree} alt="/" />
                            <div className="flex flex-col justify-center mx-8 text-center font-medium py-4">
                                <h2 className="md:text-3xl sm:text-3xl text-2xl font-medium py-2">Download your files</h2>
                                <p className="font-saira">
                                    Our app lets you upload and download files. In a few clicks,
                                    import all the content of your current cloud to your device.
                                </p>
                            </div>
                        </div>
                        <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
                            <img className="w-50 mx-auto mt-[-3rem] bg-white" src={ImageFour} alt="/" />
                            <div className="flex flex-col justify-center mx-8 text-center font-medium py-4">
                                <h2 className="md:text-3xl sm:text-3xl text-2xl font-medium py-2">Store any type of file</h2>
                                <p className="font-saira">
                                    From small photos to large projects, you can store any file type safely with us.
                                    With M-BOX no file is ever to big. Spend less time searching for files.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home

