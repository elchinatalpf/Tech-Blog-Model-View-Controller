module.exports = {
  format_date: (date) => {
    console.log(date);
    return date.toLocaleDateString();
  },
  format_amount: (amount) => {
    return parseInt(amount).toLocaleString();
  },
};