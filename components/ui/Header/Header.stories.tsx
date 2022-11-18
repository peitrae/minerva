import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MainHeader as MainHeaderComponent } from '..';

export default {
	title: 'Components/UI/Header/MainHeader',
	component: MainHeaderComponent,
} as ComponentMeta<typeof MainHeaderComponent>;

export const MainHeader: ComponentStory<typeof MainHeaderComponent> = () => <MainHeaderComponent />;
