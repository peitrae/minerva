import { Stack } from '@chakra-ui/react';

import { ChatBox, ChatStatus, Footer, Header } from '../modules/chat';
import ChatItem from '../modules/chat/ChatItem/ChatItem';
import useChatPage from '../modules/chat/ChatPage/ChatPage.hooks';
import LeaveDialog from '../modules/chat/LeaveDialog/LeaveDialog';

const ChatPage = () => {
	const {
		status,
		interlocutor,
		showLeaveDialog,
		toggleShowLeaveDialog,
		onLeaveChat,
		onLogout,
	} = useChatPage();

	const list = [
		{
			id: 1,
			userId: '',
			message: 'Hi!',
			created_at: '10:40',
		},
		{
			id: 2,
			userId: '',
			message: 'Hello!',
			created_at: '10:45',
		},
	];

	return (
		<>
			<Stack h="full">
				<Header
					interlocutor={interlocutor}
					onClickLeave={toggleShowLeaveDialog}
				/>
				<Stack h="500px" flexGrow="1" paddingX="1rem" justifyContent="flex-end">
					<ChatBox list={list} />
					<ChatStatus>{status}</ChatStatus>
				</Stack>

				<Footer />
			</Stack>
			<LeaveDialog
				isOpen={showLeaveDialog}
				onClickCancel={toggleShowLeaveDialog}
				onClickLeave={onLeaveChat}
				onClickLogout={onLogout}
			/>
		</>
	);
};

export default ChatPage;
