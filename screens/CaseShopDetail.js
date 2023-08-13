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

const CaseShopDetail = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.caseshopdetail}>
              <StatusBar backgroundColor={Color.bgBlack} />

      <View style={styles.container}>
        <View style={styles.maincontainer}>
          <View style={[styles.header, styles.headerSpaceBlock]}>
            <Pressable
              style={[styles.growtextbutton, styles.growtextbuttonSpaceBlock]}
            >
              <Text style={[styles.buttontext, styles.buttontextTypo]}>EN</Text>
            </Pressable>
            <View style={styles.header1}>
              <Text style={styles.headertext}>Product Detail</Text>
            </View>
            <Image
              style={styles.headerChild}
              resizeMode="contain"
              source={require("../assets/group-15.png")}
            />
          </View>
          <View style={[styles.prfilecontainer, styles.headerSpaceBlock]}>
            <View style={[styles.profilecard, styles.bottomtabBg]}>
              <View style={styles.profileinfowrapper}>
                <View style={styles.profileinfowrapper1}>
                  <View style={styles.profilenamewtrapper}>
                    <View style={styles.namewrapper}>
                      <Text style={[styles.nametext, styles.nametextTypo]}>
                        Fullname
                      </Text>
                    </View>
                  </View>
                  <View
                    style={[
                      styles.greetingwrapper,
                      styles.greetingwrapperFlexBox,
                    ]}
                  >
                    <Text style={[styles.greeting, styles.greetingTypo]}>
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
          <View style={styles.cardcontainer}>
            <View style={[styles.shopdetailcard, styles.bottomtabBg]}>
              <View style={styles.detailtopwrapper}>
                <View style={styles.producttypewrapper}>
                  <Text style={[styles.producttypetext, styles.detailtextClr]}>
                    Easy
                  </Text>
                </View>
                <View
                  style={[
                    styles.productmodelwrapper,
                    styles.greetingwrapperFlexBox,
                  ]}
                >
                  <Text style={[styles.productmodeltext, styles.greetingTypo]}>
                    Aligner Kit
                  </Text>
                </View>
                <View
                  style={[
                    styles.productmodelwrapper,
                    styles.greetingwrapperFlexBox,
                  ]}
                >
                  <Text style={[styles.productprice, styles.detailtextClr]}>
                    € 800
                  </Text>
                </View>
              </View>
              <View
                style={[
                  styles.detailmiddlewrapper,
                  styles.detailtextSpaceBlock,
                ]}
              >
                <Text
                  style={[styles.middletext, styles.nametextTypo]}
                >{`Start your tooth correction easily and without any problems!
`}</Text>
              </View>
              <Text
                style={[styles.detailtext, styles.detailtextSpaceBlock]}
              >{`Price-performance ratio
all-round service
Fast and easy application
Save time with online support
Interest-free installment payment
Result guarantee when wearing the aligners
Personal contacts with 22 years of experience
`}</Text>
              <ImageBackground
                style={styles.productimageIcon}
                resizeMode="contain"
                source={require("../assets/box-closed-copy-1.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.prfilecontainer, styles.headerSpaceBlock]}>
          <TouchableOpacity
            style={[styles.growtextbutton1, styles.growtextbuttonSpaceBlock]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("CaseAlignerPaymentSuccess")}
          >
            <Text style={[styles.buttontext1, styles.buttontextTypo]}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.bottomtab, styles.bottomtabBg]}>
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
    flexDirection: "row",
  },
  buttontextTypo: {
    color: Color.gray,
    textAlign: "center",
    fontFamily: FontFamily.bodySmall,
    fontSize: FontSize.titleMedium_size,
  },
  bottomtabBg: {
    backgroundColor: Color.bgBrown,
    alignSelf: "stretch",
  },
  nametextTypo: {
    fontFamily: FontFamily.bodySmall,
    textAlign: "left",
    color: Color.colorWhite,
  },
  greetingwrapperFlexBox: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  greetingTypo: {
    color: Color.colorDarkgray,
    textAlign: "left",
    fontFamily: FontFamily.bodySmall,
  },
  detailtextClr: {
    color: Color.colorPrimary,
    fontFamily: FontFamily.bodySmall,
  },
  detailtextSpaceBlock: {
    marginTop: 16,
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
    width: 40,
    justifyContent: "center",
    height: 40,
    backgroundColor: Color.colorPrimary,
    borderRadius: Border.br_mini,
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
  },
  headertext: {
    fontWeight: "700",
    fontFamily: FontFamily.headingMediumBold,
    color: Color.colorWhite,
    fontSize: FontSize.headingMediumBold_size,
    textAlign: "center",
  },
  header1: {
    height: 30,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
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
    fontSize: FontSize.titleMedium_size,
    fontFamily: FontFamily.bodySmall,
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
  },
  greetingwrapper: {
    justifyContent: "center",
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
    padding: Padding.p_5xs,
    borderRadius: Border.br_xs,
    backgroundColor: Color.bgBrown,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  prfilecontainer: {
    alignSelf: "stretch",
  },
  producttypetext: {
    fontSize: FontSize.displayMedium_size,
    textAlign: "left",
    flex: 1,
  },
  producttypewrapper: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  productmodeltext: {
    fontSize: FontSize.headingMediumBold_size,
    flex: 1,
  },
  productmodelwrapper: {
    alignSelf: "stretch",
  },
  productprice: {
    fontSize: FontSize.headingLarge_size,
    textAlign: "right",
    flex: 1,
  },
  detailtopwrapper: {
    zIndex: 0,
    alignSelf: "stretch",
  },
  middletext: {
    height: 46,
    fontSize: FontSize.bodyMedium_size,
    textAlign: "left",
    color: Color.colorWhite,
    flex: 1,
  },
  detailmiddlewrapper: {
    zIndex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  detailtext: {
    zIndex: 2,
    color: Color.colorPrimary,
    fontFamily: FontFamily.bodySmall,
    fontSize: FontSize.bodyMedium_size,
    textAlign: "left",
  },
  productimageIcon: {
    position: "absolute",
    top: -99,
    right: 0,
    width: 158,
    height: 148,
    zIndex: 3,
  },
  shopdetailcard: {
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_base,
    borderRadius: Border.br_xs,
    backgroundColor: Color.bgBrown,
  },
  cardcontainer: {
    paddingTop: Padding.p_77xl,
    paddingHorizontal: Padding.p_base,
    alignSelf: "stretch",
    alignItems: "center",
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
    borderRadius: Border.br_mini,
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    alignSelf: "stretch",
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
    flexDirection: "row",
    justifyContent: "space-between",
  },
  caseshopdetail: {
    backgroundColor: Color.bgBlack,
    width: "100%",
    height: 1011,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default CaseShopDetail;
