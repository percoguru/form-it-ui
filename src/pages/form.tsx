import { Flex, Heading, Text, Spacer, Grid, GridItem } from '@chakra-ui/layout';
import {Form, Store} from '../types/types'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SelectionPane from '../components/selectionPane';
import CheckBox from '../components/checkBox';
import TextBox from '../components/textBox';
import useStore from '../store/store';
import {
    useParams
  } from 'react-router-dom';

const emptyForm = (): Form => ({
    owner: '',
    organization: '',
    name:'kuch bhi',
    formPages: [],
    subtitle: '',
    id: '',
    description: ''
})


const FormPage = (): JSX.Element => {
    const forms = useStore((state: Store) => state.forms)
    console.log(forms)
    // eslint-disable-next-line prettier/prettier
    const { formId } = useParams<{ formId: string }>();

    const formData = forms.find((form) => form.id === formId);
    
    const [form, setForm] = useState<Form>(formData ? formData : emptyForm);
    const [formPresent, setFormPresent] = useState(formData ? true : false);
    
    // const [formComponents, setFormComponents] = useState<JSX.Element[]>([]);

    useEffect(() => {
        const getForm = async () => {
            if (formId) {
                try {
                    const url = `http://localhost:3010/api/form/${formId}`;
                    const response = await axios.get(url).then((res) => res);
                    
                    const { data: form } = response;

                    if (!form) return;

                    setForm(form);

                    setFormPresent(true);
                
                } catch (e) {
                            console.log(e)
                        }
                  }
            }

        if (!formPresent) {
            getForm();
        }
    })

    
const createFormDetails = (): JSX.Element[] => {
  const form = forms.find((eachForm) => eachForm.id === formId)

  if (!form) return ([<p key="1">404</p>])
  
    const { formPages } = form;

    if (!formPages || !formPages.length) {
        return (
            [<p key="1">Create your first Page</p>] 
        );
    }
    const firstPage = formPages[0]

    const { formData: {
        components
    } } = firstPage;
    const arr = [];
    for(let i=0; i<components.length; i+=1) {
        const { type, id, additionalInfo } = components[i];

        if (type === 'CheckBox') {
            arr.push(
              <Flex direction="row" p={6} >
                <Text>{i}</Text>
                <Spacer />
                <CheckBox default={false} disabled={false} />
              </Flex>
            )
        } else if (type === 'TextBox') {
            arr.push(<TextBox info={additionalInfo} placeHolder="any" disabled={false}/>)
        }
    }
    return arr;
}

    return (
        <Flex height="100vh" backgroundColor="gray.300" direction="column">
            <Grid templateColumns="repeat(5, 1fr)" height="100%">
                <GridItem colSpan={3} p={12} height="100%">
                    <Heading>
                        {formPresent ? form.name : 'Demo'}
                    </Heading>
                    <Text fontSize="xl">{form.description}</Text>
                    <Flex p={12} direction="column" alignContent="center" justifyContent="center">
                        {createFormDetails()}
                    </Flex>
                </GridItem>
                <GridItem colSpan={2} backgroundColor="gray.500">
                    <SelectionPane formId={formId}/>
                </GridItem>
            </Grid>
        </Flex>
    )
}

export default FormPage;