module.exports = {
  name: 'netlify-plugin-three',
  onInit: async (pluginAPI, database, files) => {
    console.log('3. Plugin three onInit')
    console.log('3. database', database)
    console.log('3. files', files)
    console.log('Do Stuff in plugin 3!')
    return {
      other: 'values',
      here: '⊂◉‿◉つ'
    }
  }
}
