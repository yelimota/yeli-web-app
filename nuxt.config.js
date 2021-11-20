import Alias from './config/alias'
import Build from './config/build'
import Head from './config/head'
import Modules from './config/modules'
import Plugins from './config/plugins'
import Server from './config/server'
import Styles from './config/styles'
import Generate from './config/generate'

export default {
  ...Server,
  ...Alias,

  ...Build,
  ...Modules,
  ...Plugins,
  ...Generate,

  ...Head,
  ...Styles
}
