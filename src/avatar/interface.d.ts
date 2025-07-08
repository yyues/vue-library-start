import type { AvatarProps as _AvatarProps } from 'ant-design-vue';

export interface AvatarProps extends Omit<_AvatarProps, 'src'> {
  src: string | ((v?: string) => string);
  /** Component Prefix */
  prefix: string;
}
