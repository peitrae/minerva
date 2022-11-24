import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogOverlay,
	Button,
	Flex,
} from '@chakra-ui/react';
import { FC, RefObject, useRef } from 'react';

const LeaveDialog: FC<any> = ({
	isOpen,
	onClickCancel,
	onClickLeave,
	onClickLogout,
}) => {
	const cancelRef: RefObject<any> = useRef();

	return (
		<AlertDialog
			leastDestructiveRef={cancelRef}
			isOpen={isOpen}
			onClose={onClickCancel}
		>
			<AlertDialogOverlay>
				<AlertDialogContent>
					<AlertDialogHeader fontSize="lg" fontWeight="bold" color="black">
						Leave the chat
					</AlertDialogHeader>

					<AlertDialogBody color="black">
						Are you sure want to leave the chat? You can&apos;t undo this action
						afterwards.
					</AlertDialogBody>

					<AlertDialogFooter>
						<Flex w="full" justifyContent="space-between">
							<Button
								colorScheme="gray"
								variant="ghost"
								ref={cancelRef}
								onClick={onClickCancel}
							>
								Cancel
							</Button>
							<div>
								<Button colorScheme="primary" onClick={onClickLeave}>
									Just Leave
								</Button>
								<Button
									variant="ghost"
									colorScheme="primary"
									onClick={onClickLogout}
									ml={3}
								>
									Logout
								</Button>
							</div>
						</Flex>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialogOverlay>
		</AlertDialog>
	);
};

LeaveDialog.displayName = 'LeaveDialog';

export default LeaveDialog;
