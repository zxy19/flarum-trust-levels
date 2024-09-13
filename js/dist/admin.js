/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/admin/components/adminPage.tsx":
/*!********************************************!*\
  !*** ./src/admin/components/adminPage.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ adminPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/admin/components/ExtensionPage */ "flarum/admin/components/ExtensionPage");
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _xypp_collector_forum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @xypp-collector/forum */ "@xypp-collector/forum");
/* harmony import */ var _xypp_collector_forum__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_xypp_collector_forum__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_utils_NodeUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/utils/NodeUtil */ "./src/common/utils/NodeUtil.ts");
/* harmony import */ var _editModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./editModal */ "./src/admin/components/editModal.tsx");










var adminPage = /*#__PURE__*/function (_ExtensionPage) {
  function adminPage() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _ExtensionPage.call.apply(_ExtensionPage, [this].concat(args)) || this;
    _this.items = [];
    _this.more = false;
    _this.item_loading = false;
    _this.offset = 0;
    _this.currentFilter = "all";
    _this.sortChanged = false;
    _this.isRemoving = {};
    _this.savingSorting = false;
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(adminPage, _ExtensionPage);
  var _proto = adminPage.prototype;
  _proto.oncreate = function oncreate(vnode) {
    _ExtensionPage.prototype.oncreate.call(this, vnode);
    _xypp_collector_forum__WEBPACK_IMPORTED_MODULE_7__.HumanizeUtils.getInstance((flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default()));
    this.loadData();
  };
  _proto.content = function content(vnode) {
    var _this2 = this;
    return m("div", {
      className: "container"
    }, m("h2", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-trust-levels.admin.data')), m("table", {
      className: "xypp-trust-levels-adminPage-table Table"
    }, m("thead", null, m("tr", null, m("th", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans("xypp-trust-levels.admin.table.id")), m("th", null, m("i", {
      "class": "fas fa-icons"
    })), m("th", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans("xypp-trust-levels.admin.table.name")), m("th", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans("xypp-trust-levels.admin.table.level")), m("th", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans("xypp-trust-levels.admin.table.group")), m("th", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans("xypp-trust-levels.admin.table.operation")))), m("tbody", null, this.items.map(function (item, index) {
      var _app$store$getById;
      var removing = _this2.isRemoving[item.id()] || false;
      return m("tr", null, m("td", null, item.id()), m("td", null, (0,_common_utils_NodeUtil__WEBPACK_IMPORTED_MODULE_8__.showIf)(!!item.icon(), m("i", {
        className: item.icon()
      }))), m("td", null, item.name()), m("td", null, (0,_common_utils_NodeUtil__WEBPACK_IMPORTED_MODULE_8__.showIf)(item.attribute("levelChanged"), "*"), item.level()), m("td", null, (_app$store$getById = flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().store.getById("groups", item.group_id() + "")) == null ? void 0 : _app$store$getById.nameSingular()), m("td", null, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
        className: "Button Button--primary",
        onclick: _this2.click.bind(_this2),
        "data-id": item.id()
      }, m("i", {
        "class": "fas fa-edit"
      })), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
        className: "Button Button--danger",
        onclick: _this2.remove.bind(_this2),
        "data-id": item.id(),
        disabled: removing,
        loading: removing
      }, m("i", {
        "class": "fas fa-trash"
      })), (0,_common_utils_NodeUtil__WEBPACK_IMPORTED_MODULE_8__.showIf)(!!_this2.items[index - 1], m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
        className: "Button Button--secondary",
        onclick: _this2.swap(index, -1),
        "data-id": item.id()
      }, m("i", {
        "class": "fas fa-sort-up"
      }))), (0,_common_utils_NodeUtil__WEBPACK_IMPORTED_MODULE_8__.showIf)(!!_this2.items[index + 1], m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
        className: "Button Button--secondary",
        onclick: _this2.swap(index, 1),
        "data-id": item.id()
      }, m("i", {
        "class": "fas fa-sort-down"
      })))));
    }), m("tr", null, m("td", null, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
      className: "Button Button--primary",
      onclick: this.create.bind(this)
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans("xypp-trust-levels.admin.table.create"))), m("td", null, (0,_common_utils_NodeUtil__WEBPACK_IMPORTED_MODULE_8__.showIf)(this.sortChanged, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
      className: "Button Button--primary",
      onclick: this.submitSort.bind(this),
      loading: this.savingSorting,
      disabled: this.savingSorting
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans("xypp-trust-levels.admin.table.save-level")))), m("td", null, (0,_common_utils_NodeUtil__WEBPACK_IMPORTED_MODULE_8__.showIf)(this.item_loading, m((flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6___default()), null)))))));
  };
  _proto.create = function create() {
    var _this3 = this;
    flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().modal.show(_editModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
      item: null,
      update: function update(item) {
        _this3.items.push(item);
        _this3.items.sort(function (a, b) {
          return a.level() - b.level();
        });
        m.redraw();
      }
    });
  };
  _proto.loadData = /*#__PURE__*/function () {
    var _loadData = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var _this$items;
      var newItems;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            this.item_loading = true;
            m.redraw();
            _context.next = 4;
            return _xypp_collector_forum__WEBPACK_IMPORTED_MODULE_7__.HumanizeUtils.getInstance((flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default())).loadDefinition();
          case 4:
            _context.next = 6;
            return flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().store.find('trust-levels');
          case 6:
            newItems = _context.sent;
            _context.next = 9;
            return flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().store.find("groups");
          case 9:
            (_this$items = this.items).push.apply(_this$items, newItems);
            this.items.sort(function (a, b) {
              return a.level() - b.level();
            });
            this.item_loading = false;
            m.redraw();
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee, this);
    }));
    function loadData() {
      return _loadData.apply(this, arguments);
    }
    return loadData;
  }();
  _proto.click = function click(e) {
    var _this4 = this;
    var id = e.currentTarget.getAttribute("data-id");
    if (!id) return;
    flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().modal.show(_editModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
      item: flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().store.getById("trust-levels", id),
      update: function update(item) {
        _this4.items = _this4.items.map(function (item) {
          if (item.id() == id) {
            return item;
          }
          return item;
        });
        _this4.items.sort(function (a, b) {
          return a.level() - b.level();
        });
        m.redraw();
      }
    });
  };
  _proto.remove = function remove(e) {
    var _this5 = this;
    var id = e.currentTarget.getAttribute("data-id");
    if (!id) return;
    var model = flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().store.getById("trust-levels", id);
    if (!model) return;
    if (confirm(flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans("xypp-trust-levels.admin.table.remove_confirm") + "")) {
      this.isRemoving[id] = true;
      m.redraw();
      model["delete"]().then(function () {
        _this5.items = _this5.items.filter(function (item) {
          return item.id() != id;
        });
        _this5.isRemoving[id] = false;
        m.redraw();
      });
    }
  };
  _proto.swap = function swap(id, dir) {
    var _this6 = this;
    return function () {
      var swap1 = Math.max(id + dir, id);
      var swap2 = Math.min(id + dir, id);
      var tmp = _this6.items[swap1];
      var level1 = tmp.level();
      var level2 = _this6.items[swap2].level();
      _this6.items[swap1] = _this6.items[swap2];
      _this6.items[swap2] = tmp;
      _this6.items[swap1].pushAttributes({
        level: level2,
        levelChanged: true
      });
      _this6.items[swap2].pushAttributes({
        level: level1,
        levelChanged: true
      });
      _this6.sortChanged = true;
      _this6.items.sort(function (a, b) {
        return a.level() - b.level();
      });
      m.redraw();
    }.bind(this);
  };
  _proto.submitSort = function submitSort() {
    var _this7 = this;
    this.savingSorting = true;
    m.redraw();
    var swapRecord = {};
    this.items.forEach(function (item) {
      if (item.attribute("levelChanged")) {
        swapRecord[parseInt(item.id() || "")] = item.level();
      }
    });
    return flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().request({
      method: "POST",
      url: flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().forum.attribute("apiUrl") + "/trust-levels/sort",
      body: {
        sorts: swapRecord
      }
    })["finally"](function () {
      _this7.savingSorting = false;
      m.redraw();
    });
  };
  return adminPage;
}((flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_3___default()));


