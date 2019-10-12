import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import styles from "./QRCode.style";
import QRCodeView from "react-native-qrcode-svg";

interface Props {
    size?: number;
    style?: StyleProp<ViewStyle>;
    value?: string;
}
interface State { }

class QRCode extends React.Component<Props, State> {
    render() {
        const { size, style, value } = this.props;
        return (
            <View style={[styles.containerView, style]}>
                <QRCodeView
                    value={value}
                    size={size}
                />
            </View>
        );
    }
}

export default QRCode;
export { Props };

