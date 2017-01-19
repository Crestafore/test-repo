/**
 * Created by student on 1/18/17.
 */
import Exponent from 'exponent';
import React, {Component} from 'react';
import {ListView, Text, View} from 'react-native';

const TRAININGS_API = 'http://mladi.ams.mk/eduservice.svc/GetTrainings';
class ListViewBasics extends Component {
    constructor(props) {
        console.log('constr');
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: this.ds.cloneWithRows([{Title: 'Jimmy'}])
        };
        this.componentWillMount = this.componentWillMount.bind(this);
        this.componentWillUpdate = this.componentWillUpdate.bind(this);
        console.log('constr finish');
    }

    componentWillMount() {
        console.log('will mount');
        console.log(this);
        fetchData(TRAININGS_API).then(function (data) {
            console.log('fetch data');
            // this.setState({
            //     dataSource: this.ds.cloneWithRows([{Title: 'keke'}])
            // });
        }).catch((err)=>console.log('error=>' + err));

    }

    componentWillUpdate() {
        console.log('update');
        console.log(this);
        fetchData(TRAININGS_API).then(function (data) {
            console.log('fetch data');
            // this.setState({
            //     dataSource: this.ds.cloneWithRows([{Title: 'keke'}])
            // });
        }).catch((err)=>console.log('error=>' + err));
    }


    render() {
        console.log('render');
        return (
            <View style={{flex: 1, paddingTop: 22}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData.Title}</Text>}
                />
            </View>
        );
    }
}


function fetchData(query) {
    console.log('fetch');
    return fetch(query)
        .then((response)=>response.json())
        .then((data) => {
            return data;
        })
        .catch(function (err) {
            console.error('error => ' + err);
        });
}

// App registration and rendering
Exponent.registerRootComponent(ListViewBasics);