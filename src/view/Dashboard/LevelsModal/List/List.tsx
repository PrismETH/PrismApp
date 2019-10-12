import { check } from "@assets/icons";
import AppText from "@common/AppText";
import { formatEth } from "@utils/formatter";
import React from "react";
import { FlatList, Image, TouchableOpacity, View } from "react-native";
import styles from "./List.style";

interface Props {
    levels: number[];
    level?: number;
    onPress: (item: number) => void;
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

    _data = (levels: number[]): ListItem[] => {
        const data: ListItem[] = [
            {
                type: ListItemType.HEADER,
                item: "Select level",
            },
            ...levels.map(l => ({
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
        const { level } = this.props;
        const { onPress } = this.props;
        const _itemOnPress = () => onPress(item.item);
        const title = formatEth(item.item);
        const icon = item.item == level ? check : null;
        return (
            <TouchableOpacity
                onPress={_itemOnPress}
                style={styles.itemView}
            >
                <AppText style={styles.itemText}>
                    {title}
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
        const { levels } = this.props;
        const data: ListItem[] = this._data(levels);
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

