import {View, Text} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import * as React from 'react';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

const Outdoor = () => {
  return (
    <Card>
      <Card.Title title="Outdoor Navigation Guide" subtitle="NAvguide..." />
      <Card.Content>
        <Title>Outdoor</Title>
        <Paragraph>Outdoor ch description taka....... and do styling</Paragraph>
      </Card.Content>
      <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
      <Card.Actions>
        <Button>Explore</Button>
      </Card.Actions>
    </Card>
  );
};

export default Outdoor;
