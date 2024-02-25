import mobile from "../assets/mobile.svg";
import laptop from "../assets/laptop.svg";
import littlelemonmob from '../assets/littlelemon-mob.png'
import littlelemonlap from '../assets/littlelemon-laptop.png'
import bandappmob from '../assets/bandapp-mob.png'
import bandapplap from '../assets/bandapp-laptop_.png'

export const projectData = [
  {
    id: 1,
    phoneImage: mobile,
    phoneScreen: littlelemonmob,
    laptopImage: laptop,
    laptopScreen: littlelemonlap,
    heading: "Meta frontend developer specialization: React project",
    paragraph:
      "This is a website for a restaurant where users can order food online, reserve a table, log into account, check online menu and specials",
    technologies: "Technologies used: React, Formik, Chakra-UI, Yup",
    showImg: false
  },
  {
    id: 2,
    phoneImage: mobile,
    phoneScreen: bandappmob,
    laptopImage: laptop,
    laptopScreen:bandapplap,
    heading: "Disco Fighter band website: React Project",
    paragraph: "This is a website for a band where fans can go and buy new album, see live tour dates and past dates, shop for merchandise, watch band music videos and subscribe to their news letter",
    technologies:"React",
    showImg: false
  },
  // {
  //   id: 3,
  //   phoneImage: "",
  //   phoneScreen: "../assets/bandapp-laptop.png",
  //   laptopImage: laptop,
  //   laptopScreen: "../assets/bandapp-laptop.png",
  //   heading: "",
  //   paragraph: "",
  //   technologies:""
  // },
];
