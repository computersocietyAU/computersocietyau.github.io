import { useMatch } from '@tanstack/react-location'
import BlockContent from "@sanity/block-content-to-react"

const ExploreBlog = () => {

    const {data:{blog}} = useMatch()

    console.log(blog)
 
    const content = {
        date: "Aug 11, 2022",
        title: "Rewind Chapter",
        author: "Anonymous",
        description: "Ramkumar, an alumnus of College of Engineering Guindy completed his BE Computer Science and Engineering in the year .Let us rewind and take a look at his journey which started from CEG.",
        content1: "In this blog post, I'll show you how easy it is to build a CSAU Website with React. After reading this blog, you'll have a fully functional Website!",
        content2: "In this blog post, I'll show you how easy it is to build a CSAU Website with React. After reading this blog, you'll have a fully functional Website!In this blog post, I'll show you how easy it is to build a CSAU Website with React. After reading this blog, you'll have a fully functional Website!In this blog post, I'll show you how easy it is to build a CSAU Website with React. After reading this blog, you'll have a fully functional Website! In this blog post, I'll show you how easy it is to build a CSAU Website with React. After reading this blog, you'll have a fully functional Website! In this blog post, I'll show you how easy it is to build a CSAU Website with React. After reading this blog, you'll have a fully functional Website!",
        imglink: "https://futurumresearch.com/wp-content/uploads/2020/03/Zoho-Corporation-office.png"
    }
  return (
    <div className="explore-blog pt-[4.5em] font-exploreBlogText">
        <div className='h-[43vh] flex justify-center items-center'>
            <img alt='zoho logo' src={blog.mainImage.asset.url} className='block w-full h-full rounded-[45px] object-cover' />
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
                        <i className="fa-regular fa-user fa-2x"></i>
                        <label className='ml-[20px] tracking-[1.5px]'> {blog.author}</label>
                    </div>
                    <div id="icons-main" className='flex flex-wrap items-center'>
                        <i className="fa-regular fa-calendar fa-2x"></i>
                        <label className='ml-[20px] tracking-[1.5px]'>  {blog.publishedAt}</label>
                    </div>
                </div>
                <div className="w-full h-full m-5 text-black">
                    <BlockContent
                    blocks={blog.body}
                    projectId="wzu06sd5"
                    dataset="production"
                    />
                </div>
            </div>
        </div>
        <div id="right-side" className='fixed z-[1] text-black overflow-x-hidden top-[60%] right-[2%]'>
            <i id="icons-right" className="mb-[10px] fa fa-facebook-f"></i>
            <br></br>
            <i id="icons-right" className="mb-[10px] fa fa-twitter"></i>
            <br></br>
            <i id="icons-right" className="mb-[10px] fa fa-instagram"></i>
            <br></br>
            <i id="icons-right" className="mb-[10px] fa fa-pinterest"></i>
            <br></br>
            <i id="icons-right" className="mb-[10px] fa-solid fa-link"></i>
            <br></br>
        </div>
    </div>
  );
}

export default ExploreBlog;