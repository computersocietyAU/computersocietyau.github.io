import React from 'react';
import "./Home.css";

const Home = () => {
  return (
    <main id='home'>
      <section id='landing'>
        <figure>
          <img src='/logo.png' alt="csau-logo" /> 
          <figcaption>A meeting place for ideas</figcaption>
        </figure>
      </section>
      <section id='about1'>
        <div className='content'>
          <h1>Who we are ?</h1>
          <div className='about-container-one'>
            <img src='/about1.png' alt='about1' />
            <p>
              Computer Society of Anna University is a student club functioning under the Ramanujan Computing Centre, Anna University. 
              With the prestige of being one of the oldest technical clubs of CEG, the club aims at bringing the students together to grow 
              through knowledge sharing and to make them realize their potential and nourish it.
            </p>
          </div>
        </div>
      </section>
      <section id='about2'>
        <div className='content'>
          <h1>What we do ?</h1>
          <div className='about-container-two'>
            <img src='/about2.png' alt='about2' />
            <p>
              We at CSAU work towards disseminating knowledge about technology. We bring together the knowledge and co-operation of peers, juniors and 
              alumni to create an informative network and help in upskilling. Various events has been 
              organised as student initiatives throughout the year where various spokespersons from the industry have been invited to shed light upon the students to nurture their wisdom. 
            </p>
          </div>
        </div>
      </section>
      <section id='contact'>
        <div className='contact-container'>
          <img src='/logo.png' alt='contact-logo' />
          <div>
            <form id='contact-form'>
              <input type="text" placeholder="Email Address" autoComplete='off' required />
              <textarea placeholder='Get in touch with us' cols="20" rows="5" autoComplete='off' required>

              </textarea>
              <button type='submit'>SEND MESSAGE</button>
            </form>
            <ul>
              <li><a href='/'>Home</a></li>
              <li><a href='/events'>Events</a></li>
              <li><a href='/blogs'>Blogs</a></li>
              <li><a href='/team'>Team</a></li>
            </ul>
          </div>
        </div>
        <footer>
          <hr />
          <div>
            <p>Copyright 2022 CSAU</p>
            <div className='social'>
              <a href='https://www.facebook.com/csau.ceg/'><img src='/facebook.png' alt='social' /></a>
              <a href='https://www.instagram.com/csau_ceg/'><img src='/instagram.png' alt='social' /></a>
              <a href='https://www.linkedin.com/school/computer-society-of-anna-university/'><img src='/linkedin.png' alt='social' /></a>
            </div>
          </div>
        </footer>
      </section>
    </main>
  )
};

export default Home;