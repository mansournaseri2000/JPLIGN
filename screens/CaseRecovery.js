import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const CaseRecovery = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.caserecovery}>
              <StatusBar backgroundColor={Color.bgBlack} />

      <View style={styles.topsection}>
        <Image
          style={styles.jplignlogoIcon}
          resizeMode="cover"
          source={require("../assets/jplignlogo1.png")}
        />
        <View style={styles.formsectionSpaceBlock1}>
          <Text style={[styles.brandname, styles.labelFlexBox]}>
            Health Teeth Operation GmbH / JPLign
          </Text>
          <Text style={[styles.pagename, styles.pagenameTypo]}>
            Paitent Recovery Account
          </Text>
        </View>
        <View style={[styles.formsection, styles.formsectionSpaceBlock]}>
          <View style={[styles.inputgroup, styles.inputgroupFlexBox]}>
            <View style={[styles.inputiconwrapper, styles.buttontextFlexBox]}>
              <Image
                style={styles.packagePlusIcon}
                resizeMode="contain"
                source={require("../assets/packageplus2.png")}
              />
            </View>
            <View style={styles.fieldinput}>
              <Text style={[styles.label, styles.labelTypo]}>Email</Text>
              <TextInput
                style={styles.labelTypo}
                placeholder="Placeholder"
                placeholderTextColor="#e6e6e6"
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bottomsection}>
        <TouchableOpacity
          style={[styles.growtextbutton, styles.buttontextFlexBox]}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("CaseReset")}
        >
          <Text style={[styles.buttontext, styles.buttontextFlexBox]}>
            Recovery
          </Text>
        </TouchableOpacity>
        <View style={[styles.underbtntext, styles.buttontextFlexBox]}>
          <Text style={styles.pagenameTypo}>Remember your password?</Text>
          <TouchableOpacity
            style={styles.actiontext}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("CaseLogin")}
          >
            <Text style={[styles.login, styles.labelFlexBox]}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  labelFlexBox: {
    textAlign: "left",
    color: Color.colorPrimary,
  },
  pagenameTypo: {
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.bodySmall,
    fontSize: FontSize.titleMedium_size,
  },
  formsectionSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
  },
  inputgroupFlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  buttontextFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  labelTypo: {
    fontSize: FontSize.bodyMedium_size,
    fontFamily: FontFamily.bodySmall,
    alignSelf: "stretch",
  },
  jplignlogoIcon: {
    width: 96,
    height: 75,
  },
  brandname: {
    fontFamily: FontFamily.bodySmall,
    fontSize: FontSize.titleMedium_size,
  },
  pagename: {
    marginTop: 8,
  },
  formsectionSpaceBlock1: {
    marginTop: 32,
    alignItems: "center",
  },
  packagePlusIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  inputiconwrapper: {
    width: 40,
    height: 40,
    backgroundColor: Color.colorPrimary,
    borderRadius: Border.br_mini,
    justifyContent: "center",
    flexDirection: "row",
    padding: Padding.p_5xs,
  },
  label: {
    textAlign: "left",
    color: Color.colorPrimary,
  },
  fieldinput: {
    marginLeft: 8,
    height: 40,
    flex: 1,
  },
  inputgroup: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.bgBrown,
    padding: Padding.p_5xs,
  },
  formsection: {
    marginTop: 32,
    alignItems: "center",
    alignSelf: "stretch",
  },
  topsection: {
    paddingTop: Padding.p_13xl,
    alignSelf: "stretch",
    alignItems: "center",
  },
  buttontext: {
    color: Color.gray,
    textAlign: "center",
    display: "flex",
    width: 304,
    height: 28,
    fontFamily: FontFamily.bodySmall,
    fontSize: FontSize.titleMedium_size,
  },
  growtextbutton: {
    paddingVertical: Padding.p_5xs,
    height: 40,
    backgroundColor: Color.colorPrimary,
    borderRadius: Border.br_mini,
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    alignSelf: "stretch",
  },
  login: {
    fontFamily: FontFamily.bodySmall,
    fontSize: FontSize.titleMedium_size,
  },
  actiontext: {
    marginLeft: 8,
  },
  underbtntext: {
    flexDirection: "row",
    alignSelf: "stretch",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    marginTop: 8,
  },
  bottomsection: {
    padding: Padding.p_base,
    alignSelf: "stretch",
    alignItems: "center",
  },
  caserecovery: {
    backgroundColor: Color.bgBlack,
    width: "100%",
    height: 898,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default CaseRecovery;