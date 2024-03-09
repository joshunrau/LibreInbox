import { create } from 'zustand';

import type { Email } from '@/models/email';

export type EmailStore = {
  emails: Email[];
  selectedEmail: Email | null;
  setEmails: (emails: Email[]) => void;
};

export const useEmailStore = create<EmailStore>((set) => ({
  emails: [],
  selectedEmail: null,
  setEmails: (emails) => {
    set({ emails });
  }
}));
