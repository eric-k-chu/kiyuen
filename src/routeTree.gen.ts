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

const playtetrisPlayTetrisRoute = playtetrisPlayTetrisImport.update({
  id: '/(play)/(tetris)/play/tetris',
  path: '/play/tetris',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
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

export interface FileRoutesByFullPath {
  '/play': typeof playPlayRoute
  '/': typeof homeIndexRoute
  '/play/tetris': typeof playtetrisPlayTetrisRoute
}

export interface FileRoutesByTo {
  '/play': typeof playPlayRoute
  '/': typeof homeIndexRoute
  '/play/tetris': typeof playtetrisPlayTetrisRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/(play)/play': typeof playPlayRoute
  '/(home)/': typeof homeIndexRoute
  '/(play)/(tetris)/play/tetris': typeof playtetrisPlayTetrisRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/play' | '/' | '/play/tetris'
  fileRoutesByTo: FileRoutesByTo
  to: '/play' | '/' | '/play/tetris'
  id: '__root__' | '/(play)/play' | '/(home)/' | '/(play)/(tetris)/play/tetris'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  playPlayRoute: typeof playPlayRoute
  homeIndexRoute: typeof homeIndexRoute
  playtetrisPlayTetrisRoute: typeof playtetrisPlayTetrisRoute
}

const rootRouteChildren: RootRouteChildren = {
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
        "/(play)/play",
        "/(home)/",
        "/(play)/(tetris)/play/tetris"
      ]
    },
    "/(play)/play": {
      "filePath": "(play)/play.tsx"
    },
    "/(home)/": {
      "filePath": "(home)/index.tsx"
    },
    "/(play)/(tetris)/play/tetris": {
      "filePath": "(play)/(tetris)/play.tetris.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
