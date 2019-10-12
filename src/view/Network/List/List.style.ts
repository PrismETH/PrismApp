import { DARK_1, DARK_2, GREEN_2, ORANGE_1 } from "@common/colors";
import { MEDIUM, MEDIUM_SIZE, NORMAL_SIZE, REGULAR } from "@common/fonts";
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
        ...sharedStyle.flex,
        ...sharedStyle.contentMarginHorizontal,
        padding: 8,
    },
    itemRowView: {
        ...sharedStyle.flex,
        ...sharedStyle.row,
    },
    itemTitleText: {
        color: DARK_2,
        fontSize: NORMAL_SIZE,
        fontWeight: REGULAR,
    },
    itemValueText: {
        color: DARK_1,
        fontSize: MEDIUM_SIZE,
        fontWeight: MEDIUM,
    },
    itemTransactionsText: {
        ...sharedStyle.contentMarginHorizontal,
        padding: 8,
        marginTop: 16,
        color: DARK_2,
        fontSize: NORMAL_SIZE,
        fontWeight: REGULAR,
    },
    itemTransactionView: {
        ...sharedStyle.flex,
        ...sharedStyle.whiteBackground,
        padding: 8,
    },
    itemTransactionContentView: {
        ...sharedStyle.flex,
        ...sharedStyle.column,
        ...sharedStyle.contentMarginHorizontal,
    },
    itemTransactionCompleted: {
        color: GREEN_2,
    },
    itemTransactionWaiting: {
        color: ORANGE_1,
    },
});

export default styles;

