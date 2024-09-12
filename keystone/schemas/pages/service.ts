import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import {
  image,
  relationship,
  text,
} from '@keystone-6/core/fields';

import { document } from '@keystone-6/fields-document';

export default list({
  access: allowAll,

  fields: {
    title: text({ validation: { isRequired: true } }),
    heroImage: image({ storage: 'local_images' }),
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
    conditionsLabel: text(),
    conditions: relationship({ ref: 'Condition', many: true })
  },
})