import { defineComponent } from 'vue';
// import type { SetupContext } from 'vue';
// import { Icon } from '../../icon';
// import loadingDirective from '../../loading/src/loading-directive';
// import type { buttonProps, ButtonProps } from './button-types';
// import useButton from './use-button';
// import './button.scss';

export default defineComponent({
  name: 'DButton2',
  // directives: {
  //   dLoading: loadingDirective,
  // },
  // props: buttonProps,
  emits: ['click'],
  setup(props, ctx) {
    console.log(props, ctx)
    // const { icon, disabled, loading } = toRefs(props);
    // const { classes, iconClass } = useButton(props, ctx);

    // const onClick = (e: MouseEvent) => {
    //   if (loading.value) {
    //     return;
    //   }
    //   ctx.emit('click', e);
    // };

    return () => {
      return (
        <el-button>
        @@@@{ctx.slots.default?.()}@@@@
        </el-button>
      );
    };
  },
});
