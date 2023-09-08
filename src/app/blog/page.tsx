import Image from 'next/image'
import React from 'react'
import Check from "../../../public/Check.svg"
import Search from "../../../public/Search.svg"
import Calendar from "../../../public/Calendar.svg"
import RightArrow from "../../../public/Right Arrow.svg"
import Instagram from "../../../public/Instagram.svg"
import Dribbble from "../../../public/Dribbble.svg"
import Twitter from "../../../public/Twitter.svg"
import Youtube from "../../../public/Youtube.svg"
import PostImage1 from "../../../public/Post Image 1.png"
import PostImage2 from "../../../public/Post Image 2.png"
import PostImage3 from "../../../public/Post Image 3.png"

const Blog = () => {
    return (
        <main className='max-w-[1440px] mx-auto w-full pb-10'>
            {/* Hero Section */}
            <section className='Hero flex items-end sm:min-h-[600px] min-h-[410px] relative px-4'>
                {/* Hero Box */}
                <div className='Hero-box flex max-sm:justify-center items-center prose prose-hr:my-0 sm:prose-h1:text-[58px] prose-h1:text-[30px] sm:prose-p:text-[16px] prose-p:text-[14px] max-sm:prose-h5:text-[12px] sm:px-20 mb-20 md:ml-48 max-sm:mt-20 sm:min-w-[707px] min-h-[290px] sm:min-h-[371px] max-sm:w-full relative z-20'>
                    {/* blur div */}
                    <div className='max-sm:opacity-20 min-w-[386px] -z-10 min-h-[349px] right-14 rounded-[386px] bg-[#090909] blur-[80px] absolute'></div>
                    {/* blur svg */}
                    <svg className='max-sm:opacity-20 min-w-[171px] min-h-[171px] -z-10 left-0 top-0 absolute' xmlns="http://www.w3.org/2000/svg" width="342" height="342" viewBox="0 0 342 342" fill="none">
                        <g filter="url(#filter0_f_1151_7532)">
                            <circle cx="171" cy="171" r="86" fill="black" />
                        </g>
                        <defs>
                            <filter id="filter0_f_1151_7532" x="0" y="0" width="342" height="342" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="42.5" result="effect1_foregroundBlur_1151_7532" />
                            </filter>
                        </defs>
                    </svg>

                    {/* Text Box */}
                    <div className='sm:space-y-3 max-sm:text-center'>
                        <h5 className='text-[#F6A235] max-sm:!w-fit max-sm:mx-auto font-semibold'>Recent Articles</h5>
                        <div className='sm:space-y-5 space-y-3 max-sm:mt-1'>
                            <h1 className='text-white !mb-0'>OUR <span className='text-[#F6A235]'>Blogs</span></h1>
                            <hr className='max-w-[157px] max-sm:mx-auto' />
                            <p className='text-white sm:leading-tight'>Our team has the courage, scale, passion, diversity and resourcefulness that promise wherever and however the world needs it.</p>
                        </div>
                        <button className='!mt-8 py-[10px] px-[38px] max-sm:text-sm bg-[#F6A235] font-medium text-white'>Discover More</button>
                    </div>

                </div>
            </section>

            <section className='max-lg:px-5 flex sm:flex-row flex-col gap-8 prose-p:leading-normal max-w-[1100px] prose-h4:text-[20px] prose-h4:my-0 mx-auto prose sm:prose-h5:text-base prose-h5:text-[12px] max-sm:prose-h5:leading-normal prose-img:my-4 sm:prose-h1:text-[44px] prose-h1:text-[24px] prose-xl prose-h3:text-[20px] sm:prose-h2:text-[36px] prose-h2:text-[24px] prose-h1:leading-snug sm:prose-p:text-[16px] prose-p:text-[14px] prose-p:my-0 pt-[120px]'>
                {/* Left Side */}
                <div className='max-w-[635.179px]'>
                    <div className='text-[#F6A235] flex gap-3'>
                        <h5>By Admin</h5>
                        <h5>July 2, 2021</h5>
                    </div>
                    <h1 className='mt-4'>Smarter Ways to Manage EV Charging Infrastructures</h1>
                    <div className='max-sm:space-y-4'>
                        <p>Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit amet, consectetur adipisicing.</p>
                        <p>Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit amet, consectetur adipisicing.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                    </div>
                    <div>
                        <h2>Commercialization of Ready</h2>
                        <p>Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit amet, consectetur adipisicing.</p>
                    </div>
                    <div className='mt-4'>
                        <div className='flex items-center gap-2'>
                            <Image src={Check} alt='Check' /> <p>Scientific Skills For getting a better result</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Image src={Check} alt='Check' /> <p>Communication Skills to getting in touch</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Image src={Check} alt='Check' /> <p>A Career Overview opportunity Available</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Image src={Check} alt='Check' /> <p>A good Work Environment For work</p>
                        </div>
                    </div>
                    <div>
                        <h2 className='capitalize'>It’s Time To Think Differently About Homeschooling</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div>
                        <h3>Leave a <span className='text-[#F6A235]'>Reply</span></h3>
                        <p>Your email address will not be published. Required fields are marked *</p>
                        <form className='flex flex-col gap-4 max-sm:mt-3'>
                            <label>Comment</label>
                            <input style={{ border: "1px solid rgba(246, 162, 53, 0.30)" }} className='placeholder:text-base p-4 pb-[177px]' type="text" placeholder='Type...' />
                            <button type="submit" className='w-fit text-base py-[10px] px-[38px] bg-[#F6A235] font-medium text-white'>Submit</button>
                        </form>
                    </div>
                </div>

                {/* Right Side */}
                <div className='w-full'>

                    <div className='flex'>
                        <input style={{ border: "1px solid rgba(246, 162, 53, 0.30)" }} className='border w-full pl-4 text-sm placeholder-black' type="text" placeholder='Search' />
                        <div className='bg-[#F6A235] px-4'>
                            <Image src={Search} alt='Search' />
                        </div>
                    </div>

                    <div style={{ boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.10)" }} className='sm:min-w-[445px] p-5 mt-5'>
                        <h4 className='max-sm:pb-4'>Recent Posts</h4>
                        <div className='flex items-center gap-4 sm:pr-10'>
                            <Image className='bg-[#FFF3ED] p-2' src={PostImage1} alt='PostImage1' />
                            <div>
                                <h5 className='font-medium max-sm:max-w-[159px]'>WordPress Website Audit by a Website Maintenance</h5>
                                <div className='flex items-center gap-2 text-[#F6A235]'>
                                    <Image src={Calendar} alt='Calendar' />
                                    <p>July 2, 2021</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center gap-4 sm:pr-10'>
                            <Image className='bg-[#FFF3ED] p-2' src={PostImage2} alt='PostImage1' />
                            <div>
                                <h5 className='font-medium max-sm:max-w-[159px]'>WordPress Website Audit by a Website Maintenance</h5>
                                <div className='flex items-center gap-2 text-[#F6A235]'>
                                    <Image src={Calendar} alt='Calendar' />
                                    <p>July 2, 2021</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center gap-4 sm:pr-10'>
                            <Image className='bg-[#FFF3ED] p-2' src={PostImage3} alt='PostImage1' />
                            <div>
                                <h5 className='font-medium max-sm:max-w-[159px]'>WordPress Website Audit by a Website Maintenance</h5>
                                <div className='flex items-center gap-2 text-[#F6A235]'>
                                    <Image src={Calendar} alt='Calendar' />
                                    <p>July 2, 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.10)" }} className='sm:min-w-[445px] p-5 mt-5'>
                        <h4>Categories</h4>
                        <div className='mt-1'>
                            <div className='flex items-center gap-3'>
                                <Image src={RightArrow} alt='Check' /><p>Creative Web Design</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <Image src={RightArrow} alt='Check' /><p>Digital Agency </p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <Image src={RightArrow} alt='Check' /><p>Software Engineers</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.10)" }} className='sm:min-w-[445px] p-5 mt-5'>
                        <h4>Share</h4>
                        <div className='flex gap-4'>
                            <Image src={Instagram} alt=''/>
                            <Image src={Dribbble} alt=''/>
                            <Image src={Twitter} alt=''/>
                            <Image src={Youtube} alt=''/>
                        </div>
                    </div>

                </div>

            </section>

        </main>
    )
}

export default Blog