import React from "react";
import { View, Text, Stylesheet } from "react-native";

const PostsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>PostsScreen</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
});

export default PostsScreen;