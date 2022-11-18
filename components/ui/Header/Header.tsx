import { Circle, HStack, Text } from '@chakra-ui/react';

/**
 * Main header component for landing page.
 */
export const MainHeader = ({ ...rest }) => (
	<HStack
		as="header"
		paddingX="1rem"
		paddingY="1.125rem"
		bgColor="white"
		borderBottomRadius="2rem"
		columnGap="0.5rem"
		data-testid="header"
		{...rest}
	>
		<Circle size="32px" bg="gray.700" data-testid="logo" />
		<Text fontSize="lg" fontWeight="semibold" data-testid="title">
			Minerva
		</Text>
	</HStack>
);
