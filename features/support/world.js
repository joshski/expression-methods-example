const { defineStep } = require("cucumber");

const stepsClasses = [
  require("../step_definitions/BalanceSteps"),
  require("../step_definitions/TransferSteps")
];

stepsClasses.forEach(StepsClass => {
  const stepsInstance = new StepsClass();
  stepMethoodsOf(stepsInstance).forEach(method => {
    defineStep(method, callStep(stepsInstance, method));
  });
});

function stepMethoodsOf(obj) {
  let propertyNames = [];
  let parent = obj;
  do {
    propertyNames = propertyNames.concat(Object.getOwnPropertyNames(parent));
  } while ((parent = Object.getPrototypeOf(parent)));
  return propertyNames.sort().filter(function(propertyName, i, arr) {
    if (
      propertyName.indexOf(" ") > -1 &&
      propertyName != propertyNames[i + 1] &&
      typeof obj[propertyName] == "function"
    )
      return true;
  });
}

function callStep(stepsInstance, method) {
  const arity = stepsInstance[method].length;
  switch (arity) {
    case 1:
      return function callStepWithArity1(arg1) {
        return stepsInstance[method].call(this, arg1);
      };
    default:
      throw new Error("Oops, we don't support arity " + arity);
  }
}
