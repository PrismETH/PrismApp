import { StyleSheet } from "react-native";
import sharedStyle from "@common/sharedStyles.style";

const styles = StyleSheet.create({
    safeAreaView: {
        ...sharedStyle.flex,
        ...sharedStyle.safeArea,
        ...sharedStyle.centerContentDirection,
    },
    contentView: {
        ...sharedStyle.flex,
        ...sharedStyle.whiteBackground,
        ...sharedStyle.shadow,
        borderRadius: 8,
        width: "100%",
        maxHeight: "70%",
    },
    closeButton: {
        margin: 16,
    },
});

export default styles;

