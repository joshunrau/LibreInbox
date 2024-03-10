import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { AccountSetupPage } from './features/accounts';
// import { MailboxPage } from './features/mailbox';
import { useAccountStore } from './stores/account-store';

export const AppRoutes = () => {
  const { accounts } = useAccountStore();

  return (
    <Routes>
      <Route path="accounts">
        <Route element={<AccountSetupPage />} path="setup" />
      </Route>
      {accounts.length ? (
        <Route element={null} path="mailbox"></Route>
      ) : (
        <Route element={<Navigate to="/accounts/setup" />} path="*" />
      )}
      <Route element={<Navigate to="/accounts/setup" />} path="*" />
    </Routes>
  );
};

export const Router = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};
