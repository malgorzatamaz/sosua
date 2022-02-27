import {
  CompositionAppBody,
  CompositionContainer,
} from "../src/components/Compositions";
import { Text, StyleSheet, View } from "react-native";
import { getLanguage } from "../src/lang/getLanguages";

const getTranslation = (key) => getLanguage("homepage", key);

export default function App(props) {
  return (
    <CompositionAppBody>
      <CompositionContainer>
        <View style={styles.comming}>
          <Text style={styles.titleText}>
            {getTranslation("placeholderHero")}
          </Text>
        </View>
      </CompositionContainer>
    </CompositionAppBody>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  comming: {
    textAlign: "center",
    marginTop: "30vh",
  },
});

/**
 * Temporary dumy data
 * TODO: api/getAccommodations
 */
