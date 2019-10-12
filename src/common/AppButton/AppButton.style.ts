import { MEDIUM, MEDIUM_SIZE } from "@common/fonts";
import { StyleSheet } from "react-native";
import { GREEN_1, GREEN_2, RED_1, RED_2, WHITE_1 } from "../colors";
import sharedStyle, { CONTENT_MARGIN } from "../sharedStyles.style";

const BORDER_RADIUS: number = 8;

const styles = StyleSheet.create({
    greenContainerView: {
        backgroundColor: GREEN_1,
        borderRadius: BORDER_RADIUS,
    },
    greenContentView: {
        ...sharedStyle.centerContentDirection,
        backgroundColor: GREEN_2,
        borderRadius: BORDER_RADIUS,
        marginBottom: BORDER_RADIUS,
    },
    redContainerView: {
        backgroundColor: RED_1,
        borderRadius: BORDER_RADIUS,
    },
    redContentView: {
        ...sharedStyle.centerContentDirection,
        backgroundColor: RED_2,
        borderRadius: BORDER_RADIUS,
        marginBottom: BORDER_RADIUS,
    },
    defaultText: {
        color: WHITE_1,
        textAlign: "center",
        fontSize: MEDIUM_SIZE,
        fontWeight: MEDIUM,
        margin: CONTENT_MARGIN,
    },
});

export default styles;

