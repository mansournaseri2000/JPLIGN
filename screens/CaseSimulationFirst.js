import * as React from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const CaseSimulationFirst = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.casesimulationfirst}>
              <StatusBar backgroundColor={Color.bgBlack} />

      <View style={styles.container}>
        <View style={styles.maincontainer}>
          <View style={[styles.header, styles.headerSpaceBlock]}>
            <Pressable
              style={[styles.growtextbutton, styles.growtextbuttonSpaceBlock]}
            >
              <Text style={[styles.buttontext, styles.buttontextTypo]}>EN</Text>
            </Pressable>
            <View style={[styles.header1, styles.header1SpaceBlock]}>
              <Text style={styles.headertext}>Simulation</Text>
            </View>
            <Image
              style={styles.headerChild}
              resizeMode="contain"
              source={require("../assets/group-15.png")}
            />
          </View>
          <View style={[styles.prfilecontainer, styles.headerSpaceBlock]}>
            <View style={[styles.profilecard, styles.bottomtabFlexBox]}>
              <View style={styles.profileinfowrapper}>
                <View style={styles.profileinfowrapper1}>
                  <View style={styles.profilenamewtrapper}>
                    <View style={styles.namewrapper}>
                      <Text style={[styles.nametext, styles.nametextTypo]}>
                        Fullname
                      </Text>
                    </View>
                  </View>
                  <View style={styles.greetingwrapper}>
                    <Text style={[styles.greeting, styles.nametextTypo]}>
                      Greeting
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.uploadimage, styles.headerSpaceBlock]}>
                <Image
                  style={styles.defaultimageIcon}
                  resizeMode="cover"
                  source={require("../assets/defaultimage.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.dimagewrapper, styles.header1SpaceBlock]}>
          <ImageBackground
            style={styles.dimageIcon}
            resizeMode="contain"
            source={require("../assets/image101.png")}
          />
        </View>
        <View style={[styles.bottombtn, styles.growtextbuttonSpaceBlock]}>
          <TouchableOpacity
            style={[styles.growtextbutton1, styles.growtextbuttonSpaceBlock]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("CaseShopDisable")}
          >
            <Text style={[styles.buttontext1, styles.buttontextTypo]}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.bottomtab, styles.bottomtabFlexBox]}>
        <Image
          style={styles.iconLayout}
          resizeMode="contain"
          source={require("../assets/messagewrapper.png")}
        />
        <Image
          style={[styles.youtubeIcon, styles.iconLayout]}
          resizeMode="contain"
          source={require("../assets/youtube2.png")}
        />
        <Image
          style={[styles.youtubeIcon, styles.iconLayout]}
          resizeMode="contain"
          source={require("../assets/info2.png")}
        />
        <Image
          style={[styles.youtubeIcon, styles.iconLayout]}
          resizeMode="contain"
          source={require("../assets/condition.png")}
        />
        <Image
          style={[styles.youtubeIcon, styles.iconLayout]}
          resizeMode="contain"
          source={require("../assets/logout.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerSpaceBlock: {
    padding: Padding.p_base,
    alignItems: "center",
  },
  growtextbuttonSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
  },
  buttontextTypo: {
    color: Color.gray,
    fontFamily: FontFamily.bodySmall,
    textAlign: "center",
    fontSize: FontSize.titleMedium_size,
  },
  header1SpaceBlock: {
    paddingVertical: 0,
    alignItems: "center",
  },
  bottomtabFlexBox: {
    backgroundColor: Color.bgBrown,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  nametextTypo: {
    textAlign: "left",
    fontFamily: FontFamily.bodySmall,
  },
  iconLayout: {
    width: 32,
    height: 32,
  },
  buttontext: {
    textAlign: "center",
  },
  growtextbutton: {
    width: 40,
    justifyContent: "center",
    height: 40,
    backgroundColor: Color.colorPrimary,
    borderRadius: Border.br_mini,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    alignItems: "center",
  },
  headertext: {
    fontSize: FontSize.headingMediumBold_size,
    fontWeight: "700",
    fontFamily: FontFamily.headingMediumBold,
    color: Color.colorWhite,
    textAlign: "center",
  },
  header1: {
    height: 30,
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    flexDirection: "row",
  },
  headerChild: {
    width: 50,
    height: 40,
  },
  header: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  nametext: {
    color: Color.colorWhite,
    fontSize: FontSize.titleMedium_size,
    textAlign: "left",
  },
  namewrapper: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  profilenamewtrapper: {
    flexDirection: "row",
  },
  greeting: {
    fontSize: FontSize.bodyMedium_size,
    color: Color.colorDarkgray,
  },
  greetingwrapper: {
    marginTop: 8,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  profileinfowrapper1: {
    alignSelf: "stretch",
    flex: 1,
  },
  profileinfowrapper: {
    height: 53,
  },
  defaultimageIcon: {
    width: 20,
    height: 32,
  },
  uploadimage: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorLightgray,
    width: 56,
    height: 56,
    justifyContent: "center",
    overflow: "hidden",
  },
  profilecard: {
    borderRadius: Border.br_xs,
    padding: Padding.p_5xs,
  },
  prfilecontainer: {
    alignSelf: "stretch",
  },
  maincontainer: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  dimageIcon: {
    height: 220,
    alignSelf: "stretch",
  },
  dimagewrapper: {
    paddingHorizontal: Padding.p_13xl,
    alignSelf: "stretch",
  },
  buttontext1: {
    display: "flex",
    width: 304,
    height: 28,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  growtextbutton1: {
    justifyContent: "center",
    height: 40,
    backgroundColor: Color.colorPrimary,
    borderRadius: Border.br_mini,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  bottombtn: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  container: {
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  youtubeIcon: {
    overflow: "hidden",
  },
  bottomtab: {
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 5,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
  },
  casesimulationfirst: {
    backgroundColor: Color.bgBlack,
    width: "100%",
    height: 1011,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default CaseSimulationFirst;