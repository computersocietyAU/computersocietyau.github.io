import './Blog.css'
import {useNavigate} from 'react-router-dom';

function Blog() {
    let navigate=useNavigate();
    let ourblog=[
        {
            date: "11th January, 2022;",
            title: "Rewind Chapter",
            author: "By Anonymous",
            description: "Ramkumar, an alumnus of College of Engineering Guindy completed his BE Computer Science and Engineering in the year .Let us rewind and take a look at his journey which started from CEG.",
            content1: "In this blog post, I'll show you how easy it is to build a CSAU Website with React. After reading this blog, you'll have a fully functional Website!",
            content2: "In this blog post, I'll show you how easy it is to build a CSAU Website with React. After reading this blog, you'll have a fully functional Website!In this blog post, I'll show you how easy it is to build a CSAU Website with React. After reading this blog, you'll have a fully functional Website!In this blog post, I'll show you how easy it is to build a CSAU Website with React. After reading this blog, you'll have a fully functional Website! In this blog post, I'll show you how easy it is to build a CSAU Website with React. After reading this blog, you'll have a fully functional Website! In this blog post, I'll show you how easy it is to build a CSAU Website with React. After reading this blog, you'll have a fully functional Website!",
            imglink: "https://futurumresearch.com/wp-content/uploads/2020/03/Zoho-Corporation-office.png"
        },
        {
            date: "11th January, 2022;",
            title: "Rewind Chapter",
            author: "By Anonymous",
            description: "Ramkumar, an alumnus of College of Engineering Guindy completed his BE Computer Science and Engineering in the year .Let us rewind and take a look at his journey which started from CEG.",
            content1: "In this blog post, I'll show you how easy it is to build a CSAU Website with React. After reading this blog, you'll have a fully functional Website!",
            content2: "In this blog post, I'll show you how easy it is to build a CSAU Website with React. After reading this blog, you'll have a fully functional Website!In this blog post, I'll show you how easy it is to build a CSAU Website with React. After reading this blog, you'll have a fully functional Website!In this blog post, I'll show you how easy it is to build a CSAU Website with React. After reading this blog, you'll have a fully functional Website! In this blog post, I'll show you how easy it is to build a CSAU Website with React. After reading this blog, you'll have a fully functional Website! In this blog post, I'll show you how easy it is to build a CSAU Website with React. After reading this blog, you'll have a fully functional Website!",
            imglink: "https://futurumresearch.com/wp-content/uploads/2020/03/Zoho-Corporation-office.png"
        },
        {
            date: "11th January, 2022;",
            title: "Rewind Chapter",
            author: "By Anonymous",
            description: "Ramkumar, an alumnus of College of Engineering Guindy completed his BE Computer Science and Engineering in the year .Let us rewind and take a look at his journey which started from CEG.",
            content1: "In this blog post, I'll show you how easy it is to build a CSAU Website with React. After reading this blog, you'll have a fully functional Website!",
            content2: "In this blog post, I'll show you how easy it is to build a CSAU Website with React. After reading this blog, you'll have a fully functional Website!In this blog post, I'll show you how easy it is to build a CSAU Website with React. After reading this blog, you'll have a fully functional Website!In this blog post, I'll show you how easy it is to build a CSAU Website with React. After reading this blog, you'll have a fully functional Website! In this blog post, I'll show you how easy it is to build a CSAU Website with React. After reading this blog, you'll have a fully functional Website! In this blog post, I'll show you how easy it is to build a CSAU Website with React. After reading this blog, you'll have a fully functional Website!",
            imglink: "https://futurumresearch.com/wp-content/uploads/2020/03/Zoho-Corporation-office.png"
        }
    ]
  return (
    <div id="Blog">
        <center>
            <div id="latest-blog-img">
            <div>
                <label style={{visibility:"hidden"}}>BLOGS</label>
            </div>
            <div id="heading">
                <label id="title" style={{color:"#F0F8FF"}}>Latest Blog</label> 
            </div>
            <div id="blog-latest">
                <div id="about-blog-latest">
                    <img alt="logo" src="https://futurumresearch.com/wp-content/uploads/2020/03/Zoho-Corporation-office.png"></img>
                    <div id="details">
                        <div id="date">
                            11th January, 2022;
                        </div>
                        <div id="blog-title" onClick={()=>navigate('/explore')}>
                            Rewind Chapter
                        </div>
                        <div id="author">
                            By Anonymous
                        </div>
                        <div id="description">
                        Ramkumar, an alumnus of College of Engineering Guindy completed his BE Computer Science and Engineering in the year .
                        Let us rewind and take a look at his journey which started from CEG.
                        </div>
                    </div>
                </div>
                <div>
                    <div id="latest-right">
                        <div>
                            <img id="latest-img" alt="logo" src="https://futurumresearch.com/wp-content/uploads/2020/03/Zoho-Corporation-office.png"></img>
                        </div>
                        <div id="full-latest">
                            <div>
                                <label style={{visibility:"hidden"}}>BLOGS</label>
                            </div>
                            <div id="date-latest">january 11, 2022</div>
                            <div id="author-latest">By Anonymous</div>
                            <div id="title-latest">Rewind Chapter</div>
                            <div id="content-latest">
                            Ramkumar, an alumnus of College of Engineering Guindy completed his BE Computer Science and Engineering in the year .
                            Let us rewind and take a look at his journey which started from CEG.
                            </div>
                        </div>
                    </div>
                    <div id="hor-line">

                    </div>
                    <div id="latest-right">
                        <div>
                            <img id="latest-img" alt="logo" src="https://futurumresearch.com/wp-content/uploads/2020/03/Zoho-Corporation-office.png"></img>
                        </div>
                        <div id="full-latest">
                            <div>
                                <label style={{visibility:"hidden"}}>BLOGS</label>
                            </div>
                            <div id="date-latest">january 11, 2022</div>
                            <div id="author-latest">By Anonymous</div>
                            <div id="title-latest">Rewind Chapter</div>
                            <div id="content-latest">
                            Ramkumar, an alumnus of College of Engineering Guindy completed his BE Computer Science and Engineering in the year .
                            Let us rewind and take a look at his journey which started from CEG.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div id="our-blog-img">
            <div>
                <label style={{visibility:"hidden"}}>BLOGS</label>
            </div>
            <div id="heading">
                <label id="title" style={{color:"#F0F8FF"}}>OUR BLOGS</label> 
            </div>
            <div id="blog-div">
            {ourblog.map((value)=>{
                return<>
                <div id="about-blog">
                            <img alt="logo" src={value.imglink}></img>
                            <div id="details">
                                <div id="date">
                                    {value.date}
                                </div>
                                <div id="blog-title" onClick={()=>navigate('/explore',{ state: { content: value } })}>
                                    {value.title}
                                </div>
                                <div id="author">
                                    {value.author}
                                </div>
                                <div id="description">
                                    {value.description}
                                </div>
                            </div>
                        </div>
                </>
                })}
            </div>
            </div>
        </center>
    </div>
  );
}

export default Blog;