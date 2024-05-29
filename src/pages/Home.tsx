import React, { Suspense } from "react";

const Home_banner = React.lazy(
  () => import("../components/Home/banner/Home_banner")
);
const About = React.lazy(() => import("../components/Home/About"));
const Funfact = React.lazy(() => import("../components/Home/Funfact"));
const Services = React.lazy(() => import("../components/Home/Services"));
const Projects = React.lazy(() => import("../components/Home/Projects"));
const Blogs = React.lazy(() => import("../components/Home/Blogs"));
const ContactForm = React.lazy(() => import("../components/Home/ContactForm"));
const WhyChooses = React.lazy(() => import("../components/Home/WhyChooses"));
const Testimonial = React.lazy(() => import("../components/Home/Testimonial"));

import { Helmet } from "react-helmet-async";
import { HomePageData as metaTags } from "../data/Metatags";

const Home = () => {
  return (
    <Suspense fallback={<div />}>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
      </Helmet>
      <Home_banner />
      <About />
      <Funfact />
      <Services />
      <Projects />
      <Blogs />
      <ContactForm />
      <WhyChooses />
      <Testimonial />
    </Suspense>
  );
};

export default Home;
