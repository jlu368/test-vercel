import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { image, text } from '@keystone-6/core/fields';
import { document } from '@keystone-6/fields-document';

export default list({
  access: allowAll,

  fields: {
    title: text({ validation: { isRequired: true } }),
    heroImage: image({ storage: 'local_images' }),

    // the document field can be used for making rich editable content
    //   you can find out more at https://keystonejs.com/docs/guides/document-fields
    content: document({
      formatting: true,
      layouts: [
        [1, 1],
        [1, 1, 1],
        [2, 1],
        [1, 2],
        [1, 2, 1],
      ],
      links: true,
      dividers: true,
      relationships: {
        mention: {
          listKey: 'Service',
          label: 'Relate',
          selection: 'id name',
        },
      },
    }),
  },
})