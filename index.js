"format cjs";

var engine = require('./engine');
var conventionalCommitTypes = require('conventional-commit-types');

var engineInstance = engine({
  types: conventionalCommitTypes.types
});

var _extends = function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      target[key] = source[key];
    }
  }

  return target;
};

exports['default'] = engineInstance;

module.exports = _extends(exports['default'], exports);
