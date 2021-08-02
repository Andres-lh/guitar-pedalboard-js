self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Programming_guitar_pedalboard_js_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Programming_guitar_pedalboard_js_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_Programming_guitar_pedalboard_js_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_Programming_guitar_pedalboard_js_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\Programming\\guitar-pedalboard-js\\pages\\index.js";

function Home() {
  var setupContext = /*#__PURE__*/function () {
    var _ref = (0,D_Programming_guitar_pedalboard_js_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/D_Programming_guitar_pedalboard_js_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var AudioContext, context, gainNode, bassEQ, midEQ, trebleEQ, guitar, source;
      return D_Programming_guitar_pedalboard_js_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              AudioContext = window.AudioContext || window.webkitAudioContext;
              context = new AudioContext();
              gainNode = new GainNode(context, {
                gain: 10
              });
              bassEQ = new BiquadFilterNode(context, {
                type: 'lowshelf',
                frequency: 500,
                gain: 5
              });
              midEQ = new BiquadFilterNode(context, {
                type: 'peaking',
                Q: Math.SQRT1_2,
                frequency: 1500,
                gain: 5
              });
              trebleEQ = new BiquadFilterNode(context, {
                type: 'highshelf',
                frequency: 3000,
                gain: 5
              });
              _context.next = 9;
              return getGuitar();

            case 9:
              guitar = _context.sent;

              if (!(context.state === 'suspended')) {
                _context.next = 13;
                break;
              }

              _context.next = 13;
              return context.resume();

            case 13:
              source = context.createMediaStreamSource(guitar);
              source.connect(bassEQ).connect(midEQ).connect(trebleEQ).connect(gainNode).connect(context.destination);
              _context.next = 20;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0.message);

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 17]]);
    }));

    return function setupContext() {
      return _ref.apply(this, arguments);
    };
  }();

  var getGuitar = function getGuitar() {
    return navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: false,
        googEchoCancellation: false,
        googAutoGainControl: false,
        googNoiseSuppression: false,
        googHighpassFilter: false,
        latency: 0
      }
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "hola"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: setupContext,
      children: "Play"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 9
  }, this);
}

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInNldHVwQ29udGV4dCIsIkF1ZGlvQ29udGV4dCIsIndpbmRvdyIsIndlYmtpdEF1ZGlvQ29udGV4dCIsImNvbnRleHQiLCJnYWluTm9kZSIsIkdhaW5Ob2RlIiwiZ2FpbiIsImJhc3NFUSIsIkJpcXVhZEZpbHRlck5vZGUiLCJ0eXBlIiwiZnJlcXVlbmN5IiwibWlkRVEiLCJRIiwiTWF0aCIsIlNRUlQxXzIiLCJ0cmVibGVFUSIsImdldEd1aXRhciIsImd1aXRhciIsInN0YXRlIiwicmVzdW1lIiwic291cmNlIiwiY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2UiLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsImF1ZGlvIiwiZWNob0NhbmNlbGxhdGlvbiIsImdvb2dFY2hvQ2FuY2VsbGF0aW9uIiwiZ29vZ0F1dG9HYWluQ29udHJvbCIsImdvb2dOb2lzZVN1cHByZXNzaW9uIiwiZ29vZ0hpZ2hwYXNzRmlsdGVyIiwibGF0ZW5jeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsU0FBU0EsSUFBVCxHQUFnQjtBQUVaLE1BQU1DLFlBQVk7QUFBQSx1UkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVQQywwQkFGTyxHQUVRQyxNQUFNLENBQUNELFlBQVAsSUFBdUJDLE1BQU0sQ0FBQ0Msa0JBRnRDO0FBR1BDLHFCQUhPLEdBR0csSUFBSUgsWUFBSixFQUhIO0FBSVBJLHNCQUpPLEdBSUksSUFBSUMsUUFBSixDQUFhRixPQUFiLEVBQXNCO0FBQUVHLG9CQUFJLEVBQUU7QUFBUixlQUF0QixDQUpKO0FBS1BDLG9CQUxPLEdBS0UsSUFBSUMsZ0JBQUosQ0FBcUJMLE9BQXJCLEVBQThCO0FBQ3pDTSxvQkFBSSxFQUFFLFVBRG1DO0FBRXpDQyx5QkFBUyxFQUFFLEdBRjhCO0FBR3pDSixvQkFBSSxFQUFFO0FBSG1DLGVBQTlCLENBTEY7QUFVUEssbUJBVk8sR0FVQyxJQUFJSCxnQkFBSixDQUFxQkwsT0FBckIsRUFBOEI7QUFDeENNLG9CQUFJLEVBQUUsU0FEa0M7QUFFeENHLGlCQUFDLEVBQUVDLElBQUksQ0FBQ0MsT0FGZ0M7QUFHeENKLHlCQUFTLEVBQUUsSUFINkI7QUFJeENKLG9CQUFJLEVBQUU7QUFKa0MsZUFBOUIsQ0FWRDtBQWdCUFMsc0JBaEJPLEdBZ0JJLElBQUlQLGdCQUFKLENBQXFCTCxPQUFyQixFQUE4QjtBQUMzQ00sb0JBQUksRUFBRSxXQURxQztBQUUzQ0MseUJBQVMsRUFBRSxJQUZnQztBQUczQ0osb0JBQUksRUFBRTtBQUhxQyxlQUE5QixDQWhCSjtBQUFBO0FBQUEscUJBcUJRVSxTQUFTLEVBckJqQjs7QUFBQTtBQXFCUEMsb0JBckJPOztBQUFBLG9CQXNCVGQsT0FBTyxDQUFDZSxLQUFSLEtBQWtCLFdBdEJUO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBdUJIZixPQUFPLENBQUNnQixNQUFSLEVBdkJHOztBQUFBO0FBeUJQQyxvQkF6Qk8sR0F5QkVqQixPQUFPLENBQUNrQix1QkFBUixDQUFnQ0osTUFBaEMsQ0F6QkY7QUEwQmJHLG9CQUFNLENBQ0RFLE9BREwsQ0FDYWYsTUFEYixFQUVLZSxPQUZMLENBRWFYLEtBRmIsRUFHS1csT0FITCxDQUdhUCxRQUhiLEVBSUtPLE9BSkwsQ0FJYWxCLFFBSmIsRUFLS2tCLE9BTEwsQ0FLYW5CLE9BQU8sQ0FBQ29CLFdBTHJCO0FBMUJhO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBaUNiQyxxQkFBTyxDQUFDQyxHQUFSLENBQVksWUFBTUMsT0FBbEI7O0FBakNhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVozQixZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQXNDQSxNQUFNaUIsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUNwQixXQUFPVyxTQUFTLENBQUNDLFlBQVYsQ0FBdUJDLFlBQXZCLENBQW9DO0FBQ3ZDQyxXQUFLLEVBQUc7QUFDSkMsd0JBQWdCLEVBQUUsS0FEZDtBQUVKQyw0QkFBb0IsRUFBRSxLQUZsQjtBQUdKQywyQkFBbUIsRUFBRSxLQUhqQjtBQUlKQyw0QkFBb0IsRUFBRSxLQUpsQjtBQUtKQywwQkFBa0IsRUFBRSxLQUxoQjtBQU1KQyxlQUFPLEVBQUU7QUFOTDtBQUQrQixLQUFwQyxDQUFQO0FBVUgsR0FYRDs7QUFhQSxzQkFDSTtBQUFBLDRCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFRLGFBQU8sRUFBRXJDLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFNSDs7S0EzRFFELEk7QUE2RFQsK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGMyMjdhNDJhNmEzNmJlN2YzYzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5mdW5jdGlvbiBIb21lKCkge1xyXG4gICAgXHJcbiAgICBjb25zdCBzZXR1cENvbnRleHQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0O1xyXG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dDtcclxuICAgICAgICAgICAgY29uc3QgZ2Fpbk5vZGUgPSBuZXcgR2Fpbk5vZGUoY29udGV4dCwgeyBnYWluOiAxMH0pXHJcbiAgICAgICAgICAgIGNvbnN0IGJhc3NFUSA9IG5ldyBCaXF1YWRGaWx0ZXJOb2RlKGNvbnRleHQsIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdsb3dzaGVsZicsXHJcbiAgICAgICAgICAgICAgICBmcmVxdWVuY3k6IDUwMCxcclxuICAgICAgICAgICAgICAgIGdhaW46IDVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY29uc3QgbWlkRVEgPSBuZXcgQmlxdWFkRmlsdGVyTm9kZShjb250ZXh0LCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAncGVha2luZycsXHJcbiAgICAgICAgICAgICAgICBROiBNYXRoLlNRUlQxXzIsXHJcbiAgICAgICAgICAgICAgICBmcmVxdWVuY3k6IDE1MDAsXHJcbiAgICAgICAgICAgICAgICBnYWluOiA1XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNvbnN0IHRyZWJsZUVRID0gbmV3IEJpcXVhZEZpbHRlck5vZGUoY29udGV4dCwge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2hpZ2hzaGVsZicsXHJcbiAgICAgICAgICAgICAgICBmcmVxdWVuY3k6IDMwMDAsXHJcbiAgICAgICAgICAgICAgICBnYWluOiA1XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNvbnN0IGd1aXRhciA9IGF3YWl0IGdldEd1aXRhcigpO1xyXG4gICAgICAgICAgICBpZiAoY29udGV4dC5zdGF0ZSA9PT0gJ3N1c3BlbmRlZCcpIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGNvbnRleHQucmVzdW1lKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBzb3VyY2UgPSBjb250ZXh0LmNyZWF0ZU1lZGlhU3RyZWFtU291cmNlKGd1aXRhcilcclxuICAgICAgICAgICAgc291cmNlXHJcbiAgICAgICAgICAgICAgICAuY29ubmVjdChiYXNzRVEpXHJcbiAgICAgICAgICAgICAgICAuY29ubmVjdChtaWRFUSlcclxuICAgICAgICAgICAgICAgIC5jb25uZWN0KHRyZWJsZUVRKVxyXG4gICAgICAgICAgICAgICAgLmNvbm5lY3QoZ2Fpbk5vZGUpXHJcbiAgICAgICAgICAgICAgICAuY29ubmVjdChjb250ZXh0LmRlc3RpbmF0aW9uKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpXHJcbiAgICAgICAgfSAgXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBjb25zdCBnZXRHdWl0YXIgPSAoKSA9PiB7IFxyXG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7XHJcbiAgICAgICAgICAgIGF1ZGlvIDoge1xyXG4gICAgICAgICAgICAgICAgZWNob0NhbmNlbGxhdGlvbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBnb29nRWNob0NhbmNlbGxhdGlvbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBnb29nQXV0b0dhaW5Db250cm9sOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGdvb2dOb2lzZVN1cHByZXNzaW9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGdvb2dIaWdocGFzc0ZpbHRlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBsYXRlbmN5OiAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPmhvbGE8L2gxPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NldHVwQ29udGV4dH0+UGxheTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9