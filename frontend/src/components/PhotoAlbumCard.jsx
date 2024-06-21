import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function PhotoAlbumCard({ imgSrc, title, photoNum, link }) {
    return (
        <Link to={link} className="max-w-sm hover:cursor-pointer">
            <div className="flex dark:bg-gray-800 flex-col">
                <img
                    src={imgSrc}
                    className="hover:opacity-50 duration-500"
                    alt={title}
                />
                <div className="flex h-full flex-col justify-center gap-4 pt-2">
                    <div>
                        <p className="text-sm text-left font-bold tracking-tight text-gray-600 dark:text-white">
                            {title}
                        </p>
                        <p className="text-sm text-left font-normal text-gray-500 dark:text-gray-400">
                            Series of {photoNum}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

PhotoAlbumCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    photoNum: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
};

export default PhotoAlbumCard;
