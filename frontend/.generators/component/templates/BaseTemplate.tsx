export interface I<%= capName %> {
  sampleTextProp: string;
}

const <%= capName %>: React.FC<I<%= capName %>> = ({ sampleTextProp }) => {
  return <div>{sampleTextProp}</div>;
};

export default <%= capName %>;
