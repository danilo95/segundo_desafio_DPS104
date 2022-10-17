import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";

const MoviePoster = ({ title, poster, id, onClcik }) => {
  const handleOnSubmit = () => {
    if (id) {
      onClcik(id);
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleOnSubmit}
      key={id}
    >
      <Text numberOfLines={1} style={styles.text}>
        {title}
      </Text>
      <Image
        source={{ uri: poster }}
        key={title}
        style={{ width: 100, height: 200 }}
      />
    </TouchableOpacity>
  );
};

export default MoviePoster;

const styles = StyleSheet.create({
  container: {
    maxWidth: 150,
    display: "flex",
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    color: "white",
  },
});
