"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// keystone.ts
var keystone_exports = {};
__export(keystone_exports, {
  default: () => keystone_default
});
module.exports = __toCommonJS(keystone_exports);
var import_core17 = require("@keystone-6/core");

// keystone/schemas/types/user.ts
var import_core = require("@keystone-6/core");
var import_access = require("@keystone-6/core/access");
var import_fields = require("@keystone-6/core/fields");
var user_default = (0, import_core.list)({
  access: import_access.allowAll,
  fields: {
    name: (0, import_fields.text)({ validation: { isRequired: true } }),
    email: (0, import_fields.text)({
      validation: { isRequired: true },
      isIndexed: "unique"
    }),
    password: (0, import_fields.password)({ validation: { isRequired: true } }),
    createdAt: (0, import_fields.timestamp)({
      defaultValue: { kind: "now" }
    })
  }
});

// keystone/schemas/types/tag.ts
var import_core2 = require("@keystone-6/core");
var import_access2 = require("@keystone-6/core/access");
var import_fields2 = require("@keystone-6/core/fields");
var tag_default = (0, import_core2.list)({
  access: import_access2.allowAll,
  ui: {
    isHidden: true
  },
  fields: {
    name: (0, import_fields2.text)(),
    posts: (0, import_fields2.relationship)({ ref: "Post.tags", many: true })
  }
});

// keystone/schemas/pages/service.ts
var import_core3 = require("@keystone-6/core");
var import_access3 = require("@keystone-6/core/access");
var import_fields3 = require("@keystone-6/core/fields");
var import_fields_document = require("@keystone-6/fields-document");
var service_default = (0, import_core3.list)({
  access: import_access3.allowAll,
  fields: {
    title: (0, import_fields3.text)({ validation: { isRequired: true } }),
    heroImage: (0, import_fields3.image)({ storage: "local_images" }),
    content: (0, import_fields_document.document)({
      formatting: true,
      layouts: [
        [1, 1],
        [1, 1, 1],
        [2, 1],
        [1, 2],
        [1, 2, 1]
      ],
      links: true,
      dividers: true
    }),
    conditionsLabel: (0, import_fields3.text)(),
    conditions: (0, import_fields3.relationship)({ ref: "Condition", many: true })
  }
});

// keystone/schemas/pages/condition.ts
var import_core4 = require("@keystone-6/core");
var import_access4 = require("@keystone-6/core/access");
var import_fields4 = require("@keystone-6/core/fields");
var import_fields_document2 = require("@keystone-6/fields-document");
var condition_default = (0, import_core4.list)({
  access: import_access4.allowAll,
  fields: {
    title: (0, import_fields4.text)({ validation: { isRequired: true } }),
    heroImage: (0, import_fields4.image)({ storage: "local_images" }),
    content: (0, import_fields_document2.document)({
      formatting: true,
      layouts: [
        [1, 1],
        [1, 1, 1],
        [2, 1],
        [1, 2],
        [1, 2, 1]
      ],
      links: true,
      dividers: true
    }),
    servicesLabel: (0, import_fields4.text)(),
    services: (0, import_fields4.relationship)({ ref: "Service", many: true })
  }
});

// keystone/schemas/pages/servicesLanding.ts
var import_core5 = require("@keystone-6/core");
var import_access5 = require("@keystone-6/core/access");
var import_fields5 = require("@keystone-6/core/fields");
var servicesLanding_default = (0, import_core5.list)({
  access: import_access5.allowAll,
  fields: {
    title: (0, import_fields5.text)({ validation: { isRequired: true } }),
    services: (0, import_fields5.relationship)({
      ref: "Service",
      many: true
    })
  }
});

