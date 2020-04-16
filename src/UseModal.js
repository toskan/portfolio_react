import React from 'react';
import ModalComponent from './ModalComponent';

const UseModal = () => {
	const [isModalOpen, setIsModalOpen] = React.useState(false);

	return [ModalComponent, isModalOpen, setIsModalOpen];
};

export default UseModal;
