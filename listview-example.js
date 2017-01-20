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
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: this.ds
        };
    }

    componentWillMount() {
        let thisClassScoped = this;
        this.fetchData(TRAININGS_API).then(function (data) {
            thisClassScoped.setState({
                dataSource: thisClassScoped.ds.cloneWithRows(data)
            });
        }).catch((err) => console.error('error=>' + err));
    }

    fetchData(query) {
        return fetch(query)
            .then((response) => response.json())
            .then((data) => data)
            .catch(function (err) {
                console.error('error => ' + err);
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                />
            </View>
        );
    }

    _renderRow(rowData) {
        return (<CardInfo title={rowData.Title} site={rowData.EduSiteName} date={rowData.CrawlDate} description={rowData.Description}/>);
    }
}
let styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        margin: 10
    }
});

// App registration and rendering
Exponent.registerRootComponent(ListViewBasics);