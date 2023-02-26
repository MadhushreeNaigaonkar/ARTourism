import {View, Text} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Indoor from '../screens/Indoor';
import Outdoor from '../screens/Outdoor';
import Home from '../screens/Home';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

// const stack = createStackNavigator(
//   {
//     In:Indoor,
//     Out:Outdoor
//   }
// );
// const MyStack = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="Indoor" component={Indoor} />
//         <Stack.Screen name="Outdoor" component={Outdoor} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

const OutdoorCard = ({navigation}) => {
  return (
    <Card>
      <Card.Content>
        <Title>Outdoor</Title>
        <Paragraph>Explore Outdoor Navigation</Paragraph>
      </Card.Content>
      <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
      <Card.Actions>
        <Button>Explore</Button>
      </Card.Actions>
    </Card>
  );
};

export default OutdoorCard;
