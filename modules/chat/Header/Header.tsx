import { FC } from 'react';
import { Circle, HStack, IconButton, Image, Text } from '@chakra-ui/react';
import { IoChevronBack } from 'react-icons/io5';

import { HeaderProps } from './Header.types';

/**
 * Main header component for landing page.
 */
const Header: FC<HeaderProps> = ({ interlocutor, onClickLeave, ...rest }) => (
	<HStack
		as="header"
		paddingX="1rem"
		paddingY="1.25rem"
		bgColor="white"
		borderBottomRadius="2rem"
		columnGap="0.5rem"
		data-testid="header"
		{...rest}
	>
		<IconButton
			aria-label="Leave"
			variant="ghost"
			colorScheme="primary"
			icon={<IoChevronBack />}
			onClick={onClickLeave}
		/>
		<HStack columnGap="0.25rem">
			<Circle>
				<Image
					src={interlocutor.image}
					alt="Avatar"
					borderRadius="full"
					boxSize="2rem"
					fallbackSrc="/avatar.svg"
				/>
			</Circle>
			<Text fontWeight="semibold">{interlocutor.name}</Text>
		</HStack>
	</HStack>
);

export default Header;
