import nokia from '../assets/logo.svg'
import { TbWorld } from "react-icons/tb";
import { VscSearch } from "react-icons/vsc";
import img from '../assets/resrcid31120_gettyimages-1252419763-hgh.jpg.webp'
import photo from '../assets/thumbnail_nok2922-smartfactory-1920x1080.jpg.webp'
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const navbar_list = ['Service providers','Enterprices and goverments','Licensing','Partners','Insights and research','We are Nokia']
 const NavbarIcons = [<TbWorld />,<VscSearch />]
 const BannerIcons = [<FaInstagram />,<FaYoutube/>,<FaXTwitter/>,<FaFacebookF />,<FaLinkedinIn />]
 const text = ['Solutions for industry','|','Energy','|','Manufacturing and logistics','|','Public sector','|','Transportation','|','More']
const img_text = ['Networks for enterprises and governments']

const site_bar = ['Harness the exponential potential of networks']
const site_barText = ['The potential of networks goes far beyond simply connecting people and things. Networks can be an amplifier for your business, accelerating your digital transformation journey, helping you to optimize and grow your business and create a more productive, sustainable and accessible future for all. Transform your business to the power of n.']


export const PRODUCTS = [

  {
    id: "pro-1",
    title: "Energy",
    price: 199_000,
    category: "texnika",
    url: [
      "https://www.nokia.com/sites/default/files/styles/c1_reference_33/public/2023-12/energy-header.png.webp"
    ]
  },
  {
    id: "pro-2",
    title: "Financial Services",
    price: 869_000,
    category: "texnika",
    url: [
      'https://www.nokia.com/sites/default/files/styles/c1_reference_33/public/2023-12/nokia-financial-services.jpg.webp'
    ]
  },
  {
    id: "pro-3",
    title: "Governments and public sector",
    price: 42_000,
    category: "hojalik-tovarlari",
    url: [
      "https://www.nokia.com/sites/default/files/styles/c1_reference_33/public/2023-12/public-sector.png.webp"
    ]
  },
]


export const PRODUCT = [

  {
  
    title: "Healthcare",
    price: 199_000,
    category: "texnika",
    url: [
      "https://www.nokia.com/sites/default/files/styles/c1_reference_33/public/2023-12/healthcare_subpage.jpg.webp"
    ]
  },
  {
   
    title: "Manufacturing",
    price: 869_000,
    category: "texnika",
    url: [
      "https://www.nokia.com/sites/default/files/styles/c1_reference_33/public/2023-12/car-assembly.png.webp"
    ]
  },
  {
    
    title: "Research and education networks    ",
    price: 42_000,
    category: "hojalik-tovarlari",
    url: [
      "https://www.nokia.com/sites/default/files/styles/c1_reference_33/public/2023-05/header-option1-1920x600.jpg.webp"
    ]
  },
]
export const PRODUC = [

  {
  
    title: "Retail",
    price: 199_000,
    category: "texnika",
    url: [
      "https://www.nokia.com/sites/default/files/styles/c1_reference_33/public/2018-11/GettyImages-849220866_1300x500px_0.jpg.webp"
    ]
  },
  {
   
    title: "Stadiums, arenas and entertainment venues" ,
    price: 869_000,
    category: "texnika",
    url: [
      "https://www.nokia.com/sites/default/files/styles/c1_reference_33/public/2022-09/resrcid31081_gettyimages-1131336496_0.jpg.webp"
    ]
  },

  {
    
    title: "Transportation and logistics",
    price: 42_000,
    category: "hojalik-tovarlari",
    url: [
      "https://www.nokia.com/sites/default/files/styles/c1_reference_33/public/2023-12/train.png.webp"
    ]
  },
]
export const PRODU = [

  {
  
    title: "Solutions for industry    ",
    price: 199_000,
    category: "Enterprise networking products and solutions for all your needs ",
    url: [
      "https://www.nokia.com/sites/default/files/styles/c1_reference_33/public/2021-12/OI_Industry_03_LR_RGB.jpg.webp"
    ]
  },
  {
   
    title: "Customer case studies" ,
    price: 869_000,
    category: "Leading organizations trust Nokia for transformative networks",
    url: [
      "https://www.nokia.com/sites/default/files/styles/c1_reference_33/public/2023-05/resrcid38723_aircraft_engineer_amplifier_16x9.jpg.webp"
    ]
  },

  {
    
    title: "Nokia Partners",
    price: 42_000,
    category: "Bringing together partners and technologies to create collaborative advantage",
    url: [
      "https://www.nokia.com/sites/default/files/styles/c1_reference_33/public/2023-02/refrence-thumbnail-1920x1080_1.jpg.webp"
    ]
  },
]

const also_text = ['Contact us','Support','Extranet access']
const footer = ['©2024 Nokia all rights reserved','Cookies','Privacy','Terms of use','Inclusive terminology','Modern slavery statement']



export{nokia,navbar_list,NavbarIcons,text,img,img_text,site_bar,site_barText,photo,also_text,BannerIcons,footer}