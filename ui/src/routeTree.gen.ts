// This file is auto-generated by TanStack Router
// Import Routes
import {Route as rootRoute} from './routes/__root';
import {Route as DashboardImport} from './routes/_dashboard';
import {Route as DashboardActivityActivityImport} from './routes/_dashboard/activity/$activity';
import {Route as DashboardActivityIndexImport} from './routes/_dashboard/activity/index';
import {Route as DashboardFriendsFriendImport} from './routes/_dashboard/friends/$friend';
import {Route as DashboardFriendsIndexImport} from './routes/_dashboard/friends/index';
import {Route as DashboardGroupsGroupImport} from './routes/_dashboard/groups/$group';
import {Route as DashboardGroupsIndexImport} from './routes/_dashboard/groups/index';
import {Route as DashboardProfileProfileImport} from './routes/_dashboard/profile/$profile';
import {Route as DashboardProfileIndexImport} from './routes/_dashboard/profile/index';
import {Route as AuthLoginImport} from './routes/auth/login';
import {Route as IndexImport} from './routes/index';

// Create/Update Routes

const DashboardRoute = DashboardImport.update({
  id: '/_dashboard',
  getParentRoute: () => rootRoute,
} as any);

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any);

const AuthLoginRoute = AuthLoginImport.update({
  path: '/auth/login',
  getParentRoute: () => rootRoute,
} as any);

const DashboardProfileIndexRoute = DashboardProfileIndexImport.update({
  path: '/profile/',
  getParentRoute: () => DashboardRoute,
} as any);

const DashboardGroupsIndexRoute = DashboardGroupsIndexImport.update({
  path: '/groups/',
  getParentRoute: () => DashboardRoute,
} as any);

const DashboardFriendsIndexRoute = DashboardFriendsIndexImport.update({
  path: '/friends/',
  getParentRoute: () => DashboardRoute,
} as any);

const DashboardActivityIndexRoute = DashboardActivityIndexImport.update({
  path: '/activity/',
  getParentRoute: () => DashboardRoute,
} as any);

const DashboardProfileProfileRoute = DashboardProfileProfileImport.update({
  path: '/profile/$profile',
  getParentRoute: () => DashboardRoute,
} as any);

const DashboardGroupsGroupRoute = DashboardGroupsGroupImport.update({
  path: '/groups/$group',
  getParentRoute: () => DashboardRoute,
} as any);

const DashboardFriendsFriendRoute = DashboardFriendsFriendImport.update({
  path: '/friends/$friend',
  getParentRoute: () => DashboardRoute,
} as any);

const DashboardActivityActivityRoute = DashboardActivityActivityImport.update({
  path: '/activity/$activity',
  getParentRoute: () => DashboardRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
    '/_dashboard': {
      preLoaderRoute: typeof DashboardImport;
      parentRoute: typeof rootRoute;
    };
    '/auth/login': {
      preLoaderRoute: typeof AuthLoginImport;
      parentRoute: typeof rootRoute;
    };
    '/_dashboard/activity/$activity': {
      preLoaderRoute: typeof DashboardActivityActivityImport;
      parentRoute: typeof DashboardImport;
    };
    '/_dashboard/friends/$friend': {
      preLoaderRoute: typeof DashboardFriendsFriendImport;
      parentRoute: typeof DashboardImport;
    };
    '/_dashboard/groups/$group': {
      preLoaderRoute: typeof DashboardGroupsGroupImport;
      parentRoute: typeof DashboardImport;
    };
    '/_dashboard/profile/$profile': {
      preLoaderRoute: typeof DashboardProfileProfileImport;
      parentRoute: typeof DashboardImport;
    };
    '/_dashboard/activity/': {
      preLoaderRoute: typeof DashboardActivityIndexImport;
      parentRoute: typeof DashboardImport;
    };
    '/_dashboard/friends/': {
      preLoaderRoute: typeof DashboardFriendsIndexImport;
      parentRoute: typeof DashboardImport;
    };
    '/_dashboard/groups/': {
      preLoaderRoute: typeof DashboardGroupsIndexImport;
      parentRoute: typeof DashboardImport;
    };
    '/_dashboard/profile/': {
      preLoaderRoute: typeof DashboardProfileIndexImport;
      parentRoute: typeof DashboardImport;
    };
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  DashboardRoute.addChildren([
    DashboardActivityActivityRoute,
    DashboardFriendsFriendRoute,
    DashboardGroupsGroupRoute,
    DashboardProfileProfileRoute,
    DashboardActivityIndexRoute,
    DashboardFriendsIndexRoute,
    DashboardGroupsIndexRoute,
    DashboardProfileIndexRoute,
  ]),
  AuthLoginRoute,
]);
