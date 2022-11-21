import {
	Button,
	HStack,
	IconButton,
	Input,
	InputGroup,
	InputRightElement,
} from '@chakra-ui/react';
import { IoSend } from 'react-icons/io5';

import useFooter from './Footer.hook';

/**
 * Main header component for landing page.
 */
const Footer = ({ ...rest }) => {
	const {
		actionType,
		messageInput,
		onClickStop,
		onClickStopConfirmed,
		onClickNext,
		onChangeMessageInput,
		onSubmitMessage,
	} = useFooter();

	return (
		<HStack
			as="footer"
			paddingX="1rem"
			paddingY="1.25rem"
			bgColor="white"
			borderTopRadius="2rem"
			columnGap="0.25rem"
			data-testid="header"
			{...rest}
		>
			{actionType === 'stop' ? (
				<Button variant="ghost" colorScheme="gray" onClick={onClickStop}>
					Stop
				</Button>
			) : actionType === 'stop-confirmation' ? (
				<Button
					variant="ghost"
					colorScheme="warning"
					onClick={onClickStopConfirmed}
				>
					Really?
				</Button>
			) : (
				<Button colorScheme="primary" onClick={onClickNext}>
					Next
				</Button>
			)}
			<form onSubmit={onSubmitMessage} style={{ width: '100%' }}>
				<InputGroup>
					<Input
						value={messageInput}
						placeholder="Type here..."
						onChange={onChangeMessageInput}
					/>
					<InputRightElement>
						<IconButton
							type="submit"
							variant="ghost"
							size="sm"
							aria-label="Send"
							colorScheme="gray"
							icon={<IoSend />}
						/>
					</InputRightElement>
				</InputGroup>
			</form>
		</HStack>
	);
};

export default Footer;
