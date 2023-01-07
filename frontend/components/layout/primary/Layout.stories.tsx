import { ComponentMeta, ComponentStory } from '@storybook/react';
import Layout, { ILayout } from './Layout';
import { mockLayoutProps } from './Layout.mocks';

export default {
  title: 'templates/Layout',
  component: Layout,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Layout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockLayoutProps.base,
} as ILayout;
