import { Spinner, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';

import { Button } from '../../../components/ui';
import { useAuth } from '../../../hooks';

const AuthSection = () => {
	const { session, status, handleSignin } = useAuth('spotify');

	return (
		<Stack
			as="section"
			rowGap="1rem"
			paddingX="1.5rem"
			paddingY="2rem"
			width="full"
			maxW="md"
			borderRadius="3xl"
			bgColor="white"
			align="center"
		>
			<Stack>
				<Text align="center" fontSize="xl" fontWeight="semibold">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</Text>
				<Text align="center" fontSize="sm" color="gray.700">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</Text>
			</Stack>
			{session?.accessToken ? (
				<Link href="/chat" passHref>
					<Button as="a">Start a chat</Button>
				</Link>
			) : status === 'loading' ? (
				<Button width="full" disabled>
					<Spinner />
				</Button>
			) : (
				<Button onClick={handleSignin}>Start with Spotify Premium</Button>
			)}
		</Stack>
	);
};
export default AuthSection;
