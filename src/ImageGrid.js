import React from 'react';
import ImageHover from './ImageHover';
import PropTypes from 'prop-types';

const ImageGrid = (props) => {
	const { firstImages, setIsModalOpen, getIndex, isModalOpen } = props;
	let imagesGrid = firstImages.map((work, i) => (
		<div className="grid-image-div" key={`${work}_${i}`}>
			<ImageHover
				getIndex={getIndex}
				work={work}
				i={i}
				setIsModalOpen={setIsModalOpen}
				isModalOpen={isModalOpen}
			/>
		</div>
	));
	return [imagesGrid];
};

ImageGrid.propTypes = {
	isModalOpen: PropTypes.bool.isRequired,
	setIsModalOpen: PropTypes.func.isRequired,
	getIndex: PropTypes.func.isRequired,
	firstImages: PropTypes.array.isRequired,
};

export default ImageGrid;
