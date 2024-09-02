import React, { useState } from 'react';
import img_1 from "../assets/images/instructor/01.jpg";
import img_2 from "../assets/images/instructor/02.jpg";
import img_3 from "../assets/images/instructor/03.jpg";
import img_4 from "../assets/images/instructor/04.jpg";
import Rating from './Rating/Rating';
import Coustomerreview from './Coustomerreview';
import pic from "../assets/images/shop/01.jpg";

const ReviewList = [
    {
        imgUrl: img_1,
        imgAlt: "Client thumb",
        name: "Ganelon Boileau",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovative initiatives before long-term high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: img_2,
        imgAlt: "Client thumb",
        name: "Morgana Cailot",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovative initiatives before long-term high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: img_3,
        imgAlt: "Client thumb",
        name: "Telford Bois",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovative initiatives before long-term high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: img_4,
        imgAlt: "Client thumb",
        name: "Cher Daviau",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovative initiatives before long-term high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
];

function Review() {
    const [review, setReview] = useState(true);
    const [detail, setDetail] = useState(false);

    const handlereview = () => {
        setReview(true);
        setDetail(false);
    };

    const handledetail = () => {
        setReview(false);
        setDetail(true);
    };

    return (
        <div className='p-2 md:p-5  flex flex-col gap-3 w-[100%] lg:w-[50%]'>
            <div className='flex   gap-1'>
                <div className={`p-3 cursor-pointer w-full md:w-[20%] flex justify-center items-center ${review ? "bg-black text-white font-bold" : "bg-yellow-500 text-black font-bold"}`} onClick={handlereview}>Review</div>
                <div className={`p-3 cursor-pointer w-full md:w-[20%] flex justify-center items-center  ${detail ? "bg-black text-white font-bold" : "bg-yellow-500 text-black font-bold"}`} onClick={handledetail}>Description</div>
            </div>

            {review && (
                <div className="review-container flex flex-col gap-3">
                    {ReviewList.map((item, index) => (
                        <div key={index} className="review-item w-full bg-white shadow-2xl p-2 md:p-5">
                            <div className='flex justify-between items-center'>
                                <div className='flex   gap-1 items-center  w-[100%] '>

                                    <img className='w-[70px] ' src={item.imgUrl} alt={item.imgAlt} />
                                    <div className='flex  justify-between  flex-wrap  w-[100%] items-center '>
                                         <h4>{item.name}</h4>
                                        <Rating color="text-yellow-600" /></div>

                                </div>

                            </div>
                            <p>{item.date}</p>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                    <Coustomerreview />
                </div>
            )}

            {detail && (
                <div className='p-2 md:p-5  flex flex-col '>
                    <div className='review-item w-full bg-white shadow-2xl p-2 md:p-5'>
                        <p>Indulge in the epitome of luxury with this meticulously crafted creation. Designed with impeccable attention to detail and a commitment to excellence, it promises to elevate your everyday experiences to new heights.</p>
                        <div className='flex justify-between flex-wrap'>
                            <ul className='flex flex-col gap-3'>
                                <li className='flex items-center'><i className="fa-regular fa-star text-yellow-300"></i>Comfortable and supportive design.</li>
                                <li className='flex items-center'><i className="fa-regular fa-star text-yellow-300"></i>Versatile for various activities.</li>
                                <li className='flex items-center'><i className="fa-regular fa-star text-yellow-300"></i>Stylish and elegant appearance.</li>
                                <li className='flex items-center'><i className="fa-regular fa-star text-yellow-300"></i>Durable construction for long-lasting use.</li>
                                <li className='flex items-center'><i className="fa-regular fa-star text-yellow-300"></i>Customizable options for personalization.</li>
                            </ul>
                            <img src={pic} alt="Product" />
                        </div>
                        <p>Crafted from the finest materials and built to last a lifetime, this creation embodies uncompromising quality and durability. Its superior craftsmanship ensures that it remains a treasured addition to your space for years to come</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Review;
