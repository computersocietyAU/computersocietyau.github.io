import { useMatch } from '@tanstack/react-location'
import BlockContent from "@sanity/block-content-to-react"
import { AiOutlineCalendar, AiOutlineUser, AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF, FaLinkedin, FaInstagram } from "react-icons/fa";

const ExploreBlog = () => {

    const {data:{blog}} = useMatch();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


    const d = new Date(blog.publishedAt);
    const publishedDate = `${months[d.getMonth()]} ${d.getDay()}, ${d.getFullYear()}`;
 
    // const content = {
    //     date: "Aug 11, 2022",
    //     title: "Rewind Chapter",
    //     author: "Anonymous",
    //     description: "Ramkumar, an alumnus of College of Engineering Guindy completed his BE Computer Science and Engineering in the year .Let us rewind and take a look at his journey which started from CEG.",
    //     content1: "In this blog post, I'll show you how easy it is to build a CSAU Website with React. After reading this blog, you'll have a fully functional Website!",
    //     content2: "In this blog post, I'll show you how easy it is to build a CSAU Website with React. After reading this blog, you'll have a fully functional Website!In this blog post, I'll show you how easy it is to build a CSAU Website with React. After reading this blog, you'll have a fully functional Website!In this blog post, I'll show you how easy it is to build a CSAU Website with React. After reading this blog, you'll have a fully functional Website! In this blog post, I'll show you how easy it is to build a CSAU Website with React. After reading this blog, you'll have a fully functional Website! In this blog post, I'll show you how easy it is to build a CSAU Website with React. After reading this blog, you'll have a fully functional Website!",
    //     imglink: "https://futurumresearch.com/wp-content/uploads/2020/03/Zoho-Corporation-office.png"
    // }
  return (
    <div className="explore-blog pt-[4.5em] font-exploreBlogText select-none">
        <div id="img-head" className='h-[43vh] flex justify-center items-center'>
            <img alt='zoho logo' src={blog.mainImage.asset.url} className='block w-[min(88%,550px)] h-[80%] rounded-[45px] object-contain' />
        </div>
        <div className="explore-blog-container py-[2.3em] bg-white">
            <div className='blog-wrapper w-[min(90%,1350px)] my-0 mx-auto'>
                <div id="title" className="text-[25px] font-bold mb-[20px] md:text-[35px] leading-[50px] text-center text-black">
                    {blog.title}
                </div>
                <div id="content-1" className="text-justify text-[15px] md:text-[18px] leading-[29px] font-bold md:text-center text-blogText w-[88%] md:w-[min(100%,900px)] my-0 mx-auto tracking-[1.3px]">
                    {blog.summary}
                </div>
                <div id="content-2" className='w-[min(100%,900px)] my-[20px] mx-auto flex justify-around items-center font-bold text-[14px] md:text-[17px] leading-[120px] text-center text-black'>
                    <div id="icons-main" className='flex flex-wrap items-center'>
                        <AiOutlineUser size="2em" />
                        <label className='ml-[20px] tracking-[1.5px]'> {blog.author}</label>
                    </div>
                    <div id="icons-main" className='flex flex-wrap items-center'>
                        <AiOutlineCalendar size="2em" />
                        <label className='ml-[20px] tracking-[1.5px]'> {publishedDate}</label>
                    </div>
                </div>
                <hr className='h-[2px] text-blogText w-[80%] m-auto' />
                <div className="blog-wrapper-2 w-[min(1100px,90%)] my-0 mx-auto pt-[2.5em] pb-[4em] md:pt-[4em] md:pb-[3em] text-black">
                    <BlockContent
                    blocks={blog.body}
                    projectId="wzu06sd5"
                    dataset="production"
                    />
                </div>
            </div>
        </div>
        <div id="right-side" className='fixed z-[1] text-black overflow-x-hidden top-[60%] right-[2%]'>
            <a href='/'>
                <FaFacebookF id="icons-right" className="mb-[10px]" size="1.3em" />
            </a>
            <br></br>
            <a href='/'>
                <AiOutlineTwitter id="icons-right" className="mb-[10px]" size="1.3em" />
            </a>
            <br></br>
            <a href='/'>
                <FaLinkedin id="icons-right" className="mb-[10px]" size="1.3em" />
            </a>
            <br></br>
            <a href='/'>
                <FaInstagram id="icons-right" className="mb-[10px]" size="1.3em" />
            </a>
            <br></br>
        </div>
    </div>
  );
}

export default ExploreBlog;