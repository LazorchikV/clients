"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var clients = [{
  id: "f".concat((~~(Math.random() * 1e8)).toString(16)),
  date: new Date(),
  firstName: "Ivan",
  lastName: "Ivanov",
  gender: "male",
  state: "mobileapp"
}, {
  id: "f".concat((~~(Math.random() * 1e8)).toString(16)),
  date: new Date(),
  firstName: "Вася",
  lastName: "Пупкин",
  gender: "male",
  state: "mobileapp"
}, {
  id: "f".concat((~~(Math.random() * 1e8)).toString(16)),
  date: new Date(),
  firstName: "Галя",
  lastName: "Пупкина",
  gender: "female",
  state: "mobileapp"
}];
var _default = clients;
exports["default"] = _default;