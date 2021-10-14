import { Checkbox } from '@chakra-ui/checkbox';
import React from 'react';

interface checkBoxProps {
  default: boolean;
  disabled: boolean;
}

const CheckBox = (props: checkBoxProps): JSX.Element => {
  return (
    <Checkbox defaultChecked={props.default} colorScheme="twitter" iconColor="blue.400"></Checkbox>
  );
};

export default CheckBox;
