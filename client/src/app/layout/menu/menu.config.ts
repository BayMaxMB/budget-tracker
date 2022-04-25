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
    icon: 'summarize',
  },
];
