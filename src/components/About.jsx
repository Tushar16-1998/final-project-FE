import React from 'react';
import Navbar from './NavBar';
import 'tailwindcss/tailwind.css'; 

function About() {
    return (
        <div className="bg-gradient-to-b from-teal-500 to-blue-800 text-white">
            <Navbar />
            <section className="p-4">
                <h3 className="text-3xl font-bold">RENT ASSIST</h3>
                <p>Contact us for more information!</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <article className="bg-white p-4 rounded shadow-md">
                        <p className="text-xl text-black font-semibold">Daniel Amaral</p>
                        <div className="flex mt-2 space-x-2">
                            <button className="btn btn-primary">
                                <a href="https://www.linkedin.com/in/daniel-amaral-6b077445/" target="_blank">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" alt="LinkedIn" className="w-8 h-8" />
                                </a>
                            </button>

                            <button className="btn btn-primary">
                                <a href="https://github.com/dfbamaral" target="_blank">
                                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="w-8 h-8" />
                                </a>
                            </button>
                        </div>
                    </article>

                    <article className="bg-white p-4 rounded shadow-md">
                        <p className="text-xl text-black font-semibold">Tushar Sunder</p>
                        <div className="flex mt-2 space-x-2">
                            <button className="btn btn-primary">
                                <a href="https://www.linkedin.com/in/tushar-sunder-06b6492b4/" target="_blank">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" alt="LinkedIn" className="w-8 h-8" />
                                </a>
                            </button>

                            <button className="btn btn-primary">
                                <a href="https://github.com/Tushar16-1998" target="_blank">
                                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="w-8 h-8" />
                                </a>
                            </button>
                        </div>
                    </article>

                    <div></div> 
                </div>
                <p className="mt-8">Github Repo.</p>
                <a href="https://github.com/Tushar16-1998/final-project-FE" target="_blank" className="btn btn-primary mt-2">
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">

                    </svg>
                    Github
                </a>
            </section>
        </div>
    );
}

export default About;
