import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import GraphQLConnectedDemo from '../../components/graphql/GraphQL-ConnectedDemo';

export default {
  title: 'Components/graphql/GraphQL-ConnectedDemo',
  component: GraphQLConnectedDemo,
} as ComponentMeta<typeof GraphQLConnectedDemo>;

const Template: ComponentStory<typeof GraphQLConnectedDemo> = (args) => (
  <GraphQLConnectedDemo {...args} />
);

export const Default = Template.bind({});
Default.args = {
  params: {
    name: 'GraphQL-ConnectedDemo',
  },
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'GraphQL-ConnectedDemo',
  },
};
