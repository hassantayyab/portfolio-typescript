export interface Route {
  path: string
  label: string
}

export const ROUTES: Route[] = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/services',
    label: 'Services',
  },
  {
    path: '/works',
    label: 'Works',
  },
  {
    path: '/about',
    label: 'About',
  },
  {
    path: '/contact',
    label: 'Contact',
  },
]
