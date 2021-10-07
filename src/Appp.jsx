import React, { useState, useEffect } from 'react';

import food3 from './food3.jpg';
import food4 from './food4.jpeg';
import food5 from './food5.jpeg';
import logo5 from './logo5.jpg';
import logo1 from './logo1.png';
import logo2 from './logo2.png';
import logo3 from './logo3.png';
import logo4 from './logo4.jpg';


const Appp = () => {

    return (
        <>
            {/* Code of Navbar */}
            <nav className="navbar">
               
                <ul>
                    <li><a href="ht01.html">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
            </nav>

            {/* Home section */}

            <section className="home">
                <h1>Welcome to my food industry</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit, it is an good for health </p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                <button class="btn">Order now</button>

            </section>

            {/* Service Section */}

            <h1 id="hd1">Our Services</h1>
            <section id="service">

                <div className="box">
                    <img src={food3} />
                    <h1>Food Catering</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, cupiditate? Eius repellendus tenetur pariatur, autem laudantium velit illum officia? Voluptas, dignissimos. Vero veritatis blanditiis consectetur, incidunt harum nihil animi adipisci.</p>

                </div>
                <div className="box">
                    <img src={food4} />
                    <h1>Bulk Ordering</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, cupiditate? Eius repellendus tenetur pariatur, autem laudantium velit illum officia? Voluptas, dignissimos. Vero veritatis blanditiis consectetur, incidunt harum nihil animi adipisci.</p>

                </div>

                <div className="box">
                    <img src={food5} />
                    <h1>Food Ordering</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, cupiditate? Eius repellendus tenetur pariatur, autem laudantium velit illum officia? Voluptas, dignissimos. Vero veritatis blanditiis consectetur, incidunt harum nihil animi adipisci.</p>

                </div>
            </section>

            {/* client section */}
            <section id="clients-section">
                <h1>Our clients</h1>
                <div id="clients">
                    <div className="client-item">
                        <img src={logo5} />
                    </div>

                    <div className="client-item">
                        <img src={logo1} />
                    </div>

                    <div className="client-item">
                        <img src={logo2} />
                    </div>

                    <div className="client-item">
                        <img src={logo3} />
                    </div>

                    <div className="client-item">
                        <img src={logo4} />
                    </div>



                </div>

            </section>

            {/* contact section */}
            <section id="contact-section">
                <h1>Contact us</h1>
                <div id="contact">
                    <form action="">
                        <div className="form-group">

                            <input type="text" placeholder="Enter your name" />
                        </div>

                        <div className="form-group">

                            <input type="email" placeholder="Enter your email" />
                        </div>

                        <div className="form-group">

                            <input type="number" placeholder="Enter your Mobile number" />
                        </div>

                        <div className="form-group">

                            <textarea type="Message" cols="28" rows="8"></textarea>
                        </div>
                        <button className="bt">Submit</button>
                    </form>

                </div>

            </section>
             
             {/* footer section */}

            <footer className="footer">
                <div className="foot">
                    <p>copyright © tripathi_coder2021</p>
                    <p>harshittrip2002@gmail.com</p>
                    <p>8840413019</p>
                </div>
            </footer>

        </>
    );
};

export default Appp;
