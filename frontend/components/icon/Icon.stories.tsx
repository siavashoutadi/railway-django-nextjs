import { ComponentMeta, ComponentStory } from '@storybook/react';
import Icon, { IIcon } from './Icon';
import { mockIconProps } from './Icon.mocks';

export default {
  title: 'templates/Icon',
  component: Icon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Icon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockIconProps.base,
} as IIcon;
