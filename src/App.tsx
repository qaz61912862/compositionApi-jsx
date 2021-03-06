import { defineComponent, onMounted, ref } from '@vue/composition-api'
// import HelloWorld from './components/HelloWorld.vue'
import Dialog from './components/dialog'
import ElDialog from './components/elDialog'
// import logo from '@/assets/logo.png'

export default defineComponent({
  setup() {
    const visible = ref(false)
    const elVisible = ref(false)
    onMounted(() => {})
    return {
      visible,
      elVisible,
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
        {String(this.elVisible)}
        {/* <img src={logo} alt="logo"/> */}
        {/* <HelloWorld msg={'Welcome to Your Vue.js App'}/> */}
        <button
          onClick={() => {
            this.visible = true;
          }}
        >open-dialog</button>
        <button
          onClick={() => {
            this.elVisible = true;
          }}
        >open-elDialog</button>
        <ElDialog
          v-model={this.elVisible}
        />
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