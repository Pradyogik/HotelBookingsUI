import React from 'react';
import img1 from '../../images/shared/image 298.png';
import img2 from '../../images/shared/image 299.png';
import img3 from '../../images/shared/image 300.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="border-t font-poppins border-neutral-700/20 py-10 px-6 bg-[#E1BA3C]">
            <div className="mx-auto max-w-[100rem]">
                <div className="flex flex-wrap items-center justify-between gap-10 md:items-start lg:flex-nowrap">
                    <div className="w-full sm:w-1/2 lg:w-1/3">
                        <div className="grid grid-cols-3 gap-0">
                            <img alt="Image 1" className="h-auto w-full md:w-3/4 mb-4 mx-auto" src={img1} />
                            <img alt="Image 2" className="h-auto w-full md:w-3/4 -mx-4 mb-4" src={img2} />
                            <img alt="Image 3" className="h-auto w-full md:w-2/3 mx-auto col-span-2" src={img3} style={{ objectFit: 'cover' }} />
                        </div>

                    </div>
                    <div className="w-full font-inter md:w-2/3">
                        <div className="grid grid-cols-1 gap-4 text-sm sm:grid-cols-3 sm:gap-10 md:grid-cols-4">
                            <div>
                                <h3 className="font-bold text-xl uppercase font-inter text-black">Services</h3>
                                <ul className="mt-4  space-y-4 text-gray-900 list-disc pl-6">
                                    <li><a href="/#tourist-places">Tourist places</a></li>
                                    <li><a href="/#aarti-pass">Aarti Pass</a></li>
                                    <li><a href="/#donation-to-ram-mandir">Donation To Ram Mandir</a></li>
                                    <li><a href="/#events-in-ayodhya">Events in Ayodhya</a></li>
                                    <li><a href="/#parkings-in-ayodhya">Parkings in Ayodhya</a></li>
                                    <li><a href="/#emergency">Emergency</a></li>
                                </ul>
                            </div>
                            <div>
                                <ul className="mt-4 space-y-2 font-inter list-disc pl-6 text-gray-900">
                                    <li><a href="/contact-us">FAQs</a></li>
                                    <li><a href="/contact-us">Trip routes</a></li>
                                    <li><a href="/contact-us">Hotels in Ayodhya</a></li>
                                    <li><a href="/contact-us">Wheelchair</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold uppercase text-xl font-inter text-black">Important Links</h3>
                                <ul className="mt-4 space-y-2 list-disc pl-6 text-gray-700">
                                    <li><a href="/ayodhya-development-authority">Ayodhya Development Authority</a></li>
                                    <li><a href="/disclaimer">Disclaimer</a></li>
                                    <li><a href="/terms-and-conditions">Terms and Conditions</a></li>
                                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                                    <li><a href="/contact-us">Contact Us</a></li>
                                    <li><a href="/sitemap">Sitemap</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                <hr className="my-4 border-black" />
                <div className="flex flex-col-reverse md:flex-row justify-between text-sm text-gray-700">
                    <div className="text-center text-black text-xl mb-4 md:mb-0">@ 2023 All rights reserved.</div>
                    <div className="flex gap-6 justify-center md:justify-end">
                        <a href="#" className="text-black hover:text-gray-900"><FaFacebook size={30} /></a>
                        <a href="#" className="text-black hover:text-gray-900"><FaTwitter size={30} /></a>
                        <a href="#" className="text-black hover:text-gray-900"><FaInstagram size={30} /></a>
                        <a href="#" className="text-black hover:text-gray-900"><FaLinkedin size={30} /></a>
                        <a href="#" className="text-black hover:text-gray-900"><FaYoutube size={30} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;