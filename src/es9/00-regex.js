const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec("2018-04-30");

console.table(matchers);
