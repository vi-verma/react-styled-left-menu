export const customDataFormatter = (text='', typeConveersion) => {
    let output = "-";
  switch (typeConveersion) {
    case "dateOnly":
        output =  new Date(text).getDate();
      break;
    case "date":
        output =  new Date(text).toLocaleDateString();
        break;
    case "text":
        output = text;
    default:
      break;
  };
  return output;
};
