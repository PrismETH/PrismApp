import { Network } from "@utils/Network";
import { WaitingWithdraw } from "@utils/WaitingWithdraw";

interface AppState {
    prism: AppStatePrism;
}

interface AppStatePrism {
    levels: number[];
    networks: Network[];
    repoUrl: string;
    stats: AppStatePrismStats;
}

interface AppStatePrismStats {
    totalTransfersCount?: number;
    totalTransfersAmount?: string;
    totalWithdrawsCount?: number;
    totalWithdrawsAmount?: string;
    waitingWithdraws?: WaitingWithdraw[];
}

const defaultState: AppState = {
    prism: {
        levels: [0.02, 0.05, 0.10, 0.50, 1.00, 2.00, 10.00],
        networks: [
            {
                key: "mainnet",
                name: "Mainnet",
                address: "0x0d55eBbb67c2415f6038a41Effa710Bf1C1Bc63f",
                url: "https://mainnet.infura.io/v3/2eb3a35620c441159d0dd749b9bdb829",
                etherscan: "https://etherscan.io/tx/",
                isTestNet: false,
            },
            {
                key: "rinkeby",
                name: "Rinkeby (TestNet)",
                address: "0x50b1474b6C9494d1c9ceefD57bD6c67AFB55cDE9",
                url: "https://rinkeby.infura.io/v3/2eb3a35620c441159d0dd749b9bdb829",
                etherscan: "https://rinkeby.etherscan.io/tx/",
                isTestNet: true,
            },
        ],
        repoUrl: "https://github.com/PrismETH",
        stats: null,
    },
};

export default defaultState;
export {
    AppState,
    AppStatePrism,
    AppStatePrismStats,
};

