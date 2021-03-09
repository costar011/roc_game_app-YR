import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const CURRENT_WIDTH = Dimensions.get(`window`).width;

const App = () => {
  const [tab, setTab] = useState(0);

  const _startButtonClickHandler = (value) => {
    setTab(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundArea}></View>
      <View style={styles.resultArea}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundArea: {
    flex: 8,

    alignItems: `center`,
    justifyContent: `center`,

    backgroundColor: `#6ccaf0`,
  },

  resultArea: {
    flex: 2,

    alignItems: `center`,
    justifyContent: `center`,

    backgroundColor: `#4e9bed`,
  },
});

export default App;
