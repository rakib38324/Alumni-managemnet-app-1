import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Rakib from "../Pages/TestingPage/Rakib";
import Uhai from "../Pages/TestingPage/Uhai";
import Main from "../../src/layout/Main";
import LogIn from "../Pages/LogIn.js/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import Events from "../Pages/Events/Events";
import AboutUs from "../Pages/AboutUs/AboutUs";
import SingleEvent from "../Pages/SingleEvent/SingleEvent";
import SinglePerson from "../Pages/SinglePerson/SinglePerson";
import AlumniPage from "../Pages/AlumniDirectory/AlumniPage";
import MembershipForm from "../Pages/MembershipForm/MembershipForm";
import DashboardLayout from "../layout/DashboardLayout";
import DashboardMain from "../Dashboard/DashboardPages/DashboardMain";
import DashboardTestPage from "../Dashboard/DashboardPages/DashboardTestPage";
import AddAEvent from "../Dashboard/DashboardPages/AddAEvent";
import CreateGallery from "../Dashboard/DashboardComponents/Gallery/CreateGalleryItem";
import CheckoutPage from "../Pages/CheckoutPage/CheckoutPage";
import SingleSuccessFullStory from "../sharedComponents/CreateSuccessFullStory/SingleSuccessFullStory";
import SingleNewsSection from "../sharedComponents/NewsCards/SingleNewsSection";
import BatchWiseStudent from "../Pages/BatchwiseStudent/BatchwiseStudent";
import DisplaySingleCharity from "../sharedComponents/ShowCharity/DisplaySingleCharity";
import AllNews from "../sharedComponents/NewsCards/AllNews";
import AllGalleryImage from "../Pages/Home/Gallery/AllGalleryImage";
import SingleGalleryImage from "../Pages/Home/Gallery/SingleGalleryImage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/rakib", element: <Rakib /> },
      {
        path: "/uhai",
        element: <Uhai />,
      },
      {
        path: "/rony",
        element: <MembershipForm />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/successFullStory/:id",
        element: <SingleSuccessFullStory></SingleSuccessFullStory>,
      },
      {
        path: "/news",
        element: <AllNews></AllNews>,
      },
      {
        path: "/gallery",
        element: <AllGalleryImage></AllGalleryImage>,
      },
      // {
      //   path: "/galleries/:id",
      //   loader: async ({ params }) => {
      //     return fetch(
      //       `https://alumni-managemnet-app-server.vercel.app/galleries/${params.id}`
      //     );
      //   },
      //   element: <SingleGalleryImage></SingleGalleryImage>,
      // },
      {
        path: "/news/:id",
        element: <SingleNewsSection></SingleNewsSection>,
      },
      {
        path: "/charity/:id",
        element: <DisplaySingleCharity></DisplaySingleCharity>,
      },
      {
        path: "/events/:singleEventId",
        element: <SingleEvent />,
      },

      {
        path: "/alumni",
        element: <AlumniPage />,
      },

      {
        path: "/alumni/batch/:year",
        element: <BatchWiseStudent />,
      },
      // single student / alumni page data
      {
        path: "/alumni/:id",
        element: <SinglePerson />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },

      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/dashboard/",
    element: <DashboardLayout />,
    children: [
      { path: "/dashboard/", element: <DashboardMain /> },
      { path: "/dashboard/alumni/", element: <DashboardTestPage /> },
      { path: "/dashboard/news/", element: <DashboardTestPage /> },
      { path: "/dashboard/events", element: <AddAEvent /> },
      { path: "/dashboard/gallery/", element: <DashboardTestPage /> },
      { path: "/dashboard/profile/", element: <MembershipForm /> },
      { path: "/dashboard/addAGalleryItem/", element: <CreateGallery /> },
      { path: "/dashboard/Checkout/", element: <CheckoutPage /> },
    ],
  },
]);

export default routes;
