import { Input } from '@chakra-ui/input';
import { FormControl, Box, IconButton } from '@chakra-ui/react';
import { useState } from 'react';
import { AddIcon } from '@chakra-ui/icons';
import { HStack } from '@chakra-ui/layout';
import React from 'react';
import useStore from '../store/store';
import { Store } from '../types/types';

interface textBoxProps {
  placeHolder: string;
  disabled: boolean;
  formId: string;
}

const TextBoxCreator = (props: textBoxProps): JSX.Element => {
  const addComponent = useStore((state: Store) => state.addComponent);
  const [title, setTitle] = useState('');
  const [helperText, setHelperText] = useState('');

  const handleTitleUpdate = (event: { target: { value: string } }) => {
    setTitle(event.target.value);
  };

  const handleHelperTextUpdate = (event: { target: { value: string } }) => {
    setHelperText(event.target.value);
  };

  const handleAddition = () => {
    const componentDetails = {
      title: title,
      helperText: helperText,
    };

    addComponent(props.formId, 'TextBox', componentDetails);
  };

  return (
    <Box borderRadius="md" backgroundColor="gray.800" p={3}>
      <HStack>
        <FormControl id="email">
          <Input
            variant="flushed"
            type="text"
            mb={3}
            placeholder="Title"
            onChange={handleTitleUpdate}
          />
          <Input type="email" disabled={props.disabled} />
          <Input
            variant="flushed"
            type="text"
            mb={3}
            placeholder="helper text"
            onChange={handleHelperTextUpdate}
          />
        </FormControl>
        <IconButton
          colorScheme="blue"
          aria-label="Search database"
          size="sm"
          variant="outline"
          onClick={handleAddition}
          icon={<AddIcon />}
        />
      </HStack>
    </Box>
  );
};

export default TextBoxCreator;
