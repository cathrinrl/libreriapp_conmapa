import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Battery from 'expo-battery';

const DetalleScreen = ({navigation, route}) => {
    //const book = route.params.book

    return (
     <View style={ styles.mainView }>
        //    /* <Text style={ {color: 'orange', fontWeight: 'bold', fontSize: 18, paddingBottom: 5} }>ISBN:</Text>
        //     <Text style={ {fontSize: 16, paddingBottom: 10} }>{ book.isbn }</Text>
        //     <Text style={ {color: 'orange', fontWeight: 'bold', fontSize: 18, paddingBottom: 5} }>Páginas:</Text>
        //     <Text style={ {fontSize: 16, paddingBottom: 10} }>{ book.pages }</Text>
        //     <Text style={ {color: 'orange', fontWeight: 'bold', fontSize: 18, paddingBottom: 5} }>Lenguaje:</Text>
        //     <Text style={ {fontSize: 16, paddingBottom: 10} }>{ book.language }</Text>*/ 
        

            <MapView style={ styles.map }>
                <Marker
                    //key={ book.name }
                    coordinate={ {latitude: 1.11111, longitude: 2.2222} }
                    // title={ book.name }
                />
            </MapView>
        </View>
    )
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    map: {
        width: '100%',
        height: '40%',
    },
});

export default DetalleScreen;