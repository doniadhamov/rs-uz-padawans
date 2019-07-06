/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let length = preferences.length;
    let arr = [];
    arr[0] = 0;

    for (let i = 0; i < length; i++) {
        arr[i + 1] = preferences[i];
    }

    let love = [];
    let k = 0;

    for (let i = 1; i <= length; i++) {

        if (i != arr[i] && arr[i] != arr[arr[i]] && i == arr[arr[arr[i]]]) {
            love[k] = [];
            love[k][0] = i;
            love[k][1] = arr[i];
            love[k][2] = arr[arr[i]];
            love[k].sort();
            k++;
        }
    }

    let res = k;
    love.sort();

    for (let i = 0; i < k - 1; i++) {

        if (love[i][0] == love[i + 1][0]
            && love[i][1] == love[i + 1][1]
            && love[i][2] == love[i + 1][2]) {
            res--;
        }
    }

    return res;
};