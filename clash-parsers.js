module.exports.parse = async (raw, { axios, yaml, notify, console }, { name, url, interval, selected }) => {
  const rawObj = yaml.parse(raw)
  const groups = []
  const rules = []
  return yaml.stringify({ ...rawObj, 'proxy-groups': groups, rules })
}