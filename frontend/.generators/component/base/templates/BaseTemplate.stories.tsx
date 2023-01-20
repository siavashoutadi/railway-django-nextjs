import { ComponentStory, ComponentMeta } from '@storybook/react';
import <%= capName %>, { I<%= capName %> } from './<%= capName %>';
import { mock<%= capName %>Props } from './<%= capName %>.mocks';

export default {
  title: 'templates/<%= capName %>',
  component: <%= capName %>,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof <%= capName %>>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof <%= capName %>> = (args) => (
  <<%= capName %> {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mock<%= capName %>Props.base,
} as I<%= capName %>;