/***/ }),

/***/ "./src/admin/components/editModal.tsx":
/*!********************************************!*\
  !*** ./src/admin/components/editModal.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ editModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/Select */ "flarum/common/components/Select");
/* harmony import */ var flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_utils_NodeUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/utils/NodeUtil */ "./src/common/utils/NodeUtil.ts");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _xypp_collector_admin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @xypp-collector/admin */ "@xypp-collector/forum");
/* harmony import */ var _xypp_collector_admin__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_xypp_collector_admin__WEBPACK_IMPORTED_MODULE_9__);










var editModal = /*#__PURE__*/function (_Modal) {
  function editModal() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Modal.call.apply(_Modal, [this].concat(args)) || this;
    _this.conditions = void 0;
    _this.name = "";
    _this.icon = "";
    _this.level = 0;
    _this.group_id = 0;
    _this.groups = {
      "-1": flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-trust-levels.admin.create-modal.null_group') + ""
    };
    _this.loadedLevels = {};
    _this.referenceLevelId = 0;
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(editModal, _Modal);
  var _proto = editModal.prototype;
  _proto.oninit = function oninit(vnode) {
    var _this2 = this;
    _Modal.prototype.oninit.call(this, vnode);
    if (this.attrs.item) {
      this.conditions = new (flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_8___default())(this.attrs.item.condition());
      this.name = this.attrs.item.name();
      this.level = this.attrs.item.level();
      this.icon = this.attrs.item.icon();
      this.group_id = this.attrs.item.group_id();
    } else {
      this.conditions = new (flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_8___default())([]);
    }
    flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().store.all("groups").forEach(function (group) {
      _this2.groups[group.id() + ""] = group.nameSingular();
    });
    flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().store.all("trustLevels").forEach(function (level) {
      if (level.level() > _this2.referenceLevelId) {
        if (!_this2.attrs.item || _this2.level > level.level()) {
          _this2.referenceLevelId = level.level();
        }
      }
      _this2.loadedLevels[parseInt(level.id() + "")] = "#" + level.level() + ":" + level.name();
    });
  };
  _proto.className = function className() {
    return 'Modal Modal--large';
  };
  _proto.title = function title() {
    if (this.attrs.item) {
      return flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans("xypp-trust-levels.admin.create-modal.edit", [this.attrs.item]);
    }
    return flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-trust-levels.admin.create-modal.title');
  };
  _proto.oncreate = function oncreate(vnode) {
    _Modal.prototype.oncreate.call(this, vnode);
  };
  _proto.content = function content() {
    var _this3 = this;
    var that = this;
    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form"
    }, m("div", {
      className: "Form-group"
    }, m("label", {
      "for": "xypp-trust-levels-create-ipt-name"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-trust-levels.admin.create-modal.name')), m("input", {
      id: "xypp-trust-levels-create-ipt-name",
      required: true,
      className: "FormControl",
      type: "text",
      step: "any",
      value: this.name,
      onchange: function (e) {
        _this3.name = e.target.value;
      }.bind(this)
    })), m("div", {
      className: "Form-group"
    }, m("label", {
      "for": "xypp-trust-levels-create-ipt-icon"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-trust-levels.admin.create-modal.icon')), m("div", {
      "class": "xypp-trust-levels-create-icon-preview"
    }, m("input", {
      id: "xypp-trust-levels-create-ipt-icon",
      className: "FormControl",
      type: "text",
      step: "any",
      value: this.icon,
      onchange: function (e) {
        _this3.icon = e.target.value;
      }.bind(this)
    }), (0,_common_utils_NodeUtil__WEBPACK_IMPORTED_MODULE_7__.showIf)(!!this.icon, m("i", {
      className: this.icon
    })))), m("div", {
      className: "Form-group"
    }, m("label", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-trust-levels.admin.create-modal.condition')), m("div", null, m((flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_6___default()), {
      options: this.loadedLevels,
      onchange: function (r) {
        _this3.referenceLevelId = r;
      }.bind(this)
    }), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
      className: "Button Button--primary",
      onclick: this.copyData.bind(this)
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-trust-levels.admin.create-modal.copy-data')), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
      className: "Button Button--primary",
      onclick: this.copyName.bind(this)
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-trust-levels.admin.create-modal.copy-name'))), m(_xypp_collector_admin__WEBPACK_IMPORTED_MODULE_9__.ConditionConfigure, {
      conditions: this.conditions
    })), m("div", {
      className: "Form-group"
    }, m("label", {
      "for": "xypp-trust-levels-create-ipt-re_available"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-trust-levels.admin.create-modal.group')), m((flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_6___default()), {
      className: "FormControl",
      value: this.group_id,
      options: this.groups,
      onchange: function (name) {
        _this3.group_id = parseInt(name);
      }.bind(this)
    }))), m("div", {
      className: "Form-group"
    }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
      "class": "Button Button--primary",
      type: "submit",
      loading: this.loading
    }, (0,_common_utils_NodeUtil__WEBPACK_IMPORTED_MODULE_7__.showIf)(!!this.attrs.item, flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-trust-levels.admin.create-modal.button-edit'), flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().translator.trans('xypp-trust-levels.admin.create-modal.button')))));
  };
  _proto.onsubmit = /*#__PURE__*/function () {
    var _onsubmit = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(e) {
      var item, conditions, newItem;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            this.loading = true;
            m.redraw();
            item = this.attrs.item || flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().store.createRecord('trust-levels');
            _context.prev = 4;
            conditions = this.conditions();
            _context.next = 8;
            return item.save({
              conditions: conditions.filter(function (item) {
                return item.name != '*';
              }),
              name: this.name,
              icon: this.icon,
              group_id: this.group_id
            });
          case 8:
            newItem = _context.sent;
            this.attrs.update && this.attrs.update(newItem);
            flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().modal.close();
          case 11:
            _context.prev = 11;
            this.loading = false;
            m.redraw();
            return _context.finish(11);
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee, this, [[4,, 11, 15]]);
    }));
    function onsubmit(_x) {
      return _onsubmit.apply(this, arguments);
    }
    return onsubmit;
  }();
  _proto.copyFrom = function copyFrom(override) {
    if (override === void 0) {
      override = false;
    }
    var data = this.conditions();
    var targetModel = flarum_admin_app__WEBPACK_IMPORTED_MODULE_4___default().store.getById("trust-levels", this.referenceLevelId + "");
    if (!targetModel) return;
    targetModel.condition().forEach(function (item) {
      var l = data.find(function (i) {
        return i.name == item.name;
      });
      if (l && override) {
        l.calculate = item.calculate;
        l.value = item.value;
        l.operator = item.operator;
        l.span = item.span;
        l.alter_name = item.alter_name;
      } else {
        data.push(item);
      }
    });
    this.conditions(data);
    m.redraw();
  };
  _proto.copyData = function copyData() {
    this.copyFrom(true);
  };
  _proto.copyName = function copyName() {
    this.copyFrom(false);
  };
  return editModal;
}((flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3___default()));


