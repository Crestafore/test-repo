import Exponent from 'exponent';
import React from 'react';
var ReactNative = require('react-native');
var {
    StyleSheet,
    Text,
    View,
    ListView,
    Image
} =  ReactNative;
var title = 'ja';
class App extends React.Component {

    constructor(props) {
        super(props);
        // const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        // this.state = {
        //     dataSource: ds.cloneWithRows(['row 1', 'row 2']),
        //     jsonData: ''
        // };
        console.log('yes');
        // _fetchData('http://mladi.ams.mk/eduservice.svc/GetTrainings');
    }

    render() {
        return (
            <ListView dataSource={this.state.dataSource} renderRow={(rowData) => <Text>{rowData}</Text>}/>
        );
    }


    parseMyData = function (response) {
        var jsonData = JSON.parse(response._bodyInit);
        jsonData.forEach(function (data) {
            console.log(data.Link);
        });
    };

    // _fetchData(query) {
    //     fetch(query)
    //         .then(parseMyData);
    // }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

Exponent.registerRootComponent(App);
