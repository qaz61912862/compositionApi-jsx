import { defineComponent, onMounted, ref } from '@vue/composition-api'
// import HelloWorld from './components/HelloWorld.vue'
import Dialog from './components/dialog'
// import logo from '@/assets/logo.png'

export default defineComponent({
  setup() {
    const visible = ref(true)
    onMounted(() => {})
    return {
      visible,
      config: {
        type: 'danger',
      },
      dialogConfig: {
        title: 'test-dialog'
      }
    }
  },
  render() {
    return (
      <div class="app" style="text-align: center;">
        {/* <img src={logo} alt="logo"/> */}
        {/* <HelloWorld msg={'Welcome to Your Vue.js App'}/> */}
        <button
          onClick={() => {
            this.visible = true;
          }}
        >open-dialog</button>
        <Dialog
          value={this.visible}
          config={this.config}
          onInput={(val) => {
            this.visible = val
          }}
          {
            ...{
              props: this.dialogConfig
            }
          }
        />
      </div>
    )
  }
})