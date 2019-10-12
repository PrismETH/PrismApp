import AppText from "@common/AppText";
import React from "react";
import { StyleProp, TouchableOpacity, View, ViewStyle } from "react-native";
import styles from "./AppButton.style";

enum Theme {
    GREEN,
    RED,
}
interface Props {
    children?: React.ReactNode | string | string[];
    style?: StyleProp<ViewStyle>;
    theme: Theme;
    onPress?: () => void;
}
interface State { }

interface ThemeStyle {
    containerView: StyleProp<ViewStyle>;
    contentView: StyleProp<ViewStyle>;
}

class AppButton extends React.Component<Props, State> {
    static defaultProps = {
        theme: Theme.GREEN,
    };

    _getThemeStyles = (theme: Theme): ThemeStyle => {
        switch (theme) {
            case Theme.GREEN:
                return {
                    containerView: styles.greenContainerView,
                    contentView: styles.greenContentView,
                }
            case Theme.RED:
                return {
                    containerView: styles.redContainerView,
                    contentView: styles.redContentView,
                }
        }
    }

    _getChildrenComponent = (children: React.ReactNode | string): React.ReactNode => {
        if (React.isValidElement(children)) {
            return children;
        }
        if (typeof children === "string" || Array.isArray(children)) {
            return (
                <AppText
                    numberOfLines={1}
                    style={styles.defaultText}
                >
                    {children}
                </AppText>
            );
        }
        return null;
    }

    render() {
        const { children, style, theme } = this.props;
        const { onPress } = this.props;
        const childrenComponent = this._getChildrenComponent(children);
        const themeStyles = this._getThemeStyles(theme);
        return (
            <TouchableOpacity
                activeOpacity={0.7}
                style={[themeStyles.containerView, style]}
                onPress={onPress}
            >
                <View style={themeStyles.contentView}>
                    {childrenComponent}
                </View>
            </TouchableOpacity>
        );
    }
}

export default AppButton;
export { Props, Theme };

