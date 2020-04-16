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
	let [arrIdx, setArrIdx] = useState(0);
	let [workIndex, setWorkIndex] = useState(0);
	const toggleModalOpen = () => setIsModalOpen((prev) => !prev);
	const getIndex = (index) => {
		setWorkIndex(index);
		setSlide(images[index][arrIdx]);
		console.log(arrIdx);
	};
	const forwardSlide = () => {
		setArrIdx(arrIdx++);
		setSlide(images[workIndex][arrIdx]);
		console.log(arrIdx);
	};
	const backSlide = () => {
		setArrIdx(arrIdx--);
		setSlide(images[workIndex][arrIdx]);
		console.log(arrIdx);
	};
	// const arrowShowHide = () => {
	// 	if (arrIdx === 0) {
	// 		setTimeout(function () {
	// 			document.getElementById('display-left').style.visibility =
	// 				'hidden';
	// 		}, 5);
	// 	}
	// 	if (arrIdx === images[workIndex].length - 2) {
	// 		setTimeout(function () {
	// 			document.getElementById('display-right').style.visibility =
	// 				'hidden';
	// 		}, 5);
	// 	}
	// };
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
					backSlide={backSlide}
					forwardSlide={forwardSlide}
					setArrIdx={setArrIdx}
				/>
			</ModalComponent>
		</div>
	);
};

export default Work;
