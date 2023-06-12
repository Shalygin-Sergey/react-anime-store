import classNames from 'classnames';
import './style.css';

const Button = ({
  onClick,
  type,
  children,
  size = 's'
}) => {
  const btnClass = classNames({
    'btn': true,
    'btn--secondary': type === 'secondary',
    'btn--primary': type === 'primary',
    'btn--small': type === 's',
    'btn--medium': type === 'm'
  })
  return (
    <div className={btnClass} onClick={onClick}>
      {children}
    </div>
  );
}
 
export default Button;