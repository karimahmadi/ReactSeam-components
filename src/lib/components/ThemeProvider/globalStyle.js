import { createGlobalStyle } from 'styled-components';
import BYekan from './fonts/BYekan.ttf';
import BTitrBold from './fonts/BTitrBold.ttf';
import BNazanin from './fonts/BNazanin.ttf';

const GlobalStyle = createGlobalStyle`
* {
	box-sizing: border-box;
}

body {
	font-family: 'B Yekan','B Nazanin';	
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
	font-family: 'B Nazanin';
	src: url('${BNazanin}') format('truetype');
}
`;

export default GlobalStyle;
