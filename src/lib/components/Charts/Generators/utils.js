export function title({ props: { text, align } }) {
  const result = { text };
  if (align) result.align = align;
  return {
    title: result,
  };
}
export function column({ props: { children } }) {
  const result = {
    chart: {
      type: 'column',
    },
  };
  return Object.assign(result, series(children));
}
export function bar({ props: { children } }) {
  const result = {
    chart: {
      type: 'bar',
    },
  };
  return Object.assign(result, series(children));
}
export function line({ props: { children } }) {
  return series(children);
}
export function pie({
  props: { plotBackgroundColor, plotBorderWidth, plotShadow, children },
}) {
  const result = {
    chart: {
      type: 'pie',
    },
  };
  if (plotBackgroundColor) result.plotBackgroundColor = plotBackgroundColor;
  if (plotBorderWidth) result.plotBorderWidth = plotBorderWidth;
  if (plotShadow) result.plotShadow = plotBorderWidth;
  return Object.assign(result, series(children));
}

function arrayData({ props: { name, data } }) {
  return {
    name,
    data: [...data],
  };
}

function objectData({ props: { name, y, sliced, selected } }) {
  const result = { name, y };
  if (sliced) result.sliced = sliced;
  if (selected) result.selected = selected;
  return result;
}

function objectDataContainer({ props: { name, colorByPoint, children } }) {
  const result = {};
  if (name) result.name = name;
  if (colorByPoint) result.colorByPoint = colorByPoint;
  const data = children.map(child => objectData(child));
  return { ...result, data: [...data] };
}

function axisLabel({ props: { format } }) {
  const result = {};
  if (format) result.name = format;
  return { ...result };
}

function series({ props: { children } }) {
  let result = {};
  if (!children || children.length < 1) return result;

  if (
    !Array.isArray(children) &&
    children.type.name === 'ObjectDataContainer'
  ) {
    result = objectDataContainer(children);
  } else {
    result = children.map(child => arrayData(child));
  }
  if (Array.isArray(result)) return { series: [...result] };
  return { series: [{ ...result }] };
}
export function xAxis({ props: { categories, ...other } }) {
  const result = {};
  if (categories) result.categories = categories;
  if (other.title) Object.assign(result, title(other.title));
  if (other.type) result.type = other.type;
  return { xAxis: result };
}
export function yAxis({ props: { ...other } }) {
  const result = {};
  if (other.labels) Object.assign(result, axisLabel(other.labels));
  if (other.title) Object.assign(result, title(other.title));
  return { yAxis: result };
}
