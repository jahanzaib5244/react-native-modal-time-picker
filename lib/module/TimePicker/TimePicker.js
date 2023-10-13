function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { View, Text, Modal, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Animated from 'react-native-reanimated';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import MaskedView from '@react-native-masked-view/masked-view';
import useTimePicker from './useTimePicker';
const TimePicker = _ref => {
  let {
    onPressCancel = () => {},
    onPressConfirm = () => {},
    visible = false,
    handelChange = () => {},
    style = {},
    confirmButtonText = 'Ok',
    cancelButtonText = 'Cancel',
    header = /*#__PURE__*/React.createElement(React.Fragment, null),
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
  } = useTimePicker(handelChange, onPressConfirm);
  const RenderTime = _ref2 => {
    let {
      item,
      index
    } = _ref2;
    return /*#__PURE__*/React.createElement(Animated.View, {
      style: [styles.item, style?.timeTextContainer, {
        marginTop: index === 0 ? 50 : 0
      }]
    }, /*#__PURE__*/React.createElement(Text, {
      style: [styles.time, style?.timeText]
    }, item));
  };
  const RenderedHours = () => {
    return /*#__PURE__*/React.createElement(Animated.View, {
      style: [hoursAnimatedStyle, styles.items_container, {
        alignItems: 'flex-end'
      }]
    }, Hours.map((item, index) => {
      return /*#__PURE__*/React.createElement(RenderTime, {
        key: index,
        item: item,
        index: index
      });
    }));
  };
  const RenderedMinutes = () => {
    return /*#__PURE__*/React.createElement(Animated.View, {
      style: [minutesAnimatedStyle, styles.items_container]
    }, minutes.map((item, index) => /*#__PURE__*/React.createElement(RenderTime, {
      key: index,
      item: item,
      index: index
    })));
  };
  const RenderedType = () => {
    return /*#__PURE__*/React.createElement(Animated.View, {
      style: [typeAnimatedStyle, styles.items_container]
    }, ['AM', 'PM'].map((item, index) => /*#__PURE__*/React.createElement(RenderTime, {
      key: index,
      item: item,
      index: index
    })));
  };
  const maskElement = /*#__PURE__*/React.createElement(View, {
    style: styles.masked_elemnt_wrapper
  }, /*#__PURE__*/React.createElement(RenderedHours, null), /*#__PURE__*/React.createElement(Text, {
    style: styles.time_seprator
  }, ":"), /*#__PURE__*/React.createElement(RenderedMinutes, null), /*#__PURE__*/React.createElement(RenderedType, null));
  return /*#__PURE__*/React.createElement(Modal, _extends({}, other, {
    transparent: true,
    visible: visible
  }), /*#__PURE__*/React.createElement(GestureHandlerRootView, {
    style: styles.back_drop
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.root
  }, header, /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(MaskedView, {
    androidRenderingMode: 'software',
    maskElement
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.masked_view
  }), /*#__PURE__*/React.createElement(View, {
    style: styles.maked_view_black
  }), /*#__PURE__*/React.createElement(View, {
    style: styles.masked_view
  })), /*#__PURE__*/React.createElement(View, {
    style: styles.absolute_container
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.gesture_wrapper
  }, /*#__PURE__*/React.createElement(PanGestureHandler, {
    onGestureEvent: hoursGestureHandler
  }, /*#__PURE__*/React.createElement(Animated.View, {
    style: StyleSheet.absoluteFillObject
  }))), /*#__PURE__*/React.createElement(View, {
    style: styles.gesture_wrapper
  }, /*#__PURE__*/React.createElement(PanGestureHandler, {
    onGestureEvent: minutesGestureHandler
  }, /*#__PURE__*/React.createElement(Animated.View, {
    style: StyleSheet.absoluteFillObject
  }))), /*#__PURE__*/React.createElement(View, {
    style: styles.gesture_wrapper
  }, /*#__PURE__*/React.createElement(PanGestureHandler, {
    onGestureEvent: typeGestureHandler
  }, /*#__PURE__*/React.createElement(Animated.View, {
    style: StyleSheet.absoluteFillObject
  }))))), /*#__PURE__*/React.createElement(View, {
    style: [styles.buttons, style.buttonsContainer]
  }, /*#__PURE__*/React.createElement(Pressable, {
    onPress: onPressCancel,
    style: [style?.footerButton, style.cancelButton]
  }, /*#__PURE__*/React.createElement(Text, {
    style: [styles.btn_txt, style?.footerButtonsText, style?.cancelButtonText]
  }, cancelButtonText)), /*#__PURE__*/React.createElement(Pressable, {
    onPress: onConfirm,
    style: [style?.footerButton, style.confirmButton]
  }, /*#__PURE__*/React.createElement(Text, {
    style: [styles.btn_txt, style?.footerButtonsText, style?.confirmButtonText]
  }, confirmButtonText))))));
};
export default TimePicker;
//# sourceMappingURL=TimePicker.js.map