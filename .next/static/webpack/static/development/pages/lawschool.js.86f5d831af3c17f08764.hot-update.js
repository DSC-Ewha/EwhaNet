webpackHotUpdate("static\\development\\pages\\lawschool.js",{

/***/ "./pages/lawschool.js":
/*!****************************!*\
  !*** ./pages/lawschool.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_UserProfile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/UserProfile */ "./components/UserProfile.js");

var _jsxFileName = "C:\\Users\\user\\Desktop\\KME\\EwhaNetNode\\EwhaReactNodeCh5\uC644\uC131\\front\\pages\\lawschool.js";







var Lawschool = function Lawschool() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var Search = antd__WEBPACK_IMPORTED_MODULE_2__["Input"].Search;
  var Option = antd__WEBPACK_IMPORTED_MODULE_2__["Select"].Option;
  var colleageData = ['국내', '해외'];
  var majorData = {
    '국내': ['서울대', '연세대', '고려대', '이화여대'],
    '해외': ['-']
  };
  var schools = [{
    title: '이화여자대학교 법학전문대학원',
    alumni: 150
  }, {
    title: '이화여자대학교 법학전문대학원',
    alumni: 150
  }, {
    title: '이화여자대학교 법학전문대학원',
    alumni: 150
  }, {
    title: '이화여자대학교 법학전문대학원',
    alumni: 150
  }, {
    title: '이화여자대학교 법학전문대학원',
    alumni: 150
  }, {
    title: '이화여자대학교 법학전문대학원',
    alumni: 150
  }, {
    title: '이화여자대학교 법학전문대학원',
    alumni: 150
  }, {
    title: '이화여자대학교 법학전문대학원',
    alumni: 150
  }, {
    title: '이화여자대학교 법학전문대학원',
    alumni: 150
  }, {
    title: '이화여자대학교 법학전문대학원',
    alumni: 150
  }];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(majorData[colleageData[0]]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      colleage = _useState2[0],
      setColleageState = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(majorData[colleageData[0]][0]),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      major = _useState4[0],
      setMajorState = _useState4[1];

  var handleColleageChange = function handleColleageChange(e) {
    setColleageState(majorData[e]);
    setMajorState(majorData[e][0]);
  };

  var onMajorChange = function onMajorChange(e) {
    setMajorState(e);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UserProfile__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      padding: '10px',
      background: '#222222',
      height: '30vh'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      padding: '10vh',
      fontFamily: 'Open Sans',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '20px',
      lineHeight: '34px',
      textAlign: 'center',
      color: '#FFFFFF',
      mixBlendMode: 'normal'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "\uB300\uD559\uC6D0 \uBC0F \uB85C\uC2A4\uCFE8\uC5D0 \uC7AC\uD559 \uC911\uC778 \uC120\uBC30\uB4E4\uACFC \uC18C\uD1B5\uD574\uBCF4\uC138\uC694!", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Search, {
    placeholder: "\uC120\uBC30\uB4E4\uC744 \uAC80\uC0C9\uD574\uBCF4\uC138\uC694",
    onSearch: function onSearch(value) {
      return console.log(value);
    },
    style: {
      width: '50vw',
      marginTop: '3vh'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
    mode: "horizontal",
    style: {
      background: 'rgba(135, 185, 74, 0.1)',
      color: '#00462A',
      fontFamily: 'Noto Sans KR',
      fontStyle: 'normal',
      fontWeight: 'bold',
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    className: "pageMenuStyle",
    style: {
      color: '#00462A'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/scholar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, " \uB300\uD559\uC6D0")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    className: "pageMenuStyle",
    style: {
      color: '#00462A'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/lawschool",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "\uB85C\uC2A4\uCFE8"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      textAlign: 'center',
      background: '#FFFFFF',
      height: '10vh',
      paddingTop: '3vh'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "\uC9C0\uC5ED", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Select"], {
    defaultValue: colleageData[0],
    style: {
      width: '15vw',
      marginLeft: '3vw',
      marginRight: '10vw'
    },
    onChange: handleColleageChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, colleageData.map(function (colleage) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Option, {
      key: colleage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, colleage);
  })), "\uB300\uD559", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Select"], {
    style: {
      marginLeft: '3vw',
      width: '15vw',
      marginRight: '3vw'
    },
    value: major,
    onChange: onMajorChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, colleage.map(function (major) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Option, {
      key: major,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, major);
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    style: {
      background: '#00462A',
      color: '#FFFFFF'
    },
    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["SearchOutlined"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "\uAC80\uC0C9")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      color: '#00462A',
      marginTop: '5vh',
      marginLeft: '7vw',
      fontFamily: 'Noto Sans KR',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '16px',
      lineHeight: '32px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "\uC870\uD68C\uC218 TOP \uB85C\uC2A4\uCFE8"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: '5vh',
      marginLeft: '7vw',
      marginRight: '7vw'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
    grid: {
      gutter: 20,
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4,
      xl: 4,
      xxl: 4
    },
    dataSource: schools,
    renderItem: function renderItem(item) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/lawschoolspec",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, item.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, "\uB3D9\uBB38 ", item.alumni, "\uBA85")))));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Lawschool);

/***/ })

})
//# sourceMappingURL=lawschool.js.86f5d831af3c17f08764.hot-update.js.map