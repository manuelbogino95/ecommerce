import { FC } from 'react';
import {
  Button as RebassButton,
  ButtonProps as RebassButtonProps,
} from 'rebass/styled-components';

const Button: FC<RebassButtonProps> = ({ children, ...rest }) => {
  return <RebassButton {...rest}>{children}</RebassButton>;
};

export default Button;
