import { Component } from "react";
import Modal from "components/Modal/Modal";
import css from './ImageGalleryItem.module.css'
import PropTypes from 'prop-types';

class GalleryItem extends Component {
    state = {
        showModal: false,
    };

    toggleModal = () => {
        this.setState(({ showModal }) => ({ showModal: !showModal }));
    };

        render() {
            const { showModal } = this.state;
            const{ webformatURL, largeImageURL, tags} = this.props;
            return (
                <li
                    className={css.ImageGalleryItem}
                    onClick={this.toggleModal}>
                    <img className={css.ImageGalleryItemImage}
                        src={webformatURL}
                        alt={tags}
                    />
                    {showModal && <Modal onClose={this.toggleModal} largeImageURL={largeImageURL} alt={tags} />}
                </li>
            );
        };
    }
 
GalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string,
 
};

export default GalleryItem;

