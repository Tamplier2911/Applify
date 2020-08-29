import { createGlobalStyle } from 'styled-components';

const getTheme = (props) => {
  const { theme } = props;
  if (theme === 'dark') {
    return `
        :root {
            // TYPOGRAPHY
            --font-title: "Josefin Sans", sans-serif;
            --font-text: "Lato", sans-serif;
            --font-cyrillic: "Roboto", sans-serif;
        
            // COLOR PALET
            --cl-font: #DBDBDB;
            --cl-primary: #4ecca3;
            --cl-black: #000;
            --cl-white: #1E1E1E;
            --cl-grey: #1E1E1E;
            --cl-dark-grey: #a0a0a0;
            --cl-darkest-grey: #747474;
        
            --cl-bg-dark: #121212;

            --cl-shadow: rgba(0, 0, 0, 0.623);
            --cl-header: rgba(39, 39, 39, 0.973);

            // ILLUSTRATIONS
            --cl-illustration: #4ecca3;

            // SIDE NAV
            --cl-sidenav: rgba(78, 204, 162, 0.357);
            --cl-sidenav-shadow: rgba(0, 0, 0, 0.603);
        
            // LANGUAGE PANNEL
            --cl-langpan-shadow: rgba(0, 0, 0, 0.623);
        
            // MAIN HOVERS
            --cl-mainhover: #4ecca3;
        
            // SCROLL BAR
            --cl-scrollbar-bg: rgba(40, 52, 147, 0.047);
            --cl-scroll-shadow: rgba(0, 0, 0, 0.157);
            --cl-scrollThumb-bg1: #121212;
            --cl-scrollThumb-bg2: #4ecca3;
        
            // TILE COLORS
            --cl-tiles-1: #00a8a9;
            --cl-tiles-2: #002a38;
            --cl-tiles-3: #fed595;
            --cl-tiles-4: #fe3f2d;
            --cl-tiles-5: #ffaa2d;
            --cl-tiles-6: #c0c1c3;
            --cl-tiles-7: #d6d7d9;
            --cl-square-shadow: rgba(0, 0, 0, 0.525);

            // HERO GRADIENT
            --cl-gradient-start: rgba(52, 232, 157, 0.904);
            --cl-gradient-end:  rgb(15, 52, 67);
            --cl-hero-passive-link: #0f3443;

            // HOME PAGE CARDS
            --cl-card-shadow: rgba(0, 0, 0, 0.616);
            --cl-card-shadow-hover: rgba(78, 204, 162, 0.357);
        
            // PORTFOLIO PROJECTS CIRCLES
            --cl-circle-0:#0090e6;
            --cl-circle-1: #624aba;
            --cl-circle-2: #265545;
            --cl-circle-3: #000;
            --cl-circle-4: #55c57a;
            --cl-circle-5: #dd4f4f;
            --cl-circle-hover: #002a38;
            --cl-circle-transit: #747474;
        
            // PROJECTS GALLERY
            --cl-projects-gal-bg-col: rgb(243, 243, 243);
            --cl-projects-gal-pulse: rgba(78, 204, 162, 0.357);
            --cl-projects-gal-pulse-shadow: rgba(204, 169, 44, 0);
        
            // RESUME PAGE
            --cl-font-resume: #55c57a;
            --cl-progress-resume: #ddd;
        
            // CONTACTS PAGE
            --cl-contacts-bg: #1E1E1E;
        
            // BLOG POST VIEW
            --cl-bpost-view-shadow: rgba(0, 0, 0, 0.432);
            --cl-bpost-liked: #eb4646;
            --cl-bpost-like-hover: #fa2020;
            --cl-blogview-desc: #fff;

            // FEEDBACK VIEW
            --cl-feedback-view-shadow: rgba(0, 0, 0, 0.459);
        
            // FEEDBACK COLLECTION
            --cl-button-disabled-bg: rgb(231, 231, 231);
            --cl-button-disabled-text: rgb(112, 112, 112);

            // SELECT INPUT
            --cl-select: #1E1E1E;
        
            // FOOTER LINKS
            --cl-facebook:#DBDBDB;
            --cl-github: #DBDBDB;
            --cl-linkedin: #DBDBDB;
        
            // BREAKPOINTS
            --bp-tablet: 48em;
            --bp-mobile: 26.563em;
            // 768px / 16px = 48em
            // $tablet: 48em;
            // 425px / 16px = 26.5625em
            // $mobile: 26.563em;
        }
    
        // Z-INDEX
        // modal 150
        // sidenav 100
        // header 20
        // language panel 20
        // get back 20
        // refresher 20
        // projects content box 10
        // projects image container 5
        // forminput z-index 2
        // forminput label z-index 1


        // BASE ************************************************

        *,
        *::before,
        *::after {
            box-sizing: inherit;
            margin: 0;
            padding: 0;
        }

        select,
        textarea,
        input[type="text"],
        input[type="password"],
        input[type="datetime"],
        input[type="datetime-local"],
        input[type="date"],
        input[type="month"],
        input[type="time"],
        input[type="week"],
        input[type="number"],
        input[type="email"],
        input[type="url"],
        input[type="search"],
        input[type="tel"],
        input[type="color"] {
            font-size: 16px !important;
        }

        html {
            box-sizing: border-box;
            font-size: 62.5%;
            background-color: var(--cl-bg-dark);

            @media only screen and (max-width: 48em) {
                font-size: 56.25%;
            }

            @media only screen and (max-width: 26.563em) {
                font-size: 50%;
            }
        }
        // 100% / 16px * 10px = 1rem = 62.5% 10px
        // 100% / 16px * 9px = 1rem = 56.25% 9px
        // 100% / 16px * 8px = 1rem = 50% 8px

        // BODY ************************************************

        body {
            font-family: var(--font-text), -apple-system, BlinkMacSystemFont, "Segoe UI",
            "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            font-size: 1.6rem;
            font-weight: 400;
            line-height: 1.6;
            color: var(--cl-font);
        
            &::-webkit-scrollbar {
            width: 0.8rem;
            background-color: var(--cl-scroll-bg);
            // border-radius: 5rem;
            }
        
            &::-webkit-scrollbar-thumb {
            background-image: linear-gradient(
                to bottom,
                var(--cl-scrollThumb-bg1),
                var(--cl-scrollThumb-bg2)
            );
            border-radius: 5rem;
            }
        
            &::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px var(--cl-scroll-shadow);
            box-shadow: inset 0 0 6px var(--cl-scroll-shadow);
            }
        }

        // SELECTION ************************************************

        ::selection {
        // background-color: var(--cl-primary);
        background-color: var(--cl-font);
        color: var(--cl-white);
        }

        code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
            monospace;
        }

        @mixin clearFix {
        ::after {
            display: table;
            content: "";
            clear: both;
        }
    }`;
  } else {
    return `
        :root {
            // TYPOGRAPHY
            --font-title: "Josefin Sans", sans-serif;
            --font-text: "Lato", sans-serif;
            --font-cyrillic: "Roboto", sans-serif;
        
            // COLOR PALET
            --cl-font: #002a38;
            --cl-primary: #1a73e8;
            --cl-black: #000;
            --cl-white: #fff;
            --cl-grey: #eeeeee;
            --cl-dark-grey: #a0a0a0;
            --cl-darkest-grey: #747474;
        
            --cl-shadow: rgba(0, 0, 0, 0.623);
            --cl-header: rgba(255, 255, 255, 0.925);
        
            // ILLUSTRATIONS
            --cl-illustration: #002a38;

            // SIDE NAV
            --cl-sidenav: hsla(0, 0%, 100%, 0.568);
            --cl-sidenav-shadow: rgba(0, 0, 0, 0.603);
        
            // LANGUAGE PANNEL
            --cl-langpan-shadow: rgba(0, 0, 0, 0.623);
        
            // MAIN HOVERS
            --cl-mainhover: #1a73e8;
        
            // SCROLL BAR
            --cl-scrollbar-bg: rgba(40, 52, 147, 0.047);
            --cl-scroll-shadow: rgba(0, 0, 0, 0.157);
            --cl-scrollThumb-bg1: #fff;
            --cl-scrollThumb-bg2: #1a73e8;
        
            // TILE COLORS
            --cl-tiles-1: #00a8a9;
            --cl-tiles-2: #002a38;
            --cl-tiles-3: #fed595;
            --cl-tiles-4: #fe3f2d;
            --cl-tiles-5: #ffaa2d;
            --cl-tiles-6: #c0c1c3;
            --cl-tiles-7: #d6d7d9;
            --cl-square-shadow: rgba(0, 0, 0, 0.525);
        
            // HERO GRADIENT
            --cl-gradient-start: rgba(255, 255, 255, 0.984);;
            --cl-gradient-end:  rgba(255, 255, 255, 0.173);

            // HOME PAGE CARDS
            --cl-card-shadow: rgba(0, 0, 0, 0.616);
            --cl-card-shadow-hover: rgba(254, 64, 47, 0.631);
        
            // PORTFOLIO PROJECTS CIRCLES
            --cl-circle-0:#0090e6;
            --cl-circle-1: #624aba;
            --cl-circle-2: #265545;
            --cl-circle-3: #000;
            --cl-circle-4: #55c57a;
            --cl-circle-5: #dd4f4f;
            --cl-circle-hover: #002a38;
            --cl-circle-transit: #747474;
        

            // PROJECTS GALLERY
            --cl-projects-gal-bg-col: rgb(243, 243, 243);
            --cl-projects-gal-pulse: rgba(26, 115, 232, 0.4);
            --cl-projects-gal-pulse-shadow: rgba(204, 169, 44, 0);
        
            // RESUME PAGE
            --cl-font-resume: #1a73e8;
            --cl-progress-resume: #ddd;
        
            // CONTACTS PAGE
            --cl-contacts-bg: #ececec;
        
            // BLOG POST VIEW
            --cl-bpost-view-shadow: rgba(0, 0, 0, 0.432);
            --cl-bpost-liked: #eb4646;
            --cl-bpost-like-hover: #fa2020;
            --cl-blogview-desc: #fff;
        
            // FEEDBACK VIEW
            --cl-feedback-view-shadow: rgba(0, 0, 0, 0.459);
        
            // FEEDBACK COLLECTION
            --cl-button-disabled-bg: rgb(231, 231, 231);
            --cl-button-disabled-text: rgb(112, 112, 112);
        
            // SELECT INPUT
            --cl-select:  #002a38;

            // FOOTER LINKS
            --cl-facebook: #fe3f2d;
            --cl-github: #00a8a9;
            --cl-linkedin: #ffaa2d;
        
            // BREAKPOINTS
            --bp-tablet: 48em;
            --bp-mobile: 26.563em;
            // 768px / 16px = 48em
            // $tablet: 48em;
            // 425px / 16px = 26.5625em
            // $mobile: 26.563em;
        }
    
        // Z-INDEX
        // modal 150
        // sidenav 100
        // header 20
        // language panel 20
        // get back 20
        // refresher 20
        // projects content box 10
        // projects image container 5
        // forminput z-index 2
        // forminput label z-index 1


        // BASE ************************************************

        *,
        *::before,
        *::after {
            box-sizing: inherit;
            margin: 0;
            padding: 0;
        }

        select,
        textarea,
        input[type="text"],
        input[type="password"],
        input[type="datetime"],
        input[type="datetime-local"],
        input[type="date"],
        input[type="month"],
        input[type="time"],
        input[type="week"],
        input[type="number"],
        input[type="email"],
        input[type="url"],
        input[type="search"],
        input[type="tel"],
        input[type="color"] {
            font-size: 16px !important;
        }

        html {
            box-sizing: border-box;
            font-size: 62.5%;

            @media only screen and (max-width: 48em) {
                font-size: 56.25%;
            }

            @media only screen and (max-width: 26.563em) {
                font-size: 50%;
            }
        }
        // 100% / 16px * 10px = 1rem = 62.5% 10px
        // 100% / 16px * 9px = 1rem = 56.25% 9px
        // 100% / 16px * 8px = 1rem = 50% 8px

        // BODY ************************************************

        body {
            font-family: var(--font-text), -apple-system, BlinkMacSystemFont, "Segoe UI",
            "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            font-size: 1.6rem;
            font-weight: 400;
            line-height: 1.6;
            color: var(--cl-font);
        
            &::-webkit-scrollbar {
            width: 0.8rem;
            background-color: var(--cl-scroll-bg);
            // border-radius: 5rem;
            }
        
            &::-webkit-scrollbar-thumb {
            background-image: linear-gradient(
                to bottom,
                var(--cl-scrollThumb-bg1),
                var(--cl-scrollThumb-bg2)
            );
            border-radius: 5rem;
            }
        
            &::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px var(--cl-scroll-shadow);
            box-shadow: inset 0 0 6px var(--cl-scroll-shadow);
            }
        }

        // SELECTION ************************************************

        ::selection {
        // background-color: var(--cl-primary);
        background-color: var(--cl-font);
        color: var(--cl-white);
        }

        code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
            monospace;
        }

        @mixin clearFix {
        ::after {
            display: table;
            content: "";
            clear: both;
        }
    }`;
  }
};

export const GlobalStyle = createGlobalStyle`
    ${getTheme}
`;
