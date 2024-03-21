import {  LegacyCard, Layout, DataTable } from '@shopify/polaris';

function Preview() {
    const preview = JSON.parse(localStorage.getItem('preview'));
    return ( 
        <Layout.Section>
        <LegacyCard title="Tags" sectioned>
          <p>Add tags to your order.</p>
          <DataTable
            showTotalsInFooter
            columnContentTypes={[
              'text',
              'text',
              'text',
              'text',
            ]}
            headings={[
              'Title',
              'Discount Type',
              'Quantity',
              'Amount',
            ]}
            rows={preview.map((item) =>Object.values(item))}
          />
        </LegacyCard>
      </Layout.Section>
     );
}

export default Preview;