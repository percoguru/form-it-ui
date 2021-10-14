import React from 'react';
import { Input } from '@chakra-ui/input';
import { FormControl, FormLabel, FormHelperText } from '@chakra-ui/react';
import { TextBoxDetails } from '../types/types';

interface textBoxProps {
  placeHolder: string;
  disabled: boolean;
  info: TextBoxDetails;
}

const TextBox = (props: textBoxProps): JSX.Element => {
  return (
    <FormControl id="email">
      <FormLabel>{props.info.title}</FormLabel>
      <Input type="email" />
      <FormHelperText>{props.info.helperText}</FormHelperText>
    </FormControl>
  );
};

export default TextBox;
