import { check } from "@assets/icons";
import AppText from "@common/AppText";
import { Network } from "@utils/Network";
import { WaitingWithdraw } from "@utils/WaitingWithdraw";
import React from "react";
import { FlatList, Image, TouchableOpacity, View } from "react-native";
import styles from "./List.style";

interface Props {
    isRefreshing: boolean;
    network: Network;
    totalTransfersCount: number;
    totalTransfersAmount: string;
    totalWithdrawsCount: number,
    totalWithdrawsAmount: string,
    waitingWithdraws: WaitingWithdraw[];
    onTransactionPress: (id: String) => void;
    onRefresh: () => void;
}
interface State { }

enum ListItemType {
    ITEM,
    WAITING_WITHDRAWS_TITLE,
    WAITING_WITHDRAW,
}
interface ListItem {
    type: ListItemType;
    item: any;
}

class List extends React.Component<Props, State> {
    _data = (
        network: Network,
        waitingWithdraws: WaitingWithdraw[],
        totalTransfersCount: number,
        totalTransfersAmount: string,
        totalWithdrawsCount: number,
        totalWithdrawsAmount: string,
    ): ListItem[] => {
        const data: ListItem[] = [
            {
                type: ListItemType.ITEM,
                item: {
                    title: "Network:",
                    value: network.name,
                },
            },
            {
                type: ListItemType.ITEM,
                item: {
                    title: "Contract:",
                    value: network.address,
                },
            },
            {
                type: ListItemType.ITEM,
                item: {
                    title: `Total transfers (${totalTransfersCount}):`,
                    value: `${totalTransfersAmount} ETH`,
                },
            },
            {
                type: ListItemType.ITEM,
                item: {
                    title: `Total withdraws (${totalWithdrawsCount}):`,
                    value: `${totalWithdrawsAmount} ETH`,
                },
            },
            {
                type: ListItemType.WAITING_WITHDRAWS_TITLE,
                item: "Waiting withdraws:",
            },
            ...waitingWithdraws.map(w => ({
                type: ListItemType.WAITING_WITHDRAW,
                item: w,
            }))
        ]
        return data;
    }

    _renderItem = (info) => {
        switch (info.item.type) {
            case ListItemType.ITEM:
                return this._renderItemITEM(info);
            case ListItemType.WAITING_WITHDRAWS_TITLE:
                return this._renderItemWAITING_WITHDRAWS_TITLE(info);
            case ListItemType.WAITING_WITHDRAW:
                return this._renderItemWAITING_WITHDRAW(info);
            default:
                return null;
        }
    }

    _renderItemITEM = ({ item }) => {
        return (
            <TouchableOpacity style={styles.itemView}>
                <AppText style={styles.itemTitleText}>
                    {item.item.title}
                </AppText>
                <AppText style={styles.itemValueText}>
                    {item.item.value}
                </AppText>
            </TouchableOpacity>
        )
    }

    _renderItemWAITING_WITHDRAWS_TITLE = ({ item }) => {
        return (
            <AppText style={styles.itemTransactionsText}>
                {item.item}
            </AppText>
        )
    }

    _renderItemWAITING_WITHDRAW = ({ item }) => {
        const { onTransactionPress } = this.props;
        const _itemOnPress = () => onTransactionPress(item.item.id);
        const textStyle = item.item.isCompleted ?
            styles.itemTransactionCompleted : styles.itemTransactionWaiting;
        return (
            <TouchableOpacity
                style={styles.itemTransactionView}
                onPress={_itemOnPress}
            >
                <View style={styles.itemTransactionContentView}>
                    <AppText style={[styles.itemTitleText, textStyle]}>
                        {item.item.id}
                    </AppText>
                    <AppText style={[styles.itemValueText, textStyle]}>
                        {item.item.transfer}{" ETH"}{" -> "}{item.item.withdraw}{" ETH"}
                    </AppText>
                </View>
            </TouchableOpacity>
        )
    }

    _keyExtractor = (item, index): string => {
        return index.toString();
    }

    render() {
        const { isRefreshing, network, waitingWithdraws, totalTransfersCount, totalTransfersAmount, totalWithdrawsCount, totalWithdrawsAmount } = this.props;
        const { onRefresh } = this.props;
        const data: ListItem[] = this._data(network, waitingWithdraws, totalTransfersCount, totalTransfersAmount, totalWithdrawsCount, totalWithdrawsAmount);
        return (
            <FlatList
                style={styles.listView}
                data={data}
                renderItem={this._renderItem}
                keyExtractor={this._keyExtractor}
                refreshing={isRefreshing}
                onRefresh={onRefresh}
            />
        );
    }
}

export default List;
export { Props };

