import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const NewReleases = ({ title, estreno, type, id, onClcik }) => {
  const handleOnSubmit = () => {
    if (id) {
      onClcik(id);
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      key={id}
      onPress={handleOnSubmit}
    >
      <View style={styles.releaseContainer}>
        <View>
          <Text numberOfLines={1} style={styles.text}>
            {title}
          </Text>
          <Text numberOfLines={1} style={styles.text}>
            {estreno}
          </Text>
          <Text numberOfLines={1} style={styles.text}>
            {type}
          </Text>
        </View>
        <AntDesign name="play" size={24} color="white" />
      </View>
    </TouchableOpacity>
  );
};

export default NewReleases;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: 15,
  },
  text: {
    color: "white",
  },
  releaseContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
