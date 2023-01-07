import { ComponentMeta, ComponentStory } from '@storybook/react';
import Nav, { INav } from './Nav';
import { mockNavProps } from './Nav.mocks';

export default {
  title: 'templates/Nav',
  component: Nav,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Nav>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Nav> = (args) => <Nav {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockNavProps.base,
} as INav;
