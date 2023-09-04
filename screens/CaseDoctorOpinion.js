import * as React from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const CaseDoctorOpinion = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.casedoctoropinion}>
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
              <Text style={styles.headertext}>Doctor Opinion</Text>
            </View>
            <Image
              style={styles.headerChild}
              resizeMode="contain"
              source={require("../assets/JplignLogo.png")}
            />
          </View>
          <View style={[styles.prfilecontainer, styles.headerSpaceBlock]}>
            <View style={[styles.profilecard, styles.inputgroupSpaceBlock]}>
              <View style={styles.profileinfowrapper}>
                <View style={styles.profileinfowrapper1}>
                  <View style={styles.profilenamewtrapper}>
                    <View style={styles.namewrapper}>
                      <Text style={styles.nametext}>Fullname</Text>
                    </View>
                  </View>
                  <View style={styles.greetingwrapper}>
                    <Text style={[styles.greeting, styles.labelTypo]}>
                      Greeting
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.uploadimage, styles.headerSpaceBlock]}>
                <Image
                  style={styles.defaultimageIcon}
                  resizeMode="cover"
                  source={require("../assets/ProfileImg.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.formsection, styles.header1SpaceBlock]}>
            <View style={[styles.inputgroup, styles.inputgroupSpaceBlock]}>
              <View
                style={[styles.inputiconwrapper, styles.inputgroupSpaceBlock]}
              >
                <Image
                  style={styles.packagePlusIcon}
                  resizeMode="contain"
                  source={require("../assets/icons/help-circle.png")}
                />
              </View>
              <View style={styles.fieldwrapper}>
                <Text style={[styles.label, styles.labelTypo]}>Anamnese</Text>
                <View style={styles.input}>
                  <TextInput
                    style={[styles.inputtext, styles.labelTypo]}
                    placeholder="Placeholder"
                    placeholderTextColor="#e6e6e6"
                  />
                  <Image
                    style={styles.chevronDownIcon}
                    resizeMode="cover"
                    source={require("../assets/icons/chevrondown.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.inputgroup1, styles.inputgroupSpaceBlock]}>
              <View
                style={[styles.inputiconwrapper, styles.inputgroupSpaceBlock]}
              >
                <Image
                  style={styles.packagePlusIcon}
                  resizeMode="contain"
                  source={require("../assets/icons/help-circle.png")}
                />
              </View>
              <View style={styles.fieldwrapper}>
                <Text style={[styles.label, styles.labelTypo]}>
                  Surplus of the following teeth
                </Text>
                <View style={styles.input}>
                  <TextInput
                    style={[styles.inputtext, styles.labelTypo]}
                    placeholder="Placeholder"
                    placeholderTextColor="#e6e6e6"
                  />
                  <Image
                    style={styles.chevronDownIcon}
                    resizeMode="cover"
                    source={require("../assets/icons/chevrondown.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.inputgroup1, styles.inputgroupSpaceBlock]}>
              <View
                style={[styles.inputiconwrapper, styles.inputgroupSpaceBlock]}
              >
                <Image
                  style={styles.packagePlusIcon}
                  resizeMode="contain"
                  source={require("../assets/icons/help-circle.png")}
                />
              </View>
              <View style={styles.fieldwrapper}>
                <Text style={[styles.label, styles.labelTypo]}>
                  Diognose OK
                </Text>
                <View style={styles.input}>
                  <TextInput
                    style={[styles.inputtext, styles.labelTypo]}
                    placeholder="Placeholder"
                    placeholderTextColor="#e6e6e6"
                  />
                  <Image
                    style={styles.chevronDownIcon}
                    resizeMode="cover"
                    source={require("../assets/icons/chevrondown.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.inputgroup1, styles.inputgroupSpaceBlock]}>
              <View
                style={[styles.inputiconwrapper, styles.inputgroupSpaceBlock]}
              >
                <Image
                  style={styles.packagePlusIcon}
                  resizeMode="contain"
                  source={require("../assets/icons/help-circle.png")}
                />
              </View>
              <View style={styles.fieldwrapper}>
                <Text style={[styles.label, styles.labelTypo]}>
                  Diagnose UK
                </Text>
                <View style={styles.input}>
                  <TextInput
                    style={[styles.inputtext, styles.labelTypo]}
                    placeholder="Placeholder"
                    placeholderTextColor="#e6e6e6"
                  />
                  <Image
                    style={styles.chevronDownIcon}
                    resizeMode="cover"
                    source={require("../assets/icons/chevrondown.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.inputgroup1, styles.inputgroupSpaceBlock]}>
              <View
                style={[styles.inputiconwrapper, styles.inputgroupSpaceBlock]}
              >
                <Image
                  style={styles.packagePlusIcon}
                  resizeMode="contain"
                  source={require("../assets/icons/help-circle.png")}
                />
              </View>
              <View style={styles.fieldwrapper}>
                <Text style={[styles.label, styles.labelTypo]}>
                  Diagnose Bite Position
                </Text>
                <View style={styles.input}>
                  <TextInput
                    style={[styles.inputtext, styles.labelTypo]}
                    placeholder="Placeholder"
                    placeholderTextColor="#e6e6e6"
                  />
                  <Image
                    style={styles.chevronDownIcon}
                    resizeMode="cover"
                    source={require("../assets/icons/chevrondown.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.inputgroup1, styles.inputgroupSpaceBlock]}>
              <View
                style={[styles.inputiconwrapper, styles.inputgroupSpaceBlock]}
              >
                <Image
                  style={styles.packagePlusIcon}
                  resizeMode="contain"
                  source={require("../assets/icons/help-circle.png")}
                />
              </View>
              <View style={styles.fieldwrapper}>
                <Text style={[styles.label, styles.labelTypo]}>Therapy OK</Text>
                <View style={styles.input}>
                  <TextInput
                    style={[styles.inputtext, styles.labelTypo]}
                    placeholder="Placeholder"
                    placeholderTextColor="#e6e6e6"
                  />
                  <Image
                    style={styles.chevronDownIcon}
                    resizeMode="cover"
                    source={require("../assets/icons/chevrondown.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.inputgroup1, styles.inputgroupSpaceBlock]}>
              <View
                style={[styles.inputiconwrapper, styles.inputgroupSpaceBlock]}
              >
                <Image
                  style={styles.packagePlusIcon}
                  resizeMode="contain"
                  source={require("../assets/icons/help-circle.png")}
                />
              </View>
              <View style={styles.fieldwrapper}>
                <Text style={[styles.label, styles.labelTypo]}>Therapy UK</Text>
                <View style={styles.input}>
                  <TextInput
                    style={[styles.inputtext, styles.labelTypo]}
                    placeholder="Placeholder"
                    placeholderTextColor="#e6e6e6"
                  />
                  <Image
                    style={styles.chevronDownIcon}
                    resizeMode="cover"
                    source={require("../assets/icons/chevrondown.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.inputgroup1, styles.inputgroupSpaceBlock]}>
              <View
                style={[styles.inputiconwrapper, styles.inputgroupSpaceBlock]}
              >
                <Image
                  style={styles.packagePlusIcon}
                  resizeMode="contain"
                  source={require("../assets/icons/help-circle.png")}
                />
              </View>
              <View style={styles.fieldwrapper}>
                <Text style={[styles.label, styles.labelTypo]}>
                  Therapy Bite Position
                </Text>
                <View style={styles.input}>
                  <TextInput
                    style={[styles.inputtext, styles.labelTypo]}
                    placeholder="Placeholder"
                    placeholderTextColor="#e6e6e6"
                  />
                  <Image
                    style={styles.chevronDownIcon}
                    resizeMode="cover"
                    source={require("../assets/icons/chevrondown.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.inputgroup1, styles.inputgroupSpaceBlock]}>
              <View
                style={[styles.inputiconwrapper, styles.inputgroupSpaceBlock]}
              >
                <Image
                  style={styles.packagePlusIcon}
                  resizeMode="contain"
                  source={require("../assets/icons/help-circle.png")}
                />
              </View>
              <View style={styles.fieldwrapper}>
                <Text style={[styles.label, styles.labelTypo]}>Devices</Text>
                <View style={styles.input}>
                  <TextInput
                    style={[styles.inputtext, styles.labelTypo]}
                    placeholder="Placeholder"
                    placeholderTextColor="#e6e6e6"
                  />
                  <Image
                    style={styles.chevronDownIcon}
                    resizeMode="cover"
                    source={require("../assets/icons/chevrondown.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.inputgroup1, styles.inputgroupSpaceBlock]}>
              <View
                style={[styles.inputiconwrapper, styles.inputgroupSpaceBlock]}
              >
                <Image
                  style={styles.packagePlusIcon}
                  resizeMode="contain"
                  source={require("../assets/icons/help-circle.png")}
                />
              </View>
              <View style={styles.fieldwrapper}>
                <Text style={[styles.label, styles.labelTypo]}>Epricrise</Text>
                <View style={styles.input}>
                  <TextInput
                    style={[styles.inputtext, styles.labelTypo]}
                    placeholder="Placeholder"
                    placeholderTextColor="#e6e6e6"
                  />
                  <Image
                    style={styles.chevronDownIcon}
                    resizeMode="cover"
                    source={require("../assets/icons/chevrondown.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.prfilecontainer, styles.headerSpaceBlock]}>
          <TouchableOpacity
            style={[styles.growtextbutton1, styles.growtextbuttonSpaceBlock]}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("CaseOrderMethods")}
          >
            <Text style={[styles.buttontext1, styles.buttontextTypo]}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.bottomtab, styles.inputgroupBg]}>
        <Image
          style={styles.iconLayout}
          resizeMode="contain"
          source={require("../assets/icons/message-circle.png")}
        />
        <Image
          style={[styles.youtubeIcon, styles.iconLayout]}
          resizeMode="contain"
          source={require("../assets/icons/youtube.png")}
        />
        <Image
          style={[styles.youtubeIcon, styles.iconLayout]}
          resizeMode="contain"
          source={require("../assets/icons/info.png")}
        />
        <Image
          style={[styles.youtubeIcon, styles.iconLayout]}
          resizeMode="contain"
          source={require("../assets/icons/condition.png")}
        />
        <Image
          style={[styles.youtubeIcon, styles.iconLayout]}
          resizeMode="contain"
          source={require("../assets/icons/log-out.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerSpaceBlock: {
    padding: 16,
    alignItems: "center",
  },
  growtextbuttonSpaceBlock: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: "row",
  },
  buttontextTypo: {
    color: Color.gray,
    textAlign: "center",
    fontFamily: "Poppins-Regular",
    fontSize: 18,
  },
  header1SpaceBlock: {
    paddingVertical: 0,
    alignItems: "center",
  },
  inputgroupSpaceBlock: {
    padding: 8,
    flexDirection: "row",
  },
  labelTypo: {
    fontSize: 18,
    fontFamily: "Poppins-Regular",
  },
  inputgroupBg: {
    backgroundColor: Color.bgBrown,
    alignSelf: "stretch",
  },
  iconLayout: {
    width: 32,
    height: 32,
  },
  buttontext: {
    textAlign: "center",
  },
  growtextbutton: {
    justifyContent: "center",
    height: 40,
    width: 40,
    backgroundColor: Color.colorPrimary,
    borderRadius: 15,
    alignItems: "center",
  },
  headertext: {
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "Poppins-Bold",
    color: Color.colorWhite,
    textAlign: "center",
  },
  header1: {
    height: 30,
    paddingHorizontal: 10,
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
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: "Poppins-Regular",
    fontSize: 18,
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
    color: Color.colorDarkgray,
    textAlign: "left",
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
    height: 32,
    width: 20,
  },
  uploadimage: {
    borderRadius: 50,
    backgroundColor: Color.colorLightgray,
    width: 56,
    height: 56,
    justifyContent: "center",
    overflow: "hidden",
  },
  profilecard: {
    backgroundColor: Color.bgBrown,
    alignSelf: "stretch",
    borderRadius: 12,
    padding: 8,
    justifyContent: "space-between",
  },
  prfilecontainer: {
    alignSelf: "stretch",
  },
  packagePlusIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  inputiconwrapper: {
    justifyContent: "center",
    height: 40,
    width: 40,
    backgroundColor: Color.colorPrimary,
    borderRadius: 15,
    alignItems: "center",
  },
  label: {
    color: Color.colorPrimary,
    textAlign: "left",
    alignSelf: "stretch",
  },
  inputtext: {
    flex: 1,
  },
  chevronDownIcon: {
    height: 20,
    width: 20,
    overflow: "hidden",
  },
  input: {
    height: 19,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
  },
  fieldwrapper: {
    marginLeft: 8,
    height: 40,
    flex: 1,
  },
  inputgroup: {
    height: 56,
    backgroundColor: Color.bgBrown,
    alignSelf: "stretch",
    borderRadius: 12,
    padding: 8,
  },
  inputgroup1: {
    marginTop: 16,
    height: 56,
    backgroundColor: Color.bgBrown,
    alignSelf: "stretch",
    borderRadius: Border.br_xs,
    padding: 8,
  },
  formsection: {
    paddingHorizontal: 16,
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  maincontainer: {
    alignSelf: "stretch",
    alignItems: "center",
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
    borderRadius: 15,
    paddingVertical: 8,
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
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  casedoctoropinion: {
    backgroundColor: Color.bgBlack,
    width: "100%",
    height: 1052,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default CaseDoctorOpinion;
