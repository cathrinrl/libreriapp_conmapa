import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import books_js from "../components/libros-informaciones.js";

const CatalogScreen = ({navigation, route}) => {
    const [books, setBooks] = useState([]);


    useEffect(() => {
        getBooks();
    }, []);

    const getBooks = async () => {
        try {
            setBooks(books_js);
           /* const response = await fetch('http://localhost:8000/api/books');
            const json = await response.json();
            setBooks(json.data); */
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <ScrollView>
            { books.map((book, key) => {
                return (
                    <Card style={ {marginHorizontal: 10, marginTop: 10} } key={ key }>
                        <Card.Cover theme={ {roundness: 4, isV3: false} }
                                    source={ {uri: book.imagen} }/>
                        <Card.Content>
                            <Text style={ {paddingTop: 20, fontWeight: 'bold', fontSize: 18, color: 'black'} }>
                                { book.nombre }
                            </Text>
                        </Card.Content>
                        <Card.Actions>
                            <Button buttonColor={ 'orange' } textColor={ 'white' } style={ {borderColor: 'orange'} }
                                    onPress={ () => {
                                        navigation.navigate("Detail", {book: book, name: book.nombre})
                                    } }>
                                Ver detalle
                            </Button>
                        </Card.Actions>
                    </Card>
                );
            })}

        </ScrollView>
    )
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
});

export default CatalogScreen;