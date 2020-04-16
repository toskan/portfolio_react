import React from 'react';

const ModalContent = (props) => {
	const { slidesState, backSlide, forwardSlide } = props;
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
