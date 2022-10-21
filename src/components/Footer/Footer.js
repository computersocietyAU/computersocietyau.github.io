import React from 'react'

export default function Footer() {
  return (
    <section className='w-full pt-28 pb-32 flex justify-center items-center flex-col' id='contact'>
        <div className='contact-container flex flex-col xlg:flex-row justify-center xlg:justify-between items-center mx-auto flex-wrap pr-[15px]] xlg:pr-[60px] pl-7px w-[min(90%,1100px)]'>
          <img src='/logo.png' alt='contact-logo'
            className='block object-contain w-[200px] h-[200px] xlg:w-[250px] xlg:h-[250px] xlg:mr-[50px]'
          />
          <div className='flex flex-wrap flex-col-reverse xlg:flex-row justify-center xlg:justify-between items-center flex-1 xlg:flex-[0.9] lg:flex-[0.8] mt-[-30px] xlg:mt-0'>
            <form id='contact-form' className='flex flex-col align-center justify-around my-[20px] xlg:my-0'>
              <input type="text" placeholder="Email Address" autoComplete='off' required 
                className='bg-formInput py-4 px-2.5 h-9 w-[300px] font-linksText text-inputColor text-sm outline-none border-none rounded-md'
              />
              <textarea placeholder='Get in touch with us' cols="20" rows="5" autoComplete='off' required
                className='bg-inputBg w-[300px] h-[85px] font-linksText text-inputColor text-sm outline-none border-none rounded-md my-[10px] p-[10px] resize-none'
              >
              </textarea>
              <button type='submit'
                className='bg-buttonBg w-[300px] font-linksText text-inputColor text-sm outline-none rounded-md p-[10px] tracking-[1px] cursor-pointer border-[1px] border-inputBorder border-solid'
              >
                SEND MESSAGE
              </button>
            </form>
            <ul className='list-none'>
              <li>
                <a href='/' className='text-navSpecial xlg:text-white block my-[15px] opacity-[0.85] tracking-[1px] no-underline font-linksText'>
                Home
                </a>
              </li>
              <li>
                <a href='/events' className='text-navSpecial xlg:text-white block my-[15px] opacity-[0.85] tracking-[1px] no-underline font-linksText'>
                  Events
                </a>
              </li>
              <li>
                <a href='/blogs' className='text-navSpecial xlg:text-white block my-[15px] opacity-[0.85] tracking-[1px] no-underline font-linksText'>
                  Blogs
                </a>
              </li>
              <li>
                <a href='/team' className='text-navSpecial xlg:text-white block my-[15px] opacity-[0.85] tracking-[1px] no-underline font-linksText'>
                  Team
                </a>
              </li>
            </ul>
          </div>
        </div>
        <footer className='my-[30px] w-[min(90%,1200px)]'>
          <hr className='w-[min(90%,1200px)] mx-auto bg-footerRule opacity-75 border-[0.5px] border-footerBorder border-solid' />
          <div className='w-[min(90%,1200px)] my-[20px] mx-auto flex items-center justify-between flex-wrap'>
            <p className='font-linksText text-[12px] sm:text-sm tracking-[1px] opacity-[0.75]'>
              Copyright 2022 CSAU
            </p>
            <div className='social flex items-center'>
              <a href='https://www.facebook.com/csau.ceg/'>
                <img className='block mx-[10px] w-[15px] h-[15px] sm:w-[20px] sm:h-[20px]' src='/facebook.png' alt='social' />
              </a>
              <a href='https://www.instagram.com/csau_ceg/'>
                <img className='block mx-[10px] w-[15px] h-[15px] sm:w-[20px] sm:h-[20px]' src='/instagram.png' alt='social' />
              </a>
              <a href='https://www.linkedin.com/school/computer-society-of-anna-university/'>
                <img className='block mx-[10px] w-[15px] h-[15px] sm:w-[20px] sm:h-[20px]' src='/linkedin.png' alt='social' />
              </a>
            </div>
          </div>
        </footer>
      </section>
  )
}
