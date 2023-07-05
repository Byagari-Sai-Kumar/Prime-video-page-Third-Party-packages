import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {movie} = props
  const {id, thumbnailUrl, videoUrl} = movie

  return (
    <div key={id}>
      <Popup
        modal
        trigger={
          <button type="button" className="triggerButton">
            <img
              src={thumbnailUrl}
              alt="thumbnail"
              className="thumbnailImage"
            />
          </button>
        }
        className="popupCardContainer"
      >
        {close => (
          <div className="modalContainer">
            <button
              className="closeButton"
              type="button"
              onClick={() => close()}
              data-testid="closeButton"
            >
              <IoMdClose size="20" className="closeIcon" />
            </button>
            <div className="videoContainer">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
