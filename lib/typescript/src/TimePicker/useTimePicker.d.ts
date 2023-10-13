import type { SharedValue } from 'react-native-reanimated';
import { selectedTime } from './interface';
export default function useTimePicker(handelChange: (e: selectedTime) => void, onPressConfirm: () => void): {
    hoursAnimatedStyle: {
        transform: {
            translateY: number;
        }[];
    };
    minutesAnimatedStyle: {
        transform: {
            translateY: number;
        }[];
    };
    typeAnimatedStyle: {
        transform: {
            translateY: number;
        }[];
    };
    hoursY: SharedValue<number>;
    minutesY: SharedValue<number>;
    typeY: SharedValue<number>;
    hoursGestureHandler: (e: import("react-native-reanimated/lib/typescript/reanimated2/hook").GestureHandlerEvent<any>) => void;
    minutesGestureHandler: (e: import("react-native-reanimated/lib/typescript/reanimated2/hook").GestureHandlerEvent<any>) => void;
    typeGestureHandler: (e: import("react-native-reanimated/lib/typescript/reanimated2/hook").GestureHandlerEvent<any>) => void;
    Hours: string[];
    minutes: string[];
    onConfirm: () => void;
};
//# sourceMappingURL=useTimePicker.d.ts.map