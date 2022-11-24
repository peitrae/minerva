import { StackProps } from '@chakra-ui/react';

export type ChatActionTypes = 'stop' | 'stop-confirmation' | 'next';

export interface FooterProps extends StackProps {
	actionType: ChatActionTypes;
	messageValue: string;
	onClickStop: () => void;
	onClickStopConfirmed: () => void;
	onClickNext: () => void;
	onSubmitMessage: () => void;
}