/***/ }),

/***/ "./src/admin/index.ts":
/*!****************************!*\
  !*** ./src/admin/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_adminPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/adminPage */ "./src/admin/components/adminPage.tsx");


flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('xypp/flarum-trust-levels', function () {
  flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().extensionData["for"]('xypp-trust-levels').registerPage(_components_adminPage__WEBPACK_IMPORTED_MODULE_1__["default"]);
});

/***/ }),

/***/ "./src/common/extend.ts":
/*!******************************!*\
  !*** ./src/common/extend.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extenders */ "flarum/common/extenders");
/* harmony import */ var flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_TrustLevel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/TrustLevel */ "./src/common/models/TrustLevel.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([new (flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0___default().Store)().add('trust-levels', _models_TrustLevel__WEBPACK_IMPORTED_MODULE_1__["default"])]);

/***/ }),

/***/ "./src/common/index.ts":
/*!*****************************!*\
  !*** ./src/common/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extend: () => (/* reexport safe */ _extend__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extend */ "./src/common/extend.ts");


/***/ }),

/***/ "./src/common/models/TrustLevel.ts":
/*!*****************************************!*\
  !*** ./src/common/models/TrustLevel.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TrustLevel)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__);


var TrustLevel = /*#__PURE__*/function (_Model) {
  function TrustLevel() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Model.call.apply(_Model, [this].concat(args)) || this;
    _this.name = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('name');
    _this.condition = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('conditions');
    _this.icon = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('icon');
    _this.level = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('level');
    _this.group_id = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('group_id');
    _this.next = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().hasOne('next');
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(TrustLevel, _Model);
  return TrustLevel;
}((flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/common/utils/NodeUtil.ts":
/*!**************************************!*\
  !*** ./src/common/utils/NodeUtil.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showIf: () => (/* binding */ showIf)
/* harmony export */ });
function showIf(judgement, vnode, def) {
  return judgement ? vnode : def || "";
}

