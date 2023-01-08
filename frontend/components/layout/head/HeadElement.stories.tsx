import { ComponentStory, ComponentMeta } from '@storybook/react';
import HeadElement, { IHeadElement } from './HeadElement';
import { mockHeadElementProps } from './HeadElement.mocks';

export default {
  title: 'templates/HeadElement',
  component: HeadElement,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HeadElement>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HeadElement> = (args) => (
  <HeadElement {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockHeadElementProps.base,
} as IHeadElement;
