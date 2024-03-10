import { F1, F2, F3, F4, F5, F6, P1, P2, P3, Banner1, Banner2, Banner3, Banner4, Banner5, Blog1,Blog2,Blog3,Blog4,Blog5} from '../assests'

const Navbar = [
    {
        name: 'Home',
        link : '/'
    },
    {
        name: 'Shop',
        link : '/shop'
    },
    {
        name: 'Blog',
        link : '/blog'
    },
    {
        name: 'About',
        link : '/about'
    },
    {
        name: 'Contact',
        link : '/contact'
    },
]

const Headings = {
    Featured: {
        heading: 'Featured Products',
        subHeading: 'Summer Collection New Mordern Disign'
    },
    Arrivals: {
        heading: 'New Arrivals',
        subHeading: 'Summer Collection New Mordern Disign'
    }
}

const HeroServices = [
    {
        img: F1,
        text: 'Free Shipping',
        btnColor: '#D1E8F2'
    },
    {
        img: F2,
        text: 'Online Order',
        btnColor: '#FDDDEF',
    },
    {
        img: F3,
        text: 'Save Money',
        btnColor: '#CDEBBC'
    },
    {
        img: F4,
        text: 'Promotion',
        btnColor: '#89BFE2'
    },
    {
        img: F5,
        text: 'Happy Sell',
        btnColor: '#C8C8C8'
    },
    {
        img: F6,
        text: '24/7 Support',
        btnColor: '#F6E5DB'
    },
]

const Banners = {
    homeBanner: {
        heading: 'Up to 70% Off-All t-Shirts & Accessories',
        text: 'Repair Services',
    },

    shopBanner: {
        heading: '#stayhome',
        subHeading: 'Save More With Coupons & Up To 70% Off'
    },

    blogBanner: {
        heading: '#readmore',
        subHeading: 'Read All Case Studies About Our Products!'
    },

    aboutBanner: {
        heading: '#knowUs',
        subHeading: 'Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing.'
    },

    contactBanner: {
        heading: "#let's_talk",
        subHeading: "LEAVE A MESSAGE, We Love To Hear From You!"
    },

    cartBanner: {
        heading: "#cart",
        subHeading: "GET YOUR ORDER NOW"
    }
}

const addsBanners = {
    Banner1: [
        {
            heading1: "Crazy Deals",
            heading2: "buy one get one free",
            heading3: "The Best Classic Dress Is On Sale",
            width: "w-[45%]  min-w-[450px]",
            height: "h-[350px] min-h-[200px]",
            bannerImg: `${Banner1}`
        },
        {
            heading1: "Spring Summer",
            heading2: "upcoming season",
            heading3: "The Best Classic Dress Is On Sale",
            width: "w-[45%]  min-w-[450px]",
            height: "h-[350px] min-h-[200px]",
            bannerImg: `${Banner2}`
        }
    ],

    Banner2: [
        {
            heading: "SEASON SALE",
            subHeading: "Winter Collection -50% Off",
            width: "w-[30%] min-w-[350px]",
            height: "h-[250px] min-h-[200px]",
            bannerImg: `${Banner3}`
        },
        {
            heading: "NEW FOOTWEAR COLLECTION",
            subHeading: "Spring / Summer 2023",
            width: "w-[30%]  min-w-[350px]",
            height: "h-[250px] min-h-[200px]",
            bannerImg: `${Banner4}`
        },
        {
            heading: "T-SHIRTS",
            subHeading: "New Trendy Prints",
            width: "w-[30%]  min-w-[350px]",
            height: "h-[250px] min-h-[200px]",
            bannerImg: `${Banner5}`
        },
    ]
}

const Blogs = [

    {
        h4: "the cotton-jersey zip-up hoodie",
        p: "Kickstarter man braid godard coloring book. Raclette waistcool selhes yr chartreuse hexagon irony. godard. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus beatae neque id corrupti consectetur rerum culpa quam, quaerat consequuntur numquam!",
        h2: "12 / 3",
        blogImg:`${Blog1}`
    },

    {
        h4: "the cotton-jersey zip-up hoodie",
        p: "Kickstarter man braid godard coloring book. Raclette waistcool selhes yr chartreuse hexagon irony. godard. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus beatae neque id corrupti consectetur rerum culpa quam, quaerat consequuntur numquam!",
        h2: "12 / 6",
        blogImg:`${Blog2}`
    },

    {
        h4: "the cotton-jersey zip-up hoodie",
        p: "Kickstarter man braid godard coloring book. Raclette waistcool selhes yr chartreuse hexagon irony. godard. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus beatae neque id corrupti consectetur rerum culpa quam, quaerat consequuntur numquam!",
        h2: "12 / 15",
        blogImg:`${Blog3}`
    },

    {
        h4: "the cotton-jersey zip-up hoodie",
        p: "Kickstarter man braid godard coloring book. Raclette waistcool selhes yr chartreuse hexagon irony. godard. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus beatae neque id corrupti consectetur rerum culpa quam, quaerat consequuntur numquam!",
        h2: "12 / 6",
        blogImg:`${Blog4}`
    },

    {
        h4: "the cotton-jersey zip-up hoodie",
        p: "Kickstarter man braid godard coloring book. Raclette waistcool selhes yr chartreuse hexagon irony. godard. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus beatae neque id corrupti consectetur rerum culpa quam, quaerat consequuntur numquam!",
        h2: "12 / 15",
        blogImg:`${Blog5}`
    },
]

const AboutText = {
    h1: "Who We Are ?",
    p: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Alias Doloremque Veritatis Reiciendis Explicabo Fuga Blanditiis Beatae Amet, Odit Temporibus Eius Veniam Dolor Perferendis Laudantium Commodi Rem Similique? Laudantium Reprehenderit Voluptatum, Facilis Eligendi Eveniet Deleniti Ipsa Veritatis Ducimus Cupiditate Nulla, Aut Perferendis Explicabo Fugiat Iste Cum, Consequuntur Ipsam Praesentium Corporis. Explicabo.",
    span: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Facere, Pariatur.",
    movingText: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Dolor, Quibusdam"
}

const ContactStuff = {
    text1: {
        h4: "GET IN TOUCH",
        h3: "Visit one of our agency locations or contact us today",
        h5: "Head Office",

    },
    text2: {
        h4: "LEAVE A MESSAGE",
        h3: "We love to hear from you"
    },
    contactInfo : {
        address: "56 Glassford Street Glasgow G1 1UL New Your",
        mail: "Contact@Example.Com",
        phone: "+0101010101",
        time: "Monday To Saturday: 9.00am To 16.00pm"
    },
    workers: [
        {
            name: "John Deo",
            post: "Senior Marketing Manager",
            phone: "Phone: +000123",
            email: "Email: Contact@Example.Com",
            img: `${P1}`
        },
        {
            name: "John Deo",
            post: "Senior Marketing Manager",
            phone: "Phone: +000123",
            email: "Email: Contact@Example.Com",
            img: P2,
        },
        {
            name: "John Deo",
            post: "Senior Marketing Manager",
            phone: "Phone: +000123",
            email: "Email: Contact@Example.Com",
            img: P3,
        },
    ]
}

export {Navbar, Headings, HeroServices, addsBanners, Banners, Blogs, AboutText, ContactStuff}