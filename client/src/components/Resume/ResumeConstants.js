// image
import portrait from "../../assets/jpeg/profile-portrait.jpg";

const resumeData = {
  eng: {
    header: {
      name: "Artem Nikolaiev",
      occupation: "Front-End Engineer",
      image: portrait,
    },
    info: {
      about: {
        aboutHeader: "About me",
        aboutText:
          "My passion - technologies and self-education, looking forward along-term productive partnership.",
      },
      details: {
        detailsHeader: "Personal Details",
        birthTitle: "Birth Date",
        birthDate: "15 / 03 / 1990",
        nationalityTitle: "Nationality",
        nationality: "Ukrainian",
        addressTitle: "Address",
        address: "Avdiivka, Donetska Oblast, Ukraine",
      },
      contacts: {
        contactsHeader: "Contacts",
        email: "artyom.nikolaev@yahoo.com",
        phone: "+38 093 151 21 28",
        github: "https://github.com/Tamplier2911",
        twitter: "https://twitter.com/ArtyomNikolayev",
      },
    },
    main: {
      experience: {
        experienceHeader: "Professional Experience",
        experienceTitle: "Front-end Engineer",
        experienceText:
          "My experience in web development mainly comes from self-education and independant projects, that I love to challenge myself with. Having 12+ month of experience studying and building web solutions, I have developed a strong passion for this domain. To demonstrate my learning curve, below I have provided a git link, which you can use to review the projects I have built along the way. This is my first application for Front-end dev. position, and I am excited to put my skill to the test as a part of growing, ambitious team.",
      },
      education: {
        educationHeader: "Education",
        educationCollection: [
          {
            educationSubject: "Computer Science 50",
            educationOrg: "edx.org - online courses",
            educationDate: "2018 - 2019",
          },
          {
            educationSubject: "Bachelor of Restaurant and Hotel Business",
            educationOrg: "Donetsk National University of Economics and Trade",
            educationDate: "2009 - 2014",
          },
        ],
      },
      skills: {
        skillsHeaderFront: "Front-end Skills",
        skillListFront: [
          {
            skillSubject: "HTML / CSS / JS",
            skillPercentage: 76,
          },
          {
            skillSubject: "React.js",
            skillPercentage: 70,
          },
        ],
        skillsHeaderBack: "Back-end Skills",
        skillListBack: [
          {
            skillSubject: "Node.js / Express",
            skillPercentage: 50,
          },
          {
            skillSubject: "MongoDB / Mongoose",
            skillPercentage: 39,
          },
        ],
      },
      interests: {
        interestsHeader: "Interests",
        interestSubjects: [
          { interestDescription: "Music & Movies" },
          { interestDescription: "Technologies" },
          { interestDescription: "Reading & Education" },
          { interestDescription: "Sitting with cocoa covered in blanket" },
        ],
      },
    },
    downloadLinks: {
      linkDescriptions: [
        { text: "Download in English" },
        { text: "Download in Russian" },
        { text: "Download in Ukrainian" },
      ],
    },
  },
  rus: {
    header: {
      name: "Артём Николаев",
      occupation: "Фронт-энд Инженер",
      image: portrait,
    },
    info: {
      about: {
        aboutHeader: "Обо мне",
        aboutText:
          "Меня вдохновляют технологии и самообразование, рассчитываю на долгосрочное и продуктивное партнерство.",
      },
      details: {
        detailsHeader: "Персональные Данные",
        birthTitle: "Дата рождения",
        birthDate: "15 / 03 / 1990",
        nationalityTitle: "Национальность",
        nationality: "Украинец",
        addressTitle: "Место Проживания",
        address: "Авдеевка, Донецкая Область, Украина",
      },
      contacts: {
        contactsHeader: "Контактные Данные",
        email: "artyom.nikolaev@yahoo.com",
        phone: "+38 093 151 21 28",
        github: "https://github.com/Tamplier2911",
        twitter: "https://twitter.com/ArtyomNikolayev",
      },
    },
    main: {
      experience: {
        experienceHeader: "Профессиональный Опыт",
        experienceTitle: "Фронтенд Инженер",
        experienceText:
          "Мой опыт в разработке, прежде всего, основан на самообразовании и самостоятельных проектах. За более чем 12+ месяцев опыта реализации веб-решений, я обрел необходимые навыки и способности, востребованные в этой сфере. Чтобы продемонстрировать процесс своего обучения, ниже, я приведу ссылку на мой гит аккаунт, где вы можете ознакомиться с проектами над которыми я работал. Это моя первая заявка на позицию Фронтенд Инженера, и я готов испытать себя став частью быстрорастущей, амбициозной команды.",
      },
      education: {
        educationHeader: "Образование",
        educationCollection: [
          {
            educationSubject: "Computer Science 50",
            educationOrg: "edx.org - онлайн обучение",
            educationDate: "2018 - 2019",
          },
          {
            educationSubject:
              "Бакалавр в области Ресторанно-гостиничного Бизнеса",
            educationOrg:
              "Донецкий Национальный Университет Экономики и Торговли",
            educationDate: "2009 - 2014",
          },
        ],
      },
      skills: {
        skillsHeaderFront: "Фронт-энд Навыки",
        skillListFront: [
          {
            skillSubject: "HTML / CSS / JS",
            skillPercentage: 76,
          },
          {
            skillSubject: "React.js",
            skillPercentage: 70,
          },
        ],
        skillsHeaderBack: "Бэк-энд Навыки",
        skillListBack: [
          {
            skillSubject: "Node.js / Express",
            skillPercentage: 50,
          },
          {
            skillSubject: "MongoDB / Mongoose",
            skillPercentage: 39,
          },
        ],
      },
      interests: {
        interestsHeader: "Интересы",
        interestSubjects: [
          { interestDescription: "Музыка и Кино" },
          { interestDescription: "Технологии" },
          { interestDescription: "Чтение и Образование" },
          { interestDescription: "Сидеть обернутым в одеялко с чашкой какао" },
        ],
      },
    },
    downloadLinks: {
      linkDescriptions: [
        { text: "Загрузить на Английском" },
        { text: "Загрузить на Русском" },
        { text: "Загрузить на Украинском" },
      ],
    },
  },
  ukr: {
    header: {
      name: "Артем Ніколаєв",
      occupation: "Фронтенд Розробник",
      image: portrait,
    },
    info: {
      about: {
        aboutHeader: "Про Себе",
        aboutText:
          "Мене надихають технології і самоосвіта, розраховую на довгострокове й продуктивне партнерство.",
      },
      details: {
        detailsHeader: "Персональні Дані",
        birthTitle: "Дата Народження",
        birthDate: "15 / 03 / 1990",
        nationalityTitle: "Національність",
        nationality: "Українець",
        addressTitle: "Місце проживання",
        address: "Авдіївка, Донецька Область, Україна",
      },
      contacts: {
        contactsHeader: "Контактні Дані",
        email: "artyom.nikolaev@yahoo.com",
        phone: "+38 093 151 21 28",
        github: "https://github.com/Tamplier2911",
        twitter: "https://twitter.com/ArtyomNikolayev",
      },
    },
    main: {
      experience: {
        experienceHeader: "Професійний Досвід",
        experienceTitle: "Фронтенд Розробник",
        experienceText:
          "Мій досвід в розробці, перш за все, заснований на самоосвіті та самостійних проектах. За більш ніж 12 місяців досвіду реалізації веб-рішень, я виробив в собі сильну пристрасть до розробки і самонавчання. Щоб продемонструвати процес свого навчання, нижче, я приведу адресу мого гіт аккаунта, де ви можете ознайомитися з проектами над якими я працював в період навчання. Це моя перша заявка на позицію Фронтенд Розробника, і я з задоволенням готовий випробувати себе ставши частиною швидкозростаючої, амбітної команди.",
      },
      education: {
        educationHeader: "Освіта",
        educationCollection: [
          {
            educationSubject: "Computer Science 50",
            educationOrg: "edx.org - онлайн навчання",
            educationDate: "2018 - 2019",
          },
          {
            educationSubject:
              "Бакалавр у Області Ресторанно-готельного Бізнесу",
            educationOrg:
              "Донецький Національний Університет Економіки і Торгівлі",
            educationDate: "2009 - 2014",
          },
        ],
      },
      skills: {
        skillsHeaderFront: "Фронтенд Вміння",
        skillListFront: [
          {
            skillSubject: "HTML / CSS / JS",
            skillPercentage: 76,
          },
          {
            skillSubject: "React.js",
            skillPercentage: 70,
          },
        ],
        skillsHeaderBack: "Бекенд Вміння",
        skillListBack: [
          {
            skillSubject: "Node.js / Express",
            skillPercentage: 50,
          },
          {
            skillSubject: "MongoDB / Mongoose",
            skillPercentage: 39,
          },
        ],
      },
      interests: {
        interestsHeader: "Інтереси",
        interestSubjects: [
          { interestDescription: "Музика і Кіно" },
          { interestDescription: "Технології" },
          { interestDescription: "Читання і Освіта" },
          {
            interestDescription: "Сидіти загорнутим в ковдрочку з чашкою какао",
          },
        ],
      },
    },
    downloadLinks: {
      linkDescriptions: [
        { text: "Завантажити на Англійському" },
        { text: "Завантажити на Російському" },
        { text: "Завантажити на Українському" },
      ],
    },
  },
};

export default resumeData;
