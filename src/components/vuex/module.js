import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex)

const setModules = () => {
  let  modules = {}
  let  modulesList = require.context('./modules', false, /.js$/)
  let  keys = modulesList.keys()
  keys.forEach( ( val ) => {
    let moduleName = val
    const inde = val.lastIndexOf('/')
    if (inde >= 0) {
      moduleName = val.substring(inde + 1)
    }
    moduleName = moduleName.replace(/\.js$/, '')
    modules[moduleName] = modulesList(val).default
  });
  return modules
}
let modules = setModules()

const store = new vuex.Store({
    modules: {
      ...modules
    }
  })
export default store