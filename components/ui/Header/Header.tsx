import { Circle, HStack, Text } from '@chakra-ui/react';

export const MainHeader = () => (
	<HStack
		paddingX="1rem"
		paddingY="1.125rem"
		bgColor="white"
		borderBottomRadius="2rem"
		columnGap="0.5rem"
	>
		<Circle size="32px" bg="gray.700" />
		<Text fontSize="lg" fontWeight="semibold">
			Minerva
		</Text>
	</HStack>
);
