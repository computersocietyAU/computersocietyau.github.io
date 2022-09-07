import './ExploreBlog.css'
import { useLocation } from 'react-router';

function ExploreBlog() {
    const { state } = useLocation();
    const { content } = state;
  return (
    <center>
        <div class="font-sans">
            <div id="img-head">
            <img alt="logo" src="https://futurumresearch.com/wp-content/uploads/2020/03/Zoho-Corporation-office.png"></img>
            </div>
            <div>
                <div id="title" class="text-xl font-bold">{content.title}</div>
                <div id="content-1" class="text-xl font-bold leading-relaxed">
                    {content.description}
                </div>
                <div id="content-2">
                    <div id="icons-main">
                        <i class="fa fa-user fa-2x"></i>
                        <label>  {content.author}</label>
                    </div>
                    <div id="icons-main">
                        <i class="fa fa-calendar fa-2x"></i>
                        <label>  {content.date}</label>
                    </div>
                </div>
                <div id="content-3">
                    <label>What is what?</label>
                </div>
                <div id="content-4">
                    {content.content1}
                </div>
                <div id="content-3">
                    <label>What is what?</label>
                </div>
                <div id="content-4">
                    {content.content2}
                </div>
            </div>
            <div id="right-side">
                <i id="icons-right" class="fa fa-facebook-f"></i>
                <br></br>
                <i id="icons-right" class="fa fa-twitter"></i>
                <br></br>
                <i id="icons-right" class="fa fa-instagram"></i>
                <br></br>
                <i id="icons-right" class="fa fa-pinterest"></i>
                <br></br>
                <i id="icons-right" class="fa-solid fa-link"></i>
                <br></br>
            </div>
        </div>
    </center>
  );
}

export default ExploreBlog;