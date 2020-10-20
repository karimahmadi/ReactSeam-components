const theme = {
  palette: {
    grey: {
      50: '#fff',
      200: '#ebebeb',
      300: '#e0e0e0' /* disabled Input background color */,
      400: '#ebebeb' /* document body default background color */,
      900: '#000000',
    },
    background: {
      paper: '#ebebeb',
      default: '#d3d3d3',
    },
  },
  typography: {
    fontWeightRegular: 400,
    fontFamily: 'B Yekan',
    fontSize: 14, // default 14px
    htmlFontSize: 16, // default html font size 16px
    button: {
      fontFamily: 'B Titr',
      padding: '4px 12px',
      border: '1px solid #ccc',
      hoverBorder: '1px solid #a2a2a2',
      borderRadius: 1,
    },
  },
  shape: {
    borderRadius: 0,
  },
  direction: 'rtl',
};
export default theme;
