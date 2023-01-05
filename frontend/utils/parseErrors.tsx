const ParseErrors = (errorsObject: any) => {
  let errors: string[] = [];
  for (let key in errorsObject) {
    errorsObject[key].map((element: { message: string; }) => errors.push(element.message));
  }
  return errors;
};

export default ParseErrors;
