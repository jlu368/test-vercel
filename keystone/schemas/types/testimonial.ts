import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { text, integer } from '@keystone-6/core/fields';
import { document } from '@keystone-6/fields-document';

export default list({
  access: allowAll,
  
  fields: {
    name: text({ validation: { isRequired: true } }),
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
    }),
    stars: integer({ validation: { min: 0, max: 5 }})
  },
})