import { StackProps } from '@chakra-ui/react';

export interface ChatItem {
	id: number;
	userId: string;
	message: string;
	created_at: string;
}

export interface ChatItemProps
	extends StackProps,
		Pick<ChatItem, 'message' | 'created_at'> {
	sent?: boolean;
	message: string;
	created_at: string;
}
