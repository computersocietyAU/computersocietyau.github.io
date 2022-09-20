import Subheading from '../Events/Subheading/Subheading';
import sanityclient from "../../sanityclient"
import { useEffect, useState } from 'react';

const Blog = () => {

    const [blogs,setBlogs] = useState([])

    useEffect(()=>{
        sanityclient
      .fetch(
        `*[_type == "blog"] {
        title,
        slug,
        body,
        author,
        publishedAt,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => {
        console.log(data)
        setBlogs(data)
        })
      .catch(console.error)
    },[])


    let ourblog=[
        {
            date: "11th January, 2022",
            title: "Rewind Chapter",
            author: "By Anonymous",
            description: "Ramkumar, an alumnus of College of Engineering Guindy completed his BE Computer Science and Engineering in the year .Let us rewind and take a look at his journey which started from CEG.",
            content1: "In this blog post, I'll show you how easy it is to build a CSAU Website with React. After reading this blog, you'll have a fully functional Website!",
            content2: "In this blog post, I'll show you how easy it is to build a CSAU Website with React. After reading this blog, you'll have a fully functional Website!In this blog post, I'll show you how easy it is to build a CSAU Website with React. After reading this blog, you'll have a fully functional Website!In this blog post, I'll show you how easy it is to build a CSAU Website with React. After reading this blog, you'll have a fully functional Website! In this blog post, I'll show you how easy it is to build a CSAU Website with React. After reading this blog, you'll have a fully functional Website! In this blog post, I'll show you how easy it is to build a CSAU Website with React. After reading this blog, you'll have a fully functional Website!",
            imglink: "https://futurumresearch.com/wp-content/uploads/2020/03/Zoho-Corporation-office.png"
        },
        {
            date: "11th January, 2022",
            title: "Rewind Chapter",
            author: "By Anonymous",
            description: "Ramkumar, an alumnus of College of Engineering Guindy completed his BE Computer Science and Engineering in the year .Let us rewind and take a look at his journey which started from CEG.",
            content1: "In this blog post, I'll show you how easy it is to build a CSAU Website with React. After reading this blog, you'll have a fully functional Website!",
            content2: "In this blog post, I'll show you how easy it is to build a CSAU Website with React. After reading this blog, you'll have a fully functional Website!In this blog post, I'll show you how easy it is to build a CSAU Website with React. After reading this blog, you'll have a fully functional Website!In this blog post, I'll show you how easy it is to build a CSAU Website with React. After reading this blog, you'll have a fully functional Website! In this blog post, I'll show you how easy it is to build a CSAU Website with React. After reading this blog, you'll have a fully functional Website! In this blog post, I'll show you how easy it is to build a CSAU Website with React. After reading this blog, you'll have a fully functional Website!",
            imglink: "https://futurumresearch.com/wp-content/uploads/2020/03/Zoho-Corporation-office.png"
        },
        {
            date: "11th January, 2022",
            title: "Rewind Chapter",
            author: "By Anonymous",
            description: "Ramkumar, an alumnus of College of Engineering Guindy completed his BE Computer Science and Engineering in the year .Let us rewind and take a look at his journey which started from CEG.",
            content1: "In this blog post, I'll show you how easy it is to build a CSAU Website with React. After reading this blog, you'll have a fully functional Website!",
            content2: "In this blog post, I'll show you how easy it is to build a CSAU Website with React. After reading this blog, you'll have a fully functional Website!In this blog post, I'll show you how easy it is to build a CSAU Website with React. After reading this blog, you'll have a fully functional Website!In this blog post, I'll show you how easy it is to build a CSAU Website with React. After reading this blog, you'll have a fully functional Website! In this blog post, I'll show you how easy it is to build a CSAU Website with React. After reading this blog, you'll have a fully functional Website! In this blog post, I'll show you how easy it is to build a CSAU Website with React. After reading this blog, you'll have a fully functional Website!",
            imglink: "https://futurumresearch.com/wp-content/uploads/2020/03/Zoho-Corporation-office.png"
        }
    ];
    return (
        <div id="Blog">
            <div className='latest-blogs min-h-[93vh] pt-[6em] mb-[5em] '>
                <div className='w-[min(90%,1350px)] mx-auto my-0'>
                    <Subheading title={"Latest Blogs"} />
                    <div id="blog-content" className='min-h-[490px] pt-[1.2em] flex flex-col xl:flex-row justify-center xl:justify-between items-center flex-wrap'>
                        <div id="about-blog-latest" className='flex-1 lg:flex-[0.33] xl:flex-[0.38] mb-[3em] xl:mb-0'>
                            <div className='blog-left-container bg-blogCardBg max-w-[500px] h-[490px] rounded-[27px]'>
                                <div className='blog-left-img h-[48%] rounded-[27px]'>
                                    
                                </div>
                                <div id="details" className='py-[12px] px-[18px] tracking-[1px] font-blog'>
                                    <div id="date" className='mt-[17px] md:mt-0 font-bold text-[15px] md:text-base md:leading-[20px] text-navSpecial'>
                                        January 11, 2022
                                    </div>
                                    <a href='/explore'>
                                        <div id="blog-title" className='mt-[15px] w-max font-bold text-[17px] leading-[19px] md:text-2xl cursor-pointer border-b-2 border-solid border-white'>
                                            Rewind Chapter
                                        </div>
                                    </a>
                                
                                    <div id="author" className='mt-[5px] mb-[10px] italic font-medium text-[18px] md:text-[19px] leading-[20px] '>
                                        By Anonymous
                                    </div>
                                    <div id="description" className='font-medium text-[15px] md:text-[16px] leading-[21px] tracking-[0.5px]'>
                                    Ramkumar, an alumnus of College of Engineering Guindy completed his BE Computer Science and Engineering in the year .
                                    Let us rewind and take a look at his journey which started from CEG.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='blog-right-container w-[min(90%,850px)] xl:w-full h-max xl:h-[470px] flex-1 lg:flex-[0.6] xl:flex-[0.55] overflow-y-scroll'>
                            <div id="latest-right" className='flex justify-between items-center'>
                                <div className='flex-[0] sm:flex-[0.35] h-full'>
                                    <img id="latest-img" className='w-[350px] h-[150px] md:h-full object-cover' alt="logo" src="/zoho.png"></img>
                                </div>
                                <div id="full-latest" className='flex-[1] sm:flex-[0.63]'>
                                    <div id="date-latest" className='font-normal text-[13px] md:text-[16px] leading-[19px] md:leading-[18px] text-navSpecial'>January 11, 2022</div>
                                    <div className='title-and-author my-[5px] flex items-center justify-between'>
                                        <a href='/explore'>
                                            <div id="title-latest" className='mt-[5px] md:mt-[15px] mb-[10px] w-max font-bold text-[16px] md:text-[23px] leading-[19px] md:leading-[22px] cursor-pointer border-b-2 border-solid border-white'>Rewind Chapter</div>
                                        </a>
                                        <div id="author-latest" className='mt-[15px] mb-[10px] italic font-medium text-[12px] md:text-[17px] leading-[19px] md:leading-[20px] '>By Anonymous</div>
                                    </div>
                                    <div id="content-latest" className='font-medium text-[12px] md:text-[14px] leading-[19px] md:leading-[20px] tracking-[0.5px]'>
                                    Ramkumar, an alumnus of College of Engineering Guindy completed his BE Computer Science and Engineering in the year .
                                    Let us rewind and take a look at his journey which started from CEG.
                                    </div>
                                </div>
                            </div>
                            <div id="latest-right" className='flex justify-between items-center border-y-2 border-solid divide-white my-[20px] py-[20px]'>
                                <div className='flex-[0] sm:flex-[0.35] h-full'>
                                    <img id="latest-img" className='w-[350px] h-[150px] md:h-full object-cover' alt="logo" src="/zoho.png"></img>
                                </div>
                                <div id="full-latest" className='flex-[1] sm:flex-[0.63]'>
                                    <div id="date-latest" className='font-normal text-[13px] md:text-[16px] leading-[19px] md:leading-[18px] text-navSpecial'>January 11, 2022</div>
                                    <div className='title-and-author my-[5px] flex items-center justify-between'>
                                        <a href='/explore'>
                                            <div id="title-latest" className='mt-[5px] md:mt-[15px] mb-[10px] w-max font-bold text-[16px] md:text-[23px] leading-[19px] md:leading-[22px] cursor-pointer border-b-2 border-solid border-white'>Rewind Chapter</div>
                                        </a>
                                        <div id="author-latest" className='mt-[15px] mb-[10px] italic font-medium text-[12px] md:text-[17px] leading-[19px] md:leading-[20px] '>By Anonymous</div>
                                    </div>
                                    <div id="content-latest" className='font-medium text-[12px] md:text-[14px] leading-[19px] md:leading-[20px] tracking-[0.5px]'>
                                    Ramkumar, an alumnus of College of Engineering Guindy completed his BE Computer Science and Engineering in the year .
                                    Let us rewind and take a look at his journey which started from CEG.
                                    </div>
                                </div>
                            </div>
                            <div id="latest-right" className='flex justify-between items-center'>
                                <div className='flex-[0] sm:flex-[0.35] h-full'>
                                    <img id="latest-img" className='w-[350px] h-[150px] md:h-full object-cover' alt="logo" src="/zoho.png"></img>
                                </div>
                                <div id="full-latest" className='flex-[1] sm:flex-[0.63]'>
                                    <div id="date-latest" className='font-normal text-[13px] md:text-[16px] leading-[19px] md:leading-[18px] text-navSpecial'>January 11, 2022</div>
                                    <div className='title-and-author my-[5px] flex items-center justify-between'>
                                        <a href='/explore'>
                                            <div id="title-latest" className='mt-[5px] md:mt-[15px] mb-[10px] w-max font-bold text-[16px] md:text-[23px] leading-[19px] md:leading-[22px] cursor-pointer border-b-2 border-solid border-white'>Rewind Chapter</div>
                                        </a>
                                        <div id="author-latest" className='mt-[15px] mb-[10px] italic font-medium text-[12px] md:text-[17px] leading-[19px] md:leading-[20px] '>By Anonymous</div>
                                    </div>
                                    <div id="content-latest" className='font-medium text-[12px] md:text-[14px] leading-[19px] md:leading-[20px] tracking-[0.5px]'>
                                    Ramkumar, an alumnus of College of Engineering Guindy completed his BE Computer Science and Engineering in the year .
                                    Let us rewind and take a look at his journey which started from CEG.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="our-blogs" className='w-[min(90%,1450px)] py-[5em] my-0 mx-auto'>
                <Subheading title={"Our Blogs"} />
                <div id="blog-div" className='mt-[2em] flex items-center justify-center flex-wrap'>
                    {ourblog.map((value)=>{
                        return (
                            <div className='our-blog-container bg-ourBlogBg max-w-[400px] h-[490px] my-[1em] mx-[20px] rounded-[40px]'>
                                <div className='blog-left-img h-[48%] rounded-[27px]'>
                                    
                                </div>
                                <div id="details" className='py-[12px] px-[18px] tracking-[1px] font-blog'>
                                    <div id="date" className='mt-[17px] md:mt-0 font-bold text-[15px] md:text-base md:leading-[20px] text-navSpecial'>
                                        {value.date}
                                    </div>
                                    <a href='/explore'>
                                        <div id="blog-title" className='mt-[15px] w-max font-bold text-[17px] leading-[19px] md:text-2xl cursor-pointer border-b-2 border-solid border-white'>
                                            {value.title}
                                        </div>
                                    </a>
                                    <div id="author" className='mt-[5px] mb-[10px] italic font-medium text-[18px] md:text-[19px] leading-[20px] '>
                                        {value.author}
                                    </div>
                                    <div id="description" className='font-medium text-[15px] md:text-[16px] leading-[21px] tracking-[0.5px]'>
                                        {value.description}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            
        </div>
    );
}
export default Blog;