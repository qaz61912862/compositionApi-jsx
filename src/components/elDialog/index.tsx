import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    value: {
      type: Boolean,
      required: true,
    }
  },
  setup(props, { emit }) {
    const close = () => {
      emit('input', false)
    }
    return {
      close,
      config: {
        title: 'el-title',
        'close-on-click-modal': false
      }
    }
  },
  render() {
    return (
      <el-dialog
        visible={this.value}
        {
          ...{
            props: this.config
          }
        }
        onClose={
          () => {
            this.close()
          }
        }
      >el-dialog</el-dialog>
    )
  }
})