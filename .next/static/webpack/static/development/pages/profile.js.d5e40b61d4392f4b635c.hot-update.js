webpackHotUpdate("static\\development\\pages\\profile.js",{

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
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

var _jsxFileName = "C:\\Users\\user\\Desktop\\KME\\EwhaNetNode\\EwhaReactNodeCh5\uC644\uC131\\front\\pages\\profile.js";







var Profile = function Profile() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var Search = antd__WEBPACK_IMPORTED_MODULE_2__["Input"].Search;
  var Option = antd__WEBPACK_IMPORTED_MODULE_2__["Select"].Option;
  var Step = antd__WEBPACK_IMPORTED_MODULE_2__["Steps"].Step;
  var colleageData = ['인문대학', '자연대학', '공과대학'];
  var majorData = {
    '인문대학': ['철학과', '영문학과'],
    '자연대학': ['수학과', '화학과'],
    '공과대학': ['전자공학과', '기계공학과']
  };
  var schools = [{
    title: '영상디자인'
  }, {
    title: '영상디자인'
  }, {
    title: '영상디자인'
  }, {
    title: '영상디자인'
  }, {
    title: '영상디자인'
  }, {
    title: '영상디자인'
  }, {
    title: '영상디자인'
  }, {
    title: '영상디자인'
  }, {
    title: '영상디자인'
  }, {
    title: '영상디자인'
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

  var customDot = function customDot(dot, _ref) {
    var status = _ref.status,
        index = _ref.index;
    return (//     <Popover
      //     content={
      //       <span>
      //         step {index} status: {status}
      //       </span>
      //     }
      //   >
      //   </Popover>
      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          background: '#FFFFFF',
          color: '#FFFFFF',
          border: '7px solid #5F5F5F',
          borderRadius: '70%',
          boxSizing: 'border-box',
          height: '10px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, dot)
    );
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UserProfile__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      padding: '10px',
      background: '#222222',
      height: '10vh'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      padding: '2vh',
      fontFamily: 'Open Sans',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '20px',
      lineHeight: '34px',
      color: '#FFFFFF',
      mixBlendMode: 'normal'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "\uC774\uD654\uC5F0\uB2D8\uC758 \uD3EC\uD2B8\uD3F4\uB9AC\uC624", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    style: {
      background: '#222222',
      color: '#FFFFFF',
      marginLeft: '1vw'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "\uCE5C\uAD6C \uCD94\uAC00\uD558\uAE30"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
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
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    className: "pageMenuStyle",
    key: "1",
    style: {
      color: '#00462A'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "\uC694\uC57D"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    className: "pageMenuStyle",
    key: "2",
    style: {
      color: '#00462A'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/introduce",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "\uC790\uAE30 \uC18C\uAC1C"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    className: "pageMenuStyle",
    key: "3",
    style: {
      color: '#00462A'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/career",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "\uACBD\uB825"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    className: "pageMenuStyle",
    key: "4",
    style: {
      color: '#00462A'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/award",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "\uC2A4\uD0AC/\uC218\uC0C1"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    className: "pageMenuStyle",
    key: "5",
    style: {
      color: '#00462A'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/interest",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "\uAD00\uC2EC\uBD84\uC57C"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginTop: '5vh',
      marginLeft: '7vw',
      marginRight: '7vw',
      marginBottom: '20px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
    shape: "square",
    size: 200,
    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["UserOutlined"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }),
    style: {
      float: 'left'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      width: '58vw',
      marginLeft: '200px',
      background: '#FFFFFF'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    style: {
      height: '200px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      fontFamily: 'Noto Sans KR',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '20px',
      lineHeight: '29px',
      color: '#5F5F5F',
      mixBlendMode: 'normal'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, "\uB9C8\uC774\uD06C\uB85C\uC18C\uD504\uD2B8 \uC778\uD134"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "\uC774\uD654\uC5F0"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "\uCEF4\uD4E8\uD130\uACF5\uD559\uACFC 17"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "ewhain.my.protfolio.com"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginTop: '5vh',
      background: '#FFFFFF',
      border: '1px solid #E9E9E9',
      boxSizing: 'border-box'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      margin: '30px',
      fontFamily: 'Noto Sans KR',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '20px',
      lineHeight: '29px',
      color: '#5F5F5F',
      mixBlendMode: 'normal'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, "\uACBD\uB825", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      float: 'right',
      fontWeight: 'normal',
      fontSize: '14px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, "\uB354 \uC54C\uC544\uBCF4\uAE30")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Timeline"], {
    style: {
      paddingLeft: '10vw',
      paddingRight: '5vw'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Timeline"].Item, {
    color: "gray",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, "\uB9C8\uC774\uD06C\uB85C\uC18C\uD504\uD2B8 \uC778\uD134"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, "\uB9C8\uC774\uD06C\uB85C\uC18C\uD504\uD2B8\uC5D0\uC11C 5\uBA85\uC758 \uD300\uC6D0\uB4E4\uACFC \uD568\uAED8 \uB9C8\uC774\uD06C\uB85C\uC18C\uD504\uD2B8\uC5D0\uC11C 5\uBA85\uC758 \uD300\uC6D0\uB4E4\uACFC \uD568\uAED8\uB9C8\uC774\uD06C\uB85C\uC18C\uD504\uD2B8\uC5D0\uC11C 5\uBA85\uC758 \uD300\uC6D0\uB4E4\uACFC \uD568\uAED8\uB9C8\uC774\uD06C\uB85C\uC18C\uD504\uD2B8\uC5D0\uC11C 5\uBA85\uC758 \uD300\uC6D0\uB4E4\uACFC \uD568\uAED8\uB9C8\uC774\uD06C\uB85C\uC18C\uD504\uD2B8\uC5D0\uC11C 5\uBA85\uC758 \uD300\uC6D0\uB4E4\uACFC \uD568\uAED8\uB9C8\uC774\uD06C\uB85C\uC18C\uD504\uD2B8\uC5D0\uC11C 5\uBA85\uC758 \uD300\uC6D0\uB4E4\uACFC \uD568\uAED8\uB9C8\uC774\uD06C\uB85C\uC18C\uD504\uD2B8\uC5D0\uC11C 5\uBA85\uC758 \uD300\uC6D0\uB4E4\uACFC")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Timeline"].Item, {
    color: "gray",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, "\uB9C8\uC774\uD06C\uB85C\uC18C\uD504\uD2B8 \uC778\uD134"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, "\uB9C8\uC774\uD06C\uB85C\uC18C\uD504\uD2B8\uC5D0\uC11C 5\uBA85\uC758 \uD300\uC6D0\uB4E4\uACFC \uD568\uAED8 \uB9C8\uC774\uD06C\uB85C\uC18C\uD504\uD2B8\uC5D0\uC11C 5\uBA85\uC758 \uD300\uC6D0\uB4E4\uACFC \uD568\uAED8\uB9C8\uC774\uD06C\uB85C\uC18C\uD504\uD2B8\uC5D0\uC11C 5\uBA85\uC758 \uD300\uC6D0\uB4E4\uACFC \uD568\uAED8\uB9C8\uC774\uD06C\uB85C\uC18C\uD504\uD2B8\uC5D0\uC11C 5\uBA85\uC758 \uD300\uC6D0\uB4E4\uACFC \uD568\uAED8\uB9C8\uC774\uD06C\uB85C\uC18C\uD504\uD2B8\uC5D0\uC11C 5\uBA85\uC758 \uD300\uC6D0\uB4E4\uACFC \uD568\uAED8\uB9C8\uC774\uD06C\uB85C\uC18C\uD504\uD2B8\uC5D0\uC11C 5\uBA85\uC758 \uD300\uC6D0\uB4E4\uACFC \uD568\uAED8\uB9C8\uC774\uD06C\uB85C\uC18C\uD504\uD2B8\uC5D0\uC11C 5\uBA85\uC758 \uD300\uC6D0\uB4E4\uACFC")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Timeline"].Item, {
    color: "gray",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, "\uB9C8\uC774\uD06C\uB85C\uC18C\uD504\uD2B8 \uC778\uD134"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "\uB9C8\uC774\uD06C\uB85C\uC18C\uD504\uD2B8\uC5D0\uC11C 5\uBA85\uC758 \uD300\uC6D0\uB4E4\uACFC \uD568\uAED8 \uB9C8\uC774\uD06C\uB85C\uC18C\uD504\uD2B8\uC5D0\uC11C 5\uBA85\uC758 \uD300\uC6D0\uB4E4\uACFC \uD568\uAED8\uB9C8\uC774\uD06C\uB85C\uC18C\uD504\uD2B8\uC5D0\uC11C 5\uBA85\uC758 \uD300\uC6D0\uB4E4\uACFC \uD568\uAED8\uB9C8\uC774\uD06C\uB85C\uC18C\uD504\uD2B8\uC5D0\uC11C 5\uBA85\uC758 \uD300\uC6D0\uB4E4\uACFC \uD568\uAED8\uB9C8\uC774\uD06C\uB85C\uC18C\uD504\uD2B8\uC5D0\uC11C 5\uBA85\uC758 \uD300\uC6D0\uB4E4\uACFC \uD568\uAED8\uB9C8\uC774\uD06C\uB85C\uC18C\uD504\uD2B8\uC5D0\uC11C 5\uBA85\uC758 \uD300\uC6D0\uB4E4\uACFC \uD568\uAED8\uB9C8\uC774\uD06C\uB85C\uC18C\uD504\uD2B8\uC5D0\uC11C 5\uBA85\uC758 \uD300\uC6D0\uB4E4\uACFC")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 11,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginTop: '5vh',
      background: '#FFFFFF',
      border: '1px solid #E9E9E9',
      boxSizing: 'border-box'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: {
      marginTop: '30px',
      marginLeft: '30px',
      fontFamily: 'Noto Sans KR',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '20px',
      lineHeight: '29px',
      color: '#5F5F5F',
      mixBlendMode: 'normal'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, "\uC5C5\uBB34 \uBC0F \uC2A4\uD0AC"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    style: {
      width: '3vw'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, "\uAC00\uB098\uB2E4\uB77C\uB9C8\uBC14\uC0AC\uC544"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    style: {
      marginTop: '5px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, "\uAC00\uB098\uB2E4\uB77C\uB9C8\uBC14\uC0AC\uC544"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    style: {
      marginTop: '5px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, "\uAC00\uB098\uB2E4\uB77C\uB9C8\uBC14\uC0AC\uC544"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    style: {
      marginTop: '5px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, "\uAC00\uB098\uB2E4\uB77C\uB9C8\uBC14\uC0AC\uC544")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 11,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginTop: '5vh',
      background: '#FFFFFF',
      border: '1px solid #E9E9E9',
      boxSizing: 'border-box'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: {
      marginTop: '30px',
      marginLeft: '30px',
      fontFamily: 'Noto Sans KR',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '20px',
      lineHeight: '29px',
      color: '#5F5F5F',
      mixBlendMode: 'normal'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, "\uC218\uC0C1"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    orientation: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, "\uAC00\uB098\uB2E4\uB77C\uB9C8\uBC14\uC0AC\uC544"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    style: {
      marginTop: '5px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, "\uAC00\uB098\uB2E4\uB77C\uB9C8\uBC14\uC0AC\uC544"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    style: {
      marginTop: '5px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, "\uAC00\uB098\uB2E4\uB77C\uB9C8\uBC14\uC0AC\uC544"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    style: {
      marginTop: '5px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, "\uAC00\uB098\uB2E4\uB77C\uB9C8\uBC14\uC0AC\uC544"))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ })

})
//# sourceMappingURL=profile.js.d5e40b61d4392f4b635c.hot-update.js.map