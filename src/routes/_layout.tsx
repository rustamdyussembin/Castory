import { Slot } from 'expo-router';

import { AppProviders, useAppInitialization } from '@/app';

export default function RootLayout() {
  const isReady = useAppInitialization();

  if (!isReady) return null;

  return (
    <AppProviders>
      <Slot />
    </AppProviders>
  );
}
