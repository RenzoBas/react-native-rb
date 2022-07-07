import { StyleSheet, Text, View, Image } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Renzo B. -- About Me</Text>
        <Image source={require('../assets/renzoB.jpeg')} />
      {/* <StatusBar style="auto" /> */}
      <Text style={styles.para}>Hello, I am Renzo Basurco, I am currently 16 years old, turning 17 soon, and I am learning coding from TXT (Teens Exploring Technology). Some of my hobbies would be: playing video games, listening to music, watching TV, wokring out, playing guitar and now I am learning coding and MMA this summer. What I want to become when I grow up... I want to become a game developer, I believe games are like a form of art, and I as an artist really admire what goes into video games, not only that I also want to be a leader as well, and each day I am learning how to do so. I look and reflect to see what brought me to this point and I am very proud of myself because I made new friends and met a lot of new people in these recent years, I feel more open no than ever before, and I am looking forward to the future!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkslategray",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "darkgreen",
    color: "aquamarine",
    fontSize: 20,
    fontWeight: "bold",
  },
  para: {
    color: "white",
    backgroundColor: "darkcyan",
    justifyContent: "center",
  }
});
