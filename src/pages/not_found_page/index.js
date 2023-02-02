/* eslint-disable react/jsx-curly-brace-presence */
import { Player } from '@lottiefiles/react-lottie-player';


const NotFoundPage = () => (
  <div className="not_found__page">
    <span className="not_found__page_title">
      page not found
    </span>
    <div className="overflow" />
    <div className="player_container">
      <Player
        src="https://assets8.lottiefiles.com/packages/lf20_D0HSc9DlfZ.json"
        className="player"
        loop
        autoplay
      />
    </div>
  </div>
)

export default NotFoundPage;