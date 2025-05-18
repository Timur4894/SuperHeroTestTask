import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {BottomTabs} from './BottomNavigator.tsx';

export type RootStackParamList = {
  Tabs: undefined;
  HeroDetails: { id: string }; // пример параметра
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={BottomTabs}
        options={{ headerShown: false }}
      />
      {/*<Stack.Screen*/}
      {/*  name="HeroDetails"*/}
      {/*  component={HeroDetailsScreen}*/}
      {/*  options={{ title: 'Hero Details' }}*/}
      {/*/>*/}
    </Stack.Navigator>
  );
};