/***/ }),

/***/ "@xypp-collector/forum":
/*!******************************************************!*\
  !*** external "flarum.extensions['xypp-collector']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.extensions['xypp-collector'];

/***/ }),

/***/ "flarum/admin/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['admin/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/app'];

/***/ }),

/***/ "flarum/admin/components/ExtensionPage":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['admin/components/ExtensionPage']" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/components/ExtensionPage'];

/***/ }),

/***/ "flarum/common/Model":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['common/Model']" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Model'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/LoadingIndicator":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['common/components/LoadingIndicator']" ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/LoadingIndicator'];

/***/ }),

/***/ "flarum/common/components/Modal":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Modal']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Modal'];

/***/ }),

/***/ "flarum/common/components/Select":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Select']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Select'];

/***/ }),

/***/ "flarum/common/extenders":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/extenders']" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extenders'];

/***/ }),

/***/ "flarum/common/utils/Stream":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/utils/Stream']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/Stream'];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"]);
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

function _typeof(o) {
  "@babel/helpers - typeof";

  return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js")();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t, o);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./admin.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extend: () => (/* reexport safe */ _src_common__WEBPACK_IMPORTED_MODULE_0__.extend)
/* harmony export */ });
/* harmony import */ var _src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ "./src/common/index.ts");
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.ts");


})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=admin.js.map