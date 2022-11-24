import { StackProps } from '@chakra-ui/react';
import { DefaultUser } from 'next-auth';

interface Interlocutor extends Pick<DefaultUser, 'name'> {
	image?: string;
}

export interface HeaderProps extends StackProps {
	interlocutor: Interlocutor;
  onClickLeave: () => void
}
