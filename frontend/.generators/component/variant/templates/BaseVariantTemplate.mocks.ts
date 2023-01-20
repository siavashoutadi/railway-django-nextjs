import { I<%= capName %> } from './<%= capName %>';

const base: I<%= capName %> = {
  sampleTextProp: 'Hello world!',
  size: 'large',
};

export const mock<%= capName %>Props = {
  base,
};
