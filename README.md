# Programmatic usage of Netlify Build Plugins

This is an example of how to programmatically use multiple Netlify build plugins to pass around output values.

In this example the `./plugins/orchestrate` is including the additional plugins to use and is leveraging their return values.

Only `./plugins/orchestrate` needs to be defined in `netlify.yml` because the other plugins are programatically invoked in the orchestrate plugin.


```yml
build:
  publish: build
  command: npm run build
  functions: functions

plugins:
  - package: ./plugins/orchestrate
    config:
      valueOne: foo
      valueTwo: bar
```
