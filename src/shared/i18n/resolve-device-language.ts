import { DEFAULT_LANGUAGE, isSupportedLanguage, type SupportedLanguage } from './i18n.types';

export const resolveDeviceLanguage = (preferredLanguages: readonly (string | null)[]): SupportedLanguage => {
  const supportedLanguage = preferredLanguages.find(isSupportedLanguage);

  return supportedLanguage ?? DEFAULT_LANGUAGE;
};
