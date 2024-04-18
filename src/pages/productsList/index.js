import './productlist.scss';
import ProdService from "../../services/products";

function ProductsList() {
  return (
    <div className="">
      <div className='wrapper'>
        <h2>Products</h2>
        <ProdService />
      </div>
    </div>
  );
}

export default ProductsList;

