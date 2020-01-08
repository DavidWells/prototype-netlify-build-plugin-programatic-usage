const pluginOne = require('../one')
const pluginTwo = require('../two')
const pluginThree = require('../three') // simple object

module.exports = function orchestratorPlugin(config) {
  // initialize plugins with config (if they have config)
  const one = pluginOne({
    optionOne: config.valueOne
  })
  const two = pluginTwo({
    other: config.valueTwo
  })

  return {
    name: 'netlify-plugin-orchestrate',
    onInit: async (context) => {
      // these plugins can run in parallel to speed things up
      const [db, files] = await Promise.all([
        one.onInit(context),
        two.onInit(context),
      ])
      // Programatically run onInit (could be any method exposed)
      const output = await pluginThree.onInit(context, db, files)
      console.log(`plugin-orchestrate: Output from plugin 3 = ${JSON.stringify(output)}`)
    },
  }
}
