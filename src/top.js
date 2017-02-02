import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class TopView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currencies: []
        };
    }

    componentWillMount() {
        fetch("https://currency.jie.today/currencies")
        .then(response => response.json())
        .then(responseJson => {
            console.log(responseJson);
            this.setState({currencies: responseJson});
        })
    }

    render() {
        return(
        <View style={style.view}>
            <Text>
                {this.state.currencies.length}
            </Text>
        </View>
        );
    }
}

const style = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})