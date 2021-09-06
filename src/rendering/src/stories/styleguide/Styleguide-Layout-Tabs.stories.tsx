import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import StyleguideLayoutTabs from '../../components/styleguide/Styleguide-Layout-Tabs';

export default {
  title: 'Components/styleguide/Styleguide-Layout-Tabs',
  component: StyleguideLayoutTabs,
} as ComponentMeta<typeof StyleguideLayoutTabs>;

const Template: ComponentStory<typeof StyleguideLayoutTabs> = (args) => <StyleguideLayoutTabs {...args} />;

export const Default = Template.bind({});
Default.args = {
  params: {
    name: 'Styleguide-Layout-Tabs',
  },
};
