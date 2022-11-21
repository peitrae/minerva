import { Box, BoxProps, Text } from '@chakra-ui/react';
import { FC } from 'react';

const ChatStatus: FC<BoxProps> = ({ children, ...rest }) => (
	<Box
		borderRadius="1rem"
		backgroundColor="white"
		paddingX="1rem"
		paddingY="0.75rem"
		fontWeight="semibold"
		{...rest}
	>
		{children}
	</Box>
);

export default ChatStatus;
