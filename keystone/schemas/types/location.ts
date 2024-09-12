import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import {
  text,
  relationship,
} from '@keystone-6/core/fields';

export default list({
  access: allowAll,

  fields: {
    name: text({ validation: { isRequired: true } }),
    address: text({ ui: { displayMode: 'textarea' }, }),
    phone: text(),
    fax: text(),
    latitude: text(),
    longitude: text(),
    services: relationship({ ref: 'Service', many: true }),
  },
})