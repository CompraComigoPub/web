import React from 'react';
import './index.scss';

function Placeholder(props) {
  const {
    type = 'text',
    size = 1,
    className = '',
    animated = false,
    multiple,
    primary = false,
    ...other
  } = props;

  switch (type) {
  case 'image':
    return (
      <div
        className={'atom-placeholder ' + className}
        data-type="image"
        data-size={size}
        data-primary={primary ? 1 : null}
        data-animated={animated ? '1' : '0'}
        {...other}
      ></div>
    );
  case 'text':
  default: {
    const textPH = (p) => (
      <div
        className="atom-placeholder"
        data-type="text"
        data-size={p.size}
        data-primary={primary ? 1 : null}
        data-animated={p.animated ? '1' : '0'}
        key={p.key}
        {...other}
      />
    );

    if (multiple) {
      const list = [];
      for (let i = 0; i < multiple; i++) {
        list.push(
          textPH({
            size: Math.ceil(Math.random() * 4),
            animated,
            key: i,
          })
        );
      }
      return list;
    }
    return textPH({ size });
  }
  }
}

export default Placeholder;
