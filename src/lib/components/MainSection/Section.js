import React, { Children } from 'react';
import { PropTypes } from 'prop-types';
import { Card, CardContent, CardHeader } from '@material-ui/core';

const MatCard = ({
  // classes,
  className,
  children,
  raised,
  action,
  disableTypography,
  subheader,
  subheaderTypographyProps,
  title,
  titleTypographyProps,
}) => (
  // const [expanded, setExpanded] = React.useState(false);
  <Card classes={{ root: className }} raised={raised}>
    <CardHeader
      action={action}
      disableTypography={disableTypography}
      subheader={subheader}
      subheaderTypographyProps={subheaderTypographyProps}
      title={title}
      titleTypographyProps={titleTypographyProps}
    >
      {Children.toArray(children)}
    </CardHeader>
    <CardContent>{Children.toArray(children)}</CardContent>
  </Card>
);
MatCard.propTypes = {
  children: PropTypes.node,
  // onClick: PropTypes.func,
  raised: PropTypes.bool,
  disableTypography: PropTypes.bool,
  // disableFocusRipple: PropTypes.bool,
  // disableRipple: PropTypes.bool,
  // className: PropTypes.string,
  titleTypographyProps: PropTypes.object,
  title: PropTypes.node,
  subheaderTypographyProps: PropTypes.object,
  subheader: PropTypes.node,
  action: PropTypes.node,
  // classes: PropTypes.string,
  className: PropTypes.string,
};
export default MatCard;
