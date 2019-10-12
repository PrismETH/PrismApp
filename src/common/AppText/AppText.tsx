import React from "react";
import { StyleProp, Text, TextStyle } from "react-native";

interface Props {
    children?: React.ReactNode | string;
    numberOfLines?: number;
    style?: StyleProp<TextStyle> | StyleProp<TextStyle>[];
}
interface State { }

class AppText extends React.Component<Props, State> {
    render() {
        const { children, numberOfLines, style } = this.props;
        return (
            <Text
                numberOfLines={numberOfLines}
                style={style}
                adjustsFontSizeToFit={true}
                minimumFontScale={0.5}
                allowFontScaling={false}
            >
                {children}
            </Text>
        );
    }
}

export default AppText;
export { Props };