// keystone/schemas/pages/post.ts
var import_core6 = require("@keystone-6/core");
var import_access6 = require("@keystone-6/core/access");
var import_fields6 = require("@keystone-6/core/fields");
var import_fields_document3 = require("@keystone-6/fields-document");
var post_default = (0, import_core6.list)({
  access: import_access6.allowAll,
  fields: {
    title: (0, import_fields6.text)({ validation: { isRequired: true } }),
    heroImage: (0, import_fields6.image)({ storage: "local_images" }),
    abstract: (0, import_fields_document3.document)({
      formatting: true,
      layouts: [
        [1, 1],
        [1, 1, 1],
        [2, 1],
        [1, 2],
        [1, 2, 1]
      ],
      links: true,
      dividers: true
    }),
    content: (0, import_fields_document3.document)({
      formatting: true,
      layouts: [
        [1, 1],
        [1, 1, 1],
        [2, 1],
        [1, 2],
        [1, 2, 1]
      ],
      links: true,
      dividers: true
    }),
    date: (0, import_fields6.calendarDay)(),
    author: (0, import_fields6.relationship)({
      ref: "Provider.posts",
      ui: {
        displayMode: "cards",
        cardFields: ["name", "email"],
        inlineEdit: { fields: ["name", "email"] },
        linkToItem: true,
        inlineConnect: true
      },
      many: false
    }),
    tags: (0, import_fields6.relationship)({
      ref: "Tag.posts",
      many: true,
      ui: {
        displayMode: "cards",
        cardFields: ["name"],
        inlineEdit: { fields: ["name"] },
        linkToItem: true,
        inlineConnect: true,
        inlineCreate: { fields: ["name"] }
      }
    })
  },
  ui: {
    description: "...",
    singular: "Post",
    plural: "Posts"
  }
});

// keystone/schemas/pages/blogLanding.ts
var import_core7 = require("@keystone-6/core");
var import_access7 = require("@keystone-6/core/access");
var import_fields7 = require("@keystone-6/core/fields");
var blogLanding_default = (0, import_core7.list)({
  access: import_access7.allowAll,
  fields: {
    title: (0, import_fields7.text)({ validation: { isRequired: true } }),
    heroImage: (0, import_fields7.image)({ storage: "local_images" })
  }
});

// keystone/schemas/types/testimonial.ts
var import_core8 = require("@keystone-6/core");
var import_access8 = require("@keystone-6/core/access");
var import_fields8 = require("@keystone-6/core/fields");
var import_fields_document4 = require("@keystone-6/fields-document");
var testimonial_default = (0, import_core8.list)({
  access: import_access8.allowAll,
  fields: {
    name: (0, import_fields8.text)({ validation: { isRequired: true } }),
    content: (0, import_fields_document4.document)({
      formatting: true,
      layouts: [
        [1, 1],
        [1, 1, 1],
        [2, 1],
        [1, 2],
        [1, 2, 1]
      ],
      links: true,
      dividers: true
    }),
    stars: (0, import_fields8.integer)({ validation: { min: 0, max: 5 } })
  }
});

// keystone/schemas/pages/home.ts
var import_core9 = require("@keystone-6/core");
var import_access9 = require("@keystone-6/core/access");
var import_fields9 = require("@keystone-6/core/fields");
var import_fields_document5 = require("@keystone-6/fields-document");
var home_default = (0, import_core9.list)({
  access: import_access9.allowAll,
  fields: {
    ...(0, import_core9.group)({
      label: "Home Hero",
      description: "",
      fields: {
        heroHeadline: (0, import_fields9.text)({ validation: { isRequired: true } }),
        heroImage: (0, import_fields9.image)({ storage: "local_images" }),
        heroCtaLabel: (0, import_fields9.text)(),
        heroCtaLink: (0, import_fields9.text)({ validation: { match: { regex: RegExp("(http|ftp|https)://[w-]+(.[w-]+)+([w.,@?^=%&amp;:/~+#-]*[w@?^=%&amp;/~+#-])?") } } })
      }
    }),
    ...(0, import_core9.group)({
      label: "Home Welcome",
      description: "",
      fields: {
        welcomeHeader: (0, import_fields9.text)({ validation: { isRequired: true } }),
        welcomeDescription: (0, import_fields_document5.document)({
          formatting: true,
          layouts: [
            [1, 1],
            [1, 1, 1],
            [2, 1],
            [1, 2],
            [1, 2, 1]
          ],
          links: true,
          dividers: true
        })
      }
    }),
    ...(0, import_core9.group)({
      label: "Meet Our Team",
      description: "",
      fields: {
        meetTeamHeader: (0, import_fields9.text)({ validation: { isRequired: true } }),
        findLocationHeader: (0, import_fields9.text)(),
        findLocationEmbed: (0, import_fields9.text)({ ui: { displayMode: "textarea" } }),
        providers: (0, import_fields9.relationship)({ ref: "Provider", many: true })
      }
    }),
    ...(0, import_core9.group)({
      label: "Services List",
      description: "",
      fields: {
        servicesHeader: (0, import_fields9.text)({ validation: { isRequired: true } }),
        services: (0, import_fields9.relationship)({ ref: "Service", many: true })
      }
    }),
    ...(0, import_core9.group)({
      label: "Testimonials",
      description: "",
      fields: {
        testimonialsHeader: (0, import_fields9.text)({ validation: { isRequired: true } }),
        testimonials: (0, import_fields9.relationship)({ ref: "Testimonial", many: true })
      }
    })
  }
});

