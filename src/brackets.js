module.exports = function check(str, bracketsConfig) {
    let str_len = str.length;
    let conf_len = bracketsConfig.length;
    let arr = [];
    arr[0] = str[0];
    let n = 0;
    let i = 1;

    while (i < str_len) {
        let k = -1;

        for (let j = 0; j < conf_len; j++) {
            if (str[i] == bracketsConfig[j][1]) {
                k = j;
                break;
            }
        }

        if (k != -1 && arr[n] == bracketsConfig[k][0]) {
            n--;
        } else {
            console.log(k + " " + n + " " + str[i]);
            n++;
            arr[n] = str[i];
        }
        i++;
    }

    return n == -1;
}