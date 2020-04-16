import React, { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import PropTypes from 'prop-types';

const ImageHover = (props) => {
	const { setIsModalOpen, work, i, getIndex, isModalOpen } = props;
	const [magnifyShow, setMagnifyShow] = useState(false);
	if (isModalOpen) {
		document.getElementById('root').classList.toggle('opaque');
		document.getElementById('root').style.opacity = 0.1;
	}
	if (!isModalOpen) {
		document.getElementById('root').style.opacity = 1;
	}
	return (
		<>
			<img
				src={work}
				data={i}
				alt="project-screenshot"
				className="grid-img"
				onMouseOver={() => setMagnifyShow(true)}
				onMouseLeave={() => setMagnifyShow(false)}
				onClick={() => {
					setTimeout(function () {
						getIndex(i);
					}, 1);
					setTimeout(function () {
						setIsModalOpen((prev) => !prev);
					}, 2);
				}}
			/>
			{magnifyShow && <IoMdSearch />}
		</>
	);
};

ImageHover.propTypes = {
	isModalOpen: PropTypes.bool.isRequired,
	setIsModalOpen: PropTypes.func.isRequired,
	getIndex: PropTypes.func.isRequired,
	i: PropTypes.number.isRequired,
	work: PropTypes.string.isRequired,
};

export default ImageHover;
