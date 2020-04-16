import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import FocusTrap from 'focus-trap-react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const modalMount = document.getElementById('modalMount');

const ModalComponent = (props) => {
	const { isModalOpen, toggleModalOpen, setArrIdx } = props;
	const closeButtonFunction = () => {
		toggleModalOpen();
		setArrIdx(0);
	};
	return ReactDOM.createPortal(
		<TransitionGroup component={null}>
			{isModalOpen && (
				<CSSTransition
					classNames="modal"
					in
					appear={true}
					timeout={500}
					key={`${Date.now()}`}
				>
					<FocusTrap>
						<div
							id="modal-slides"
							className="modal"
							onKeyDown={(e) => {
								if (e.key === 'Escape') {
									toggleModalOpen();
								}
							}}
						>
							<span
								className="button-display-topright"
								role="button"
								aria-label="Close Button"
								tabIndex={0}
								onClick={closeButtonFunction}
								onKeyPress={(e) => {
									if (e.key === 'Enter') {
										toggleModalOpen();
									}
								}}
							>
								&times;
							</span>
							{isModalOpen && (
								<div className="modal-content">
									{props.children}
								</div>
							)}
						</div>
					</FocusTrap>
				</CSSTransition>
			)}
		</TransitionGroup>,
		modalMount
	);
};

ModalComponent.propTypes = {
	isModalOpen: PropTypes.bool.isRequired,
	toggleModalOpen: PropTypes.func.isRequired,
};

export default ModalComponent;
