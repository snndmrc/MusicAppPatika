import React from "react";
import { SafeAreaView, Text, View, FlatList, StyleSheet ,SearchBar } from "react-native";
import music_data from './music-data.json';
import SongCard from "./components/SongCard";


function App(){

    const renderSong = ({item}) => <SongCard song = {item}></SongCard>
    const renderSeperator = () => <View style = {styles.seperator}></View>
    return(
        <SafeAreaView style = {styles.container}>      
                <FlatList
                    keyExtractor={item => item.id}
                    data = {music_data}
                    renderItem = {renderSong}
                    ItemSeparatorComponent={renderSeperator}
                />
            
        </SafeAreaView>
    );
}

export default App;

const styles = StyleSheet.create({
    container: {flex: 1},
    seperator: {
        borderWidth: 1,
        borderColor: "#e0e0e0"
    }
})