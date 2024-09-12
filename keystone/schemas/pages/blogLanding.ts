import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { image, text } from '@keystone-6/core/fields';

export default list({
  access: allowAll,

  fields: {
    title: text({ validation: { isRequired: true } }),
    heroImage: image({ storage: 'local_images' }),
  },
})