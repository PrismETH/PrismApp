import { DARK_1, DARK_2 } from "@common/colors";
import { MEDIUM, REGULAR, SMALL_SIZE } from "@common/fonts";
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
        ...sharedStyle.contentMargin,
    },
    navigationNetworkImage: {
        marginHorizontal: 20,
        width: 26,
        height: 26,
    },
    navigationInfoImage: {
        marginHorizontal: 20,
        width: 26,
        height: 26,
    },
    headerView: {
        ...sharedStyle.row,
    },
    headerSeparatorView: {
        width: 20,
    },
    headerItemView: {
        ...sharedStyle.flex,
    },
    headerItemText: {
        textAlign: "center",
        color: DARK_2,
        marginBottom: 5,
        fontSize: SMALL_SIZE,
        fontWeight: REGULAR,
    },
    contentView: {
        ...sharedStyle.flex,
        ...sharedStyle.alignContentDirection,
        marginVertical: 20,
    },
    addressTitleText: {
        textAlign: "center",
        color: DARK_2,
        fontSize: SMALL_SIZE,
        fontWeight: REGULAR,
    },
    addressText: {
        textAlign: "center",
        marginBottom: 16,
        color: DARK_1,
        fontSize: SMALL_SIZE,
        fontWeight: MEDIUM,
    },
    footerView: {},
});

export default styles;

