import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

import ViewfinderAPI3 from './api/ViewfinderAPI';

class Screen2 extends Component {


    render() {
        const {params} = this.props.route;
        const screenIdx = params ? params.screenIdx : null;
        const screenName = params ? params.screenName : null;
        const screenLastName = params ? params.screenLastName : null;



        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent : 'center'
            }}>
                <Text>Screen 2</Text>
                <Button
                    title='move to Screen1'
                    onPress={() => {
                        this.props.navigation.navigate( 'Screen1 Title' );
                    }}
                />
                <Button
                    title='move to Screen3'
                    onPress={() => {
                        this.props.navigation.navigate( 'Screen3 Title', [
                            'from 2 - aaa',
                            'from 2 - bbb',
                            'from 2 - ccc'
                        ]);


                    }}
                />
                <Button
                    title='Viewfinder'
                    onPress={()=>ViewfinderAPI3.viewfinderCall()}
                />

                <Text>Screen Idx : {screenIdx}</Text>
                <Text>Screen Name : {screenName}</Text>
                <Text>Screen LastName : {screenLastName}</Text>
            </View>
        );
    }
}

export default Screen2;
