type Config = {
  a: String;
  b: String;
  c: String;
  d: String;
};

export const computeAnswer = (config: Config) => {
  let { a, b, c, d } = config;
  let an = parseInt(a.split(',')[1]) || 0
  let bn = parseInt(b.split(',')[1]) || 0
  let cn = parseInt(c.split(',')[1]) || 0
  let dn = parseInt(d.split(',')[1]) || 0
  const ans = ((an * 10) + bn) * cn;
  return ans;
};
