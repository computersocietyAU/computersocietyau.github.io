import React from 'react';
import {  Navbar, Events, Home } from './components';
import Team  from './components/Team/Team';
import { Router, Outlet, ReactLocation } from '@tanstack/react-location';
import Blog from './components/Blog/Blog';
import ExploreBlog from './components/Blog/ExploreBlog';
import client from './client';

const routes = [
  {
    path: '/',
    element: <Home/>
  },
  {
    path:'/events',
    element: <Events/>,
    loader: async () => {
      const data = await fetchEvents();
      console.log(data)
      const upcomingEvents = data.filter(event => event.upcoming);
      const events = data
        .filter((event) => !event.upcoming || event.upcoming === null)
      return {
        events: events,
        upcomingEvents: upcomingEvents,
      };
    }
  },
  {    
    path: "/blog/:blogId",
    element: <ExploreBlog/>,
    loader: async ({ params: { blogId } }) => {
      return {
        blog: await fetchBlogById(blogId),
      };
    },
  },
  {
    path: '/blogs',
    element: <Blog />,
    loader: async () => {
      return {
        blogs: await fetchBlogs(),
      };
    },
  },
  {
    path:'/team',
    element: <Team />,
    loader: async () => {
      return {
        team: await fetchTeam(),
      };
    },
  },
]

const location = new ReactLocation();

const App = () => {
  return (
    <Router location={location} routes={routes}>
      <div className="App">
        <Navbar />
        <Outlet />
        <div className='background fixed inset-0 z-[-1] bg-no-repeat bg-center bg-cover'>
        </div>
      </div>
    </Router>
  );
}

export default App;

async function fetchBlogs(){
  const data = await client
  .fetch(
    `*[_type == "blog"] {
    title,
    slug,
    author,
    summary,
    publishedAt,
    mainImage {
      asset -> {
        _id,
        url
      },
      alt
    }
  }`
  );
  return data;
}

async function fetchTeam() {
  const data = await client.fetch(
    `*[_type == "team"] {
    name,
    lnurl,
    designation,
    year,
    domain,
    department,
    image {
      asset -> {
        _id,
        url
      },
      alt
    }
  }`
  );
  return data;
}

async function fetchBlogById(blogId) {
  const data = await client.fetch(
    `*[slug.current == "${blogId}"] {
      title,
      body,
      author,
      summary,
      publishedAt,
      mainImage {
        asset -> {
          _id,
          url
        },
        alt
      }
    }`
  );
  return data[0];
}

async function fetchEvents() {
  const data = client.fetch(
    `*[_type == "event"] {
        title,
        location,
        slug,
        date,
        description,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        },
        upcoming,
      }`
  );
  return data;
}