import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider, Button, Card, Text } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Welcome" subtitle="TUGAS 5" />
        <Card.Content>
          <Text style={styles.text}>"Tugas banyak itu cuma cara alam mengingatkan kita kalau tidur itu privilege, bukan hak."

</Text>
        </Card.Content>
        <Card.Actions>
          <Button
            mode="contained"
            buttonColor="#e91e63"
            textColor="white"
            onPress={() => navigation.navigate('Details')}
          >
            Go to Details
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Kata kata hari ini" />
        <Card.Content>
          <Text style={styles.text}>"Belajar memang melelahkan, tapi kebodohan lebih menyakitkan. Jadi, pilih yang memberi hasil!"</Text>
        </Card.Content>
        <Card.Actions>
          <Button
            mode="contained"
            buttonColor="#e91e63"
            textColor="white"
            onPress={() => navigation.goBack()}
          >
            Back to Home
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffe4e1', // Pink background
  },
  card: {
    width: '100%',
    maxWidth: 400,
    padding: 16,
    backgroundColor: '#f8bbd0', // Light pink card background
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
    color: '#880e4f', // Dark pink text
  },
});
