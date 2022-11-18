import { render, screen } from '@testing-library/react';
import { MainLayout } from '..';

describe('MainLayout', () => {
	it('should render correctly', () => {
		render(
			<MainLayout data-testid="main-layout">
				<main data-testid="main"></main>
			</MainLayout>
		);

		const mainLayout = screen.getByTestId('main-layout');
		const header = screen.getByTestId('header');
		const main = screen.getByTestId('main');

		expect(mainLayout).toMatchSnapshot();
		expect(header).toBeVisible();
		expect(main).toBeVisible();
	});
});
