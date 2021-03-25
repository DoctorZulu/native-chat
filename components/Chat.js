import React from "react";
import { GiftedChat } from "react-native-gifted-chat"; // 0.3.0

import Fire from "../Fire";

class Chat extends React.Component {
  static navigationOptions = () => ({
    title: "Chat!",
  });

  state = {
    messages: [],
  };

  get user() {
    console.log(Fire.shared.uid);
    return {
      name: this.props.route.params.name,
      _id: Fire.shared.uid,
    };
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={Fire.shared.send}
        user={this.user}
      />
    );
  }

  componentDidMount() {
    Fire.shared.on((message) =>
      this.setState((previousState) => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );
  }
  componentWillUnmount() {
    Fire.shared.off();
  }
}

export default Chat;
