import React, { useState } from 'react';
import images from './images';
import ModalComponent from './ModalComponent';
import UseModal from './UseModal';
import './work.css';
import ImageGrid from './ImageGrid';
import ModalContent from './ModalContent';

const Work = () => {
	const [Modal, isModalOpen, setIsModalOpen] = UseModal();
	const firstImages = [];
	for (let i = 0; i < images.length; i++) {
		firstImages.push(images[i][0]);
	}
	const [slidesState, setSlide] = useState(null);
	const [arrIdx, setArrIdx] = useState(0);
	const [workIndex, setWorkIndex] = useState(0);
	const toggleModalOpen = () => setIsModalOpen((prev) => !prev);
	const getIndex = (index) => {
		setWorkIndex(index);
		setSlide(images[index][arrIdx]);
		setTimeout(function () {
			document.getElementById('display-left').style.visibility = 'hidden';
		}, 5);
	};
	return (
		<div className="work-div">
			<ImageGrid
				firstImages={firstImages}
				slidesState={slidesState}
				setIsModalOpen={setIsModalOpen}
				getIndex={getIndex}
				isModalOpen={isModalOpen}
			/>
			<ModalComponent
				setIsModalOpen={setIsModalOpen}
				isModalOpen={isModalOpen}
				Modal={Modal}
				toggleModalOpen={toggleModalOpen}
				setArrIdx={setArrIdx}
			>
				<ModalContent
					toggleModalOpen={toggleModalOpen}
					slidesState={slidesState}
					arrIdx={arrIdx}
					setArrIdx={setArrIdx}
					workIndex={workIndex}
					setSlide={setSlide}
					images={images}
				/>
			</ModalComponent>
		</div>
	);
};

export default Work;
