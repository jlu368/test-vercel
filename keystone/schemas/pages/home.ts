import { group, list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { image, relationship, text } from '@keystone-6/core/fields';
import { document } from '@keystone-6/fields-document';

export default list({
  access: allowAll,

  fields: {
    ...group({
      label: 'Home Hero',
      description: '',
      fields: {
        heroHeadline: text({ validation: { isRequired: true } }),
        heroImage: image({ storage: 'local_images' }),
        heroCtaLabel: text(),
        heroCtaLink: text({validation: {match: { regex: RegExp('(http|ftp|https)://[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:/~+#-]*[\w@?^=%&amp;/~+#-])?') }}}) 
      }
    }),
    ...group({
      label: 'Home Welcome',
      description: '',
      fields: {
        welcomeHeader: text({ validation: { isRequired: true } }),
        welcomeDescription: document({
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
      }
    }),
    ...group({
      label: 'Meet Our Team',
      description: '',
      fields: {
        meetTeamHeader: text({ validation: { isRequired: true } }),
        findLocationHeader: text(),
        findLocationEmbed: text({ ui: { displayMode: 'textarea' }, }),
        providers: relationship({ ref: 'Provider', many: true })
      }
    }),
    ...group({
      label: 'Services List',
      description: '',
      fields: {
        servicesHeader: text({ validation: { isRequired: true } }),
        services: relationship({ ref: 'Service', many: true })
      }
    }),
    ...group({
      label: 'Testimonials',
      description: '',
      fields: {
        testimonialsHeader: text({ validation: { isRequired: true } }),
        testimonials: relationship({ ref: 'Testimonial', many: true })
      }
    }),
  },
})