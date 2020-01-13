
module.exports = function netlifyPlugin(conf) {
  return {
    name: 'netlify-plugin-one',
    onInit: async (pluginAPI) => {
      console.log('pluginAPI', pluginAPI)
      console.log(`1. Plugin one with conf.optionOne = ${conf.optionOne}`)
      const databaseString = `mongo:ddbdbdbdbdbdbd:${conf.optionOne}`
      console.log('1. return databaseString', databaseString)
      return databaseString
    }
  }
}
