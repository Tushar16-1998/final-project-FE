// import React from 'react';
// import { Link } from 'react-router-dom';

// import image1 from '../assets/1.png';
// import image2 from '../assets/2.png';


// function HomePage() {
//     return (
//         <div className="flex flex-col items-center justify-center h-screen">
//             <h1 className="text-3xl font-bold mb-8">Welcome to RentAssist</h1>
//             <div className="space-y-4">
//             <div className="carousel w-full">
//   <div id="slide1" className="carousel-item relative w-full">
//     <img src={image1} className="w-full" />
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide4" className="btn btn-circle">❮</a> 
//       <a href="#slide2" className="btn btn-circle">❯</a>
//     </div>
//   </div> 
//   <div id="slide2" className="carousel-item relative w-full">
//     <img src={image2} className="w-full" />
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide1" className="btn btn-circle">❮</a> 
//       <a href="#slide3" className="btn btn-circle">❯</a>
//     </div>
//   </div> 
//   </div>
//                 <Link
//                     to="/signup"
//                     className="bg-blue-500 hover:white text-white font-semibold py-2 px-4 rounded inline-block">
//                     Sign Up
//                 </Link>
//                 <div className="h-4"></div> {/* Adding some space */}
//                 <Link
//                     to="/login"
//                     className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded inline-block">
//                     Login
//                 </Link>
//             </div>
//         </div>

//     );
// }

// export default HomePage;


import React from 'react';
import { Link } from 'react-router-dom';

import image1 from '../assets/1.png';
import image2 from '../assets/2.png';

function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-8">Welcome to RentAssist</h1>
            <div className="space-y-4">
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                    <img src={image1} className="w-full" alt="Slide 1" style={{ width: '50%', height: 'auto' }} />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={image2} className="w-full" alt="Slide 2" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                <Link
                    to="/signup"
                    className="btn btn-primary">
                    Sign Up
                </Link>
                <div className="h-4"></div> {/* Adding some space */}
                <Link
                    to="/login"
                    className="btn btn-secondary">
                    Login
                </Link>
            </div>
        </div>
    );
}

export default HomePage;
