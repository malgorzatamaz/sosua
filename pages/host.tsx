import { CompositionAppBody } from '../src/components/Compositions';
import AddAccommodationForm from '../src/components/AddAccommodationForm';
import { StyleSheet, View } from 'react-native';
import { useSession } from 'next-auth/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Account() {
  const hostAddAccommodation = false;
  const { data: session } = useSession();

  return (
    <CompositionAppBody>
      {session ? (
        <>
          {!hostAddAccommodation ? (
            <View style={styles.container}>
              <AddAccommodationForm />
            </View>
          ) : (
            <>lista</>
          )}
        </>
      ) : (
        <View style={styles.container}>
          <AddAccommodationForm />
        </View>
      )}
    </CompositionAppBody>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

const styles = StyleSheet.create({
  container: {
    // maxWidth: "50%",
    width: '100%',
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginRight: 'auto',
    marginLeft: 'auto',
    flex: 1,
  },
});
