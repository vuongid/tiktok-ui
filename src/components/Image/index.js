import ProTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import classNames from 'classnames';
import styles from './Image.module.scss';
import images from '~/assets/images';
const Image = forwardRef(({ src = '', className, alt, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            ref={ref}
            src={fallback || src}
            alt={alt}
            className={classNames(styles.wrapper, className)}
            {...props}
            onError={handleError}
        />
    );
});

Image.propTypes = {
    src: ProTypes.string,
    className: ProTypes.string,
    alt: ProTypes.string,
    customFallback: ProTypes.string,
};

export default Image;
