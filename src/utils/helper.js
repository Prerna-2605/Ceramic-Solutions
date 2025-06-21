import google from '../assets/png/google.png'
import greenStar from '../assets/png/green-star.png'
import stars from '../assets/png/stars.png'

import kitchen from '../assets/png/kitchen.png'
import shower from '../assets/png/shower.png'
import flooring from '../assets/png/flooring.png'
import format from '../assets/png/format-tiling.png'
import wall from '../assets/png/wall-tiling.png'
import ada from '../assets/png/ada-shower.png'
import fireplace from '../assets/png/fireplace-tiling.png'
import arrow from '../assets/svg/arrow.svg'

import { CALL, STAR, THUMB } from './Icons'

import profile1 from '../assets/svg/profile1.svg'
import profile2 from '../assets/svg/profile2.svg'
import profile3 from '../assets/svg/profile3.svg'
import profile4 from '../assets/svg/profile4.svg'

export const nav = [
    {
        name: 'home',
        link: 'home'
    },
    {
        name: 'about',
        link: '/about'
    },
    {
        name: 'services',
        link: '/services'
    },
    {
        name: 'portfolio',
        link: '/portfolio'
    },
    {
        name: 'contact us',
        link: '/contact us'
    },
    {
        name: 'request a quote',
        link: '/request a quote'
    },
];

export const review = [
    {
        icon: google,
        name: 'Google Review',
        rating: '4.6',
        star: stars,
        reviews: 'Based on 145 reviews',
    },
    {
        icon: greenStar,
        name: 'Trust Pilot Review',
        rating: '4.6',
        star: stars,
        reviews: 'Based on 145 reviews',
    }
];

export const whatWeDo = [
    {
        image: kitchen,
        heading: "Kitchen Backsplash",
        content: "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.",
        more: "Learn more",
        redarrow: arrow,
    },
    {
        image: shower,
        heading: "Custom Showers",
        content: "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.",
        more: "Learn more",
        redarrow: arrow,
    },
    {
        image: flooring,
        heading: "Custom Flooring",
        content: "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.",
        more: "Learn more",
        redarrow: arrow,
    },
    {
        image: format,
        heading: "Large Format Tiling",
        content: "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.",
        more: "Learn more",
        redarrow: arrow,
    },
    {
        image: wall,
        heading: "Wall Tiling",
        content: "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.",
        more: "Learn more",
        redarrow: arrow,
    },
    {
        image: ada,
        heading: "ADA Compliant Showers",
        content: "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.",
        more: "Learn more",
        redarrow: arrow,
    },
    {
        image: fireplace,
        heading: "Fireplace Tiling",
        content: "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.",
        more: "Learn more",
        redarrow: arrow,
    }
];

export const whyUs = [
    {
        icon: STAR,
        heading: "High Quality Materials",
        content: "Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird.",
    },
    {
        icon: THUMB,
        heading: "Durability with Warranty",
        content: "Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird.",
    },
    {
        icon: CALL,
        heading: "24/7 Support",
        content: "Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird.",
    },
];

export const slider = [
    {
        profile: profile1,
        name: "Mark T.",
        job: "Fitness enthusiast",
        stars:stars,
        comment: "As a fitness enthusiast, I was skeptical about resistance bands at first.But after trying these, I'm a believer. The quality is top-notch, and they've become an integral part of my workout routine.I can't believe how versatile they are.",
    },
    {
        profile: profile2,
        name: "Mark T.",
        job: "Fitness enthusiast",
        stars: stars,
        comment: "As a fitness enthusiast, I was skeptical about resistance bands at first.But after trying these, I'm a believer. The quality is top-notch, and they've become an integral part of my workout routine.I can't believe how versatile they are.",
    },
    {
        profile: profile3,
        name: "Mark T.",
        job: "Fitness enthusiast",
        stars: stars,
        comment: "As a fitness enthusiast, I was skeptical about resistance bands at first.But after trying these, I'm a believer. The quality is top-notch, and they've become an integral part of my workout routine.I can't believe how versatile they are.",
    },
    {
        profile: profile4,
        name: "Mark T.",
        job: "Fitness enthusiast",
        stars: stars,
        comment: "As a fitness enthusiast, I was skeptical about resistance bands at first.But after trying these, I'm a believer. The quality is top-notch, and they've become an integral part of my workout routine.I can't believe how versatile they are.",
    }
]