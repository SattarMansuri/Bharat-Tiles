import designer from '../assets/images/designer.png'
import terrazo from '../assets/images/terrazo.png'
import expoxy from '../assets/images/epoxy-terrazo.png'
import cement from '../assets/images/cement.png'
import wall from '../assets/images/wall.png'
import blending from '../assets/images/blending.png'
import molding from '../assets/images/molding.png'
import compressing from '../assets/images/bharat-tiles.png'
import hardening from '../assets/images/hardening.png'
import hydrolysis from '../assets/images/hydrolysis.png'
import drying from '../assets/images/drying.png'

export const NAVIGATION_LINKS = [
  {id: 1, name: 'Products'},
  {id: 2, name: 'Services'},
  {id: 3, name: 'About'},
  {id: 4, name: 'Inspiration'}
]

export const INTRO_SECTION_1 = {
heading: 'Bharat Flooring and Tiles',
paraBig: 'For over a century, Bharat Floorings & Tiles has been the epitome of quality in handmade tile manufacturers in India.',
paraSmall: `Our dedicated commitment to innovation ensures you're choosing the best handcrafted cement tiles in the market. Heritage buildings and prestigious locations across the country boast Bharat Floorings & Tiles that have maintained their original charm despite decades of heavy use - a testament to our quality, durability and handmade tiles texture.`,
paraFooter: 'A century year old technique which is still relevant'
}

export const INTRO_SECTION_2 ={
  heading: `We blend computer-aided design with craftsmanship and the end result is a tailor-made custom tile which will last for generations. Already 100 years and counting...`
}

export const MANUFACTURING_SECTION = {
  heading: 'Manufacturing process',
  paraHead1 : 'Output is a beautiful tile that lasts forever',
  para1: `Over the decades Bharat has laid some of the best-known floors in India’s landmark buildings: from palaces of Maharajas and Raj Bhavans to prominent residences, hotels, hospitals, clubs, offices, factories, co-operative housing societies, educational and religious institutions, airports, railways etc.`,
  paraHead2: 'Each step has to be done well',
  para2: `The best European technologies were brought and modified to create a unique product suited to Indian conditions. Recognising that a good floor is only achieved with a good product that is installed correctly and maintained properly, the company has sister companies which do high quality installation of all types of floorings, a range of civil work, floor maintenance and general cleaning.`
}

export const WORKBENCH_SECTION = {
  heading1: 'Workbench',
  heading2: 'Workshop',
  paraBig: 'We encourage our customers to look at our designer tile collections, play with the colours and patterns, and come up with unique handmade tile selections.',
  paraSmall1: 'Anuiom (Type D)',
  paraSmall2: 'Anulom is our stunning hexagonal rhythm 3D Tile Collection, where the artistry of design meets the allure of dimensionality, creating a mesmerizing visual experience for your spaces.'
}

export const PRODUCTS_SECTION = {
  heading: 'Products',
  para: 'From exquisite handcrafted cement tiles that bring timeless beauty to your space, to elegant terrazzo floors that exude grandeur, our collection of decorative concrete, outdoor floors, micro cement overlays, wallpapers, bespoke products, and more, offers limitless design possibilities. Let your imagination soar as you discover the perfect flooring solution that transforms ordinary spaces into extraordinary works of art.'
}

export const PRODUCTS = [
  {id: 1, image: designer, head: 'Designer' },
  {id: 2, image: terrazo, head: 'Terrazo' },
  {id: 3, image: expoxy, head: 'Epoxy Terrazo' },
  {id:4, image: cement, head: 'Micro Cement'},
  {id: 5, image: wall, head: 'Wall Cladding'}
]

export const MANUFACTURING = [
  {
    id: 1,
    name: 'Blending',
    para: 'The pigment composition is a mixture of a high quality white portland cement, marble powder and natural mineral colour pigments. The ingredients are blended together carefully over a period of 3-4 hours to produce the final colours.',
    image: blending,
    margin: '10%'
  },
  {
    id: 2,
    name: 'Molding',
    para: 'The colours are filled with hand into a metal mold. The metal mold, containing the desired pattern is handmade from specific drawings. Handmade cement tiles are unique and are expected to have slight imperfections, which guve them character and depth.',
    image: molding,
    margin: '10%'
  },
  {
    id: 3,
    name: 'Compressing',
    para: 'A cork in the form of a strong metal plate is applied at the top of the mold and the tiles is pressed using a mechanical hydraulic press. The pressure applied is up to 1-ton per square inch, which produces a compact tile',
    image: compressing,
    margin: '9.5%'

  },
  {
    id: 4,
    name: 'Hardening',
    para: 'After pressing, the tiles are removed from the mold and placed on a rack until they harden enough to be moved into a tank of water.',
    image: hardening,
    margin: '9%'
  },
  {
    id: 5,
    name: 'Hydrolysis',
    para: 'The tiles are cured in water for several days, and not touched, during which they undergo a hydrolysis process and harden  into string concrete.',
    image: hydrolysis,
    margin: '9%'
  },
  {
    id: 6,
    name: 'Drying',
    para: 'The are then removed from the tank, and allowed to further cure in tehair, until they are fully ready to be shipped to the customer.',
    image: drying,
     margin: '9%'
  }
]

