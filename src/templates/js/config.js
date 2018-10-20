var config = {
    testnet: false, // this is adjusted page.h if needed. dont need to change manually
    stagenet: false, // this is adjusted page.h if needed. dont need to change manually
    coinUnitPlaces: 9,
    txMinConfirms: 10,         // corresponds to CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE in Saronite
    txCoinbaseMinConfirms: 60, // corresponds to CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW in Saronite
    coinSymbol: 'XRN',
    openAliasPrefix: "xrn",
    coinName: 'Saronite',
    coinUriPrefix: 'saronite:',
    addressPrefix: 135,
    integratedAddressPrefix: 28039,
    subAddressPrefix: 25736,
    addressPrefixTestnet: 31006,
    integratedAddressPrefixTestnet: 25247,
    subAddressPrefixTestnet: 22944,
    addressPrefixStagenet: 31768,
    integratedAddressPrefixStagenet: 26009,
    subAddressPrefixStagenet: 23578,
    feePerKB: new JSBigInt('2000000000'),//20^10 - for testnet its not used, as fee is dynamic.
    dustThreshold: new JSBigInt('1000000000'),//10^10 used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
    txChargeRatio: 0.5,
    defaultMixin: 7, // minimum mixin for hardfork v9
    txChargeAddress: '',
    idleTimeout: 30,
    idleWarningDuration: 20,
    maxBlockNumber: 500000000,
    avgBlockTime: 120,
    debugMode: false
};
