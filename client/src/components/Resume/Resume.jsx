// import "./Resume.scss";
import React from "react";

// JS Rendering CSS
import {
  ResumeContainer,
  ResumeHeader,
  ResumeHeaderImgContainer,
  ResumeHeaderImg,
  ResumeHeaderTitle,
  ResumeHeaderName,
  ResumeHeaderOccupation,
  ResumeInfo,
  ResumeInfoAbout,
  ResumeInfoDetails,
  ResumeInfoWrapper,
  ResumeInfoContacts,
  ResumeInfoContacstWrapper,
  ResumeInfoContacsLink,
  ResumeMain,
  ResumeMainExperience,
  ResumeMainEducation,
  ResumeMainEducationOrg,
  ResumeMainEducationOrgDate,
  ResumeMainEducationOrgName,
  ResumeSkills,
  ResumeMainSkills,
  ResumeMainSkillsProg,
  ResumeMainSkillsProgWrapper,
  ResumeMainInterests,
  ResumeMainInterestsCover,
  ResumeMainInterestsWrapper,
  ResumeLinksContainer,
  ResumeDownloadLink,
  ResumeBlackHeader,
  ResumeBlueHeader,
  ResumeSubTitle,
  ResumeMailSVG,
  ResumePhoneSVG,
  ResumeChromeSVG,
  ResumeTwitterSVG,
  ResumeCorrectSVG,
  ResumeProgressContainer,
  ResumeProgressCircle,
  ResumeProgressText
} from "./ResumeStyles";

// image
import portrait from "../../assets/jpeg/profile-portrait.jpg";

// resume for download
import resEng from "../../assets/pdf/Artem Nikolaiev CV.pdf";

