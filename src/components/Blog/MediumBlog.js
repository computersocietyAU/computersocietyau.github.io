import { useMatch, useRouter } from '@tanstack/react-location';
import React from 'react'

const handleClick = () => {

}

const MediumBlogCard = ({imageURL,title,body,link}) => (
  
    <div className="flex justify-center transition ease-in-out hover:scale-105 duration-200">
  <div
    className="glassIco block rounded-lg shadow-lg max-h-[300px]" onClick={handleClick}>
      <img
        className="rounded-t-lg object-cover h-3/5 w-full"
        src={imageURL}
        alt={title} />
    <div className="p-4">
      <h5
        className="mb-4 text-xl text-neutral-800 dark:text-neutral-50">
        {title}
      </h5>
      <div className='flex justify-end mt-[2em]'>
      {/* <a href={link} target="_blank" rel="noreferrer noopener">
      <button
        type="button"
        className="inline-block rounded bg-navSpecial px-6 pt-2.5 pb-2 text-sm font-medium leading-normal text-navbarBg"
        data-te-ripple-init
        data-te-ripple-color="light">Read more</button>
      </a> */}
      </div>
    </div>
  </div>
</div>
)

function MediumBlog() {

    const { data } = useMatch();
    console.log(data.blogs)
    // useEffect(() => {
    //     getBlogData()
    // }, [])
  
    const router = useRouter()

    if(router.pending){
      return(
        <div class="flex items-center justify-center space-x-2 animate-pulse h-screen w-screen">
          <div class="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin text-navSpecial"></div>
        </div>
      )
    }

    if(data.blogs.length===0){
      return(
        <div className="flex flex-col items-center justify-center h-screen w-screen">
        <h1 className="font-semibold text-xl md:text-5xl text-navSpecial">No blogs present! Stay tuned for more updates</h1>
       </div>
      )
    }

  return (
    <div className="pt-[7em] px-7">
         <div className="text-white font-main font-bold text-[20px] mb-[2em] xlg:text-[30px] text-center uppercase flex justify-center">
          <p className="w-fit border-white border-t-[5px] border-b-[5px]">
            Blogs
          </p>
        </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mx-8 gap-y-3 gap-x-8 h-full">
          {/* <MediumBlogCard/> */}
          {/* {blogs?.map()} */}
          {
          data.blogs.map(blog=>(
          <a href={blog.link} target="_blank" rel="noreferrer noopener">
            <MediumBlogCard imageURL={blog.thumbnail} title={blog.title} link={blog.link} body={blog.content}/>
          </a>
          ))}
        </div>
    </div>
  )
}

export default MediumBlog