import React from 'react';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import { RootTabProps } from '../../Routes';

type Props = {
  navigation: BottomTabNavigationProp<RootTabProps>;
};

function Simulcasts({ navigation }: Props) {
  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Simulcasts Season',
    });
  }, []);
  return (
    <View>
      <Text>Simulcasts</Text>
    </View>
  );
}

export default Simulcasts;
