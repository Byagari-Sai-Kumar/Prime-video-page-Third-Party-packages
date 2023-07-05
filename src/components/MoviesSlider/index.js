import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesList} = props

  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 2,
  }

  return (
    <>
      <Slider {...settings}>
        {moviesList.map(eachItem => (
          <MovieItem movie={eachItem} key={eachItem.id} />
        ))}
      </Slider>
    </>
  )
}

export default MoviesSlider
