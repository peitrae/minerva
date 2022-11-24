import { ChangeEvent, FormEvent, useState } from 'react';

import { ChatActionTypes } from './Footer.types';

const useFooter = () => {
	const [actionType, setActionType] = useState<ChatActionTypes>('stop');
	const [messageInput, setMessageInput] = useState('');

	const onClickStop = () => {
		setActionType('stop-confirmation');
	};

	const onClickStopConfirmed = () => {
		setActionType('next');
	};

	const onClickNext = () => {
		setActionType('stop');
	};

	const onChangeMessageInput = (e: ChangeEvent<HTMLInputElement>) => {
		setMessageInput(e.target.value);
	};

	const onSubmitMessage = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		console.log('Message: ', messageInput);

		setMessageInput('');
	};

	return {
		actionType,
		messageInput,
		onClickStop,
		onClickStopConfirmed,
		onClickNext,
		onChangeMessageInput,
		onSubmitMessage,
	};
};

export default useFooter;
