"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _react = _interopRequireDefault(require("react"));
var _styles = require("./styles");
var _reactNativeReanimated = _interopRequireDefault(require("react-native-reanimated"));
var _reactNativeGestureHandler = require("react-native-gesture-handler");
var _maskedView = _interopRequireDefault(require("@react-native-masked-view/masked-view"));
var _useTimePicker = _interopRequireDefault(require("./useTimePicker"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const TimePicker = _ref => {
  let {
    onPressCancel = () => {},
    onPressConfirm = () => {},
    visible = false,
    handelChange = () => {},
    style = {},
    confirmButtonText = 'Ok',
    cancelButtonText = 'Cancel',
    header = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null),
    ...other
  } = _ref;
  const {
    hoursAnimatedStyle,
    minutesAnimatedStyle,
    typeAnimatedStyle,
    hoursGestureHandler,
    minutesGestureHandler,
    typeGestureHandler,
    Hours,
    minutes,
    onConfirm
  } = (0, _useTimePicker.default)(handelChange, onPressConfirm);
  const RenderTime = _ref2 => {
    let {
      item,
      index
    } = _ref2;
    return /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.View, {
      style: [_styles.styles.item, style?.timeTextContainer, {
        marginTop: index === 0 ? 50 : 0
      }]
    }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: [_styles.styles.time, style?.timeText]
    }, item));
  };
  const RenderedHours = () => {
    return /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.View, {
      style: [hoursAnimatedStyle, _styles.styles.items_container, {
        alignItems: 'flex-end'
      }]
    }, Hours.map((item, index) => {
      return /*#__PURE__*/_react.default.createElement(RenderTime, {
        key: index,
        item: item,
        index: index
      });
    }));
  };
  const RenderedMinutes = () => {
    return /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.View, {
      style: [minutesAnimatedStyle, _styles.styles.items_container]
    }, minutes.map((item, index) => /*#__PURE__*/_react.default.createElement(RenderTime, {
      key: index,
      item: item,
      index: index
    })));
  };
  const RenderedType = () => {
    return /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.View, {
      style: [typeAnimatedStyle, _styles.styles.items_container]
    }, ['AM', 'PM'].map((item, index) => /*#__PURE__*/_react.default.createElement(RenderTime, {
      key: index,
      item: item,
      index: index
    })));
  };
  const maskElement = /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.styles.masked_elemnt_wrapper
  }, /*#__PURE__*/_react.default.createElement(RenderedHours, null), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _styles.styles.time_seprator
  }, ":"), /*#__PURE__*/_react.default.createElement(RenderedMinutes, null), /*#__PURE__*/_react.default.createElement(RenderedType, null));
  return /*#__PURE__*/_react.default.createElement(_reactNative.Modal, _extends({}, other, {
    transparent: true,
    visible: visible
  }), /*#__PURE__*/_react.default.createElement(_reactNativeGestureHandler.GestureHandlerRootView, {
    style: _styles.styles.back_drop
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.styles.root
  }, header, /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_maskedView.default, {
    androidRenderingMode: 'software',
    maskElement
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.styles.masked_view
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.styles.maked_view_black
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.styles.masked_view
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.styles.absolute_container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.styles.gesture_wrapper
  }, /*#__PURE__*/_react.default.createElement(_reactNativeGestureHandler.PanGestureHandler, {
    onGestureEvent: hoursGestureHandler
  }, /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.View, {
    style: _reactNative.StyleSheet.absoluteFillObject
  }))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.styles.gesture_wrapper
  }, /*#__PURE__*/_react.default.createElement(_reactNativeGestureHandler.PanGestureHandler, {
    onGestureEvent: minutesGestureHandler
  }, /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.View, {
    style: _reactNative.StyleSheet.absoluteFillObject
  }))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.styles.gesture_wrapper
  }, /*#__PURE__*/_react.default.createElement(_reactNativeGestureHandler.PanGestureHandler, {
    onGestureEvent: typeGestureHandler
  }, /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.View, {
    style: _reactNative.StyleSheet.absoluteFillObject
  }))))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [_styles.styles.buttons, style.buttonsContainer]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    onPress: onPressCancel,
    style: [style?.footerButton, style.cancelButton]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [_styles.styles.btn_txt, style?.footerButtonsText, style?.cancelButtonText]
  }, cancelButtonText)), /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    onPress: onConfirm,
    style: [style?.footerButton, style.confirmButton]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [_styles.styles.btn_txt, style?.footerButtonsText, style?.confirmButtonText]
  }, confirmButtonText))))));
};
var _default = exports.default = TimePicker;
//# sourceMappingURL=TimePicker.js.map