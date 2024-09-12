import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { text } from '@keystone-6/core/fields';

export default list({
  access: allowAll,

  fields: {
    title: text({ validation: { isRequired: true } }),
    dermatologistsLabel: text({ defaultValue: 'Dermatologists' }),
    npLabel: text({ defaultValue: 'Nurse Practitioners' })
  },
})