import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import {
  text,
  relationship,
  image,
  select,
} from '@keystone-6/core/fields';
import { document } from '@keystone-6/fields-document';

export default list({
  access: allowAll,

  fields: {
    name: text({ validation: { isRequired: true } }),
    email: text(),
    title: text(),
    image: image({ storage: 'local_images' }),
    type: select({ options: [{ label: 'Dermatologist', value: 'dermatologist' }, { label: 'Nurse Practitioner', value: 'np' } ] }),
    posts: relationship({ ref: 'Post.author', many: true }),
    description: document({
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
    homeDescription: document({
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
  },
})