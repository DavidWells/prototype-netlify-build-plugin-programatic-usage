module.exports = function netlifyPlugin(conf) {
  return {
    name: 'netlify-plugin-two',
    onInit: async (pluginAPI) => {
      console.log(`2. Plugin two with conf.other = ${conf.other}`)
      const files = [`${conf.other}.html`, 'abc.js', '123.md', '789.css']
      console.log('2. return file', files)
      return files
    }
  }
}