export const COLORS = [
  {id: 1, bgCol: '#F0E7DC', color: '#AAA196', name: 'White'},
  {id: 2, bgCol: '#FFFCF3', color: '#B9B6AD', name: 'Light Cream'},
  {id: 3, bgCol: '#EED6CA', color: '#A89084', name: 'Sicilia'},
  {id: 4, bgCol: '#F4C090', color: '#AE7A4B', name: 'Buttercup'},
  {id: 5, bgCol: '#D79677', color: '#915031', name: 'Jaisalmer Yellow'},
  {id: 6, bgCol: '#F7B960', color: '#B1731A', name: 'Sunshine Yellow'},
  {id: 7, bgCol: '#B88276', color: '#723C30', name: 'Mushroom'},
  {id: 8, bgCol: '#96796E', color: '#503328', name: 'Fawn'},
  {id: 9, bgCol: '#E29792', color: '#9C514C', name: 'Nursery Pink'},
  {id: 10, bgCol: '#E18E8C', color: '#9B4846', name: 'Dusky Rose'},
  {id: 11, bgCol: '#E59C8D', color: '#9F5647', name: 'Peach'},
  {id: 12, bgCol: '#AC615B', color: '#7A2F29', name: 'Terracotta'},
  {id: 13, bgCol: '#9A6362', color: '#5E2726', name: 'Deep Red'},
  {id: 14, bgCol: '#544546', color: '#867878', name: 'Chocolate'},
  {id: 15, bgCol: '#BAA489', color: '#745E43', name: 'Macao'},
  {id: 16, bgCol: '#92A997', color: '#4C6351', name: 'Crazy Green'},
  {id: 17, bgCol: '#76786D', color: '#303227', name: 'Kotah Green'},
  {id: 18, bgCol: '#62846B', color: '#26482F', name: 'Mint'},
  {id: 19, bgCol: '#63796D', color: '#273D31', name: 'Dark Green'},
  {id: 20, bgCol: '#9BC1A6', color: '#557B60', name: 'Jade Green'},
  {id: 21, bgCol: '#77BAE5', color: '#31749F', name: 'Sea Blue'},
  {id: 22, bgCol: '#7DA3B0', color: '#375D6A', name: 'Blue Lagoon'},
  {id: 23, bgCol: '#3E5984', color: '#142752', name: 'Chinese Blue'},
  {id: 24, bgCol: '#424D59', color: '#747F8B', name: 'Dark Blue'},
  {id: 25, bgCol: '#AFA9AA', color: '#696364', name: 'Silver Grey'},
  {id: 26, bgCol: '#96918E', color: '#504B48', name: 'Grey'},
  {id: 27, bgCol: '#535353', color: '#858585', name: 'Solomen Grey'},
  {id: 28, bgCol: '#F1EBED', color: '#ABA5A7', name: 'Light Silver'},
  {id: 29, bgCol: '#414047', color: '#737279', name: 'Black'},
]

export const ABOUT_LIST =[
  {id: 1, name: 'ABOUT US'},
  {id: 2, name: 'HISTORY'},
  {id: 3, name: 'MANAGEMENT'},
  {id: 4, name: 'QUALITY POLICIES'},
]

export const CORPORATE_LIST =[
  {id: 1, name: 'CORPORATE VIDEOS'},
  {id: 2, name: 'SITEMAP'},
  {id: 3, name: 'ALL COLLECTIONS'},
  {id: 4, name: 'MANUFACTURING PROCESS'},
]

export const MAINTENANCE_LIST =[
  {id: 1, name: 'MAINTENANCE'},
  {id: 2, name: 'COLOUR CHART'},
  {id: 3, name: 'FAQ'},
  {id: 4, name: 'ORDER SAMPLE'},
]

export const FLOOR_LIST =[
  {id: 1, name: 'FLOOR DESIGN'},
  {id: 2, name: 'NEW TILE DESIGN'},
  {id: 3, name: 'CIVIL CONTRACTING'},
  {id: 4, name: 'MISSION AND VISION'},
]

export const VALUES_LIST =[
  {id: 1, name: 'VALUES & PHILOSOPHY'},
  {id: 2, name: 'PRESS AND MEDIA'},
  {id: 3, name: 'EVENT AND PROMOTIONS'},
  {id: 4, name: 'CAREERS'},
]

export const AWARDS_LIST =[
  {id: 1, name: 'AWARDS'},
  {id: 2, name: 'CLIENT LIST'},
  {id: 3, name: 'TESTIMONIAL VIDEOS'},
  {id: 5, name: 'CONTACT US'},
  {id: 6, name: 'DOWNLOAD'},
  {id: 7, name: 'RESOURCES'},
]

export const ALL_LISTS =[
  {id: 1, name: 'ABOUT US'},
  {id: 2, name: 'HISTORY'},
  {id: 3, name: 'MANAGEMENT'},
  {id: 4, name: 'QUALITY POLICIES'},
  {id: 5, name: 'CORPORATE VIDEOS'},
  {id: 6, name: 'SITEMAP'},
  {id: 7, name: 'ALL COLLECTIONS'},
  {id: 8, name: 'MANUFACTURING PROCESS'},
  {id: 9, name: 'MAINTENANCE'},
  {id: 10, name: 'COLOUR CHART'},
  {id: 11, name: 'FAQ'},
  {id: 12, name: 'ORDER SAMPLE'},
  {id: 13, name: 'FLOOR DESIGN'},
  {id: 14, name: 'NEW TILE DESIGN'},
  {id: 15, name: 'CIVIL CONTRACTING'},
  {id: 16, name: 'MISSION AND VISION'},
  {id: 17, name: 'VALUES & PHILOSOPHY'},
  {id: 18, name: 'PRESS AND MEDIA'},
  {id: 19, name: 'EVENT AND PROMOTIONS'},
  {id: 20, name: 'CAREERS'},
  {id: 21, name: 'AWARDS'},
  {id: 22, name: 'CLIENT LIST'},
  {id: 23, name: 'TESTIMONIAL VIDEOS'},
  {id: 24, name: 'CONTACT US'},
  {id: 25, name: 'DOWNLOAD'},
  {id: 26, name: 'RESOURCES'},
]