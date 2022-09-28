import { createElement } from 'react';

const Icon = ({ type = '', color = 'text-secondary', className = '', ...props }) => {
  const icons = {};

  if (!type) return null;

  return createElement(icons[type], { className: `${color} ${className}`, ...props });
};

export default Icon;
