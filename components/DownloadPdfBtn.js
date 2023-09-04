// import * as React from "react";
// import { Pressable, Text, StyleSheet, TouchableOpacity } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

// const DownloadPdfBtn = ({ ghostButtonText = "ButtonText" , goTo, handler}) => {
//   const navigation = useNavigation();

//   return (
//     <TouchableOpacity
//       style={[styles.growtextbutton, styles.growtextbuttonFlexBox]}
//       activeOpacity={0.8}
//       onPress={() =>goTo?  navigation.navigate("DentistRegister") : handler()}
//     >
//       <Text style={[styles.ghostbuttontext, styles.growtextbuttonFlexBox]}>
//         {ghostButtonText}
//       </Text>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   growtextbuttonFlexBox: {
//     justifyContent: "center",
//     alignItems: "center",
//     alignSelf: "stretch",
//   },
//   ghostbuttontext: {
//     fontSize: 18,
//     fontFamily: "Poppins-Regular",
//     color: Color.colorPrimary,
//     textAlign: "center",
//     display: "flex",
//   },
//   growtextbutton: {
//     borderRadius: 15,
//     borderStyle: "solid",
//     borderColor: Color.colorPrimary,
//     borderWidth: 1,
//     flexDirection: "row",
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//   },
// });

// export default DownloadPdfBtn;

import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import RNFetchBlob from 'rn-fetch-blob';
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

// const fileUrl = 'http://10.0.2.2:5000/contract/contract.pdf';
const fileUrl = 'https://www.africau.edu/images/default/sample.pdf';


export default function Download() {
  const [loading, setLoading] = useState(false);

  const downloadFile = () => {
    setLoading(true);
    let date = new Date();
    let FILE_URL = fileUrl;
    let file_ext = getFileExtention(FILE_URL);

    file_ext = '.' + file_ext[0];

    const {config, fs} = RNFetchBlob;
    let RootDir = fs.dirs.PictureDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        path:
          RootDir +
          '/contract' +
          Math.floor(date.getTime() + date.getSeconds() / 2) +
          file_ext,
        description: 'downloading contract...',
        notification: true,
        // useDownloadManager works with Android only
        useDownloadManager: true,
      },
    };
    config(options)
      .fetch('GET', FILE_URL)
      .then(res => {
        setLoading(false);
        console.log('res -> ', JSON.stringify(res));
        alert('Contract Downloaded Successfully.');
      })
      .catch(err => console.log('error'))
  };

  const getFileExtention = fileUrl => {
    return /[.]/.exec(fileUrl) ? /[^.]+$/.exec(fileUrl) : undefined;
  };

  return (
      <TouchableOpacity
        disabled={loading}
        style={[styles.button, loading && {backgroundColor:'gray'}]}
        onPress={downloadFile}>
        <Text style={styles.text}>Download Contract</Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    color: Color.colorPrimary,
    fontSize: 20,
    textAlign: 'center',
    padding: 5,
  },
  button: {
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Color.colorPrimary,
  },
});
