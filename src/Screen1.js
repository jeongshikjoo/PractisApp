import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

class Screen1 extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent : 'center'
            }}>
                <Text>Screen 1</Text>
                <Button
                    title='move to Screen2'
                    onPress={() => {
                        this.props.navigation.navigate( 'Screen2 Title', {
                            screenIdx : 200,
                            screenName : 'Hong',
                            screenLastName : 'kil dong'
                        });
                    }}
                />
                <Button
                    title='move to Screen3'
                    onPress={() => {
                        this.props.navigation.navigate( 'Screen3 Title', [
                            'from 1 - aaa',
                            'from 1 - bbb',
                            'from 1 - ccc'
                        ]);
                    }}
                />
            </View>
        );
    }
}

export default Screen1;
