import img1 from '@/assets/images/2023/12/testimonial-1.jpg';
import img2 from '@/assets/images/2023/12/testimonial-2.jpg';
import img3 from '@/assets/images/2023/12/testimonial-3.jpg';
import img4 from '@/assets/images/2023/12/testimonial-4.jpg';
import partnerOne from "@/assets/images/2024/09/partner-1.png";

export const navList=[
    { path: "/", name: "home" },
    { path: "/about", name: "about" },
    { path: "/services", name: "ourService" },
    { path: "/price", name: "price" },
    { path: "/driver", name: "driver" },
  ];
export const testimonialList = [
    {
        img: img1,
        name: "Devina Mueller",
        position: "Entrepreneur",
        desc: "customerOptionOne",
        id: 1,
    },
    {
        img: img2,
        name: "Jordan Rein",
        position: "Entrepreneur",
        desc: "customerOptionTwo",
        id: 2,
    },
    {
        img: img3,
        name: "Dave Beech",
        position: "Manager",
        desc: "customerOptionThree",
        id: 3,
    },
    {
        img: img4,
        name: "Xavier Mcfarla",
        position: "Commuter",
        desc: "customerOptionFour",
        id: 4,
    }
];
export const progressData = [
    { label: "taxiQuality", value: 95 },
    { label: "experiencedDrivers", value: 86 },
    { label: "cheapPrice", value: 82 },
    { label: "easyOrder", value: 86 },
];

export const common = [
    {
        type: "beginner",
        price: "1500",
        show: true,
    },
    {
        type: "minium",
        price: "3400",
        show: true,
    },
    {
        type: "insideCity",
        price: "800",
        show: true,
    },
    {
        type: "outsideCity",
        price: "2100",
        show: true,
    },
    {
        type: "wait",
        price: "500",
        show: true,
    },
    {
        type: "waitWay",
        price: "550",
        show: true,
    },
    {
        type: "freeWait",
        price: "3",
        show: false,
    },
];
export const exclusive = [
    {
        type: "beginner",
        price: "2000",
        show: true,
    },
    {
        type: "minium",
        price: "4500",
        show: true,
    },
    {
        type: "insideCity",
        price: "1900",
        show: true,
    },
    {
        type: "outsideCity",
        price: "3900",
        show: true,
    },
    {
        type: "wait",
        price: "600",
        show: true,
    },
    {
        type: "waitWay",
        price: "650",
        show: true,
    },
    {
        type: "freeWait",
        price: "3",
        show: false,
    },
];
export const vipe = [
    {
        type: "beginner",
        price: "6000",
        show: true,
    },
    {
        type: "minium",
        price: "15000",
        show: true,
    },
    {
        type: "insideCity",
        price: "3900",
        show: true,
    },
    {
        type: "outsideCity",
        price: "6150",
        show: true,
    },
    {
        type: "wait",
        price: "500",
        show: true,
    },
    {
        type: "waitWay",
        price: "800",
        show: true,
    },
    {
        type: "freeWait",
        price: "3",
        show: false,
    },
];

export const convinentList = [
    { title: "confortablePrice", id: 1 },
    { title: "priceTruth", id: 2 },
    { title: "securePayment", id: 3 },
    { title: "confortableLocation", id: 4 },
    { title: "experiencedDriver", id: 5 },
    { title: "hotOffer", id: 6 },
    { title: "fastService", id: 7 },
    { title: "confortableTaxi", id: 8 },
];

export const partnerList = [
    {
        img: partnerOne,
        name: "Dr. Shokhjakhon Mamaziyoev",
        desc: "Head of Hospitality of Dubai ,Ajman, Fujairah Fairmont Hotels.",
    },

    {
        img: partnerOne,
        name: "Dr. Shokhjakhon Mamaziyoev",
        desc: "Head of Hospitality of Dubai ,Ajman, Fujairah Fairmont Hotels.",
    },
];

export const services = [
    {
        title: "onlinePayment",
        desc: "onlinePaymentDesc",
        icon: "bi bi-credit-card",
        id: 1,
        active: true,
    },
    {
        title: "safety",
        desc: "safetyDesc",
        icon: "bi bi-shield-shaded",
        id: 2,
        active: false,
    },
    {
        title: "fastService",
        desc: "fastServiceDesc",
        icon: "bi bi-alarm",
        id: 3,
        active: false,
    },
    {
        title: "priceOffer",
        desc: "priceOfferDesc",
        icon: "bi bi-coin",
        id: 4,
        active: false,
    },
    {
        title: "experiencedDriver",
        desc: "experiencedDesc",
        icon: "bi bi-person-fill-check",
        id: 5,
        active: false,
    },
    {
        title: "discount",
        desc: "discountDesc",
        icon: "bi bi-cash-coin",
        id: 6,
        active: false,
    },
];

export const faqList = [
    {
        title: "faqTitle",
        desc: "faqDescTwo",
    },
    {
        title: "faqTitleTwo",
        desc: "faqDescThree",
    },
    {
        title: "faqTitleThree",
        desc: "faqDescFour",
    },
];

export const steps = [
    {
      title: "entryOrder",
      description: "entryOrderDesc",
      icon: "bi bi-clipboard-check",
    },
    {
      title: "driverFinding",
      description: "driverFindingDesc",
      icon: "bi bi-car-front-fill",
    },
    {
      title: "enjoyTrip",
      description: "enjoyTripDesc",
      icon: "bi bi-globe-europe-africa",
    },
    {
      title: "serviceFee",
      description: "serviceFeeDesc",
      icon: "bi bi-credit-card-2-front",
    },
  ];
