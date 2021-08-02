(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "D:\\Programming\\guitar-pedalboard-js\\pages\\index.js";

function Home() {
  const setupContext = async () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const context = new AudioContext();
      const gainNode = new GainNode(context, {
        gain: 10
      });
      const bassEQ = new BiquadFilterNode(context, {
        type: 'lowshelf',
        frequency: 500,
        gain: 5
      });
      const midEQ = new BiquadFilterNode(context, {
        type: 'peaking',
        Q: Math.SQRT1_2,
        frequency: 1500,
        gain: 5
      });
      const trebleEQ = new BiquadFilterNode(context, {
        type: 'highshelf',
        frequency: 3000,
        gain: 5
      });
      const guitar = await getGuitar();

      if (context.state === 'suspended') {
        await context.resume();
      }

      const source = context.createMediaStreamSource(guitar);
      source.connect(bassEQ).connect(midEQ).connect(trebleEQ).connect(gainNode).connect(context.destination);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getGuitar = () => {
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

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndWl0YXItcGVkYWxib2FyZC1qcy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2d1aXRhci1wZWRhbGJvYXJkLWpzL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiSG9tZSIsInNldHVwQ29udGV4dCIsIkF1ZGlvQ29udGV4dCIsIndpbmRvdyIsIndlYmtpdEF1ZGlvQ29udGV4dCIsImNvbnRleHQiLCJnYWluTm9kZSIsIkdhaW5Ob2RlIiwiZ2FpbiIsImJhc3NFUSIsIkJpcXVhZEZpbHRlck5vZGUiLCJ0eXBlIiwiZnJlcXVlbmN5IiwibWlkRVEiLCJRIiwiTWF0aCIsIlNRUlQxXzIiLCJ0cmVibGVFUSIsImd1aXRhciIsImdldEd1aXRhciIsInN0YXRlIiwicmVzdW1lIiwic291cmNlIiwiY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2UiLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwiYXVkaW8iLCJlY2hvQ2FuY2VsbGF0aW9uIiwiZ29vZ0VjaG9DYW5jZWxsYXRpb24iLCJnb29nQXV0b0dhaW5Db250cm9sIiwiZ29vZ05vaXNlU3VwcHJlc3Npb24iLCJnb29nSGlnaHBhc3NGaWx0ZXIiLCJsYXRlbmN5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsU0FBU0EsSUFBVCxHQUFnQjtBQUVaLFFBQU1DLFlBQVksR0FBRyxZQUFZO0FBQzdCLFFBQUk7QUFDQSxZQUFNQyxZQUFZLEdBQUdDLE1BQU0sQ0FBQ0QsWUFBUCxJQUF1QkMsTUFBTSxDQUFDQyxrQkFBbkQ7QUFDQSxZQUFNQyxPQUFPLEdBQUcsSUFBSUgsWUFBSixFQUFoQjtBQUNBLFlBQU1JLFFBQVEsR0FBRyxJQUFJQyxRQUFKLENBQWFGLE9BQWIsRUFBc0I7QUFBRUcsWUFBSSxFQUFFO0FBQVIsT0FBdEIsQ0FBakI7QUFDQSxZQUFNQyxNQUFNLEdBQUcsSUFBSUMsZ0JBQUosQ0FBcUJMLE9BQXJCLEVBQThCO0FBQ3pDTSxZQUFJLEVBQUUsVUFEbUM7QUFFekNDLGlCQUFTLEVBQUUsR0FGOEI7QUFHekNKLFlBQUksRUFBRTtBQUhtQyxPQUE5QixDQUFmO0FBS0EsWUFBTUssS0FBSyxHQUFHLElBQUlILGdCQUFKLENBQXFCTCxPQUFyQixFQUE4QjtBQUN4Q00sWUFBSSxFQUFFLFNBRGtDO0FBRXhDRyxTQUFDLEVBQUVDLElBQUksQ0FBQ0MsT0FGZ0M7QUFHeENKLGlCQUFTLEVBQUUsSUFINkI7QUFJeENKLFlBQUksRUFBRTtBQUprQyxPQUE5QixDQUFkO0FBTUEsWUFBTVMsUUFBUSxHQUFHLElBQUlQLGdCQUFKLENBQXFCTCxPQUFyQixFQUE4QjtBQUMzQ00sWUFBSSxFQUFFLFdBRHFDO0FBRTNDQyxpQkFBUyxFQUFFLElBRmdDO0FBRzNDSixZQUFJLEVBQUU7QUFIcUMsT0FBOUIsQ0FBakI7QUFLQSxZQUFNVSxNQUFNLEdBQUcsTUFBTUMsU0FBUyxFQUE5Qjs7QUFDQSxVQUFJZCxPQUFPLENBQUNlLEtBQVIsS0FBa0IsV0FBdEIsRUFBbUM7QUFDL0IsY0FBTWYsT0FBTyxDQUFDZ0IsTUFBUixFQUFOO0FBQ0g7O0FBQ0QsWUFBTUMsTUFBTSxHQUFHakIsT0FBTyxDQUFDa0IsdUJBQVIsQ0FBZ0NMLE1BQWhDLENBQWY7QUFDQUksWUFBTSxDQUNERSxPQURMLENBQ2FmLE1BRGIsRUFFS2UsT0FGTCxDQUVhWCxLQUZiLEVBR0tXLE9BSEwsQ0FHYVAsUUFIYixFQUlLTyxPQUpMLENBSWFsQixRQUpiLEVBS0trQixPQUxMLENBS2FuQixPQUFPLENBQUNvQixXQUxyQjtBQU1ILEtBL0JELENBK0JFLE9BQU9DLEtBQVAsRUFBYztBQUNaQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBSyxDQUFDRyxPQUFsQjtBQUNIO0FBQ0osR0FuQ0Q7O0FBc0NBLFFBQU1WLFNBQVMsR0FBRyxNQUFNO0FBQ3BCLFdBQU9XLFNBQVMsQ0FBQ0MsWUFBVixDQUF1QkMsWUFBdkIsQ0FBb0M7QUFDdkNDLFdBQUssRUFBRztBQUNKQyx3QkFBZ0IsRUFBRSxLQURkO0FBRUpDLDRCQUFvQixFQUFFLEtBRmxCO0FBR0pDLDJCQUFtQixFQUFFLEtBSGpCO0FBSUpDLDRCQUFvQixFQUFFLEtBSmxCO0FBS0pDLDBCQUFrQixFQUFFLEtBTGhCO0FBTUpDLGVBQU8sRUFBRTtBQU5MO0FBRCtCLEtBQXBDLENBQVA7QUFVSCxHQVhEOztBQWFBLHNCQUNJO0FBQUEsNEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQVEsYUFBTyxFQUFFdEMsWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQU1IOztBQUVELCtEQUFlRCxJQUFmLEU7Ozs7Ozs7Ozs7O0FDOURBLG1EIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgICBcclxuICAgIGNvbnN0IHNldHVwQ29udGV4dCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBBdWRpb0NvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgQXVkaW9Db250ZXh0O1xyXG4gICAgICAgICAgICBjb25zdCBnYWluTm9kZSA9IG5ldyBHYWluTm9kZShjb250ZXh0LCB7IGdhaW46IDEwfSlcclxuICAgICAgICAgICAgY29uc3QgYmFzc0VRID0gbmV3IEJpcXVhZEZpbHRlck5vZGUoY29udGV4dCwge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2xvd3NoZWxmJyxcclxuICAgICAgICAgICAgICAgIGZyZXF1ZW5jeTogNTAwLFxyXG4gICAgICAgICAgICAgICAgZ2FpbjogNVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjb25zdCBtaWRFUSA9IG5ldyBCaXF1YWRGaWx0ZXJOb2RlKGNvbnRleHQsIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdwZWFraW5nJyxcclxuICAgICAgICAgICAgICAgIFE6IE1hdGguU1FSVDFfMixcclxuICAgICAgICAgICAgICAgIGZyZXF1ZW5jeTogMTUwMCxcclxuICAgICAgICAgICAgICAgIGdhaW46IDVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY29uc3QgdHJlYmxlRVEgPSBuZXcgQmlxdWFkRmlsdGVyTm9kZShjb250ZXh0LCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnaGlnaHNoZWxmJyxcclxuICAgICAgICAgICAgICAgIGZyZXF1ZW5jeTogMzAwMCxcclxuICAgICAgICAgICAgICAgIGdhaW46IDVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY29uc3QgZ3VpdGFyID0gYXdhaXQgZ2V0R3VpdGFyKCk7XHJcbiAgICAgICAgICAgIGlmIChjb250ZXh0LnN0YXRlID09PSAnc3VzcGVuZGVkJykge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgY29udGV4dC5yZXN1bWUoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZSA9IGNvbnRleHQuY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2UoZ3VpdGFyKVxyXG4gICAgICAgICAgICBzb3VyY2VcclxuICAgICAgICAgICAgICAgIC5jb25uZWN0KGJhc3NFUSlcclxuICAgICAgICAgICAgICAgIC5jb25uZWN0KG1pZEVRKVxyXG4gICAgICAgICAgICAgICAgLmNvbm5lY3QodHJlYmxlRVEpXHJcbiAgICAgICAgICAgICAgICAuY29ubmVjdChnYWluTm9kZSlcclxuICAgICAgICAgICAgICAgIC5jb25uZWN0KGNvbnRleHQuZGVzdGluYXRpb24pXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSlcclxuICAgICAgICB9ICBcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIGNvbnN0IGdldEd1aXRhciA9ICgpID0+IHsgXHJcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHtcclxuICAgICAgICAgICAgYXVkaW8gOiB7XHJcbiAgICAgICAgICAgICAgICBlY2hvQ2FuY2VsbGF0aW9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGdvb2dFY2hvQ2FuY2VsbGF0aW9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGdvb2dBdXRvR2FpbkNvbnRyb2w6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZ29vZ05vaXNlU3VwcHJlc3Npb246IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZ29vZ0hpZ2hwYXNzRmlsdGVyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxhdGVuY3k6IDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+aG9sYTwvaDE+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2V0dXBDb250ZXh0fT5QbGF5PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==