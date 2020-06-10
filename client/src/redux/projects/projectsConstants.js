import applify from "../../assets/jpeg/applify-min.jpg";
import tajam from "../../assets/jpeg/tajam-min.jpg";
import crownclothing from "../../assets/jpeg/crown-clothing-min.jpg";
import natours from "../../assets/jpeg/natours-min.jpg";
import clarify from "../../assets/jpeg/clarify-min.jpg";

// dublicate element
// add parent grid-template-columns: repeat(5, min-content);
// to same parent grid-column-gap: 3rem; for mobiles

// include project to array
// add actions
// refactor action indecies in reducer
// in project make sure useEffect updated correctly
// test all things enjoy new project added

const temp = {
  eng: [
    {
      id: 0,
      image: tajam,
      name: "Tajam",
      description: "Creative Design Studio / Company App.",
      techStack:
        "Front side of the application realized by React.js, state managed using context api. Express serves static content, both client and server utilizes Socket.IO lib to realized real time built in chat.",
      date: new Date("June 8, 2020 03:24:00"),
      url: "https://tajam-s.herokuapp.com/",
      active: true,
      color: "#312360",
    },
  ],
  urk: [
    {
      id: 0,
      image: tajam,
      name: "Tajam",
      description: "Додаток креативної Дизайн Студії.",
      techStack:
        "Фронт-енд додатка реалізований за допомогою React.js, стан управляється за допомогою context api. Express сервер обслуговує статичний контент, і клієнт, і сервер використовують бібліатеку Socket.IO для реалізації вбудованого чату в реальному часі.",
      date: new Date("June 8, 2020 03:24:00"),
      url: "https://tajam-s.herokuapp.com/",
      active: true,
      color: "#312360",
    },
  ],
  rus: [
    {
      id: 0,
      image: tajam,
      name: "Tajam",
      description: "Приложение креативной Дизайн Студии.",
      techStack:
        "Фронт-енд приложения реализован с помощью React.js, состояние управляется с помощью context api. Express сервер обслуживает статический контент, и клиент, и сервер используют библиатеку Socket.IO для реализации встроенного чата в реальном времени.",
      date: new Date("June 8, 2020 03:24:00"),
      url: "https://tajam-s.herokuapp.com/",
      active: true,
      color: "#312360",
    },
  ],
};

