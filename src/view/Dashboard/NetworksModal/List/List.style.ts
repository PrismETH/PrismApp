import { DARK_1, DARK_2 } from "@common/colors";
import { MEDIUM, MEDIUM_SIZE, NORMAL_SIZE } from "@common/fonts";
import sharedStyle from "@common/sharedStyles.style";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    listView: {
        ...sharedStyle.flex,
    },
    headerView: {
        ...sharedStyle.flex,
        ...sharedStyle.contentMargin,
    },
    headerText: {
        textAlign: "center",
        color: DARK_1,
        fontSize: MEDIUM_SIZE,
        fontWeight: MEDIUM,
    },
    itemView: {
        ...sharedStyle.row,
        ...sharedStyle.flex,
        ...sharedStyle.whiteBackground,
        ...sharedStyle.centerContentDirection,
        ...sharedStyle.alignContentDirection,
        ...sharedStyle.shadow,
        height: 60,
        margin: 8,
    },
    itemText: {
        ...sharedStyle.flex,
        textAlign: "center",
        color: DARK_2,
        fontSize: MEDIUM_SIZE,
        fontWeight: MEDIUM,
    },
    itemIcon: {
        ...sharedStyle.absoluteRight,
        right: 20,
        height: "100%",
    },
});

export default styles;

