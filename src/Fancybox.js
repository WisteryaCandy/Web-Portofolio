import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Fancybox as NativeFancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

function Fancybox(props) {
  const containerRef = useRef(null);

  useEffect(() => {
    console.log('Fancybox useEffect called'); // Add this line
    const container = containerRef.current;

    const delegate = props.delegate || '[data-fancybox]';
    const options = props.options || {};

    if (container) {
      console.log('Binding Fancybox to container'); // Add this line
      NativeFancybox.bind(container, delegate, options);
    }

    return () => {
      if (container) {
        console.log('Unbinding Fancybox from container'); // Add this line
        NativeFancybox.unbind(container);
        NativeFancybox.close();
      }
    };
  }, [props.delegate, props.options]);

  return <div ref={containerRef}>{props.children}</div>;
}

Fancybox.propTypes = {
  options: PropTypes.object,
  delegate: PropTypes.string,
  children: PropTypes.node
};

export default Fancybox;
