import User from './keystone/schemas/types/user';
import Tag from './keystone/schemas/types/tag';

import Service from './keystone/schemas/pages/service';
import Condition from './keystone/schemas/pages/condition';
import ServicesLanding from './keystone/schemas/pages/servicesLanding';

import Post from './keystone/schemas/pages/post';
import BlogLanding from './keystone/schemas/pages/blogLanding';

import Testimonial from './keystone/schemas/types/testimonial';
import Home from './keystone/schemas/pages/home';
import About from './keystone/schemas/pages/about';

import Location from './keystone/schemas/types/location';
import LocationLanding from './keystone/schemas/pages/locationLanding';

import Provider from './keystone/schemas/types/provider';
import ProvidersLanding from './keystone/schemas/pages/providersLanding';

import AppointmentsPage from './keystone/schemas/pages/appointments';

import GlobalSetting from './keystone/schemas/settings/globalSettings';

// if you want to make your own fields, see https://keystonejs.com/docs/guides/custom-fields

// when using Typescript, you can refine your types to a stricter subset by importing
// the generated types from '.keystone/types'
import type { Lists } from '.keystone/types';

export const lists: Lists = {
  User,
  Tag,
  Service,
  Condition,
  ServicesLanding,
  Post,
  BlogLanding,
  Testimonial,
  Home,
  About,
  Location,
  LocationLanding,
  Provider,
  ProvidersLanding,
  AppointmentsPage,
  GlobalSetting
};
