import React from 'react';
import { Path } from 'react-native-svg';
import Icon, { IconPropTypes } from '../../atoms/Icon';

function PaymentCapture(props) {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <Path d="M5 2a3 3 0 00-3 3v3a1 1 0 002 0V5a1 1 0 011-1h3a1 1 0 000-2H5zM16 2a1 1 0 100 2h3a1 1 0 011 1v3a1 1 0 102 0V5a3 3 0 00-3-3h-3zM4 16a1 1 0 10-2 0v3a3 3 0 003 3h3a1 1 0 100-2H5a1 1 0 01-1-1v-3zM22 16a1 1 0 10-2 0v3a1 1 0 01-1 1h-3a1 1 0 100 2h3a3 3 0 003-3v-3zM7.5 7a1 1 0 011-1h7a1 1 0 110 2h-.44c.165.31.288.646.361 1h.079a1 1 0 110 2h-.079a3.772 3.772 0 01-3.692 3h-.487l3.998 3.332a1 1 0 11-1.28 1.536l-6-5a1.001 1.001 0 01-.116-.113A1 1 0 018.5 12h3.23a1.77 1.77 0 001.594-1H9.5a1 1 0 110-2h3.824a1.77 1.77 0 00-1.595-1H8.5a1 1 0 01-1-1z" />
    </Icon>
  );
}

PaymentCapture.propTypes = IconPropTypes;

PaymentCapture.defaultProps = {
  size: 'medium',
  fill: 'sapphire.800',
};

export default PaymentCapture;
