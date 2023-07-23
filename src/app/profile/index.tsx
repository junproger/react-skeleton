import {memo} from 'react';
import Head from "@src/ui/navigation/head";
import MainMenu from "@src/features/navigation/components/main-menu";
import PageLayout from "@src/ui/layout/page-layout";
import ProfileCard from "@src/features/auth/components/profile-card";
import useServices from "@src/services/use-services";
import useInit from "@src/services/use-init";
import useSelector from "@src/services/store/use-selector";
import {useTranslate} from "@src/features/i18n/use-i18n";
import LocaleSelect from "@src/features/i18n/components/locale-select";
import AuthHead from "@src/features/auth/components/auth-head";
import SideLayout from "@src/ui/layout/side-layout";

function Profile() {

  const store = useServices().store;
  useInit(() => {
    store.modules.profile.load();
  }, []);
  const select = useSelector(state => state.profile);
  const t = useTranslate();

  return (
    <PageLayout>
      <Head title="React Skeleton">
        <SideLayout>
          <AuthHead/>
          <LocaleSelect/>
        </SideLayout>
      </Head>
      <MainMenu/>
      <ProfileCard t={t} data={select.data || {}}/>
    </PageLayout>
  );
}

export default memo(Profile);