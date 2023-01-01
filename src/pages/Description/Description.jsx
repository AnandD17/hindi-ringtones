import React from 'react'
import BreadCrumb from '../../components/Breadcrumb/BreadCrumb'
import Card from '../../components/Card/Card'
import SearchBar from '../../components/SearchBar/SearchBar'
import disp from './../../assets/images/ring.jpeg'
import { FiStar, FiPlayCircle, FiArrowDown, FiHeart, FiDownload, FiShare, FiShare2 } from 'react-icons/fi'
import music from '../../assets/music/song.mp3'

const Description = () => {
    return (
        <div>
            <SearchBar className={'mb-2'} />
            <BreadCrumb />
            <Card className={'mt-[20px]'}>
                <div className='w-full grid grid-cols-10 gap-5'>
                    <div className="sm:col-span-6 col-span-10">
                        <img src={disp} alt="" className='w-full' />
                        <div className="flex justify-between mt-3">
                            <div className="flex gap-4 items-center">
                                <FiStar className='fill-blue4 text-blue4 w-[24px] h-[24px]' />
                                <span className='text-base'>4.4</span>
                            </div>
                            <div className="flex gap-4 items-center">
                                <FiPlayCircle className='w-[24px] h-[24px]' />
                                <span className='text-base'>4.4k</span>
                            </div>
                            <div className="flex gap-4 items-center">
                                <FiArrowDown className=' w-[24px] h-[24px]' />
                                <span className='text-base'>4.4</span>
                            </div>
                            <div className="flex gap-4 items-center">
                                <FiHeart className='w-[24px] h-[24px] fill-[red] text-[red]' />
                                <span className='text-base'>4.4k</span>
                            </div>
                        </div>
                        <div>
                            <audio controls className='w-full mt-[30px]'>
                                <source src={music} type="audio/mp3" />
                            </audio>
                        </div>
                    </div>
                    <div className="sm:col-span-4 sm:px-[50px] px-5 col-span-10">
                        <div className="flex justify-between items-center">
                            <button className='h-30 text-blue8 flex items-center'>
                                <div className='bg-blue2 p-3 rounded-full'><FiDownload /> </div>
                                <div className='bg-blue2 relative -translate-x-3 rounded-full px-3'>Download</div>
                            </button>
                            <button className='h-30 text-blue8 flex items-center'>
                                <div className='bg-blue2 p-3 rounded-full'><FiShare2 /> </div>
                                <div className='bg-blue2 relative -translate-x-3 rounded-full px-3'>Share</div>
                            </button>
                        </div>
                        <div className="sm:mt-[70px] mt-5">
                            <button className='rounded-full bg-white drop-shadow-md p-3 px-5 w-full'>
                                <span className='text-blue7'> Join</span> Us On Telegram
                            </button>
                        </div>
                        <div className="sm:mt-[70px] mt-5">
                            <div className='text-xl text-center'>
                                Description
                            </div>
                            <div className='text-justify mt-3 text-lg'>
                                Warriyo - Mortals (feat. Laura Brehm) NCS Release Mp3 Song! Best of the best NCS music available.
                            </div>
                            <div className="mt-3 text-lg">
                                Date Posted : 21st July 2022
                            </div>
                            <div className="mt-3 text-lg">
                                Posted By : Naman
                            </div>
                            <div className="mt-3 text-lg">
                                Credits :
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
            <Card className={'mt-[50px]'}>
                <div className="grid grid-cols-5">
                    <div className="sm:col-span-2 col-span-5">
                        <div>
                            Please Provide Us You Opinion
                        </div>
                        <div className='grid grid-cols-5 mt-3'>
                            <div className="col-span-1 flex justify-center items-center text-2xl">
                                <FiStar />
                            </div>
                            <div className="col-span-1 flex justify-center items-center text-2xl">
                                <FiStar />
                            </div>
                            <div className="col-span-1 flex justify-center items-center text-2xl">
                                <FiStar />
                            </div>
                            <div className="col-span-1 flex justify-center items-center text-2xl">
                                <FiStar />
                            </div>
                            <div className="col-span-1 flex justify-center items-center text-2xl">
                                <FiStar />
                            </div>

                        </div>
                        <div className='flex flex-col gap-3 mt-3'>
                            <label htmlFor="">Name</label>
                            <input className='border border-2 border-[#CCCCCC] rounded p-2 focus:outline-none focus:border-blue2' type="text" />
                        </div>
                        <div className='flex flex-col gap-3 mt-3'>
                            <label htmlFor="">Review</label>
                            <textarea className='border border-2 border-[#CCCCCC] rounded p-2 focus:outline-none focus:border-blue2' cols="20" rows="10"></textarea>
                        </div>
                        <div>
                            <button className='mt-5 text-center shadow-[4px_4px_19px_1px_rgba(0,0,0,0.26)] p-2 w-[200px] rounded-xl'>
                                Send
                            </button>
                        </div>
                    </div>
                    <div className="sm:col-span-3 col-span-5 sm:p-3 sm:px-6 py-3 sm:mt-0 mt-4">
                        <div className=' bg-blue1 h-full max-h-[500px] min-h-full overflow-y-auto rounded-xl p-5 flex flex-col gap-5'>
                            <Card>
                                <div className='flex gap-5 mt-3 text-lg'>
                                    <FiStar />
                                    <FiStar />
                                    <FiStar />
                                    <FiStar />
                                    <FiStar />
                                </div>
                                <div className='mt-3'>
                                    Anand Doddamani
                                </div>
                                <div className='mt-1'>
                                    This is Anand Doddamani's Review
                                </div>
                            </Card>
                            <Card>
                                <div className='flex gap-5 mt-3 text-lg'>
                                    <FiStar />
                                    <FiStar />
                                    <FiStar />
                                    <FiStar />
                                    <FiStar />
                                </div>
                                <div className='mt-3'>
                                    Anand Doddamani
                                </div>
                                <div className='mt-1'>
                                    This is Anand Doddamani's Review
                                </div>
                            </Card>
                            <Card>
                                <div className='flex gap-5 mt-3 text-lg'>
                                    <FiStar />
                                    <FiStar />
                                    <FiStar />
                                    <FiStar />
                                    <FiStar />
                                </div>
                                <div className='mt-3'>
                                    Anand Doddamani
                                </div>
                                <div className='mt-1'>
                                    This is Anand Doddamani's Review
                                </div>
                            </Card>
                            <Card>
                                <div className='flex gap-5 mt-3 text-lg'>
                                    <FiStar />
                                    <FiStar />
                                    <FiStar />
                                    <FiStar />
                                    <FiStar />
                                </div>
                                <div className='mt-3'>
                                    Anand Doddamani
                                </div>
                                <div className='mt-1'>
                                    This is Anand Doddamani's Review
                                </div>
                            </Card>
                            <Card>
                                <div className='flex gap-5 mt-3 text-lg'>
                                    <FiStar />
                                    <FiStar />
                                    <FiStar />
                                    <FiStar />
                                    <FiStar />
                                </div>
                                <div className='mt-3'>
                                    Anand Doddamani
                                </div>
                                <div className='mt-1'>
                                    This is Anand Doddamani's Review
                                </div>
                            </Card>
                        </div>

                    </div>
                </div>

            </Card>
        </div>
    )
}

export default Description