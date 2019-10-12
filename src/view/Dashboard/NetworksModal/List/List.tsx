import { check } from "@assets/icons";
import AppText from "@common/AppText";
import { Network } from "@utils/Network";
import React from "react";
import { FlatList, Image, TouchableOpacity, View } from "react-native";
import styles from "./List.style";

interface Props {
    networks: Network[];
    network?: string;
    onPress: (item: Network) => void;
}
interface State { }

enum ListItemType {
    HEADER,
    ITEM,
}
interface ListItem {
    type: ListItemType;
    item: any;
}

class List extends React.Component<Props, State> {

    _data = (networks: Network[]): ListItem[] => {
        const data: ListItem[] = [
            {
                type: ListItemType.HEADER,
                item: "Select network",
            },
            ...networks.map(l => ({
                type: ListItemType.ITEM,
                item: l,
            }))
        ]
        return data;
    }

    _renderItem = (info) => {
        switch (info.item.type) {
            case ListItemType.HEADER:
                return this._renderItemHEADER(info);
            case ListItemType.ITEM:
                return this._renderItemITEM(info);
            default:
                return null;
        }
    }

    _renderItemHEADER = ({ item }) => {
        return (
            <View style={styles.headerView}>
                <AppText style={styles.headerText}>
                    {item.item}
                </AppText>
            </View>
        )
    }

    _renderItemITEM = ({ item }) => {
        const { network } = this.props;
        const { onPress } = this.props;
        const _itemOnPress = () => onPress(item.item);
        const icon = item.item.key === network ? check : null;
        return (
            <TouchableOpacity
                onPress={_itemOnPress}
                style={styles.itemView}
            >
                <AppText style={styles.itemText}>
                    {item.item.name}
                </AppText>
                <Image
                    style={styles.itemIcon}
                    source={icon}
                    resizeMode={"center"}
                />
            </TouchableOpacity>
        )
    }

    _keyExtractor = (item, index): string => {
        return index.toString();
    }

    render() {
        const { networks } = this.props;
        const data: ListItem[] = this._data(networks);
        return (
            <FlatList
                alwaysBounceVertical={false}
                style={styles.listView}
                data={data}
                renderItem={this._renderItem}
                keyExtractor={this._keyExtractor}
            />
        );
    }
}

export default List;
export { Props };

