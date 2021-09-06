import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import GraphQLLayout from '../../components/graphql/GraphQL-Layout';

export default {
  title: 'Components/graphql/GraphQL-Layout',
  component: GraphQLLayout,
} as ComponentMeta<typeof GraphQLLayout>;

const Template: ComponentStory<typeof GraphQLLayout> = (args) => <GraphQLLayout {...args} />;

export const Default = Template.bind({});
Default.args = {
  params: {
    name: 'GraphQL-Layout',
  },
};
