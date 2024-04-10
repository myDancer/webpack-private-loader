function replace(source) {
  // 使用正则把var,let,const 后面的_换成#
  return source.replace(/([let, var, const])*( +)(_)/g, "$1$2#");
}

module.exports = function (content) {
  console.log(content);
  return replace(content);
};
