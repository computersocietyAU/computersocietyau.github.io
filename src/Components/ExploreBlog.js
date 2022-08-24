import './ExploreBlog.css'
import { useLocation } from 'react-router';

function ExploreBlog() {
    const { state } = useLocation();
    const { content } = state;
  return (
    <center>
        <div>
            <div id="img-head">
            <img alt="logo" src="https://futurumresearch.com/wp-content/uploads/2020/03/Zoho-Corporation-office.png"></img>
            </div>
            <div>
                <label id="title">{content.title}</label>
                <div id="content-1">
                {content.description}
                </div>
                <div id="content-2">
                    <div>
                        <i class="fa fa-user fa-2x"></i>
                        <label>  {content.author}</label>
                    </div>
                    <div>
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
        </div>
    </center>
  );
}

export default ExploreBlog;