module.exports = function reverse (n) {
  return n.toString().split('').filter(el => el != '-').reverse().join('')
}
