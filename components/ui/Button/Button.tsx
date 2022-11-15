import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';

const Button = ({
	children,
	size = 'lg',
	borderRadius = 'full',
	colorScheme = 'primary',
	...rest
}: ButtonProps) => (
	<ChakraButton
		size={size}
		borderRadius={borderRadius}
		colorScheme={colorScheme}
		{...rest}
	>
		{children}
	</ChakraButton>
);

export default Button;
