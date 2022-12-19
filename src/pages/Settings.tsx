import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';

export default function Setting() {
  const [count, setCount] = useState(1);
  return (
    <View>
      <Pressable onPress={() => setCount(p => p + 1)}>
        <Text>{count}</Text>
      </Pressable>
    </View>
  );
}
