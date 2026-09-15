
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import About from "../Componenets/About/About";
import BookDetails from "../Pages/Books/BookDetails";
import ReadList from "../Pages/ReadList/ReadList";


export const router = createBrowserRouter([
  {
    path: "/",
      Component: Root,
      errorElement:<ErrorPage></ErrorPage>,
      children:[ 
          {
            index: true,
            loader:()=> fetch('https://raw.githubusercontent.com/RokNRolhurley/proHero/refs/heads/main/7thMilestone/module45/react-boipoka-app/public/booksData.json').then(res =>res.json()),
            path:"/",
            Component: Home,
          },
          {
            path: '/about',
            Component: About,
          },
          {
            path:'/bookDetails/:id',
            loader:()=> fetch('https://raw.githubusercontent.com/RokNRolhurley/proHero/refs/heads/main/7thMilestone/module45/react-boipoka-app/public/booksData.json').then(res =>res.json()),
            Component: BookDetails,
          },
          {
            path:'readList',
            loader:()=> fetch('https://raw.githubusercontent.com/RokNRolhurley/proHero/refs/heads/main/7thMilestone/module45/react-boipoka-app/public/booksData.json').then(res =>res.json()),
            Component: ReadList,
          }

      ]  
  },
]);

