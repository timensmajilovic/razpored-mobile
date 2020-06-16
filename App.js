import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default class Home extends Component {
  render() {
    return (
      <WebView source={{ uri: 'https://timensmajilovic.xyz/razpored/index/' }} />
    );
  }
}