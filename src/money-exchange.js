module.exports = function makeExchange(currency) {
    const H = 50, Q = 25, D = 10, N = 5, P = 1;

    if (currency <= 0) {
        return {};
    } else if (currency > 10000) {
        return { error: "You are rich, my friend! We don't have so much coins for exchange" };
    } else {
        let result = {};
        let countCurrency = Math.floor(currency / H);

        if (countCurrency > 0) {
            result["H"] = countCurrency;
            currency %= H;
        }
        countCurrency = Math.floor(currency / Q);

        if (countCurrency > 0) {
            result["Q"] = countCurrency;
            currency %= Q;
        }
        countCurrency = Math.floor(currency / D);

        if (countCurrency > 0) {
            result["D"] = countCurrency;
            currency %= D;
        }
        countCurrency = Math.floor(currency / N);

        if (countCurrency > 0) {
            result["N"] = countCurrency;
            currency %= N;
        }
        countCurrency = Math.floor(currency / P);

        if (countCurrency > 0) {
            result["P"] = countCurrency;
            currency %= P;
        }

        return result;
    }
};