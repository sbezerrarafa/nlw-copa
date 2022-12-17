import React from 'react';
import {NativeBaseProvider, Text, Center} from 'native-base';

const App = () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} bgColor="fuchsia.300">
        <Text color="#fff" fontSize={34}>
          Olá
        </Text>
      </Center>
    </NativeBaseProvider>
  );
};

export default App;
