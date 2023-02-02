import { useSelector } from 'react-redux';
import { Player } from '@lottiefiles/react-lottie-player';
import { Card } from "../../components"


const FavPage = () => {
  const { products } = useSelector(state => state.products);
  const { favourites } = useSelector(state => state.favourites);

  const favouriteProducts = favourites.map(productId => {
    const favProduct = products.find(product => product.productId === productId);
    return favProduct;
  });

  return ( 
    <div className="favourites_page">
      <p className="favourites_page__title">Favourites</p>
      <p className="favourites_page__items_count">
        {favouriteProducts.length} items
      </p>
      {!favouriteProducts.length ? (
        <>
          <div className="overflow" />
          <div className="player_container">
            <Player
              src="https://assets2.lottiefiles.com/private_files/lf30_6jzgknvg.json"
              className="player"
              loop
              autoplay
            />
          </div>
        </>
        ) : (
        <div className="favourites_page__container">
          {favouriteProducts.map((good) => (
            <div className="card" key={good.productId}>
              <Card good={good} key={good.productId} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
};

export default FavPage;