import { createGlobalStyle } from 'styled-components';
import BYekan from './fonts/BYekan.ttf';
import Yekan from './fonts/Yekan.ttf';
import BTitrBold from './fonts/BTitrBold.ttf';
import BNazanin from './fonts/BNazanin.ttf';

const GlobalStyle = createGlobalStyle`
* {
	box-sizing: border-box;
}

body {
	font-family: 'Yekan','B Yekan';	
	margin: 0;
	line-height: 1.5;
}

table {
    width: 100%;
}

thead, tbody, tr, td, th { display: block; }

tr:after {
    content: ' ';
    display: block;
    visibility: hidden;
    clear: both;
}

thead th {
    height: 30px;

    /*text-align: left;*/
}

tbody {
    height: 120px;
    overflow-y: auto;
}

thead {
    /* fallback */
}


tbody td, thead th {
    width: 19.2%;
    float: left;
}

@font-face {
	font-family: 'B Titr';
	src: url('${BTitrBold}') format('truetype');
}

@font-face {
	font-family: 'B Yekan';
	src: url('${BYekan}') format('truetype');
}

@font-face {
	font-family: 'Yekan';
	src: url('${Yekan}') format('truetype');
}

@font-face {
	font-family: 'B Nazanin';
	src: url('${BNazanin}') format('truetype');
}
`;

export default GlobalStyle;
