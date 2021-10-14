import React from 'react';
import { VStack } from '@chakra-ui/layout';
import TextBoxCreator from './textBoxCreator';

const SelectionPane = (props: { formId: string }): JSX.Element => {
  return (
    <VStack spacing="24px" p={12} justifyContent="flex-start" height="100%">
      <TextBoxCreator formId={props.formId} placeHolder="Place holder" disabled={true} />
    </VStack>
  );
};

export default SelectionPane;
