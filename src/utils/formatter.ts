const format = (value?: number): string => {
    if (!value) { return null; }
    return value.toFixed(2);
};

const formatEth = (value?: number): string => {
    if (!value) { return null; }
    return value.toFixed(2) + " ETH";
};

export {
    format,
    formatEth,
};