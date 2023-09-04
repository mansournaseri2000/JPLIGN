import React, { useState } from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  StatusBar
} from "react-native";
import ImageContainer from "../components/ImageContainer";
import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const TreatmentTrack = () => {
  const [sliderFlatListData, setSliderFlatListData] = useState([
    <ImageContainer />,
    <FrameComponent />,
    <FrameComponent1 />,
    <FrameComponent2 />,
  ]);
  const navigation = useNavigation();

  return (
          <View style={styles.prfilecontainer}>
            <View style={styles.maincontainer}>
              <View style={styles.titlewrapper}>
                <Image
                  style={styles.calendarIcon}
                  resizeMode="contain"
                  source={require("../assets/icons/calendar.png")}
                />
                <View style={styles.titletextwrapper}>
                  <Text
                    style={[styles.titletext, styles.dateTypo]}
                  >{` 14 more days on ALigner #1 `}</Text>
                </View>
              </View>
              <View style={styles.trackalignercontainer}>
                <View
                  style={[styles.counterwrapper, styles.counterwrapperBorder]}
                >
                  <View style={styles.titlewrapper}>
                    <Text style={[styles.titletext1, styles.greetingTypo]}>
                      Wearing
                    </Text>
                  </View>
                  <View style={styles.titlewrapper}>
                    <Text style={[styles.labeltext, styles.dateTypo]}>
                      ALIGNER
                    </Text>
                  </View>
                  <View style={styles.counternumber}>
                    <Text style={[styles.number, styles.dateTypo]}>1</Text>
                  </View>
                </View>
                <View style={styles.datewrapper}>
                  <View style={[styles.datacard, styles.datacardSpaceBlock]}>
                    <View style={styles.titlewrapper}>
                      <Text style={[styles.label, styles.dateTypo]}>
                        Start date
                      </Text>
                    </View>
                    <View style={styles.titlewrapper}>
                      <Text style={[styles.date, styles.dateTypo]}>
                        29/06/2023
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.datacard1, styles.datacardSpaceBlock]}>
                    <View style={styles.titlewrapper}>
                      <Text style={[styles.titletext, styles.dateTypo]}>
                        End date
                      </Text>
                    </View>
                    <View style={styles.titlewrapper}>
                      <Text style={[styles.date, styles.dateTypo]}>
                        29/06/2023
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.trackalignercontainer}>
                <Image
                  style={styles.calendarIcon}
                  resizeMode="cover"
                  source={require("../assets/icons/flag.png")}
                />
                <View style={styles.titletextwrapper}>
                  <Text style={[styles.titletext, styles.dateTypo]}>
                    278 days to perfect smile1
                  </Text>
                </View>
              </View>
            </View>
          </View>
     
      
    
  );
};

const styles = StyleSheet.create({
  sliderFlatListContent: {
    flexDirection: "row",
  },
  growtextbuttonSpaceBlock: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 15,
    justifyContent: "center",
    height: 40,
    flexDirection: "row",
  },
  dateTypo: {

  },
  greetingTypo: {
    fontSize: 18,
    textAlign: "left",
    fontFamily: "Poppins-Regular",
  },
  iconLayout: {
    width: 32,
    height: 32,
  },
  counterwrapperBorder: {
    borderWidth: 1,
    borderColor: Color.colorPrimary,
    borderStyle: "solid",
    alignItems: "center",
  },
  datacardSpaceBlock: {
    paddingVertical: 4,
    paddingHorizontal: Padding.p_xs,
    width: 125,
    borderRadius: 12,
    alignItems: "center",
  },
  addbtnFlexBox: {
    marginTop: 8,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  buttontext1FlexBox: {
    width: 304,
    display: "flex",
    textAlign: "center",
    fontFamily: "Poppins-Regular",
    justifyContent: "center",
    alignItems: "center",
  },
  buttontext: {
    textAlign: "center",
    color: Color.gray,
    fontFamily: "Poppins-Regular",
    fontSize: 18,
  },
  growtextbutton: {
    width: 40,
    justifyContent: "center",
    backgroundColor: Color.colorPrimary,
    alignItems: "center",
  },
  headertext: {
    fontWeight: "700",
    fontFamily: "Poppins-Bold",
    color: Color.colorWhite,
    fontSize: 24,
    textAlign: "center",
  },
  header1: {
    height: 30,
    paddingHorizontal: 10,
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
    padding: 16,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nametext: {
    color: Color.colorWhite,
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
    borderRadius: 50,
    backgroundColor: Color.colorLightgray,
    width: 56,
    height: 56,
    justifyContent: "center",
    padding: 16,
    alignItems: "center",
    overflow: "hidden",
  },
  profilecard: {
    padding: 8,
    backgroundColor: Color.bgBrown,
    borderRadius: 12,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  prfilecontainer: {
    padding: 16,
    alignSelf: "stretch",
    alignItems: "center",
  },
  calendarIcon: {
    overflow: "hidden",
    width: 32,
    height: 32,
  },
  titletext: {
    color: Color.colorPrimary,
    fontSize: 22,
    textAlign: "left",
    fontFamily: "Poppins-Regular",
  },
  titletextwrapper: {
    marginLeft: 9,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  titlewrapper: {
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  titletext1: {
    color: Color.colorPrimary,
    
  },
  labeltext: {
    color: Color.colorPrimary,
    fontSize: 24,
    textAlign: "left",
    fontFamily: "Poppins-Regular",
  },
  number: {
    fontSize: 34,
    color: Color.colorPrimary,
  },
  counternumber: {
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  counterwrapper: {
    borderRadius: 12,
    padding: 16,
  },
  label: {
    fontSize: 22,
    color: Color.gray,
  },
  date: {
    color: Color.colorLightgray,
    fontSize: 18,
  },
  datacard: {
    backgroundColor: Color.colorPrimary,
  },
  datacard1: {
    backgroundColor: Color.bgBrown,
  },
  datewrapper: {
    marginLeft: 32,
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  trackalignercontainer: {
    marginTop: 32,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  maincontainer: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  slider: {
    width: 656,
    maxWidth: 656,
    overflow: "hidden",
    flex: 1,
  },
  plusCircleIcon: {
    width: 48,
    height: 48,
    overflow: "hidden",
  },
  addbtn: {
    alignSelf: "stretch",
  },
  slidersection: {
    width: 390,
    padding: 16,
    overflow: "hidden",
  },
  buttontext1: {
    height: 28,
    color: Color.gray,
    fontSize: 18,
  },
  growtextbutton1: {
    justifyContent: "center",
    backgroundColor: Color.colorPrimary,
    alignSelf: "stretch",
    alignItems: "center",
  },
  ghostbuttontext: {
    color: Color.colorPrimary,
    fontSize: 22,
    alignSelf: "stretch",
  },
  growtextbutton2: {
    marginTop: 10,
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 15,
    height: 40,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  container: {
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  bottomtab: {
    borderColor: "#000",
    borderTopWidth: 5,
    borderStyle: "solid",
    backgroundColor: Color.bgBrown,
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  casetreatment: {
    backgroundColor: Color.bgBlack,
    width: "100%",
    height: 938,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default TreatmentTrack;
