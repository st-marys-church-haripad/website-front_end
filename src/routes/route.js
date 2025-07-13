import About from "@/pages/About";
import Contact from "@/pages/Contact";
import EttuNomb from "@/pages/EttuNomb";
import Home from "@/pages/Home";
import Samajam from "@/pages/Samajam";
import SundaySchool from "@/pages/SundaySchool";
import Youth from "@/pages/Youth";

const date = new Date();
export const menuItems = [
    {
      title : 'Home',
      url : '/',
      element : Home
    },
    {
      title : 'About Church',
      url : '/about',
      element : About
    },
    {
      title : 'Organizations',
      subMenu : [
        {
          title : 'Sunday School',
          url : '/sunday-school',
          element : SundaySchool
        },
        {
          title : 'OCYM',
          url : '/ocym',
          element : Youth
        },
        {
          title : 'Marthamariyam Samajem',
          url : '/marthamariyam-samajem',
          element : Samajam
        },
        // {
        //   title : 'Church Choir',
        //   url : '/church-choir',
        //   element : <Choir />
        // }
      ]
    },
    // {
    //   title : 'News & Events',
    //   url : '/news-events',
    //   element : <News />
    // },
    // {
    //   title : 'Live Streams',
    //   url : '/live-streams',
    //   element : <Live />
    // },
    {
      title : `എട്ടുനോമ്പ് ${date.getFullYear()}`,
      url : `/എട്ടുനോമ്പ്-${date.getFullYear()}`,
      element : EttuNomb
    },
    {
      title : 'Contact Us',
      url : '/contact',
      element : Contact
    },
]