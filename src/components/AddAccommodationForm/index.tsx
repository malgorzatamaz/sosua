import { useTranslation } from 'react-i18next';

const AddAccommodationForm = () => {
  const { t } = useTranslation();

  return <div>{t('title')}</div>;
};

export default AddAccommodationForm;
