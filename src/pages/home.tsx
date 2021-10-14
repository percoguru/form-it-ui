import { Flex, Heading, Text, Button, Link } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Form, Store } from '../types/types';
import { Grid } from '@chakra-ui/layout';
import useStore from '../store/store';

const Home = (): JSX.Element => {
  const setForms = useStore((state: Store) => state.setForms);
  const forms = useStore((state: Store) => state.forms);

  console.log(forms);
  const [gotForms, setGotForms] = useState(false);
  const arr: JSX.Element[] = [];

  useEffect(() => {
    async function getData() {
      const response = await (await fetch('http://localhost:3010/api/form')).json();
      setForms(response);

      localStorage.setItem('forms', JSON.stringify(forms));
      setGotForms(true);
    }
    if (!gotForms) {
      getData();
    }
  });

  for (let i = 0; i < forms.length; i += 1) {
    const form: Form = forms[i];
    const { id } = form;

    const path = `/form/${id}`;
    arr.push(
      <Link href={path}>
        <Flex p={12} m={6} rounded={6} background="gray.200" direction="column">
          <Heading mb={6}>{form.name}</Heading>
          <Text>{form.description}</Text>
        </Flex>
      </Link>,
    );
  }
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center" direction="column">
      <Flex direction="row" background="gray.100">
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {arr}
        </Grid>
      </Flex>
      <Link href="/createForm">
        <Button m={6} colorScheme="teal">
          Create Form
        </Button>
      </Link>
    </Flex>
  );
};

export default Home;
