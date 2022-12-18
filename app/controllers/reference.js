const nav = require("nav");
const  structure = require("structure");

module.exports = function (scope) {
  scope.activateRefs = function () {
    scope.m.common.refDesModel.referencesButton.active = true;
  };
  scope.deactivateRefs = function () {
    scope.m.common.refDesModel.referencesButton.active = false;
  };
  nav.onenter(function () {
    scope.m.common.buttons[0].disabled = !scope.m.common.refDesModel.referencesItems.length;
  });
};
