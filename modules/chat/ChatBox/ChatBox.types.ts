import { StackProps } from '@chakra-ui/react';

import { ChatItem } from '../ChatItem/ChatItem.types';

export interface ChatBoxProps extends StackProps {
	list: ChatItem[];
}
