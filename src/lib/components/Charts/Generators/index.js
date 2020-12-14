import { bar, pie, title, xAxis, yAxis, column, line } from './utils';
const generate = inputTag => {
  const { type } = inputTag;
  switch (type.name) {
    case 'Bar':
      return bar(inputTag);
    case 'Pie':
      return pie(inputTag);
    case 'Column':
      return column(inputTag);
    case 'Line':
      return line(inputTag);
    case 'Title':
      return title(inputTag);
    case 'XAxis':
      return xAxis(inputTag);
    case 'YAxis':
      return yAxis(inputTag);
    default:
      return {};
  }
};
export default generate;
