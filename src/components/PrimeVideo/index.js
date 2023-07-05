import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMovies = moviesList.filter(
    eachItem => eachItem.categoryId === 'ACTION',
  )

  const comedyMovies = moviesList.filter(
    eachItem => eachItem.categoryId === 'COMEDY',
  )

  return (
    <div className="primeBgContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="primePoster"
      />
      <div className="movieContainer">
        <h1 className="MoviesHeading">Action Movies</h1>
        <MoviesSlider moviesList={actionMovies} />
        <h1 className="MoviesHeading">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMovies} />
      </div>
    </div>
  )
}

export default PrimeVideo
