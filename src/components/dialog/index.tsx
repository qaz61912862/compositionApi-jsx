import { defineComponent, ref } from '@vue/composition-api'
import './dialog.css'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    value: {
      type: Boolean,
      required: true,
    },
    config: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    // console.log(props);
    const count = ref('');
    const close = () => {
      emit('input', false);
    };
    return {
      close,
      count,
      age: 18,
    }
  },
  render() {
    console.log(this.config);
    console.log(this.value);
    return (
      this.value && (
        <div class="dialog">
          <i class="el-icon-edit"></i>
          <p>title: {this.title}{Boolean(this.value)}</p>
          {/* <span>{this.value ? 'open': 'close'}</span> */}
          {this.count}
          <el-input
            v-model={this.count}
          />
          <el-button
            onClick={() => {
              this.close()
            }}
            {
              ...{
                props: this.config
              }
            }
          >close</el-button>
          {/* <el-dialog
            v-model={this.value}
            destroy-on-close={true}
          >dialog</el-dialog> */}
        </div>
      )
    )
  }
})