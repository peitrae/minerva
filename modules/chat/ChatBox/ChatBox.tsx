import { Stack } from '@chakra-ui/react';
import { FC } from 'react';

import { ChatItem } from '..';
import { ChatBoxProps } from './ChatBox.types';

const ChatBox: FC<ChatBoxProps> = ({ list, ...rest }) => (
	<Stack h='full' overflowY="auto" {...rest}>
		{list.map((chat) => (
			<ChatItem
				key={chat.id}
				message={chat.message}
				created_at={chat.created_at}
				sent
			/>
		))}
		{list.map((chat) => (
			<ChatItem
				key={chat.id}
				message={chat.message}
				created_at={chat.created_at}
				sent
			/>
		))}
		{list.map((chat) => (
			<ChatItem
				key={chat.id}
				message={chat.message}
				created_at={chat.created_at}
				sent
			/>
		))}
		{list.map((chat) => (
			<ChatItem
				key={chat.id}
				message={chat.message}
				created_at={chat.created_at}
				sent
			/>
		))}
		{list.map((chat) => (
			<ChatItem
				key={chat.id}
				message={chat.message}
				created_at={chat.created_at}
				sent
			/>
		))}
	</Stack>
);

export default ChatBox;