// keystone/schemas/pages/about.ts
var import_core10 = require("@keystone-6/core");
var import_access10 = require("@keystone-6/core/access");
var import_fields10 = require("@keystone-6/core/fields");
var import_fields_document6 = require("@keystone-6/fields-document");
var about_default = (0, import_core10.list)({
  access: import_access10.allowAll,
  fields: {
    title: (0, import_fields10.text)({ validation: { isRequired: true } }),
    heroImage: (0, import_fields10.image)({ storage: "local_images" }),
    // the document field can be used for making rich editable content
    //   you can find out more at https://keystonejs.com/docs/guides/document-fields
    content: (0, import_fields_document6.document)({
      formatting: true,
      layouts: [
        [1, 1],
        [1, 1, 1],
        [2, 1],
        [1, 2],
        [1, 2, 1]
      ],
      links: true,
      dividers: true,
      relationships: {
        mention: {
          listKey: "Service",
          label: "Relate",
          selection: "id name"
        }
      }
    })
  }
});

// keystone/schemas/types/location.ts
var import_core11 = require("@keystone-6/core");
var import_access11 = require("@keystone-6/core/access");
var import_fields11 = require("@keystone-6/core/fields");
var location_default = (0, import_core11.list)({
  access: import_access11.allowAll,
  fields: {
    name: (0, import_fields11.text)({ validation: { isRequired: true } }),
    address: (0, import_fields11.text)({ ui: { displayMode: "textarea" } }),
    phone: (0, import_fields11.text)(),
    fax: (0, import_fields11.text)(),
    latitude: (0, import_fields11.text)(),
    longitude: (0, import_fields11.text)(),
    services: (0, import_fields11.relationship)({ ref: "Service", many: true })
  }
});

// keystone/schemas/pages/locationLanding.ts
var import_core12 = require("@keystone-6/core");
var import_access12 = require("@keystone-6/core/access");
var import_fields12 = require("@keystone-6/core/fields");
var locationLanding_default = (0, import_core12.list)({
  access: import_access12.allowAll,
  fields: {
    title: (0, import_fields12.text)({ validation: { isRequired: true } }),
    subtitle: (0, import_fields12.text)(),
    findALocationLabel: (0, import_fields12.text)({ label: "Find a Location Label" }),
    mapEmbed: (0, import_fields12.text)({ ui: { displayMode: "textarea" } })
  }
});

// keystone/schemas/types/provider.ts
var import_core13 = require("@keystone-6/core");
var import_access13 = require("@keystone-6/core/access");
var import_fields13 = require("@keystone-6/core/fields");
var import_fields_document7 = require("@keystone-6/fields-document");
var provider_default = (0, import_core13.list)({
  access: import_access13.allowAll,
  fields: {
    name: (0, import_fields13.text)({ validation: { isRequired: true } }),
    email: (0, import_fields13.text)(),
    title: (0, import_fields13.text)(),
    image: (0, import_fields13.image)({ storage: "local_images" }),
    type: (0, import_fields13.select)({ options: [{ label: "Dermatologist", value: "dermatologist" }, { label: "Nurse Practitioner", value: "np" }] }),
    posts: (0, import_fields13.relationship)({ ref: "Post.author", many: true }),
    description: (0, import_fields_document7.document)({
      formatting: true,
      layouts: [
        [1, 1],
        [1, 1, 1],
        [2, 1],
        [1, 2],
        [1, 2, 1]
      ],
      links: true,
      dividers: true
    }),
    homeDescription: (0, import_fields_document7.document)({
      formatting: true,
      layouts: [
        [1, 1],
        [1, 1, 1],
        [2, 1],
        [1, 2],
        [1, 2, 1]
      ],
      links: true,
      dividers: true
    })
  }
});

// keystone/schemas/pages/providersLanding.ts
var import_core14 = require("@keystone-6/core");
var import_access14 = require("@keystone-6/core/access");
var import_fields14 = require("@keystone-6/core/fields");
var providersLanding_default = (0, import_core14.list)({
  access: import_access14.allowAll,
  fields: {
    title: (0, import_fields14.text)({ validation: { isRequired: true } }),
    dermatologistsLabel: (0, import_fields14.text)({ defaultValue: "Dermatologists" }),
    npLabel: (0, import_fields14.text)({ defaultValue: "Nurse Practitioners" })
  }
});

