import { create } from 'zustand';

import type { Account } from '@/models/account';

export type AccountStore = {
  accounts: Account[];
  addAccount: (account: Account) => void;
  deleteAccount: (id: string) => void;
};

export const useAccountStore = create<AccountStore>((set) => ({
  accounts: [],
  addAccount: (account) =>
    set(({ accounts }) => ({
      accounts: [...accounts, account]
    })),
  deleteAccount: (id) =>
    set(({ accounts }) => ({
      accounts: accounts.filter((account) => account.id !== id)
    }))
}));
