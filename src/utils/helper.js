import google from '../assets/png/google.png'
import greenStar from '../assets/png/green-star.png'
import stars from '../assets/png/stars.png'

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
]

export const review = [
    {
        icon: google,
        name: 'Google Review',
        rating:'4.6',
        star:stars,
        reviews:'Based on 145 reviews',
    },
    {
        icon: greenStar,
        name: 'Trust Pilot Review',
        rating: '4.6',
        star: stars,
        reviews: 'Based on 145 reviews',
    }
]