import { EXTERNAL_LINKS } from "@/lib/constants";
import { useI18n } from "@/lib/i18n";

export function useApplicationLink() {
  const { language } = useI18n();
  
  return language === 'fr' 
    ? EXTERNAL_LINKS.applicationFormFr 
    : EXTERNAL_LINKS.applicationForm;
}