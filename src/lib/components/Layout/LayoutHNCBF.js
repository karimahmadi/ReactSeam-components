import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Body from './Body';
import Nav from './Nav';
import Footer from './Footer';
import Container from './Container';
import HeaderContainer from './HeaderContainer';

const LayoutHNCBF = ({ children, header, nav, footer }) => {
  const headerTemplates = <Header>{header}</Header>;
  const navTemplates = <Nav horizonNav>{nav}</Nav>;
  const bodyTemplates = <Body>{children}</Body>;
  const footerTemplates = <Footer>{footer}</Footer>;

  return (
    <React.Fragment>
      <HeaderContainer>
        {headerTemplates}
        {navTemplates}
      </HeaderContainer>
      <Container>
        {bodyTemplates}
        {footerTemplates}
      </Container>
    </React.Fragment>
  );
};

LayoutHNCBF.propTypes = {
  header: PropTypes.node,
  nav: PropTypes.node,
  footer: PropTypes.node,
  children: PropTypes.node.isRequired || PropTypes.string.isRequired,
};

export { LayoutHNCBF };