const projectsData = {
  currentProject: {},
  allProjects: {
    eng: [
      {
        id: 0,
        image: applify,
        name: "Applify",
        description: "Digital Studio / Small-Medium IT Company App.",
        techStack:
          "Fully fletched IT Company application using MERN stack. Designed mockups. Front-end covered by React, Redux, Redux-Saga. Express server handles back-end. Optimized SEO. Deployed on Heroku. SSL sertification by letsencrypt.",
        date: new Date("April 7, 2020 03:24:00"),
        url: "https://applify-tech.com",
        active: true,
        color: "#265545",
      },
      {
        id: 1,
        image: crownclothing,
        name: "Crown Clothing",
        description:
          "E-commerce platform. Comprehensive online-shop with graceful, sophisticated design.",
        techStack:
          "Front-end purely created with React and Redux as a state managemnet lib. Therefore back-end handled by firebase back-end as a service. Node server is running in order to handle Stripe payments.",
        date: new Date("January 21, 2020 03:24:00"),
        url: "https://crwn-clothing-s.herokuapp.com/",
        active: true,
        color: "#000",
      },
      {
        id: 2,
        image: natours,
        name: "Natours",
        description:
          "Natours - is a Traveling Experience company, which selling unforgettable trips all over the world.",
        techStack:
          "Fully fletched Express API, data is stored in NoSQL MongoDB with help elegant object modeling provided by Mongoose. App uses server-side rendering by hand of PUG template engine.",
        date: new Date("October 18, 2019 03:24:00"),
        url: "https://natours-live-s.herokuapp.com/",
        active: true,
        color: "#55C57A",
      },
      {
        id: 3,
        image: clarify,
        name: "Clarify",
        description:
          "Clarify - is an email service, that helps you to collect feedback from people in order to improve their experience.",
        techStack:
          "Front-end of the app covered by React alongside with Redux and Redux-Sagas. Back-end handled with Express server, data persistance achieved with MongoDB and Mongoose",
        date: new Date("August 12, 2019 03:24:00"),
        url: "https://clarify-s.herokuapp.com/",
        active: true,
        color: "#DD4F4F",
      },
    ],
    rus: [
      {
        id: 0,
        image: applify,
        name: "Applify",
        description: "Приложение для Веб Студии или небольшой IT Компании.",
        techStack:
          "Приложение реализовано посредством технологий MERN стека. Спроектированы макеты. Фронт написан на React, Redux, Redux-Saga. Бэк на Node.js Express. Оптимизирован SEO. Приложение развернуто на Heroku. SSL сертификация letsencrypt.",
        date: new Date("April 7, 2020 03:24:00"),
        url: "https://applify-tech.com",
        active: true,
        color: "#265545",
      },
      {
        id: 1,
        image: crownclothing,
        name: "Crown Clothing",
        description:
          "Платформа электронной коммерции. Комплексный интернет-магазин с изящным, утонченным дизайном.",
        techStack:
          "Front-end создан исключительно с помощью библиотеки React, Redux в качестве библиотеки управления стейтом. Back-end обрабатывается Firebase (back-end as a service). Node сервер обрабатывает платежи при помощи сервиса Stripe.",
        date: new Date("January 21, 2020 03:24:00"),
        url: "https://crwn-clothing-s.herokuapp.com/",
        active: true,
        color: "#000",
      },
      {
        id: 2,
        image: natours,
        name: "Natours",
        description:
          "Natours - это туристическая компания, которая продает незабываемые поездки по всему миру.",
        techStack:
          "Полностью обновленный Express API, данные хранятся в NoSQL базе данных - MongoDB с помощью моделирования объектов, предоставляемого Mongoose. Приложение использует сервер-сайд рендеринг с помощью движка шаблонов PUG.",
        date: new Date("October 18, 2019 03:24:00"),
        url: "https://natours-live-s.herokuapp.com/",
        active: true,
        color: "#55C57A",
      },
      {
        id: 3,
        image: clarify,
        name: "Clarify",
        description:
          "Clarify - это служба электронной почты, которая помогает собирать отзывы от людей с целью улучшения их опыта использования вашего приложения.",
        techStack:
          "Front-end приложения написан на библиотеке React вместе с Redux и Redux-Sagas. Back-end обрабатывается с помощью Express сервера, сохранность данных достигается с помощью MongoDB и Mongoose.",
        date: new Date("August 12, 2019 03:24:00"),
        url: "https://clarify-s.herokuapp.com/",
        active: true,
        color: "#DD4F4F",
      },
    ],
    ukr: [
      {
        id: 0,
        image: applify,
        name: "Applify",
        description: "Додаток для Веб Студії або невеликої IT Компанії.",
        techStack:
          "Додаток реалізовано за допомогою технологій MERN стека. Спроектовані макети. Фронт написаний на React, Redux, Redux-Saga. Бек на Node.js Express. Оптимізовано SEO. Додаток розгорнуто на Heroku. SSL сертифікація letsencrypt.",
        date: new Date("April 7, 2020 03:24:00"),
        url: "https://applify-tech.com",
        active: true,
        color: "#265545",
      },
      {
        id: 1,
        image: crownclothing,
        name: "Crown Clothing",
        description:
          "Платформа електронної комерції. Комплексний інтернет-магазин з елегантними, витонченим дизайном.",
        techStack:
          "Front-end створений виключно за допомогою бібліотеки React, Redux як бібліотеки управління Стейт. Back-end обробляється Firebase (back-end as a service). Node сервер обробляє платежі за допомогою сервісу Stripe.",
        date: new Date("January 21, 2020 03:24:00"),
        url: "https://crwn-clothing-s.herokuapp.com/",
        active: true,
        color: "#000",
      },
      {
        id: 2,
        image: natours,
        name: "Natours",
        description:
          "Natours - це туристична компанія, яка продає незабутні поїздки по всьому світу.",
        techStack:
          "Повністю оновлений Express API, дані зберігаються в NoSQL базі даних - MongoDB за допомогою моделювання об'єктів, наданого Mongoose. Додаток використовує сервер-сайд рендеринг за допомогою движка шаблонів PUG.",
        date: new Date("October 18, 2019 03:24:00"),
        url: "https://natours-live-s.herokuapp.com/",
        active: true,
        color: "#55C57A",
      },
      {
        id: 3,
        image: clarify,
        name: "Clarify",
        description:
          "Clarify - це служба електронної пошти, яка допомагає збирати відгуки від людей з метою поліпшення їхнього досвіду користування вашим додатком.",
        techStack:
          "Front-end додатки написаний на бібліотеці React разом з Redux і Redux-Sagas. Back-end обробляється за допомогою Express сервера, збереження даних досягається за допомогою MongoDB і Mongoose.",
        date: new Date("August 12, 2019 03:24:00"),
        url: "https://clarify-s.herokuapp.com/",
        active: true,
        color: "#DD4F4F",
      },
    ],
  },
  currentImage: {
    id: 100,
    image: "uploads/images/projects/audit-desktop.jpg",
  },
  allImages: {
    phone: [
      {
        id: 100,
        image: "uploads/images/projects/audit-phone.jpg",
      },
      {
        id: 101,
        image: "uploads/images/projects/security-phone.jpg",
      },
      {
        id: 102,
        image: "uploads/images/projects/performance-phone.jpg",
      },
      {
        id: 103,
        // image: "uploads/images/projects/banking-phone.jpg",
        image: "uploads/images/projects/elevation-phone.jpg",
      },
      {
        id: 104,
        image: "uploads/images/projects/galaxy-phone.jpg",
      },
      {
        id: 105,
        image: "uploads/images/projects/undrwtr-phone.jpg",
      },
      {
        id: 106,
        // image: "uploads/images/projects/calendar-phone.jpg",
        image: "uploads/images/projects/dance-phone.jpg",
      },
      {
        id: 107,
        // image: "uploads/images/projects/watch-phone.jpg",
        image: "uploads/images/projects/shoes-phone.jpg",
      },
    ],
    tablet: [
      {
        id: 100,
        image: "uploads/images/projects/audit-tablet.jpg",
      },
      {
        id: 101,
        image: "uploads/images/projects/security-tablet.jpg",
      },
      {
        id: 102,
        image: "uploads/images/projects/performance-tablet.jpg",
      },
      {
        id: 103,
        // image: "uploads/images/projects/banking-tablet.jpg",
        image: "uploads/images/projects/elevation-tablet.jpg",
      },
      {
        id: 104,
        image: "uploads/images/projects/galaxy-tablet.jpg",
      },
      {
        id: 105,
        image: "uploads/images/projects/undrwtr-tablet.jpg",
      },
      {
        id: 106,
        // image: "uploads/images/projects/calendar-tablet.jpg",
        image: "uploads/images/projects/dance-tablet.jpg",
      },
      {
        id: 107,
        // image: "uploads/images/projects/watch-tablet.jpg",
        image: "uploads/images/projects/shoes-tablet.jpg",
      },
    ],
    desktop: [
      {
        id: 100,
        image: "uploads/images/projects/audit-desktop.jpg",
      },
      {
        id: 101,
        image: "uploads/images/projects/security-desktop.jpg",
      },
      {
        id: 102,
        image: "uploads/images/projects/performance-desktop.jpg",
      },
      {
        id: 103,
        // image: "uploads/images/projects/banking-desktop.jpg",
        image: "uploads/images/projects/elevation-desktop.jpg",
      },
      {
        id: 104,
        image: "uploads/images/projects/galaxy-desktop.jpg",
      },
      {
        id: 105,
        image: "uploads/images/projects/undrwtr-desktop.jpg",
      },
      {
        id: 106,
        // image: "uploads/images/projects/calendar-desktop.jpg",
        image: "uploads/images/projects/dance-desktop.jpg",
      },
      {
        id: 107,
        // image: "uploads/images/projects/watch-desktop.jpg",
        image: "uploads/images/projects/shoes-desktop.jpg",
      },
    ],
  },
};

export default projectsData;
