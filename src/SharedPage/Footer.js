import React from 'react';
import logo from '../assets/logoHeader.svg'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <aside>
                <img src={logo} alt="" />
                <p>RAFIUL Industries Ltd.<br />Providing reliable tech since 1992</p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
               <Link className="link link-hover">Branding</Link>
               <Link className="link link-hover">Design</Link>
               <Link className="link link-hover">Marketing</Link>
               <Link className="link link-hover">Advertisement</Link>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
               <Link className="link link-hover">About us</Link>
               <Link className="link link-hover">Contact</Link>
               <Link className="link link-hover">Jobs</Link>
               <Link className="link link-hover">Press kit</Link>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
               <Link className="link link-hover">Terms of use</Link>
               <Link className="link link-hover">Privacy policy</Link>
               <Link className="link link-hover">Cookie policy</Link>
            </nav>
        </footer>
    );
};

export default Footer;