const resumeData = {
  eng: {
    header: {
      name: "Artem Nikolaiev",
      occupation: "Front-End Engineer",
      image: portrait
    },
    info: {
      about: {
        aboutHeader: "About me",
        aboutText:
          "My passion - technologies and self-education, looking forward along-term productive partnership."
      },
      details: {
        detailsHeader: "Personal Details",
        birthTitle: "Birth Date",
        birthDate: "15 / 03 / 1990",
        nationalityTitle: "Nationality",
        nationality: "Ukrainian",
        addressTitle: "Address",
        address: "Avdiivka, Donetska Oblast, Ukraine"
      },
      contacts: {
        contactsHeader: "Contacts",
        email: "artyom.nikolaev@yahoo.com",
        phone: "+38 093 151 21 28",
        github: "https://github.com/Tamplier2911",
        twitter: "https://twitter.com/ArtyomNikolayev"
      }
    },
    main: {
      experience: {
        experienceHeader: "Professional Experience",
        experienceTitle: "Junior Front-end Engineer",
        experienceText:
          "My experience in web development mainly comes from self-education and independant projects, that I love to challenge myself with. Having 12+ month of experience studing and building web solutions, I have developed a strong passion for this domain. To demonstrate my learning curve, below I have provided a git link, which you can use to review the projects I have built along the way. This is my first application for Junior Front-end dev. position, and I am excited to put my skill to the test as a part of growing, ambitious team."
      },
      education: {
        educationHeader: "Education",
        educationCollection: [
          {
            educationSubject: "Computer Science 50",
            educationOrg: "edx.org - online courses",
            educationDate: "2018 - 2019"
          },
          {
            educationSubject: "Bachelor of Restaurant and Hotel Business",
            educationOrg: "Donetsk National University of Economics and Trade",
            educationDate: "2009 - 2014"
          }
        ]
      },
      skills: {
        skillsHeaderFront: "Front-end Skills",
        skillListFront: [
          {
            skillSubject: "HTML / CSS / JS",
            skillPercentage: 76
          },
          {
            skillSubject: "React.js",
            skillPercentage: 70
          }
        ],
        skillsHeaderBack: "Back-end Skills",
        skillListBack: [
          {
            skillSubject: "Node.js / Express",
            skillPercentage: 50
          },
          {
            skillSubject: "MongoDB / Mongoose",
            skillPercentage: 70
          }
        ]
      },
      interests: {
        interestsHeader: "Interesets",
        interestSubjects: [
          { interestDescription: "Music & Movies" },
          { interestDescription: "Technologies" },
          { interestDescription: "Reading & Education" },
          { interestDescription: "Sitting with cocoa covered in blanket" }
        ]
      }
    },
    downloadLinks: {
      linkDescriptions: [
        { text: "Download in English" },
        { text: "Download in Russian" },
        { text: "Download in Ukrainian" }
      ]
    }
  },
  rus: {
    header: {
      name: "Артем Николаев",
      occupation: "Фронтенд Инженер",
      image: portrait
    },
    info: {
      about: {
        aboutHeader: "Обо мне",
        aboutText:
          "Меня вдохновляют технологии и самообразование, рассчитываю на долгосрочное и продуктивное партёрство."
      },
      details: {
        detailsHeader: "Персональные Данные",
        birthTitle: "Дата рождения",
        birthDate: "15 / 03 / 1990",
        nationalityTitle: "Национальность",
        nationality: "Украинец",
        addressTitle: "Место Проживания",
        address: "Авдеевка, Донецкая Область, Украина"
      },
      contacts: {
        contactsHeader: "Контактные Данные",
        email: "artyom.nikolaev@yahoo.com",
        phone: "+38 093 151 21 28",
        github: "https://github.com/Tamplier2911",
        twitter: "https://twitter.com/ArtyomNikolayev"
      }
    },
    main: {
      experience: {
        experienceHeader: "Профессиональный Опыт",
        experienceTitle: "Младший Фронтенд инженер",
        experienceText:
          "Мой опыт в разработке, прежде всего, основан на самообразовании и самостоятельных проектах. За более чем 12 месяцев опыта реализации веб-решений, я выработал в себе сильную страсть к разработке и самообучению. Чтобы продемонстрировать процесс своего обучения, ниже, я приведу ссылку на мой гит аккаунт, где вы можете ознакомиться с проектами над которыми я работал в период обучения. Это моя первая заявка на позицию Младшего Фронтенд Инженера, и я с удовольствие готов испытать себя став частью быстрорастущей, амбициозной команды."
      },
      education: {
        educationHeader: "Образование",
        educationCollection: [
          {
            educationSubject: "Computer Science 50",
            educationOrg: "edx.org - онлайн обучение",
            educationDate: "2018 - 2019"
          },
          {
            educationSubject:
              "Бакалавр в области Ресторанно-гостиничного Бизнеса",
            educationOrg:
              "Донецкий Национальный Университет Экономики и Торговли",
            educationDate: "2009 - 2014"
          }
        ]
      },
      skills: {
        skillsHeaderFront: "Фронтенд Навыки",
        skillListFront: [
          {
            skillSubject: "HTML / CSS / JS",
            skillPercentage: 76
          },
          {
            skillSubject: "React.js",
            skillPercentage: 70
          }
        ],
        skillsHeaderBack: "Бэкенд Навыки",
        skillListBack: [
          {
            skillSubject: "Node.js / Express",
            skillPercentage: 50
          },
          {
            skillSubject: "MongoDB / Mongoose",
            skillPercentage: 70
          }
        ]
      },
      interests: {
        interestsHeader: "Интересы",
        interestSubjects: [
          { interestDescription: "Музыка & Кино" },
          { interestDescription: "Технологии" },
          { interestDescription: "Чтение & Образование" },
          { interestDescription: "Сидеть обернутым в одеялко с чашкой какао" }
        ]
      }
    },
    downloadLinks: {
      linkDescriptions: [
        { text: "Загрузить на Английском" },
        { text: "Загрузить на Русском" },
        { text: "Загрузить на Украинском" }
      ]
    }
  },
  ukr: {
    header: {
      name: "Артем Ніколаєв",
      occupation: "Фронтенд Розробник",
      image: portrait
    },
    info: {
      about: {
        aboutHeader: "Про Себе",
        aboutText:
          "Мене надихають технології і самоосвіта, розраховую на довгострокове й продуктивне партнерство."
      },
      details: {
        detailsHeader: "Персональні Дані",
        birthTitle: "Дата Народження",
        birthDate: "15 / 03 / 1990",
        nationalityTitle: "Національність",
        nationality: "Українець",
        addressTitle: "Місце проживання",
        address: "Авдіївка, Донецька Область, Україна"
      },
      contacts: {
        contactsHeader: "Контактні Дані",
        email: "artyom.nikolaev@yahoo.com",
        phone: "+38 093 151 21 28",
        github: "https://github.com/Tamplier2911",
        twitter: "https://twitter.com/ArtyomNikolayev"
      }
    },
    main: {
      experience: {
        experienceHeader: "Професійний Досвід",
        experienceTitle: "Молодший Фронтенд Розробник",
        experienceText:
          "Мій досвід в розробці, перш за все, заснований на самоосвіті та самостійних проектах. За більш ніж 12 місяців досвіду реалізації веб-рішень, я виробив в собі сильну пристрасть до розробки і самонавчання. Щоб продемонструвати процес свого навчання, нижче, я приведу адресу мого гіт аккаунта, де ви можете ознайомитися з проектами над якими я працював в період навчання. Це моя перша заявка на позицію Молодшого Фронтенд Розробника, і я з задоволенням готовий випробувати себе ставши частиною швидкозростаючої, амбітної команди."
      },
      education: {
        educationHeader: "Освіта",
        educationCollection: [
          {
            educationSubject: "Computer Science 50",
            educationOrg: "edx.org - онлайн навчання",
            educationDate: "2018 - 2019"
          },
          {
            educationSubject:
              "Бакалавр у Області Ресторанно-готельного Бізнесу",
            educationOrg:
              "Донецький Національний Університет Економіки і Торгівлі",
            educationDate: "2009 - 2014"
          }
        ]
      },
      skills: {
        skillsHeaderFront: "Фронтенд Вміння",
        skillListFront: [
          {
            skillSubject: "HTML / CSS / JS",
            skillPercentage: 76
          },
          {
            skillSubject: "React.js",
            skillPercentage: 70
          }
        ],
        skillsHeaderBack: "Бекенд Вміння",
        skillListBack: [
          {
            skillSubject: "Node.js / Express",
            skillPercentage: 50
          },
          {
            skillSubject: "MongoDB / Mongoose",
            skillPercentage: 70
          }
        ]
      },
      interests: {
        interestsHeader: "Інтереси",
        interestSubjects: [
          { interestDescription: "Музика & Кіно" },
          { interestDescription: "Технології" },
          { interestDescription: "Читання & Освіта" },
          {
            interestDescription: "Сидіти загорнутим в ковдрочку з чашкою какао"
          }
        ]
      }
    },
    downloadLinks: {
      linkDescriptions: [
        { text: "Завантажити на Англійському" },
        { text: "Завантажити на Російському" },
        { text: "Завантажити на Українському" }
      ]
    }
  }
};

