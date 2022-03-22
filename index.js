const Dep = require('./packages/dependency2');

const dependencyValue = Dep.callFunction();
console.log(`Application 2, Dependency: ${dependencyValue}`);