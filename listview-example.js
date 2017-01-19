/**
 * Created by student on 1/18/17.
 */
import * as Exponent from 'exponent';
import React, {Component} from 'react';
import {ListView, Text, View, StyleSheet} from 'react-native';

import CardInfo from './CardInfo';

const TRAININGS_API = 'http://mladi.ams.mk/eduservice.svc/GetTrainings';
class ListViewBasics extends Component {
    constructor(props) {
        console.log('constr');
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: this.ds
        };
        console.log('constr finish');
    }

    componentWillMount() {
        console.log('will mount');
        let thisClassScoped = this;
        this.fetchData(TRAININGS_API).then(function (data) {
            console.log('fetch data');
            thisClassScoped.setState({
                dataSource: thisClassScoped.ds.cloneWithRows(data)
            });
        }).catch((err) => console.log('error=>' + err));
    }

    componentWillUpdate() {
        console.log('update');
        let thisClassScoped = this;
        this.fetchData(TRAININGS_API).then(function (data) {
            console.log('fetch data');
            thisClassScoped.setState({
                dataSource: thisClassScoped.ds.cloneWithRows(data)
            });
        }).catch((err) => console.log('error=>' + err));
    }

    fetchData(query) {
        console.log('fetch');
        return fetch(query)
            .then((response) => response.json())
            .then((data) => {
                return data;
            })
            .catch(function (err) {
                console.error('error => ' + err);
            });
    }

    render() {
        console.log('render');
        return (
            <View style={styles.container}>
                {/*<CardInfo property="test"/>*/}
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                />
            </View>
        );
    }

    _renderRow(rowData) {
        return (
            <View style={styles.card}>
                <View style={[styles.skyblue, styles.cardRow]}><Text>{rowData.Title}</Text></View>
                <View style={[styles.powderblue, styles.cardRow]}><Text>{rowData.Description}</Text></View>
                <View style={[styles.steelblue, styles.cardRow]}><Text>{rowData.Link}</Text></View>
            </View>
        );
    }
}
let styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        margin: 10
    },
    card: {
        flex: 1,
        flexDirection: 'column',
        borderColor: '#000033',
        borderWidth: 1,
        marginBottom: 12
    },
    skyblue: {
        backgroundColor: 'skyblue'
    },
    powderblue: {
        backgroundColor: 'powderblue'
    },
    steelblue: {
        backgroundColor: 'steelblue'
    },
    cardRow: {
        paddingLeft: 10,
        paddingRight: 10
    }
});

// App registration and rendering
Exponent.registerRootComponent(ListViewBasics);