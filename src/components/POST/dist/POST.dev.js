"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Post = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Post = function Post(config) {
  _classCallCheck(this, Post);

  this.id = config.id || uuid();
  this.date = config.date || new Date().getTime();
  this.firstName = config.firstName;
  this.lastName = config.lastName;
  this.gender = config.gender;
  this.state = config.state;
};

exports.Post = Post;