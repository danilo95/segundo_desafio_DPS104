import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { DB } from "../DB";
import MoviePoster from "./MoviePoster";
import { groupBy } from "../helpers/helpers";
import VideoPlayer from "./VideoPlayer";

const Series = () => {
  const [selectedVideo, setSelectedVideo] = React.useState(null);
  const movies = groupBy(DB[0].series, "type");

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
          <Text style={styles.title}>Fanasia</Text>
          <ScrollView style={styles.container} horizontal={true}>
            {movies.Fanasia.map((value) => (
              <MoviePoster
                title={value.Title}
                poster={value.Poster}
                onClcik={handleVideo}
                key={value.Title}
                id={value.videoId}
              />
            ))}
          </ScrollView>
          <View>
            <Text style={styles.title}>Aventura</Text>
            <ScrollView style={styles.container} horizontal={true}>
              {movies.Aventura.map((value) => (
                <MoviePoster
                  title={value.Title}
                  poster={value.Poster}
                  onClcik={handleVideo}
                  key={value.Title}
                  id={value.videoId}
                />
              ))}
            </ScrollView>
          </View>
          <View>
            <Text style={styles.title}>Comedia</Text>
            <ScrollView style={styles.container} horizontal={true}>
              {movies.Comedia.map((value) => (
                <MoviePoster
                  title={value.Title}
                  poster={value.Poster}
                  ud={value.id}
                  onClcik={handleVideo}
                  key={value.Title}
                  id={value.videoId}
                />
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default Series;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
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
  },
});
