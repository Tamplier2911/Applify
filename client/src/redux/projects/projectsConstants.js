import crownclothing from "../../assets/jpeg/crown-clothing-min.jpg";
import natours from "../../assets/jpeg/natours-min.jpg";
import clarify from "../../assets/jpeg/clarify-min.jpg";

const projectsData = {
  currentProject: {},
  allProjects: {
    eng: [
      {
        id: 0,
        image: crownclothing,
        name: "Crown Clothing",
        description:
          "E-commerce platform. Comprehensive online-shop with graceful, sophisticated design.",
        techStack:
          "Front-end purely created with React and Redux as a state managemnet lib. Therefore back-end handled by firebase back-end as a service. Node server is running in order to handle Stripe payments.",
        date: new Date("January 21, 2020 03:24:00"),
        url: "https://crwn-clothing-s.herokuapp.com/",
        active: true,
        color: "#000"
      },
      {
        id: 1,
        image: natours,
        name: "Natours",
        description:
          "Natours - is a Traveling Experience company, which selling unforgettable trips all over the world.",
        techStack:
          "Fully fletched Express API, data is stored in NoSQL MongoDB with help elegant object modeling provided by Mongoose. App uses server-side rendering by hand of PUG template engine.",
        date: new Date("October 18, 2019 03:24:00"),
        url: "https://natours-live-s.herokuapp.com/",
        active: true,
        color: "#55C57A"
      },
      {
        id: 2,
        image: clarify,
        name: "Clarify",
        description:
          "Clarify - is an email service, that helps you to collect feedback from people in order to improve their experience.",
        techStack:
          "Front-end of the app covered by React alongside with Redux and Redux-Sagas. Back-end handled with Express server, data persistance achieved with MongoDB and Mongoose",
        date: new Date("August 12, 2019 03:24:00"),
        url: "https://clarify-s.herokuapp.com/",
        active: true,
        color: "#DD4F4F"
      },
      {
        id: 3,
        image: crownclothing,
        name: "Crown Clothing",
        description:
          "E-commerce platform. Comprehensive online-shop with graceful, sophisticated design.",
        techStack:
          "Front-end purely created with React and Redux as a state managemnet lib. Therefore back-end handled by firebase back-end as a service. Node server is running in order to handle Stripe payments.",
        date: new Date("May 21, 2019 03:24:00"),
        url: "https://crwn-clothing-s.herokuapp.com/",
        active: true,
        color: "#000"
      }
    ],
    rus: [
      {
        id: 0,
        image: crownclothing,
        name: "Crown Clothing",
        description:
          "Платформа электронной коммерции. Комплексный интернет-магазин с изящным, утонченным дизайном.",
        techStack:
          "Front-end создан исключительно с помощью библиотеки React, Redux в качестве библиотеки управления стейтом. Back-end обрабатывается Firebase (back-end as a service). Node сервер обрабатывает платежи при помощи сервиса Stripe.",
        date: new Date("January 21, 2020 03:24:00"),
        url: "https://crwn-clothing-s.herokuapp.com/",
        active: true,
        color: "#000"
      },
      {
        id: 1,
        image: natours,
        name: "Natours",
        description:
          "Natours - это туристическая компания, которая продает незабываемые поездки по всему миру.",
        techStack:
          "Полностью обновленный Express API, данные хранятся в NoSQL базе данных - MongoDB с помощью моделирования объектов, предоставляемого Mongoose. Приложение использует сервер-сайд рендеринг с помощью движка шаблонов PUG.",
        date: new Date("October 18, 2019 03:24:00"),
        url: "https://natours-live-s.herokuapp.com/",
        active: true,
        color: "#55C57A"
      },
      {
        id: 2,
        image: clarify,
        name: "Clarify",
        description:
          "Clarify - это служба электронной почты, которая помогает собирать отзывы от людей с целью улучшения их опыта использования вашего приложения.",
        techStack:
          "Front-end приложения написан на библиотеке React вместе с Redux и Redux-Sagas. Back-end обрабатывается с помощью Express сервера, сохранность данных достигается с помощью MongoDB и Mongoose.",
        date: new Date("August 12, 2019 03:24:00"),
        url: "https://clarify-s.herokuapp.com/",
        active: true,
        color: "#DD4F4F"
      },
      {
        id: 3,
        image: crownclothing,
        name: "Crown Clothing",
        description:
          "Платформа электронной коммерции. Комплексный интернет-магазин с изящным, утонченным дизайном.",
        techStack:
          "Front-end создан исключительно с помощью библиотеки React, Redux в качестве библиотеки управления стейтом. Back-end обрабатывается Firebase (back-end as a service). Node сервер обрабатывает платежи при помощи сервиса Stripe.",
        date: new Date("May 21, 2019 03:24:00"),
        url: "https://crwn-clothing-s.herokuapp.com/",
        active: true,
        color: "#000"
      }
    ],
    ukr: [
      {
        id: 0,
        image: crownclothing,
        name: "Crown Clothing",
        description:
          "Платформа електронної комерції. Комплексний інтернет-магазин з елегантними, витонченим дизайном.",
        techStack:
          "Front-end створений виключно за допомогою бібліотеки React, Redux як бібліотеки управління Стейт. Back-end обробляється Firebase (back-end as a service). Node сервер обробляє платежі за допомогою сервісу Stripe.",
        date: new Date("January 21, 2020 03:24:00"),
        url: "https://crwn-clothing-s.herokuapp.com/",
        active: true,
        color: "#000"
      },
      {
        id: 1,
        image: natours,
        name: "Natours",
        description:
          "Natours - це туристична компанія, яка продає незабутні поїздки по всьому світу.",
        techStack:
          "Повністю оновлений Express API, дані зберігаються в NoSQL базі даних - MongoDB за допомогою моделювання об'єктів, наданого Mongoose. Додаток використовує сервер-сайд рендеринг за допомогою движка шаблонів PUG.",
        date: new Date("October 18, 2019 03:24:00"),
        url: "https://natours-live-s.herokuapp.com/",
        active: true,
        color: "#55C57A"
      },
      {
        id: 2,
        image: clarify,
        name: "Clarify",
        description:
          "Clarify - це служба електронної пошти, яка допомагає збирати відгуки від людей з метою поліпшення їхнього досвіду користування вашим додатком.",
        techStack:
          "Front-end додатки написаний на бібліотеці React разом з Redux і Redux-Sagas. Back-end обробляється за допомогою Express сервера, збереження даних досягається за допомогою MongoDB і Mongoose.",
        date: new Date("August 12, 2019 03:24:00"),
        url: "https://clarify-s.herokuapp.com/",
        active: true,
        color: "#DD4F4F"
      },
      {
        id: 3,
        image: crownclothing,
        name: "Crown Clothing",
        description:
          "Платформа електронної комерції. Комплексний інтернет-магазин з елегантними, витонченим дизайном.",
        techStack:
          "Front-end створений виключно за допомогою бібліотеки React, Redux як бібліотеки управління Стейт. Back-end обробляється Firebase (back-end as a service). Node сервер обробляє платежі за допомогою сервісу Stripe.",
        date: new Date("May 21, 2019 03:24:00"),
        url: "https://crwn-clothing-s.herokuapp.com/",
        active: true,
        color: "#000"
      }
    ]
  },
  currentImage: {
    id: 100,
    image: "uploads/images/projects/elevation-desktop.jpg"
  },
  allImages: {
    phone: [
      {
        id: 100,
        image: "uploads/images/projects/elevation-phone.jpg"
      },
      {
        id: 101,
        image: "uploads/images/projects/galaxy-phone.jpg"
      },
      {
        id: 102,
        image: "uploads/images/projects/undrwtr-phone.jpg"
      },
      {
        id: 103,
        image: "uploads/images/projects/banking-phone.jpg"
      },
      {
        id: 104,
        image: "uploads/images/projects/dance-phone.jpg"
      },
      {
        id: 105,
        image: "uploads/images/projects/shoes-phone.jpg"
      },
      {
        id: 106,
        image: "uploads/images/projects/calendar-phone.jpg"
      },
      {
        id: 107,
        image: "uploads/images/projects/watch-phone.jpg"
      }
    ],
    tablet: [
      {
        id: 100,
        image: "uploads/images/projects/elevation-tablet.jpg"
      },
      {
        id: 101,
        image: "uploads/images/projects/galaxy-tablet.jpg"
      },
      {
        id: 102,
        image: "uploads/images/projects/undrwtr-tablet.jpg"
      },
      {
        id: 103,
        image: "uploads/images/projects/banking-tablet.jpg"
      },
      {
        id: 104,
        image: "uploads/images/projects/dance-tablet.jpg"
      },
      {
        id: 105,
        image: "uploads/images/projects/shoes-tablet.jpg"
      },
      {
        id: 106,
        image: "uploads/images/projects/calendar-tablet.jpg"
      },
      {
        id: 107,
        image: "uploads/images/projects/watch-tablet.jpg"
      }
    ],
    desktop: [
      {
        id: 100,
        image: "uploads/images/projects/elevation-desktop.jpg"
      },
      {
        id: 101,
        image: "uploads/images/projects/galaxy-desktop.jpg"
      },
      {
        id: 102,
        image: "uploads/images/projects/undrwtr-desktop.jpg"
      },
      {
        id: 103,
        image: "uploads/images/projects/banking-desktop.jpg"
      },
      {
        id: 104,
        image: "uploads/images/projects/dance-desktop.jpg"
      },
      {
        id: 105,
        image: "uploads/images/projects/shoes-desktop.jpg"
      },
      {
        id: 106,
        image: "uploads/images/projects/calendar-desktop.jpg"
      },
      {
        id: 107,
        image: "uploads/images/projects/watch-desktop.jpg"
      }
    ]
  }
};

export default projectsData;
