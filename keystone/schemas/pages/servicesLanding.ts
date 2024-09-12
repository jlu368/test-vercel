import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import {
  text,
  relationship,
} from '@keystone-6/core/fields';

export default list({
  access: allowAll,

  fields: {
    title: text({ validation: { isRequired: true } }),
    services: relationship({
      ref: 'Service',
      many: true
    }),
  },
})