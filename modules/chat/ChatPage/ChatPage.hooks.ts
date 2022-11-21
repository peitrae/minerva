import { useRouter } from 'next/router';
import { useState } from 'react';

const useChatPage = () => {
	const [showLeaveDialog, setShowLeaveDialog] = useState(false);
	const [status, setStatus] = useState(
		'Looking for someone with good music taste like you...'
	);

	const router = useRouter();

	const interlocutor = {
		name: 'Jimmy',
		image: '/temp-avatar.png',
	};

	const toggleShowLeaveDialog = () => {
		setShowLeaveDialog(!showLeaveDialog);
	};

	const onLeaveChat = () => {
		console.log('onLeaveChat!');

		setShowLeaveDialog(false);
		router.replace('/');
	};

	const onLogout = () => {
		setShowLeaveDialog(false);
		router.replace('/');
	};

	return {
    status,
		interlocutor,
		showLeaveDialog,
		toggleShowLeaveDialog,
		onLeaveChat,
		onLogout,
	};
};

export default useChatPage;
