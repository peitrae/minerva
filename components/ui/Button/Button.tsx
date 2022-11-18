import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';
import { forwardRef, LegacyRef } from 'react';

/**
 * Main button component that extends the Chakra UI button component by changing some default props value.
 */
const Button = forwardRef(
	(
		{
			children,
			size = 'lg',
			borderRadius = 'full',
			colorScheme = 'primary',
			...rest
		}: ButtonProps,
		ref?: LegacyRef<HTMLButtonElement>
	) => (
		<ChakraButton
			ref={ref}
			size={size}
			borderRadius={borderRadius}
			colorScheme={colorScheme}
			{...rest}
		>
			{children}
		</ChakraButton>
	)
);

Button.displayName = 'Button';

export default Button;
