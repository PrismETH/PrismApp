import AppButton from "@common/AppButton";
import { Network } from "@utils/Network";
import React from "react";
import { SafeAreaView, StyleProp, View, ViewStyle } from "react-native";
import Modal from "react-native-modal";
import List from "./List/List";
import styles from "./NetworksModal.style";

interface Props {
    isVisible: boolean;
    networks: Network[];
    network?: string;
    style?: StyleProp<ViewStyle>;
    onClose: () => void;
    onSelect: (item: Network) => void;
}
interface State { }

class NetworksModal extends React.Component<Props, State> {

    render() {
        const { isVisible, networks, network, style } = this.props;
        const { onClose, onSelect } = this.props;
        return (
            <Modal isVisible={isVisible}>
                <SafeAreaView style={[styles.safeAreaView, style]}>
                    <View style={styles.contentView}>
                        <List
                            networks={networks}
                            network={network}
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

export default NetworksModal;
export { Props };

