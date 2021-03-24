import React, { useState } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { Text } from "react-native";
import Fire from '../Fire'

const Chat = (props) => {
    Chat.navigationOptions = ({navigation}) => ({
        title: navigation.params.name
    });

    const [messages, setMessages] = useState([]);

    get user() {
        return {
            name: props.navigation.params.name,
            _id: Fire.shared.uid,
        };
    }

  return <Text>Hello</Text>;
};

export default Chat;
