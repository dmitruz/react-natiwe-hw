import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { authSignOutUser } from "../../redux/auth/authOperations";

const ProfileScreen = () => {
const dispatch = useDispatch();

  const signOut = () => {
    dispatch(authSignOutUser());
  };
    return (
        <View style={styles.container}>
            <Text>ProfileScreen</Text>
            <Button title="signOut" onPress={signOut} />
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default ProfileScreen;