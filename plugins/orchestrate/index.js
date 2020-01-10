/* Include plugins for programmatic usage.
  Note these are local plugins but could be normal NPM packages
*/
const pluginOne = require('../one')
const pluginTwo = require('../two')
const pluginThree = require('../three')

module.exports = function orchestratorPlugin(config) {
  /* initialize plugins with config (if they have config) */
  const one = pluginOne({ optionOne: config.valueOne })
  const two = pluginTwo({ other: config.valueTwo })

  return {
    name: 'netlify-plugin-orchestrate',
    onInit: async (context) => {
      /* Run plugin 1 & 2 in parallel to speed things up */
      const [ db, files ] = await Promise.all([
        one.onInit(context),
        two.onInit(context),
      ])
      /* Take output from plugin 1 & 2 and run plugin 3 */
      const outputFromThree = await pluginThree.onInit(context, db, files)
      console.log('netlify-plugin-orchestrate output from pluginThree.onInit')
      console.log(JSON.stringify(outputFromThree))
    },
  }
}
