import { Box, Text, Stack } from '@chakra-ui/react';

import { ChatItemProps } from './ChatItem.types';

const ChatItem = ({ sent, message, created_at, ...rest }: ChatItemProps) => (
	<Stack spacing="0.25rem" align={sent ? '' : 'flex-end'} {...rest}>
		<Box
			paddingX="1rem"
			paddingY="0.75rem"
			width="fit-content"
			borderRadius="1rem"
			borderBottomRightRadius={sent ? '1rem' : '0'}
			borderTopLeftRadius={sent ? '0' : '1rem'}
			backgroundColor={sent ? 'white' : 'primary.500'}
			color={sent ? 'black' : 'white'}
		>
			{message}
		</Box>
		<Text
			as="span"
			marginTop="0"
			fontSize="xs"
			color="gray.800"
			paddingLeft={sent ? '1rem' : '0'}
			paddingRight={sent ? '0' : '1rem'}
		>
			{created_at}
		</Text>
	</Stack>
);

export default ChatItem;
