import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function Colleges() {
    return (
      <View style={styles.container}>
        <Text style={styles.collegeHeader}>My Top 3 Colleges I would choose.</Text>
        {/* <Image source={} /> */}
        {/* <StatusBar style="auto" /> */}
        <FlatList
        data={[
          {key: 'University of Southern CA'},
          {key: 'Pomona College'},
          {key: 'Thomas Aquinas College'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
        {/* USC, Pomona College, and Thomas Aquinas College */}
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'darkslategray',
      alignItems: 'center',
      justifyContent: 'center',
    },
    collegeHeader: {
      color: "white",
      fontSize: 40,
      marginBottom: 50,
      fontWeight: "bold",
    },

    item: {
      color: "cadetblue",
      fontStyle: "italic",
      backgroundColor: "lightblue",
      borderStyle: "solid",
      borderColor: "darkcyan",
      fontSize: 25,
      borderWidth: 25,
    }
  });