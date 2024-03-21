
import './App.scss';
import { AppProvider, Page, LegacyCard, Button, Icon, Text, Layout, FormLayout, TextField, Box, DataTable } from '@shopify/polaris';
import { ArrowLeftIcon, PlusCircleIcon } from "@shopify/polaris-icons";
import General from './components/general';
import Option from './components/option';
import Preview from './components/preview';
import { useState } from 'react';
import translations from "@shopify/polaris/locales/en.json";
import OptionVr2 from './components/optionvr2';

function App() {
  const [qty, setQty] = useState(1)

  const [addOption, setAddOption] = useState([<Option qty={qty} />])
  const handleDeleteOptions = () => {
    let listOptions = addOption.filter((option, index) => index !== (option.length - 1))
    setAddOption([...listOptions])
  }
  const handleAddOption = () => {
    setAddOption(addOption.concat(<OptionVr2 key={addOption.length} qty={qty + 1} handleDeleteOptions={handleDeleteOptions} />))
    setQty(qty + 1)
  }

  return (
    <AppProvider i18n={translations}>
      <div className="wrapper">
        <div className="header">
          <div className="header-icon"><Icon source={ArrowLeftIcon} tone="base" /></div>
        <div className="heading">
            <Text variant="headingXl" as="h4">
              Create volume discount
            </Text>
        </div>

        </div>
        <Page fullWidth>
          <Layout>
            <Layout.Section>
              <General />
              <Layout.Section>
                <LegacyCard title="" sectioned>
                  <Box paddingBlockEnd={200}>
                    <Text variant="headingXl" as="h6">
                      Online store dashboard
                    </Text>
                  </Box>
                  {addOption.map((option, index) => {
                    return option
                  })}
                  <Box paddingBlock={500}><Button fullWidth onClick={handleAddOption} variant='primary' tone='success' icon={PlusCircleIcon}>Add option</Button></Box>
                </LegacyCard>
              </Layout.Section>
            </Layout.Section>
            <Layout.Section variant="oneThird">
              <Preview />
            </Layout.Section>
          </Layout>
        </Page>
      </div>
    </AppProvider>

  );
}

export default App;
