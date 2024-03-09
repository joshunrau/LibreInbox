import { create } from 'zustand';

import type { Email } from '@/models/email';

export type EmailStore = {
  emails: Email[];
  setEmails: (emails: Email[]) => void;
};

export const useEmailStore = create<EmailStore>((set) => ({
  emails: [],
  setEmails: (emails) => {
    set({ emails });
  }
}));
