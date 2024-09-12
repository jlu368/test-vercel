import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { text } from '@keystone-6/core/fields';

export default list({
  access: allowAll,

  fields: {
    title: text({ validation: { isRequired: true } }),
    subtitle: text(),
    findALocationLabel: text({ label: 'Find a Location Label' }),
    mapEmbed: text({ ui: { displayMode: 'textarea' }, }),
  },
})