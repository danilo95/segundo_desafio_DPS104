import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { DB } from "../DB";
import VideoPlayer from "./VideoPlayer";
import NewReleases from "./NewReleases";

const NewMedia = () => {
  const [selectedVideo, setSelectedVideo] = React.useState(null);
  const movies = DB[0].estrenos;
  const handleVideo = (id) => {
    if (id) {
      setSelectedVideo(id);
    }
  };

  const handleOnClose = () => {
    setSelectedVideo(null);
  };

  return (
    <View style={styles.background}>
      {selectedVideo && (
        <VideoPlayer videoId={selectedVideo} onClose={handleOnClose} />
      )}
      {!selectedVideo && (
        <ScrollView>
          <Text style={styles.title}>Proximos Estrenos</Text>
          <ScrollView style={styles.container}>
            {movies.map((value) => (
              <NewReleases
                title={value.Title}
                estreno={value.estreno}
                onClcik={handleVideo}
                type={value.type}
                key={value.Title}
                id={value.videoId}
              />
            ))}
          </ScrollView>
        </ScrollView>
      )}
    </View>
  );
};

export default NewMedia;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  title: {
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 24,
    color: "white",
    marginTop: 10,
  },
  background: {
    backgroundColor: "black",
    minHeight: "100%",
  },
});
