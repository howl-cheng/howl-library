import HnyButton from './button'
import HnyHeader from './header'
 
const components = [
  HnyButton,
  HnyHeader
]
 
const install = (app) => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}
 
export { HnyButton, HnyHeader }
 
export default install
 