module.exports.parse = async (raw, { axios, yaml, notify, console }, { name, url, interval, selected }) => {
  return `# parsed by remote parser\n\n${raw}`
}