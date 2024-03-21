import { LegacyCard, Layout, FormLayout, TextField, Banner, Button, Box } from '@shopify/polaris';
import axios from 'axios';
import { useState, useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';
function General() {
    const {
        control,
        formState: { errors },
        handleSubmit,
    } = useForm({ mode: "all" });
    const handleSaveButton = async (data) => {
        const res = await axios.post('https://jsonplaceholder.typicode.com/posts', data)
        try {
            if(res && res.status === 201){
                console.log(data);
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Layout.Section>
            <LegacyCard title="General" sectioned>
               <Box paddingBlock={400}>
                    <FormLayout>
                        <Controller
                            name="Campain"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'Campain is required' }}
                            render={({ field }) => <TextField {...field} placeholder='Volume discount #2' label="Campain" error={errors.Campain && <Banner status="critical">{errors.Campain.message}</Banner>} />}
                        />
                        <Controller
                            name="Title"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'Title is required' }}
                            render={({ field }) => <TextField {...field} label="Title" placeholder='Buy more and save' error={errors.Title && <Banner status="critical">{errors.Title.message}</Banner>} />}
                        />
                        <Controller
                            name="Description"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'Description is required' }}
                            render={({ field }) => <TextField {...field} label="Description" placeholder='Apply for all products in store' error={errors.Description && <Banner status="critical">{errors.Description.message}</Banner>} />}
                        />
                    </FormLayout>
               </Box>
                <Button onClick={handleSubmit(handleSaveButton)} variant='primary' tone='success'>Save Button</Button>
            </LegacyCard>
        </Layout.Section>
    );
}

export default General;