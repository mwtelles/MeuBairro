import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import React from "react";

const FilterModal = (handleClose) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity
        style={{ flex: 1, zIndex: 9 }}
        onPress={handleClose}
      ></TouchableOpacity>
      <View style={{
                flex: 0,
                marginVertical: 20,
                marginLeft: 10,
                marginRight: 10,
                backgroundColor: 'white',
                zIndex: 66,
                borderRadius: 8,
                padding: 18,
                paddingBottom: 0,
                shadowColor: 'rgba(0,0,0,0.2)',
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                elevation: 5,
                shadowOpacity: 0.28,
                shadowRadius: 4,
            }}>
        <Text>FilterModal</Text>
      </View>
    </SafeAreaView>
  );
};

export default FilterModal;
