module.exports = {
  format_amount: (amount) => {
    return parseInt(amount).toLocaleString();
  },
  format_date: (date) => {
    return date.toLocaleDateString();
  },
};