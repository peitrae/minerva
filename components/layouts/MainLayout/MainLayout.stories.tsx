import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MainLayout as MainLayoutComponent } from '..';
import { MainHeader } from '../../ui';

export default {
	title: 'Components/Layouts/MainLayout',
	component: MainLayoutComponent,
  subcomponents: {
    MainHeader
  }
} as ComponentMeta<typeof MainLayoutComponent>;

export const MainLayout: ComponentStory<typeof MainLayoutComponent> = () => (
	<MainLayoutComponent>
		<main
			style={{
				height: '100vh',
			}}
		></main>
	</MainLayoutComponent>
);
