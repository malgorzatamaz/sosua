import {
  CompositionAppBody,
  CompositionContainer,
} from "../src/components/Compositions";
import AddAccommodationForm from "../src/components/AddAccommodationForm";
import { StyleSheet, View } from "react-native";
import { useSession } from "next-auth/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
});

export default function Account(props) {
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

const styles = StyleSheet.create({
  container: {
    // maxWidth: "50%",
    width: "100%",
    flexDirection: "column",
    flexWrap: "wrap",
    marginRight: "auto",
    marginLeft: "auto",
    flex: 1,
  },
});
