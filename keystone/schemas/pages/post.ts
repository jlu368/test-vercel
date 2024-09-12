import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import {
  text,
  relationship,
  calendarDay,
  image
} from '@keystone-6/core/fields';
import { document } from '@keystone-6/fields-document';

export default list({
  access: allowAll,
  
  fields: {
    title: text({ validation: { isRequired: true } }),
    heroImage: image({ storage: 'local_images' }),
    abstract: document({
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
    date: calendarDay(),
    author: relationship({
      ref: 'Provider.posts',
      ui: {
        displayMode: 'cards',
        cardFields: ['name', 'email'],
        inlineEdit: { fields: ['name', 'email'] },
        linkToItem: true,
        inlineConnect: true,
      },
      many: false,
    }),
    tags: relationship({
      ref: 'Tag.posts',
      many: true,
      ui: {
        displayMode: 'cards',
        cardFields: ['name'],
        inlineEdit: { fields: ['name'] },
        linkToItem: true,
        inlineConnect: true,
        inlineCreate: { fields: ['name'] },
      },
    }),
  },
  ui: {
    description: '...',
    singular: "Post",
    plural: "Posts"
  },
})