import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

class Screen3 extends Component {
    render() {
        const   {params} = this.props.route;

        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent : 'center'
            }}>
                <Text>Screen 3</Text>
                <Button
                    title='move to Screen1'
                    onPress={() => {
                        this.props.navigation.navigate( 'Screen1 Title' );
                    }}
                />
                <Button
                    title='move to Screen2'
                    onPress={() => {
                        this.props.navigation.navigate( 'Screen2 Title' );
                    }}
                />

                <Text>Start</Text>
                { params.map(( str ) => {
                    return (
                        <Text>{str}</Text>
                    )
                })}

            </View>
        );
    }
}

export default Screen3;
