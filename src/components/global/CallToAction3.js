import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import { FiPhoneCall } from 'react-icons/fi';


const CallToAction3 = ({ image1, slogan, text }) => {
    const { rpdata } = useContext(GlobalDataContext);
    return (

        <section className='w-full h-auto p-4'>

            <section className='w-[90%] h-auto text-black shadow-2xl lg:rounded-tl-full lg:rounded-bl-full  flex flex-col lg:flex-row justify-between items-center mx-auto p-2'>
                <div className='w-[70%] h-[200px] md:h-[300px] lg:w-[23%]  relative'>
                    <img

                        className='w-full h-full object-cover rounded-[50%]'
                        src={image1}
                        alt='no found'
                    />
                    <div className='absolute right-0 bottom-5'>
                        <a
                            className='flex justify-center items-center h-[70px] w-[70px] bg1 z-50 text-white rounded-[50%]'
                            href={`tel:+1${rpdata?.dbPrincipal?.phones?.[0]?.phone}`}
                        >
                            <FiPhoneCall className="text-[25px]" />

                        </a>
                    </div>
                </div>
                <div className='lg:w-[25%]'>
                    <h3 className="text-center lg:text-start">
                        {slogan}
                    </h3>
                </div>
                <article className='lg:w-[40%] p-4'>
                    <p>
                        {text}
                    </p>
                </article>
            </section>
        </section>

    )
}

export default CallToAction3;