import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { Border, Padding, FontSize, FontFamily, Color } from "../GlobalStyles";

const FrameComponent2 = ({ style }) => {
  return (
    <View style={[styles.frameParent, style]}>
      <View style={styles.teethWhiteningAfterTreatmenWrapper}>
        <Image
          style={styles.teethWhiteningAfterTreatmenIcon}
          resizeMode="cover"
          source={require("../assets/image3.png")}
        />
      </View>
      <Text style={styles.text}>#3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  teethWhiteningAfterTreatmenIcon: {
    borderRadius: Border.br_11xs,
    width: 150,
    height: 100,
  },
  teethWhiteningAfterTreatmenWrapper: {
    borderRadius: Border.br_8xs,
    borderStyle: "solid",
    borderColor: "#c5ab8e",
    borderWidth: 2,
    padding: Padding.p_9xs,
  },
  text: {
    fontSize: FontSize.titleMedium_size,
    fontFamily: FontFamily.bodySmall,
    color: Color.colorPrimary,
    textAlign: "left",
    marginTop: 8,
  },
  frameParent: {
    alignItems: "center",
  },
});

export default FrameComponent2;