import { StyleSheet } from "react-native";
import { WHITE_2, WHITE_1 } from "./colors";

const CONTENT_MARGIN = 16;

const sharedStyle = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    flex: {
        flex: 1,
    },
    row: {
        flexDirection: "row",
    },
    column: {
        flexDirection: "column",
    },
    rowStretch: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    centerContentDirection: {
        justifyContent: "center",
    },
    alignContentDirection: {
        alignItems: "center"
    },
    whiteBackground: {
        backgroundColor: WHITE_1,
    },
    lightBackground: {
        backgroundColor: WHITE_2,
    },
    contentMargin: {
        margin: CONTENT_MARGIN,
    },
    contentMarginVertical: {
        marginVertical: CONTENT_MARGIN,
    },
    contentMarginHorizontal: {
        marginHorizontal: CONTENT_MARGIN,
    },
    contentPadding: {
        margin: CONTENT_MARGIN,
    },
    absoluteLeft: {
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
    },
    absoluteRight: {
        position: "absolute",
        right: 0,
        top: 0,
        bottom: 0,
    },
    absoluteTop: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
    },
    absoluteBottom: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
    },
    shadow: {
        elevation: 4,
        shadowOffset: { width: 0, height: 4 },
        shadowColor: "black",
        shadowOpacity: 0.16,
        shadowRadius: 6,
    }
});

export default sharedStyle;
export {
    CONTENT_MARGIN,
}

