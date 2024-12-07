/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as homeIndexImport } from './routes/(home)/index'
import { Route as playPlayImport } from './routes/(play)/play'
import { Route as blogBlogImport } from './routes/(blog)/blog'
import { Route as blogBlogBlogIdImport } from './routes/(blog)/blog.$blogId'
import { Route as playtetrisPlayTetrisImport } from './routes/(play)/(tetris)/play.tetris'

// Create/Update Routes

const homeIndexRoute = homeIndexImport.update({
  id: '/(home)/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const playPlayRoute = playPlayImport.update({
  id: '/(play)/play',
  path: '/play',
  getParentRoute: () => rootRoute,
} as any)

const blogBlogRoute = blogBlogImport.update({
  id: '/(blog)/blog',
  path: '/blog',
  getParentRoute: () => rootRoute,
} as any)

const blogBlogBlogIdRoute = blogBlogBlogIdImport.update({
  id: '/$blogId',
  path: '/$blogId',
  getParentRoute: () => blogBlogRoute,
} as any)

const playtetrisPlayTetrisRoute = playtetrisPlayTetrisImport.update({
  id: '/(play)/(tetris)/play/tetris',
  path: '/play/tetris',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/(blog)/blog': {
      id: '/(blog)/blog'
      path: '/blog'
      fullPath: '/blog'
      preLoaderRoute: typeof blogBlogImport
      parentRoute: typeof rootRoute
    }
    '/(play)/play': {
      id: '/(play)/play'
      path: '/play'
      fullPath: '/play'
      preLoaderRoute: typeof playPlayImport
      parentRoute: typeof rootRoute
    }
    '/(home)/': {
      id: '/(home)/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof homeIndexImport
      parentRoute: typeof rootRoute
    }
    '/(blog)/blog/$blogId': {
      id: '/(blog)/blog/$blogId'
      path: '/$blogId'
      fullPath: '/blog/$blogId'
      preLoaderRoute: typeof blogBlogBlogIdImport
      parentRoute: typeof blogBlogImport
    }
    '/(play)/(tetris)/play/tetris': {
      id: '/(play)/(tetris)/play/tetris'
      path: '/play/tetris'
      fullPath: '/play/tetris'
      preLoaderRoute: typeof playtetrisPlayTetrisImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

interface blogBlogRouteChildren {
  blogBlogBlogIdRoute: typeof blogBlogBlogIdRoute
}

const blogBlogRouteChildren: blogBlogRouteChildren = {
  blogBlogBlogIdRoute: blogBlogBlogIdRoute,
}

const blogBlogRouteWithChildren = blogBlogRoute._addFileChildren(
  blogBlogRouteChildren,
)

export interface FileRoutesByFullPath {
  '/blog': typeof blogBlogRouteWithChildren
  '/play': typeof playPlayRoute
  '/': typeof homeIndexRoute
  '/blog/$blogId': typeof blogBlogBlogIdRoute
  '/play/tetris': typeof playtetrisPlayTetrisRoute
}

export interface FileRoutesByTo {
  '/blog': typeof blogBlogRouteWithChildren
  '/play': typeof playPlayRoute
  '/': typeof homeIndexRoute
  '/blog/$blogId': typeof blogBlogBlogIdRoute
  '/play/tetris': typeof playtetrisPlayTetrisRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/(blog)/blog': typeof blogBlogRouteWithChildren
  '/(play)/play': typeof playPlayRoute
  '/(home)/': typeof homeIndexRoute
  '/(blog)/blog/$blogId': typeof blogBlogBlogIdRoute
  '/(play)/(tetris)/play/tetris': typeof playtetrisPlayTetrisRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/blog' | '/play' | '/' | '/blog/$blogId' | '/play/tetris'
  fileRoutesByTo: FileRoutesByTo
  to: '/blog' | '/play' | '/' | '/blog/$blogId' | '/play/tetris'
  id:
    | '__root__'
    | '/(blog)/blog'
    | '/(play)/play'
    | '/(home)/'
    | '/(blog)/blog/$blogId'
    | '/(play)/(tetris)/play/tetris'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  blogBlogRoute: typeof blogBlogRouteWithChildren
  playPlayRoute: typeof playPlayRoute
  homeIndexRoute: typeof homeIndexRoute
  playtetrisPlayTetrisRoute: typeof playtetrisPlayTetrisRoute
}

const rootRouteChildren: RootRouteChildren = {
  blogBlogRoute: blogBlogRouteWithChildren,
  playPlayRoute: playPlayRoute,
  homeIndexRoute: homeIndexRoute,
  playtetrisPlayTetrisRoute: playtetrisPlayTetrisRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/(blog)/blog",
        "/(play)/play",
        "/(home)/",
        "/(play)/(tetris)/play/tetris"
      ]
    },
    "/(blog)/blog": {
      "filePath": "(blog)/blog.tsx",
      "children": [
        "/(blog)/blog/$blogId"
      ]
    },
    "/(play)/play": {
      "filePath": "(play)/play.tsx"
    },
    "/(home)/": {
      "filePath": "(home)/index.tsx"
    },
    "/(blog)/blog/$blogId": {
      "filePath": "(blog)/blog.$blogId.tsx",
      "parent": "/(blog)/blog"
    },
    "/(play)/(tetris)/play/tetris": {
      "filePath": "(play)/(tetris)/play.tetris.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
