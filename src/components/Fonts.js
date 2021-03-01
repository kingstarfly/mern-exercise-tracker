import { Global } from "@emotion/react";

export const Fonts = () => (
  <Global
    styles={`
    /* inter-regular - latin */
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      src: local(''),
          url('../fonts/inter-v3-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
          url('../fonts/inter-v3-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* montserrat-regular - latin */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      src: local(''),
           url('../fonts/montserrat-v15-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
           url('../fonts/montserrat-v15-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* montserrat-600 - latin */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      src: local(''),
           url('../fonts/montserrat-v15-latin-600.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
           url('../fonts/montserrat-v15-latin-600.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* montserrat-700 - latin */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      src: local(''),
           url('../fonts/montserrat-v15-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
           url('../fonts/montserrat-v15-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
      `}
  />
);
