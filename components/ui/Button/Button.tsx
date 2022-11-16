import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';
import { forwardRef, LegacyRef } from 'react';

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
