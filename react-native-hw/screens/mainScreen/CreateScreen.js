import React from "react";
import { View, Text, Stylesheet } from "react-native";

const CreateScreen = () => {
    return (
        <View style={styles.container}>
            <Text>CreateScreen</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
});

export default CreateScreen;