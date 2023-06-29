// import LoadMore from "components/Button/Button";
import GalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import css from './ImageGallery.module.css';
// import { Notify } from "notiflix";
import PropTypes from 'prop-types';

const ImageGallery = ({ images }) => {
    return (<ul className={css.ImageGallery}>
        {images.map(({ id, webformatURL, largeImageURL, tags }) =>
        (<GalleryItem
            key={id}
            webformatURL={webformatURL}
            alt={tags}
            largeImageURL={largeImageURL}
        />)
        )}
    </ul>);
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
  onClick: PropTypes.func,
};

export default ImageGallery;