import { Box } from 'rebass/styled-components';
import {
  Label,
  Input as RebassInput,
  InputProps as RebassInputProps,
} from '@rebass/forms';

type InputProps = {
  label?: string;
} & RebassInputProps;

const Input = ({ label, ...rest }: InputProps) => {
  return (
    <Box>
      {label ? <Label htmlFor="email">Email</Label> : null}
      <RebassInput {...rest} />
    </Box>
  );
};

export default Input;
