"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useTimePicker;
var _reactNativeReanimated = require("react-native-reanimated");
var _react = require("react");
var _moment = _interopRequireDefault(require("moment"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Hours = [];
const minutes = [];
for (let i = 0; i <= 11; i++) {
  Hours.push(i <= 8 ? `0${i + 1}` : `${i + 1}`);
}
for (let i = 0; i <= 59; i++) {
  minutes.push(i <= 8 ? `0${i + 1}` : `${i + 1}`);
}
const formatType = ['AM', 'PM'];
function useTimePicker(handelChange, onPressConfirm) {
  const hoursY = (0, _reactNativeReanimated.useSharedValue)(0);
  const minutesY = (0, _reactNativeReanimated.useSharedValue)(0);
  const typeY = (0, _reactNativeReanimated.useSharedValue)(0);

  // calculate user picked time
  const handleItemChange = () => {
    const hours = Math.round(Math.abs(hoursY.value / 50));
    const time = Math.round(Math.abs(minutesY.value / 50));
    const type = Math.round(Math.abs(typeY.value / 50));
    console.log({
      hour: Hours[hours],
      minutes: minutes[time],
      format: formatType[type],
      time: `${Hours[hours]}:${minutes[time]} ${formatType[type]}`
    });
    handelChange({
      hour: Hours[hours],
      minutes: minutes[time],
      format: formatType[type].toLowerCase(),
      time: `${Hours[hours]}:${minutes[time]} ${formatType[type].toLowerCase()}`
    });
  };
  (0, _react.useEffect)(() => {
    const [hour, minute, format] = (0, _moment.default)().format('hh/mm/a').split('/');
    const currentHourIndex = Hours.findIndex(item => item === hour);
    const currentMinuteIndex = minutes.findIndex(item => item === minute);
    const currentFormatIndex = formatType.findIndex(item => item.toLowerCase() === format.toLowerCase());
    hoursY.value = (0, _reactNativeReanimated.withSpring)(-currentHourIndex * 50, {
      duration: 100
    });
    minutesY.value = (0, _reactNativeReanimated.withSpring)(-currentMinuteIndex * 50, {
      duration: 100
    });
    typeY.value = (0, _reactNativeReanimated.withSpring)(-currentFormatIndex * 50, {
      duration: 100
    });
  }, []);
  const onConfirm = () => {
    handleItemChange();
    onPressConfirm();
  };
  function calculateDecay(animationValue, array, velocityY) {
    'worklet';

    animationValue.value = (0, _reactNativeReanimated.withDecay)({
      velocity: velocityY,
      rubberBandEffect: true,
      clamp: [-(array.length * 50), array.length * 50]
    }, () => {
      const currentValue = animationValue.value;
      if (currentValue >= 0) {
        animationValue.value = (0, _reactNativeReanimated.withSpring)(0, {
          duration: 10
        }, () => {
          (0, _reactNativeReanimated.runOnJS)(handleItemChange)();
        });
        return;
      }
      if (Math.abs(currentValue) <= (array.length - 1) * 50) {
        animationValue.value = (0, _reactNativeReanimated.withSpring)(Math.round(currentValue / 50) * 50, {
          duration: 10
        }, () => {
          (0, _reactNativeReanimated.runOnJS)(handleItemChange)();
        });
      } else {
        animationValue.value = (0, _reactNativeReanimated.withSpring)(-(array.length - 1) * 50, {
          duration: 10
        }, () => {
          (0, _reactNativeReanimated.runOnJS)(handleItemChange)();
        });
      }
    });
  }
  // hours gesture handler
  const hoursGestureHandler = (0, _reactNativeReanimated.useAnimatedGestureHandler)({
    onStart: (_, context) => {
      context.translateY = hoursY.value;
    },
    onActive: (event, context) => {
      const currentValue = event.translationY + context.translateY;
      if (currentValue < 0) {
        if (Math.abs(currentValue) < (Hours.length - 1) * 50) {
          hoursY.value = currentValue;
        }
      }
    },
    onEnd: e => {
      calculateDecay(hoursY, Hours, e.velocityY);
    }
  });

  // minnutes gesture handler
  const minutesGestureHandler = (0, _reactNativeReanimated.useAnimatedGestureHandler)({
    onStart: (_, context) => {
      context.translateY = minutesY.value;
    },
    onActive: (event, context) => {
      const currentValue = event.translationY + context.translateY;
      if (currentValue < 0) {
        if (Math.abs(currentValue) <= (minutes.length - 1) * 50) {
          minutesY.value = currentValue;
        }
      }
    },
    onEnd: e => {
      calculateDecay(minutesY, minutes, e.velocityY);
    }
  });

  // type gesture handler
  const typeGestureHandler = (0, _reactNativeReanimated.useAnimatedGestureHandler)({
    onStart: (_, context) => {
      context.translateY = typeY.value;
    },
    onActive: (event, context) => {
      const currentValue = event.translationY + context.translateY;
      if (currentValue < 0) {
        if (Math.abs(currentValue) < (2 - 1) * 50) {
          typeY.value = event.translationY + context.translateY;
        }
      }
    },
    onEnd: e => {
      calculateDecay(typeY, formatType, e.velocityY);
    }
  });

  // hours aimated computes style
  const hoursAnimatedStyle = (0, _reactNativeReanimated.useAnimatedStyle)(() => {
    return {
      transform: [{
        translateY: hoursY.value
      }]
    };
  });

  // minutes aimated computes style
  const minutesAnimatedStyle = (0, _reactNativeReanimated.useAnimatedStyle)(() => {
    return {
      transform: [{
        translateY: minutesY.value
      }]
    };
  });

  // type aimated computes style
  const typeAnimatedStyle = (0, _reactNativeReanimated.useAnimatedStyle)(() => {
    return {
      transform: [{
        translateY: typeY.value
      }]
    };
  });
  return {
    hoursAnimatedStyle,
    minutesAnimatedStyle,
    typeAnimatedStyle,
    hoursY,
    minutesY,
    typeY,
    hoursGestureHandler,
    minutesGestureHandler,
    typeGestureHandler,
    Hours,
    minutes,
    onConfirm
  };
}
//# sourceMappingURL=useTimePicker.js.map