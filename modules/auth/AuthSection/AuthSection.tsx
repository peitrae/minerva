import { Button, Stack, Text } from '@chakra-ui/react';

const AuthSection = () => (
	<Stack
		as="section"
		rowGap="1rem"
		paddingX="1.5rem"
		paddingY="2rem"
		width="full"
		maxW="md"
		borderRadius="3xl"
		bgColor="white"
	>
		<Stack>
			<Text align="center" fontSize="xl" fontWeight="semibold">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</Text>
			<Text align="center" fontSize="sm" color="gray.700">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</Text>
		</Stack>
		<Button size="lg" borderRadius="full" colorScheme="primary">
			Start with Spotify Premium
		</Button>
	</Stack>
);
export default AuthSection;
