import React from 'react';

const ModalContent = (props) => {
	const {
		slidesState,
		setArrIdx,
		arrIdx,
		workIndex,
		setSlide,
		images,
	} = props;
	const forwardSlide = () => {
		let idxPlus = arrIdx + 1;
		setArrIdx(idxPlus);
		setSlide(images[workIndex][idxPlus]);
		if (idxPlus === images[workIndex].length - 2) {
			setTimeout(function () {
				document.getElementById('display-right').style.visibility =
					'hidden';
			}, 5);
		}
	};
	const backSlide = () => {
		let idxMinus = arrIdx - 1;
		setArrIdx(idxMinus);
		setSlide(images[workIndex][idxMinus]);
		if (idxMinus === 0) {
			setTimeout(function () {
				document.getElementById('display-left').style.visibility =
					'hidden';
			}, 1);
		}
	};
	return (
		<div className="modal-container">
			<div className="slides-content">
				<div className="slides-div">
					<img src={slidesState} alt="" className="modal-images" />
					<ul>
						<li>
							<a href="http://toskan.github.io">link</a>
						</li>
					</ul>
				</div>
				<button id="display-left" onClick={backSlide}>
					&#10094;
				</button>
				<button id="display-right" onClick={forwardSlide}>
					&#10095;
				</button>
			</div>
		</div>
	);
};

export default ModalContent;
