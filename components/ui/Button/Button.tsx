import {
  Button as RebassButton,
  ButtonProps as RebassButtonProps,
} from 'rebass/styled-components';

type ButtonProps = {
  text: string;
} & RebassButtonProps;

const Button = ({ text, ...rest }: ButtonProps) => {
  return <RebassButton {...rest}>{text}</RebassButton>;
};

export default Button;
