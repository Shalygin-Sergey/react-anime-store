import './style.css';
import {BiCartAlt} from 'react-icons/bi'

const CartBlock = () => {
  return (
    <div className='cart-block'>
      <BiCartAlt size={25} className='cart-block__icon' />
      <span className='cart-block__total-price'> 2313 руб.</span>
    </div>
  );
}
 
export default CartBlock;