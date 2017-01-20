/**
 * Created by Mile on 19-Jan-17.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

var moment = require('moment');

class CardInfo extends Component {
    render() {
        var crawlDate = this.props.date;
        hours = moment().utcOffset(1).subtract(moment(crawlDate, 'DD.MM.YYYY HH:mm:ss')).hours();
        return (
            <View style={styles.card}>
                <View style={[styles.skyblue, styles.cardRow]}>
                    <Text style={styles.bold}>{this.props.title}</Text>
                </View>
                <View style={[styles.powderblue, styles.cardRow]}>
                    <Text>{this.props.description}</Text>
                </View>
                <View style={[styles.steelblue, styles.cardRow]}>
                    <Text style={styles.smallText}>објавено пред {hours} часа - {this.props.site}</Text>
                </View>
            </View>
        );
    }
}
let styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'column',
        borderColor: '#000033',
        borderWidth: 1,
        marginBottom: 12
    },
    bold: {
        fontWeight: 'bold',
        fontSize: 17
    },
    skyblue: {
        backgroundColor: 'skyblue'
    },
    powderblue: {
        backgroundColor: 'powderblue'
    },
    smallText: {
        fontSize: 10
    },
    steelblue: {
        backgroundColor: 'steelblue'
    },
    cardRow: {
        paddingLeft: 10,
        paddingRight: 10
    }
});

export default CardInfo;