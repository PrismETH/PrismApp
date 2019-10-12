import AppButton from "@common/AppButton";
import React from "react";
import { SafeAreaView, StyleProp, View, ViewStyle } from "react-native";
import Modal from "react-native-modal";
import styles from "./LevelsModal.style";
import List from "./List/List";

interface Props {
    isVisible: boolean;
    levels: number[];
    level?: number;
    style?: StyleProp<ViewStyle>;
    onClose: () => void;
    onSelect: (item: number) => void;
}
interface State { }

class LevelsModal extends React.Component<Props, State> {

    render() {
        const { isVisible, levels, level, style } = this.props;
        const { onClose, onSelect } = this.props;
        return (
            <Modal isVisible={isVisible}>
                <SafeAreaView style={[styles.safeAreaView, style]}>
                    <View style={styles.contentView}>
                        <List
                            levels={levels}
                            level={level}
                            onPress={onSelect} />
                        <AppButton
                            style={styles.closeButton}
                            onPress={onClose}
                        >
                            {"Close"}
                        </AppButton>
                    </View>
                </SafeAreaView>
            </Modal>
        );
    }
}

export default LevelsModal;
export { Props };

