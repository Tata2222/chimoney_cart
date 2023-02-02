import { useState } from 'react';
import { useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { Card } from '../../components';
import { GiftCardIcon } from '../../assets/svg/images';


const CatalogPage = () => {
  const { products } = useSelector(state => state.products);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;
  const endOffset = itemOffset + itemsPerPage;

  const currentProducts = products.filter(i => Boolean(i.fixedSenderDenominations)).slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="catalog catalog_page">
      <div className="catalog_title">
        <div className="catalog_title__divider"/>
        <GiftCardIcon />
        <p>Gift Cards</p>
        <div className="catalog_title__divider"/>
      </div>
      <div className="catalog_products">
        {currentProducts.map((item) => ( 
          <div key={item.productId} className="card">   
            <Card good={item} />
          </div>
        ))} 
      </div>
      <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel=''
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=''
        renderOnZeroPageCount={null}
      />
    </div>
  )};

  export default CatalogPage;

