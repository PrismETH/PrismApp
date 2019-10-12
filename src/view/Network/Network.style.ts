import { StyleSheet } from "react-native";
import sharedStyle from "../../common/sharedStyles.style";

const styles = StyleSheet.create({
    safeAreaView: {
        ...sharedStyle.safeArea,
        ...sharedStyle.lightBackground,
    },
    containerView: {
        ...sharedStyle.flex,
        ...sharedStyle.lightBackground,
    },
});

export default styles;

