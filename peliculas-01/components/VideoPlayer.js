import React from "react";
import { View, Dimensions, TouchableOpacity, Text } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function VideoPlayer({ videoId, onClose }) {
  return (
    <View style={{ transform: [{ rotate: "90deg" }] }}>
      <YoutubePlayer
        videoId={videoId}
        height={SCREEN_WIDTH}
        width={SCREEN_HEIGHT - 100}
        webViewProps={{
          injectedJavaScript: `
            var element = document.getElementsByClassName('container')[0];
            element.style.position = 'unset';
            element.style.paddingBottom = 'unset';
            true;
          `,
        }}
      />
      <TouchableOpacity
        style={{
          position: "absolute",
          width: 100,
          height: 50,
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          opacity: 0.5,
        }}
        onPress={onClose}
      >
        <Text style={{ color: "black" }}>Regresar</Text>
      </TouchableOpacity>
    </View>
  );
}
