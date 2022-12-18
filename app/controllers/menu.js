const nav = require("nav");

module.exports = function (scope) {
  scope.openMenu = function () {
    if(!scope.m.common.isScenario) {
    scope.m.common.menu.isMenuActive.active = true;
    }
  }

  nav.onready(function () {
    scope.m.common.isScenario = require('settings').isScenario;
    scope.m.common.menu.isMenuActive.active = false;
  })
}
