import { group, list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { text, image } from '@keystone-6/core/fields';

export default list({
  access: allowAll,

  fields: {
    logo: image({ storage: 'local_images' }),
    ...group({
      label: 'Nav Header',
      fields: {

      }
    }),
    ...group({
      label: 'Nav Footer',
      fields: {
        acceptedInsuranceHeader: text(),
        acceptedInsuranceText: text(),
        scheduleAnApptHeader: text(),
        scheduleVisitLabel: text(),
        scheduleVisitLink: text(),
        contactUsLabel: text(),
        phone: text(),
        fax: text(),
        instagramLink: text(),
        linkedInLink: text(),
        facebookLink: text(),
      }
    }),
  },
})