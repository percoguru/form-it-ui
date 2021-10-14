import React from 'react';
import { Input } from '@chakra-ui/input';
import { FormControl, Box } from '@chakra-ui/react';

interface textBoxProps {
  placeHolder: string;
  disabled: boolean;
}

const TextBoxCreator = (props: textBoxProps): JSX.Element => {
  return (
    <Box borderRadius="md" backgroundColor="gray.800" p={3}>
      <FormControl id="email">
        <Input variant="flushed" type="text" mb={3} placeholder="Title" />
        <Input type="email" disabled={props.disabled} />
        <Input variant="flushed" type="text" mb={3} placeholder="helper text" />
      </FormControl>
    </Box>
  );
};

export default TextBoxCreator;
