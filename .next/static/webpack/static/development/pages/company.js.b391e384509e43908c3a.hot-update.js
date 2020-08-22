webpackHotUpdate("static\\development\\pages\\company.js",{

/***/ "./pages/company.js":
/*!**************************!*\
  !*** ./pages/company.js ***!
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
/* harmony import */ var _styles_pageMenuStyle_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/pageMenuStyle.css */ "./styles/pageMenuStyle.css");
/* harmony import */ var _styles_pageMenuStyle_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_pageMenuStyle_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_UserProfile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/UserProfile */ "./components/UserProfile.js");

var _jsxFileName = "C:\\Users\\user\\Desktop\\KME\\EwhaNetNode\\EwhaReactNodeCh5\uC644\uC131\\front\\pages\\company.js";








var Company = function Company() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var Search = antd__WEBPACK_IMPORTED_MODULE_2__["Input"].Search;
  var Option = antd__WEBPACK_IMPORTED_MODULE_2__["Select"].Option;
  var colleageData = ['디자인', 'IT계열', '전자'];
  var majorData = {
    '디자인': ['영상디자인', '웹디자인'],
    'IT계열': ['DBA', '웹개발'],
    '전자': ['반도체', '통신']
  };
  var companys = [{
    sumnail: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
      style: {
        backgroundColor: '#C4C4C4',
        verticalAlign: 'middle'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "\uB85C\uACE0"),
    title: '삼성전자',
    alumni: 150
  }, {
    sumnail: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
      style: {
        backgroundColor: '#C4C4C4',
        verticalAlign: 'middle'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "\uB85C\uACE0"),
    title: '삼성전자',
    alumni: 150
  }, {
    sumnail: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
      style: {
        backgroundColor: '#C4C4C4',
        verticalAlign: 'middle'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "\uB85C\uACE0"),
    title: '삼성전자',
    alumni: 150
  }, {
    sumnail: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
      style: {
        backgroundColor: '#C4C4C4',
        verticalAlign: 'middle'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, "\uB85C\uACE0"),
    title: '삼성전자',
    alumni: 150
  }, {
    sumnail: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
      style: {
        backgroundColor: '#C4C4C4',
        verticalAlign: 'middle'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, "\uB85C\uACE0"),
    title: '삼성전자',
    alumni: 150
  }, {
    sumnail: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
      style: {
        backgroundColor: '#C4C4C4',
        verticalAlign: 'middle'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "\uB85C\uACE0"),
    title: '삼성전자',
    alumni: 150
  }, {
    sumnail: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
      style: {
        backgroundColor: '#C4C4C4',
        verticalAlign: 'middle'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, "\uB85C\uACE0"),
    title: '삼성전자',
    alumni: 150
  }, {
    sumnail: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
      style: {
        backgroundColor: '#C4C4C4',
        verticalAlign: 'middle'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "\uB85C\uACE0"),
    title: '삼성전자',
    alumni: 150
  }, {
    sumnail: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
      style: {
        backgroundColor: '#C4C4C4',
        verticalAlign: 'middle'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "\uB85C\uACE0"),
    title: '삼성전자',
    alumni: 150
  }, {
    sumnail: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
      style: {
        backgroundColor: '#C4C4C4',
        verticalAlign: 'middle'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, "\uB85C\uACE0"),
    title: '삼성전자',
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

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UserProfile__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
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
      lineNumber: 46
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
      lineNumber: 47
    },
    __self: this
  }, "\uD604\uC9C1\uC790\uB85C \uD65C\uB3D9 \uC911\uC778 \uC120\uBC30\uB4E4\uC758 \uC9C4\uC194\uD55C \uC774\uC57C\uAE30\uB97C \uD655\uC778\uD574\uBCF4\uC138\uC694!", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Search, {
    placeholder: "\uAE30\uC5C5\uBA85 \uAC80\uC0C9\uD558\uAE30",
    onSearch: function onSearch(value) {
      return console.log(value);
    },
    style: {
      width: '50vw',
      marginTop: '3vh'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    style: {
      background: '#222222',
      color: '#FFFFFF',
      marginLeft: '1vw'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "\uCD94\uAC00\uD558\uAE30 +"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
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
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    className: "pageMenuStyle",
    style: {
      color: '#00462A'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "\uAE30\uC5C5"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      textAlign: 'center',
      background: '#FFFFFF',
      height: '10vh',
      paddingTop: '3vh'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "1\uCC28 \uBD84\uB958", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Select"], {
    defaultValue: colleageData[0],
    style: {
      width: '15vw',
      marginLeft: '3vw',
      marginRight: '10vw'
    },
    onChange: handleColleageChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, colleageData.map(function (colleage) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Option, {
      key: colleage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, colleage);
  })), "2\uCC28 \uBD84\uB958", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Select"], {
    style: {
      marginLeft: '3vw',
      width: '15vw',
      marginRight: '3vw'
    },
    value: major,
    onChange: onMajorChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, colleage.map(function (major) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Option, {
      key: major,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
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
        lineNumber: 92
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
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
      lineNumber: 94
    },
    __self: this
  }, "\uC870\uD68C\uC218 TOP\uAE30\uC5C5"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: '5vh',
      marginLeft: '7vw',
      marginRight: '7vw'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
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
    dataSource: companys,
    renderItem: function renderItem(item) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/companyspec",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, item.sumnail, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, item.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "\uB3D9\uBB38 ", item.alumni, "\uBA85")))));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Company);

/***/ })

})
//# sourceMappingURL=company.js.b391e384509e43908c3a.hot-update.js.map