const Resume = () => {
  // statuc resume data
  // resumeData

  // reducer value of current language ['eng', 'rus', 'ukr']
  // const curLang = lang;

  // required data
  // const data = resumeData[curLang];

  // retrieve required objects
  // const { header, info, main, skills, interests, downloadLins } = data;

  // use data to display for certain chosen language

  return (
    <ResumeContainer>
      <ResumeHeader>
        <ResumeHeaderImgContainer>
          <ResumeHeaderImg alt="author" src={portrait} />
        </ResumeHeaderImgContainer>
        <ResumeHeaderTitle>
          <ResumeHeaderName>Artem Nikolaiev</ResumeHeaderName>
          <ResumeHeaderOccupation>Front-End Engineer</ResumeHeaderOccupation>
        </ResumeHeaderTitle>
      </ResumeHeader>
      <ResumeInfo>
        <ResumeInfoAbout>
          <ResumeBlackHeader>About Me</ResumeBlackHeader>
          <ResumeSubTitle>
            My passion is technologies and self-education, looking forward a
            long-term productive partnership.
          </ResumeSubTitle>
        </ResumeInfoAbout>
        <ResumeInfoDetails>
          <ResumeBlackHeader>Personal Details</ResumeBlackHeader>
          <ResumeInfoWrapper>
            <ResumeBlueHeader>Birth Date</ResumeBlueHeader>
            <ResumeSubTitle>15 / 03 / 1990</ResumeSubTitle>
          </ResumeInfoWrapper>
          <ResumeInfoWrapper>
            <ResumeBlueHeader>Nationality</ResumeBlueHeader>
            <ResumeSubTitle>Ukrainian</ResumeSubTitle>
          </ResumeInfoWrapper>
          <ResumeInfoWrapper>
            <ResumeBlueHeader>Address</ResumeBlueHeader>
            <ResumeSubTitle>Avdiivka, Donetska Oblast, Ukraine</ResumeSubTitle>
          </ResumeInfoWrapper>
        </ResumeInfoDetails>
        <ResumeInfoContacts>
          <ResumeBlackHeader>Contact</ResumeBlackHeader>
          <ResumeInfoContacstWrapper>
            <ResumeMailSVG />
            <ResumeSubTitle>artyom.nikolaev@yahoo.com</ResumeSubTitle>
          </ResumeInfoContacstWrapper>
          <ResumeInfoContacstWrapper>
            <ResumePhoneSVG />
            <ResumeSubTitle>+38 093 151 21 28</ResumeSubTitle>
          </ResumeInfoContacstWrapper>
          <ResumeInfoContacstWrapper>
            <ResumeChromeSVG />
            <ResumeInfoContacsLink
              href="https://github.com/Tamplier2911"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </ResumeInfoContacsLink>
          </ResumeInfoContacstWrapper>

          <ResumeInfoContacstWrapper>
            <ResumeTwitterSVG />
            <ResumeInfoContacsLink
              href="https://twitter.com/ArtyomNikolayev"
              rel="noopener noreferrer"
              target="_blank"
            >
              Twitter
            </ResumeInfoContacsLink>
          </ResumeInfoContacstWrapper>
        </ResumeInfoContacts>
      </ResumeInfo>
      <ResumeMain>
        <ResumeMainExperience>
          <ResumeBlackHeader>Professional Experience</ResumeBlackHeader>
          <ResumeBlueHeader>Junior Front-end Engineer</ResumeBlueHeader>
          <ResumeSubTitle>
            My experience in web development mainly comes from self-education
            and independant projects, that I love to challenge my self with.
            Having 12+ month of experience studing and building web solutions, I
            have developed a strong passion for this domain. To demonstrate my
            learning curve, below I have provided a git link, which you can use
            to review the projects I have built along the way. This is my first
            application for Junior Front-end dev. position, and I am excited to
            put my skill to the test as a part of growing, ambitious team.
          </ResumeSubTitle>
        </ResumeMainExperience>
        <ResumeMainEducation>
          <ResumeBlackHeader>Education</ResumeBlackHeader>
          <ResumeMainEducationOrg>
            <ResumeBlueHeader>Computer Science 50</ResumeBlueHeader>
            <ResumeMainEducationOrgDate>2018 - 2019</ResumeMainEducationOrgDate>
            <ResumeMainEducationOrgName>
              edx.org - online courses
            </ResumeMainEducationOrgName>
          </ResumeMainEducationOrg>
          <ResumeMainEducationOrg>
            <ResumeBlueHeader>
              Bachelor of Restaurant and Hotel Business
            </ResumeBlueHeader>
            <ResumeMainEducationOrgDate>2009 - 2014</ResumeMainEducationOrgDate>
            <ResumeMainEducationOrgName>
              Donetsk National University of Economics and Trade
            </ResumeMainEducationOrgName>
          </ResumeMainEducationOrg>
        </ResumeMainEducation>
        <ResumeSkills>
          <ResumeMainSkills>
            <ResumeBlackHeader>Front-end Skills</ResumeBlackHeader>
            <ResumeMainSkillsProg>
              <ResumeMainSkillsProgWrapper>
                <ResumeProgressContainer percentage="76">
                  <ResumeProgressCircle>
                    <ResumeProgressText>76%</ResumeProgressText>
                  </ResumeProgressCircle>
                </ResumeProgressContainer>
                <ResumeSubTitle>HTML / CSS / JS</ResumeSubTitle>
              </ResumeMainSkillsProgWrapper>
              <ResumeMainSkillsProgWrapper>
                <ResumeProgressContainer percentage="70">
                  <ResumeProgressCircle>
                    <ResumeProgressText>70%</ResumeProgressText>
                  </ResumeProgressCircle>
                </ResumeProgressContainer>
                <ResumeSubTitle>React.js</ResumeSubTitle>
              </ResumeMainSkillsProgWrapper>
            </ResumeMainSkillsProg>
          </ResumeMainSkills>
          <ResumeMainSkills>
            <ResumeBlackHeader>Back-end Skills</ResumeBlackHeader>
            <ResumeMainSkillsProg>
              <ResumeMainSkillsProgWrapper>
                <ResumeProgressContainer percentage="50">
                  <ResumeProgressCircle>
                    <ResumeProgressText>50%</ResumeProgressText>
                  </ResumeProgressCircle>
                </ResumeProgressContainer>
                <ResumeSubTitle>Node.js / Express</ResumeSubTitle>
              </ResumeMainSkillsProgWrapper>
              <ResumeMainSkillsProgWrapper>
                <ResumeProgressContainer percentage="50">
                  <ResumeProgressCircle>
                    <ResumeProgressText>50%</ResumeProgressText>
                  </ResumeProgressCircle>
                </ResumeProgressContainer>
                <ResumeSubTitle>MongoDB / Mongoose</ResumeSubTitle>
              </ResumeMainSkillsProgWrapper>
            </ResumeMainSkillsProg>
          </ResumeMainSkills>
        </ResumeSkills>
        <ResumeMainInterests>
          <ResumeBlackHeader>Interesets</ResumeBlackHeader>
          <ResumeMainInterestsCover>
            <ResumeMainInterestsWrapper>
              <ResumeCorrectSVG />
              <ResumeSubTitle>Music &amp; Movies </ResumeSubTitle>
            </ResumeMainInterestsWrapper>
            <ResumeMainInterestsWrapper>
              <ResumeCorrectSVG />
              <ResumeSubTitle>Technologies</ResumeSubTitle>
            </ResumeMainInterestsWrapper>
            <ResumeMainInterestsWrapper>
              <ResumeCorrectSVG />
              <ResumeSubTitle>Reading &amp; Education</ResumeSubTitle>
            </ResumeMainInterestsWrapper>
            <ResumeMainInterestsWrapper>
              <ResumeCorrectSVG />
              <ResumeSubTitle>
                Sitting with cocoa covered in blanket
              </ResumeSubTitle>
            </ResumeMainInterestsWrapper>
          </ResumeMainInterestsCover>
        </ResumeMainInterests>
      </ResumeMain>
      <ResumeLinksContainer>
        <ResumeDownloadLink href={resEng}>Download English</ResumeDownloadLink>
        <ResumeDownloadLink href={resEng}>Download Russian</ResumeDownloadLink>
        <ResumeDownloadLink href={resEng}>
          Download Ukrainian
        </ResumeDownloadLink>
      </ResumeLinksContainer>
    </ResumeContainer>
  );
};

export default Resume;
