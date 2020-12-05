const containerComponents = require('./getContainers');
function getLastMyBusinessContainerComponents() {
  let max = 0;
  containerComponents().forEach(contarinerComp => {
    const patt = /^(MyBusiness)[\d]*/i;
    patt.compile(patt);
    const current = patt.exec(contarinerComp);
    if (current) {
      if (current[0].split('MyBusiness')[1] > max) {
        // eslint-disable-next-line prefer-destructuring
        max = current[0].split('MyBusiness')[1];
      }
    }
  });
  return max;
}
module.exports = getLastMyBusinessContainerComponents;
