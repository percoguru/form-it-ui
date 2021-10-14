import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Flex, Heading } from '@chakra-ui/layout';
import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import useStore from '../store/store';
import { Store } from '../types/types';

const CreateForm = (): JSX.Element => {
  const history = useHistory();
  const createForm = useStore((state: Store) => state.createForm);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleNameUpdate = (event: { target: { value: string } }) => {
    setName(event.target.value);
  };

  const handleDescriptionUpdate = (event: { target: { value: string } }) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const newFormId = await createForm(name, description);
      console.log(newFormId);
      const formUrl = `form/${newFormId}`;

      history.push(formUrl);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" backgroundColor="gray.100" p={12} rounded="true">
        <Heading mb={6}>Create Form</Heading>
        <Input
          placeholder="My favourite form"
          mb={6}
          backgroundColor="white"
          onChange={handleNameUpdate}
        ></Input>
        <Input
          placeholder="Enter Description"
          mb={6}
          backgroundColor="white"
          onChange={handleDescriptionUpdate}
        ></Input>
        <Button onClick={handleSubmit}>Create</Button>
      </Flex>
    </Flex>
  );
};

export default CreateForm;