// keystone/schemas/pages/appointments.ts
var import_core15 = require("@keystone-6/core");
var import_access15 = require("@keystone-6/core/access");
var import_fields15 = require("@keystone-6/core/fields");
var appointments_default = (0, import_core15.list)({
  access: import_access15.allowAll,
  fields: {
    title: (0, import_fields15.text)({ validation: { isRequired: true } })
  }
});

// keystone/schemas/settings/globalSettings.ts
var import_core16 = require("@keystone-6/core");
var import_access16 = require("@keystone-6/core/access");
var import_fields16 = require("@keystone-6/core/fields");
var globalSettings_default = (0, import_core16.list)({
  access: import_access16.allowAll,
  fields: {
    logo: (0, import_fields16.image)({ storage: "local_images" }),
    ...(0, import_core16.group)({
      label: "Nav Header",
      fields: {}
    }),
    ...(0, import_core16.group)({
      label: "Nav Footer",
      fields: {
        acceptedInsuranceHeader: (0, import_fields16.text)(),
        acceptedInsuranceText: (0, import_fields16.text)(),
        scheduleAnApptHeader: (0, import_fields16.text)(),
        scheduleVisitLabel: (0, import_fields16.text)(),
        scheduleVisitLink: (0, import_fields16.text)(),
        contactUsLabel: (0, import_fields16.text)(),
        phone: (0, import_fields16.text)(),
        fax: (0, import_fields16.text)(),
        instagramLink: (0, import_fields16.text)(),
        linkedInLink: (0, import_fields16.text)(),
        facebookLink: (0, import_fields16.text)()
      }
    })
  }
});

// schema.ts
var lists = {
  User: user_default,
  Tag: tag_default,
  Service: service_default,
  Condition: condition_default,
  ServicesLanding: servicesLanding_default,
  Post: post_default,
  BlogLanding: blogLanding_default,
  Testimonial: testimonial_default,
  Home: home_default,
  About: about_default,
  Location: location_default,
  LocationLanding: locationLanding_default,
  Provider: provider_default,
  ProvidersLanding: providersLanding_default,
  AppointmentsPage: appointments_default,
  GlobalSetting: globalSettings_default
};

// auth.ts
var import_crypto = require("crypto");
var import_auth = require("@keystone-6/auth");
var import_session = require("@keystone-6/core/session");
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret && process.env.NODE_ENV !== "production") {
  sessionSecret = (0, import_crypto.randomBytes)(32).toString("hex");
}
var { withAuth } = (0, import_auth.createAuth)({
  listKey: "User",
  identityField: "email",
  // this is a GraphQL query fragment for fetching what data will be attached to a context.session
  //   this can be helpful for when you are writing your access control functions
  //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
  sessionData: "name createdAt",
  secretField: "password",
  // WARNING: remove initFirstItem functionality in production
  //   see https://keystonejs.com/docs/config/auth#init-first-item for more
  initFirstItem: {
    // if there are no items in the database, by configuring this field
    //   you are asking the Keystone AdminUI to create a new user
    //   providing inputs for these fields
    fields: ["name", "email", "password"]
    // it uses context.sudo() to do this, which bypasses any access control you might have
    //   you shouldn't use this in production
  }
});
var sessionMaxAge = 60 * 60 * 24 * 30;
var session = (0, import_session.statelessSessions)({
  maxAge: sessionMaxAge,
  secret: sessionSecret
});

// keystone.ts
var keystone_default = withAuth(
  (0, import_core17.config)({
    db: {
      // we're using sqlite for the fastest startup experience
      //   for more information on what database might be appropriate for you
      //   see https://keystonejs.com/docs/guides/choosing-a-database#title
      provider: "sqlite",
      url: "file:./keystone.db"
    },
    lists,
    session,
    storage: {
      local_images: {
        kind: "local",
        type: "image",
        generateUrl: (path) => `http://localhost:3000/images${path}`,
        serverRoute: {
          path: "/images"
        },
        storagePath: "keystone/images"
      }
    },
    server: {
      cors: {},
      // port: 3050,
      maxFileSize: 200 * 1024 * 1024
    }
  })
);
//# sourceMappingURL=config.js.map
