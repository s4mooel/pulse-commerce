// Shared dashboard primitives: Button, Badge, Icon helper.
const Icon = ({ name, size = 16, ...rest }) => (
  <i data-lucide={name} style={{ width: size, height: size, display: 'inline-flex' }} {...rest}></i>
);

const Button = ({ variant = 'secondary', size = 'base', icon, children, ...rest }) => (
  <button className={`btn ${variant}`} {...rest}>
    {icon && <Icon name={icon} size={14} />}
    {children}
  </button>
);

const Badge = ({ tone = 'neutral', dot = true, children }) => (
  <span className={`b ${tone}`}>
    {dot && <span className="dot"></span>}
    {children}
  </span>
);

Object.assign(window, { Icon, Button, Badge });
