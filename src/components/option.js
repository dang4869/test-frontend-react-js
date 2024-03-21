import { Text, FormLayout, TextField, Box, Button, AppProvider, Banner, BlockStack } from '@shopify/polaris';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import '../App.scss'

function Option(props) {
    const { register, handleSubmit, control, formState: { errors } } = useForm({ mode: "all" })
    const [array, setArray] = useState([])
    let object = {}
    const handleAdd = (data) => {

        object = {
            title: data.title,
            type: data.type,
            quantity: props.qty,
            amount: data.amount,
        }
        setArray(prev => {
            const jsonPreview = JSON.stringify([...prev, object])
            localStorage.setItem('preview', jsonPreview)
        }
            )
        
    }
    
    return (
        <AppProvider>
           <Box borderBlockStartWidth='50'  borderColor='border'>
           <div className='header-opt'> <Box>OPTION {props.qty}</Box></div>
                <Box paddingBlockEnd={2000} paddingBlockStart={800} borderBlockEndWidth='050'  borderColor='border'>
                    <FormLayout>
                        <BlockStack inlineAlign='end'><Button onClick={props.handleDeleteOptions} variant='primary' tone='critical'>Delete</Button></BlockStack>
                        <FormLayout.Group condensed>
                            <Controller
                                name="title"
                                control={control}
                                defaultValue=""
                                rules={{ required: 'Title is required' }}
                                render={({ field }) => <TextField {...field} label="Title" placeholder='Single' error={errors.title && <Banner status="critical">{errors.title.message}</Banner>} />}
                            />
                            <Controller
                                name="Subtile"
                                control={control}
                                defaultValue=""
                                rules={{ required: 'Subtile is required' }}
                                render={({ field }) => <TextField {...field} label="Subtile" placeholder='Standard price' error={errors.Subtile && <Banner status="critical">{errors.Subtile.message}</Banner>} />}
                            />
                            <Controller
                                name="Label"
                                control={control}
                                defaultValue=""
                                rules={{ required: 'Label is required' }}
                                render={({ field }) => <TextField {...field} label="Label"  error={errors.Label && <Banner status="critical">{errors.Label.message}</Banner>} />}
                            />
                        </FormLayout.Group>
                        <FormLayout.Group condensed>
                            <Controller
                                name="Quantity"
                                control={control}
                                defaultValue=""
                                render={({ field }) => <TextField {...field} label="Quantity" value={props.qty} />}
                            />
                            <Controller
                                name="type"
                                control={control}
                                defaultValue=""
                                rules={{ required: 'Discout type is required' }}
                                render={({ field }) => <TextField {...field} label="Discout type" placeholder='none' error={errors.type && <Banner status="critical">{errors.type.message}</Banner>} />}
                            />
                            <Text/>
                        </FormLayout.Group>
                        <Button onClick={handleSubmit(handleAdd)}>Add Preview</Button>
                    </FormLayout>
                </Box>
           </Box>
        </AppProvider>
    );
}

export default Option;