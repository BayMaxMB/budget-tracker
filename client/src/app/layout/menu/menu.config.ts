import { IMenuItem } from './menu-item.model';

export const MENU_CONFIG: IMenuItem[] = [
  {
    id: 'transaction',
    title: 'Transactions',
    route: '/transaction',
    icon: 'listalt',
  },
  {
    id: 'account',
    title: 'Accounts',
    route: '/account',
    icon: 'credit_card',
  },
  {
    id: 'category',
    title: 'Categories',
    route: '/category',
    icon: 'category',
  },
  {
    id: 'stats',
    title: 'Statistics',
    route: '/stats',
    icon: 'query_stats',
  },
];
