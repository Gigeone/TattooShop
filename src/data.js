// import images
import Logo from '../src/img/header/logo.svg'
import GalleryImg1 from '../src/img/gallery/1.png'
import GalleryImg2 from '../src/img/gallery/2.png'
import GalleryImg3 from '../src/img/gallery/3.png'
import GalleryImg4 from '../src/img/gallery/4.png'
import GalleryImg5 from '../src/img/gallery/5.png'
import GalleryImg6 from '../src/img/gallery/6.png'
import GalleryImg7 from '../src/img/gallery/7.png'
import GalleryImg8 from '../src/img/gallery/8.png'
import QuoteImg from '../src/img/testimonial/quote.svg'
// import icons
import { GrFacebookOption } from 'react-icons/gr'
import { IoMdArrowForward } from 'react-icons/io'
import { FiSend } from 'react-icons/fi'
import { FaPlay, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import {
  IoLogoInstagram,
  IoLogoPinterest,
  IoLogoTwitter,
  IoLogoYoutube,
} from 'react-icons/io'

export const headerData = {
  logo: Logo,
}

export const navData = {
  items: [
    { href: 'Home', name: 'Home' },
    { href: 'About', name: 'About' },
    { href: 'Gallery', name: 'Gallery' },
    { href: 'Interview', name: 'Interview' },
    { href: 'Articles', name: 'Articles' },
    { href: 'Contact', name: 'Contact' },
  ],
}

export const socialData = [
  { href: '/', icon: <GrFacebookOption /> },
  { href: '/', icon: <IoLogoInstagram /> },
  { href: '/', icon: <IoLogoPinterest /> },
  { href: '/', icon: <IoLogoTwitter /> },
  { href: '/', icon: <IoLogoYoutube /> },
]

export const heroData = {
  title: 'I’m Void Sir.',
  subtitle:
    'Tattoos have their own unique power and magic. They not only beautify the body but also the psyche.',
  btnText: 'read more',
  btnIcon: <IoMdArrowForward />,
}

export const aboutData = {
  title: 'My Story:',
  subtitle1:
    'I started in 2011 as an apprentice in a small Brooklyn shop, cleaning stations and drawing flash every night for two years before I was trusted with my first client. In 2017 I opened The Void with a single chair and one rule: no piece leaves the studio unless I would wear it myself.',
  subtitle2:
    'Today I split my time between our two studios, in New York and Los Angeles, and specialise in blackwork, fine line and black and grey realism. Every design is drawn from scratch after a free consultation, never copied from a catalogue. Each session uses sterile, single-use equipment, and I follow up with every client until the tattoo is fully healed.',
  btnText: 'Book a consultation',
  btnIcon: <IoMdArrowForward />,
}

export const galleryData = {
  title: 'Check my gallery:',
  btnText: 'View all',
  btnIcon: <IoMdArrowForward />,
  images: [
    {
      src: GalleryImg1,
      original: GalleryImg1,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg2,
      original: GalleryImg2,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg3,
      original: GalleryImg3,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg4,
      original: GalleryImg4,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg5,
      original: GalleryImg5,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg6,
      original: GalleryImg6,
      width: 464,
      height: 412,
    },
    {
      src: GalleryImg7,
      original: GalleryImg7,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg8,
      original: GalleryImg8,
      width: 465,
      height: 412,
    },
  ],
}

export const interviewData = {
  title:
    '“Consider what you desire. Your tattoo artist will never tell you what tattoo to have.”',
  btnText: 'Watch it now',
  btnIcon: <FaPlay />,
}

export const testimonialData = [
  {
    quoteImg: QuoteImg,
    message:
      "The entire team is extremely kind and friendly. They're fantastic. They're great at what they do! And it's unique.They will properly consult with you.",
    name: 'Jack Geoffrey',
    occupation: 'Tattoo Artist',
  },
  {
    quoteImg: QuoteImg,
    message:
      'I came in with a rough idea and left with a piece that tells my story better than I could have imagined. Clean studio, calm atmosphere, and the healing went perfectly.',
    name: 'Douglas Hane',
    occupation: 'Client since 2021',
  },
]

export const contactData = {
  title: 'Get in touch with me:',
  info: [
    {
      title: 'LA office',
      subtitle:
        'Our original studio. Walk-ins welcome Wednesday to Saturday for small pieces, consultations by appointment on Monday and Tuesday.',
      address: {
        icon: <FaMapMarkerAlt />,
        name: '784 Norman Street, Los Angeles',
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: '+49 93 30493943',
      },
      email: {
        icon: <FaEnvelope />,
        address: 'contact@yourcompany.com',
      },
      link: 'Get location',
    },
    {
      title: 'NYC office',
      subtitle:
        'Our second studio, with the same hours. Book a free consultation to talk through your project.',
      address: {
        icon: <FaMapMarkerAlt />,
        name: '1630 Elm Drive, New York City',
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: '+49 34 36573355',
      },
      email: {
        icon: <FaEnvelope />,
        address: 'contact@yourcompany.com',
      },
      link: 'Get location',
    },
  ],
  form: {
    name: 'Write your name here',
    email: 'Write your email address',
    message: 'Write your messages here',
    btnText: 'Send it',
  },
}

export const footerData = {
  about: {
    title: 'About void tattoo',
    subtitle:
      'Custom tattoos drawn by hand, inked with care in a clean and welcoming studio.',
    address: {
      icon: <FaMapMarkerAlt />,
      name: '1630 Elm Drive, New York City',
    },
    phone: {
      icon: <FaPhoneAlt />,
      number: '+49 34 36573355',
    },
    email: {
      icon: <FaEnvelope />,
      address: 'contact@yourcompany.com',
    },
  },
  links: {
    title: 'Useful links',
    items: [
      { href: '/', name: 'About me' },
      { href: '/', name: 'My gallery' },
      { href: '/', name: 'My services' },
      { href: '/', name: 'Contact me' },
    ],
  },
  program: {
    title: 'Working Time',
    items: [
      { name: 'Mon - Tue / Appointment' },
      { name: 'Wed - Fri / 10:00 - 9:00pm' },
      { name: 'Sat / 10:00 - 6:00pm' },
      { name: 'Sun / no work on this day' },
    ],
  },
  newsletter: {
    title: 'Newsletter',
    subtitle:
      'New flash designs, guest artists and available slots, once a month. No spam.',
    form: {
      placeholder: 'Your email address',
      icon: <FiSend />,
    },
  },
}
