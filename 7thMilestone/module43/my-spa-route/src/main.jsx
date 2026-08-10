import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Root from './components/Root/Root.jsx'
import Mobile from './components/Mobiles/Mobile.jsx'
import Home from './components/Home/Home.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Laptop from './components/Laptops/Laptop.jsx'
import Users from './components/Users/Users.jsx'
import Users2 from './components/Users2/Users2.jsx'
import UserDetails from './components/UserDetail/UserDetails.jsx'
import Posts from './components/Posts/Posts.jsx'
import PostDetails from './components/PostDetails/PostDetails.jsx'

  const userPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());


  const router = createBrowserRouter([
  { path: '/', 
    Component: Root,  
    children: [
      {index: true, Component: Home },
      {path: 'mobiles', Component: Mobile},
      {path: 'laptop', Component: Laptop},
      {
        path: 'users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      },
      {
        path: 'users2',
        element: <suspense fallback={<span>Loading...</span>}>
        <Users2 userPromise={userPromise}></Users2>
        </suspense>
        },

        {
          path: 'users/:userId',
          loader: ({params}) => 
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
          Component: UserDetails
        },
        {
          path: 'posts',
          loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
          Component: Posts
        },

        {
          path: 'posts/:postId',
          loader: ({params}) => 
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
          Component: PostDetails
        }
      
    ]
  },
  
  { path: 'about', 
    element: <div>About me</div> 
  },
  { path: 'blogs', 
    element: <div>Blogs</div> 
  },
  { path: 'app', 
    Component: App
  },

  ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider> 
  </StrictMode>,
)
