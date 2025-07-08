import AAvatar, { avatarProps } from 'ant-design-vue/es/avatar';
import './index.less';

import {
  computed,
  defineComponent,
  type Component,
  type PropType,
  type SlotsType,
} from 'vue';
import type { AvatarProps } from './interface.d';

type SAvatarDefineSlots = SlotsType<{
  icon?: void;
}>;

const sAvatarProps = () => {
  const { icon, src, ...rest } = avatarProps();
  return {
    ...rest,
    src: {
      type: [Function, String] as PropType<string | ((v?: string) => string)>,
      default: '',
    },
    /** 组件前缀，设置后覆盖组件的默认配置iframe前缀 */
    prefix: {
      type: String,
    },
    icon: {
      type: [Object, String] as PropType<string | Component>,
    },
  } as const;
};

export const Avatar = defineComponent({
  name: 'Avatar',
  inheritAttrs: false,
  props: sAvatarProps(),
  setup(props, { slots, attrs }) {
    const prefix = props.prefix;

    const image = computed(() => {
      if (props.src && typeof props.src === 'function') {
        return props.src(prefix);
      }
      if (props.src && typeof props.src === 'string') {
        const isAbsolute = (props.src as string).startsWith('/');
        return isAbsolute ? prefix + props.src : props.src;
      }
    });

    return () => (
      <AAvatar
        alt={props.alt}
        size={props.size}
        shape={props.shape}
        src={image.value}
        {...attrs}
        v-slots={slots}
      />
    );
  },
  slots: {} as SAvatarDefineSlots,
});

export default Avatar;

export { AvatarProps, sAvatarProps };
