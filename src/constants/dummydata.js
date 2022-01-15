const dummydata = [
  {
    id: "1",

    coordinate: {
      latitude: -33.604830165420864,

      longitude: 150.7444978975839,
    },
    name: "Hawkesbury Business Services",
    category: "Business Services",
    address: "57 Powell Street, Hobartville NSW 2753",

    description: `Services`,

    openinghours: "9am-3pm",
    image: "https://d22uds8gt86nb6.cloudfront.net/img/hawkesburybusinessservices_53578/53578_20200520072039990318.jpg",
    phonenumber:"0403 088 828",

    rating: 5,

    reviews: 2,

    liked: true,
    
  },
  {
    id: "2",

    coordinate: {
      latitude: -33.604830165420864,

      longitude: 150.7444978975839,
    },
    name: "North Richmond Shopping Village",
    category: "General Retail",
    address: "16/6 Riverview Street, North Richmond NSW 2754",

    description: `Shopping`,

    openinghours: "24 hours",
    image: "https://northrichmondvillage.com.au/wp-content/uploads/2016/10/NRV_LOGO-1.jpg",
    phonenumber:"02 9267 9832",

    rating: 4,

    reviews: 553,

    liked: true,
    
  },
  {
    id: "3",

    coordinate: {
      latitude: -33.59945914149445,

      longitude: 150.75264416931512,
    },
    name: "The Second Home Cafe - Richmond",
    category: "Cafes, Restaurants and Catering",
    address: "219 Windsor Street, Richmond NSW 2753",

    description: `Shop anything`,

    openinghours: "9am-5:30pm",
    image: "https://dogcentral.com.au/wp-content/uploads/2021/02/the-second-home-cafe.jpeg",
    phonenumber:"0403 088 828",
    website:"https://thesecondhomecafe.com.au/",
    rating: 4,
    reviews: 1023,

    liked: true,
    
  },
  {
    id: "4",

    coordinate: {
      latitude: -33.614321589634756,

      longitude: 150.8132073794369,
    },
    
    name: "Cafe Cornerstone",
    category: "Cafes, Restaurants and Catering",
    address: "190 Macquarie Street, Windsor NSW 2756",

    description: `Coffee Special`,

    openinghours: "7am-3pm",
    image: "https://www.top4.com.au/custom/domain_1/image_files/191_photo_390632.jpg",
    phonenumber:"0431 756 778",
    website:"https://cafecornerstone.com.au",

    rating: 4,

    reviews: 205,

    liked: true,
    
  },
  {
    id: "5",

    coordinate: {
      latitude: -33.614321589634756,

      longitude: 150.8132073794369,
    },
    
    name: "Hawkesbury Family Practice",
    category: "Health and Disability Services",
    address: "86 Lennox St, Richmond NSW 2753",

    description: `Coffee Special`,

    openinghours: "Monday to Friday 7am-3pm Saturday and Sunday 8am-2pm",
    image: "https://lirp.cdn-website.com/79b65f33/dms3rep/multi/opt/newclinic-logo-258w.jpg",
    phonenumber:"02 4578 9399",
    website:"https://www.hawkesburyfamilypractice.com.au/",

    rating: 4,

    reviews: 205,

    liked: true,
    
  },
  {
    id: "6",

    coordinate: {
      latitude: -33.68327292441513,

      longitude: 151.02621328230293,
    },
    name: "Biviano's Italian Restaurant",
    category: "Cafes, Restaurants and Catering",
    address: "628 Old Northern Road Dural NSW 2158",

    description: `Italian & Seafood Restaurant`,

    openinghours: "11:30am-4pm 5-10pm",
    image: "https://www.hawkesburyaustralia.com.au/_images/logos/biv.png.jpg",
    phonenumber:"02 9651 2022",
    website:"https://bivianosdural.com/",

    rating: 4,

    reviews: 690,

    liked: true,
    
  },
  {
    id: "7",

    coordinate: {
      latitude: -33.60950365730625,  

      longitude: 150.8076802361288,
    },
    name: "Crowne Plaza Hawkesbury Valley",
    category: "Accommodation",
    address: "61 Hawkesbury Valley Way, Windsor NSW 2756",

    description: `Hotel`,

    openinghours: "07:30am-6pm 5-10pm",
    image: "https://www.cphawkesburyvalley.com.au/wp-content/uploads/2021/04/CP-Hawkesbury-Valley_Logo_Web_Header.png",
    phonenumber:"+61 02 4577 4222",
    website:"https://www.cphawkesburyvalley.com.au/",

    rating: 4,

    reviews: 690,

    liked: true,
    
  },
  {
    id: "8",

    coordinate: {
      latitude: -33.596344951495354,   

      longitude: 150.75066659324733,
    },
    name: "Hawkesbury Community College",
    category: "Education, Training and Early Childhood",
    address: "Suite 9, Civic Arcade 225 Windsor Street, Richmond NSW 2753",

    description: `College`,

    openinghours: "07:30am-6pm 5-10pm",
    image: "https://www.macquarie.nsw.edu.au/s/img/logos/logo.png",
    phonenumber:"1300 845 888",
    website:"https://www.macquarie.nsw.edu.au/site/580",

    rating: 4,

    reviews: 690,

    liked: true,
    
  },
  {
    id: "9",

    coordinate: {
      latitude: -33.58023174634257,    

      longitude: 150.7197221263303,
    },
    name: "Hawkesbury Homes Pty Ltd",
    category: "Other Trades and Construction",
    address: "3/57 Bells Line of Rd, North Richmond NSW 2754",

    description: `Construction`,

    openinghours: "07:30am-6pm 5-10pm",
    image: "https://images.squarespace-cdn.com/content/v1/5e3bbf8c5c4d04202ec1e02f/1580974330853-QTXE5UXHM2YKP52PFTWW/Hawkesbury+Homes+Inverted+Colour+Logo.png?format=1500w",
    phonenumber:"(02) 4573 2395",
    website:"https://www.hawkesburyhomes.net.au/",

    rating: 4,

    reviews: 690,

    liked: true,
    
  },
  {
    id: "10",

    coordinate: {
      latitude: -33.59566861611851,     

      longitude: 150.7504542263307,
    },
    name: "Hawkesbury Electronics",
    category: "Electronics, IT and Media",
    address: "2/9 W Market St, Richmond NSW 2753",

    description: `Electronics`,

    openinghours: "09:00am-4pm 5-10pm",
    image: "https://www.hawkesburyelectronics.com.au/images/hawkelect.gif",
    phonenumber:"(02) 4578 4006",
    website:"https://www.hawkesburyelectronics.com.au/",

    rating: 4,

    reviews: 690,

    liked: true,
    
  },
  {
    id: "11",

    coordinate: {
      latitude: -33.60980934723806,      

      longitude: 150.7823845300273,
    },
    name: "Hawkesbury District Agricultural Association",
    category: "Agriculture and Animals",
    address: "Hawkesbury Showground, Racecourse Rd, Clarendon NSW 2756",

    description: `Agriculture`,

    openinghours: "09:00am-4:30pm 5-10pm",
    image: "https://www.hawkesburyshowground.com.au/_assets/img/logo-crop.png",
    phonenumber:"(02) 4577 3591",
    website:"https://www.hawkesburyshowground.com.au/about/association",

    rating: 4,

    reviews: 690,

    liked: true,
    
  },
  {
    id: "12",

    coordinate: {
      latitude: -33.58502231095386,       

      longitude: 150.702199797495,
    },
    name: "G.J. Gardner - North Richmond Display",
    category: "Builders, Carpenters and Brick Layers",
    address: "23-25 Yobarnie Avenue, North Richmond NSW 2754",

    description: `Builders`,

    openinghours: "09:00am-4:30pm 5-10pm",
    image: "https://www.gjgardner.com.au/wp-content/uploads/2019/09/logo-large.png",
    phonenumber:"(02) 4577 3591",
    website:"https://www.gjgardner.com.au/home-builders/new-south-wales/sydney-west-penrith-7043/?utm_campaign=GMB&utm_source=google&utm_medium=organic",

    rating: 4,

    reviews: 690,

    liked: true,
    
  },
  {
    id: "13",

    coordinate: {
      latitude: -33.58502231095386,       

      longitude: 150.702199797495,
    },
    name: "Airmelec - Hawkesbury Air Conditioning & Electrical services",
    category: "Electrical and Air Conditioning",
    address: "7 Grenville St, Pitt Town NSW 2756",

    description: `Electrical`,

    openinghours: "09:00am-4:30pm 5-10pm",
    image: "https://airmelec.com.au/wp-content/uploads/2021/11/Airmelec-LOGO-0520.jpg",
    phonenumber:"0417 258 922",
    website:"https://airmelec.com.au/",

    rating: 4,

    reviews: 690,

    liked: true,
    
  },
  {
    id: "14",

    coordinate: {
      latitude: -33.60904917978597,        

      longitude: 150.8179900281793,
    },
    name: "Hawkesbury Regional Gallery",
    category: "Entertainment and the Arts",
    address: "Deerubbin Centre, 1st Floor/300 George St, Windsor NSW 2756",

    description: `Arts`,

    openinghours: "10:00am-3:00pm 5-10pm",
    image: "https://www.hawkesbury.nsw.gov.au/__data/assets/image/0020/102764/Gallery-Shop-03.jpg",
    phonenumber:"(02) 4560 4441",
    website:"https://www.hawkesbury.nsw.gov.au/gallery",

    rating: 4,

    reviews: 690,

    liked: true,
    
  },
  {
    id: "15",

    coordinate: {
      latitude: -33.58000360449624,         

      longitude: 150.71962118389254,
    },
    name: "Hawkesbury Community Financial Services Ltd",
    category: "Finance and Banking",
    address: "Shop 7-8 McNair Shopping Centre, 36 Riverview St, North Richmond NSW 2754",

    description: `Financial Services`,

    openinghours: "09:00am-5:00pm 5-10pm",
    image: "",
    phonenumber:"(02) 4571 2988",
    website:"",

    rating: 4,

    reviews: 690,

    liked: true,
    
  },
  {
    id: "16",

    coordinate: {
      latitude: -33.62714657760356,          

      longitude: 150.80467023982544,
    },
    name: "PCYC Hawkesbury",
    category: "Fitness and Sport",
    address: "16 Stewart St, South Windsor NSW 2756",

    description: `Fitness`,

    openinghours: "06:00am-9:30pm 5-10pm",
    image: "https://www.pcycnsw.org.au/images/corporate/template/pcyc-header-logo.png",
    phonenumber:"(02) 4505 5070",
    website:"https://www.pcycnsw.org.au/hawkesbury/",

    rating: 4,

    reviews: 690,

    liked: true,
    
  },
  {
    id: "17",

    coordinate: {
      latitude: -33.617461881615064,           

      longitude: 150.8069386263313,
    },
    name: "IGA",
    category: "Food and Groceries Retail",
    address: "509-511 George St, South Windsor NSW 2756",

    description: `Groceries`,

    openinghours: "07:30am-7:30pm 5-10pm",
    image: "https://igav3-metcdn-com.global.ssl.fastly.net/content/uploads/2021/03/17034733/IGA-Australia-Logo.svg",
    phonenumber:"(02) 4577 4185",
    website:"https://www.iga.com.au/",

    rating: 4,

    reviews: 690,

    liked: true,
    
  },
  {
    id: "18",

    coordinate: {
      latitude: -33.55155256476948,            

      longitude: 150.65686943982297,
    },
    name: "Hawkesbury Community Outreach Services",
    category: "Government and Not For Profit",
    address: "30 Mcmahons Park Rd, Kurrajong NSW 2758",

    description: `Community Services`,

    openinghours: "09:90am-5:30pm 5-10pm",
    image: "https://www.hcos.org.au/uploads/4/5/4/3/45433659/1421105414.png",
    phonenumber:"(02) 4573 1166",
    website:"https://www.hcos.org.au/",

    rating: 4,

    reviews: 690,

    liked: true,
    
  },
  {
    id: "19",

    coordinate: {
      latitude: -33.573661544913236,             

      longitude: 150.8623802398237,
    },
    name: "Hawkesbury Hair & Co.",
    category: "Hair and Beauty",
    address: "12 Hawkesbury St, Pitt Town NSW 2756",

    description: `Hair Dresser`,

    openinghours: "09:90am-5:30pm 5-10pm",
    image: "https://www.hawkesburyhairandco.com/uploads/b/8252ff404f70542dca122c9cebfbb6cde53530225b46e828046cd3774bebf34a/2021-07-19_15-05-39_1626671161.png?width=800",
    phonenumber:"(02) 4573 1166",
    website:"https://www.hawkesburyhairandco.com/",

    rating: 4,

    reviews: 690,

    liked: true,
    
  },
  {
    id: "20",

    coordinate: {
      latitude: -33.62437113728348,              

      longitude: 150.81172440488834,
    },
    name: "Divine Foods Aust.",
    category: "Manufacturing and Wholesale",
    address: "5 Blackman Cres, South Windsor NSW 2756",

    description: `Wholesale`,

    openinghours: "07:30am-6:30pm 5-10pm",
    image: "https://static.wixstatic.com/media/5a0a97_993e13ec1b1c47e1a15cd3f36b2b12f7~mv2_d_2169_1392_s_2.png/v1/crop/x_51,y_7,w_1992,h_1378/fill/w_551,h_381,al_c,q_85,usm_0.66_1.00_0.01/Divine%20Foods%20Aust%20Logo%20(Transparent%20Back.webp",
    phonenumber:"(02) 4573 1166",
    website:"https://www.divinefoods.com.au/?utm_source=google&utm_medium=card&utm_campaign=search",

    rating: 5,

    reviews: 333,

    liked: true,
    
  },
  {
    id: "21",

    coordinate: {
      latitude: -33.62437113728348,              

      longitude: 150.81172440488834,
    },
    name: "Jeff Collins Plumbing | Hawkesbury Plumbing Services",
    category: "Plumbers and Gas Fitters",
    address: "Hawkesbury City Council and nearby areas",

    description: `Plumbing`,

    openinghours: "07:30am-5:00pm 5-10pm",
    image: "https://jeffcollinsplumbing.com.au/wp-content/uploads/2018/10/JEFF-COLLINS-PLUMBING-LOGO-small.png",
    phonenumber:" (02) 4579 8233",
    website:"https://jeffcollinsplumbing.com.au/",

    rating: 5,

    reviews: 333,

    liked: true,
    
  },
  {
    id: "22",

    coordinate: {
      latitude: -33.82036991991861,               

      longitude: 151.2006464821608,
    },
    name: "CETEC",
    category: "Professionals and Scientific Services",
    address: "3/216 Willoughby Rd, St Leonards NSW 2065",

    description: `Science`,

    openinghours: "09:00am-5:00pm 5-10pm",
    image: "https://www.cetec.com.au/App_Sites/cetec/Templates/Default/images/cetec-logo.gif",
    phonenumber:"(02) 9966 9211",
    website:"https://www.cetec.com.au/",

    rating: 5,

    reviews: 333,

    liked: true,
    
  },
  {
    id: "23",

    coordinate: {
      latitude: -33.58024976980211,                

      longitude: 150.71983099934286,
    },
    name: "Belle Property Hawkesbury",
    category: "Real Estate",
    address: "Shop 1/47 Bells Line of Rd, North Richmond NSW 2754",

    description: `Real Estate`,

    openinghours: "09:00am-5:00pm 5-10pm",
    image: "https://www.belleproperty.com/static/images/belle-logo.f04c39d9a97f.svg",
    phonenumber:"(02) 4571 2200",
    website:"https://www.belleproperty.com/hawkesbury/",

    rating: 5,

    reviews: 333,

    liked: true,
    
  },
  {
    id: "24",

    coordinate: {
      latitude: -33.606031982883174,                 

      longitude: 150.7810756263311,
    },
    name: "Hawkesbury Visitor Information Centre",
    category: "Tourism and Events",
    address: "328 Hawkesbury Valley Way, Richmond NSW 2753",

    description: `Tourism`,

    openinghours: "09:00am-5:00pm 5-10pm",
    image: "https://www.discoverthehawkesbury.com.au/__data/assets/image/0004/91345/Windsor-road-crossing.jpg",
    phonenumber:"(02) 4560 4620",
    website:"https://www.discoverthehawkesbury.com.au/",

    rating: 5,

    reviews: 333,

    liked: true,
    
  },
  {
    id: "25",

    coordinate: {
      latitude: -33.73774505353809,                  

      longitude: 150.68815916866433,
    },
    name: "BTG Logistics",
    category: "Vehicles, Transport and Warehousing",
    address: "1/31-33 Jack Williams Dr, Penrith NSW 2750",

    description: `Transport`,

    openinghours: "09:00am-5:00pm 5-10pm",
    image: "https://www.btglogistics.com.au/templates/yootheme/cache/BTG_Logistics2-ff9a5618.webp",
    phonenumber:"(02) 4587 7134",
    website:"https://www.btglogistics.com.au/",

    rating: 5,

    reviews: 211,

    liked: true,
    
  },


];

export default dummydata;