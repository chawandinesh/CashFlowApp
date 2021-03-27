import React from 'react';
import {View, Text} from 'react-native';
import CashScreen from './src/screens/CashScreen';
import AddData from './src/screens/AddData';
import Routes from './src/routes/routes';
import {CashFlowContext, Context} from './src/context/context';

export default function App() {
  return (
    <Context>
      <Routes />
    </Context>
  );
}
