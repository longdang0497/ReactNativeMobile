import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    Switch,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Slider } from 'react-native-elements';

import avatar from '../../../../media/avatar_user_default.png';

export default class Profile extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.infoContainer}>
                    <TouchableOpacity>
                        <Image source={avatar} style={styles.avatartStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>User Name</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 30 }}>
                    <Text style={styles.title}>Name</Text>
                    <TouchableOpacity style={styles.settingItem}>
                        <Text style={styles.textTitleItem}>Lover</Text>
                        <View style={styles.rightViewItem}>
                            <Text style={styles.textSetting}>Your lover</Text>
                            <Icon name='angle-right' size={25} color='#A3A3A3' />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingItem}>
                        <Text style={styles.textTitleItem}>Lover's Avatar</Text>
                        <View style={styles.rightViewItem}>
                            <Text style={styles.textSetting}>Change</Text>
                            <Icon name='angle-right' size={25} color='#A3A3A3' />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingItem}>
                        <Text style={styles.textTitleItem}>Change Title</Text>
                        <View style={styles.rightViewItem}>
                            <Text style={styles.textSetting}>Been Together</Text>
                            <Icon name='angle-right' size={25} color='#A3A3A3' />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingItem}>
                        <Text style={styles.textTitleItem}>Change Bottom Text</Text>
                        <View style={styles.rightViewItem}>
                            <Text style={styles.textSetting}>Today</Text>
                            <Icon name='angle-right' size={25} color='#A3A3A3' />
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.title}>Date Settings</Text>
                    <TouchableOpacity style={styles.settingItem}>
                        <Text style={styles.textTitleItem}>Start date</Text>
                        <View style={styles.rightViewItem}>
                            <Text style={styles.textSetting}>Now 1, 2017</Text>
                            <Icon name='angle-right' size={25} color='#A3A3A3' />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingItem}>
                        <Text style={styles.textTitleItem}>Start from Zero</Text>
                        <View style={styles.rightViewItem}>
                            <Switch />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingItem}>
                        <Text style={styles.textTitleItem}>Show Year, Month, Days</Text>
                        <View style={styles.rightViewItem}>
                            <Switch />
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.title}>Background Image</Text>
                    <TouchableOpacity style={styles.settingItem}>
                        <Text style={styles.textTitleItem}>Background Image</Text>
                        <View style={styles.rightViewItem}>
                            <Text style={styles.textSetting}>Change</Text>
                            <Icon name='angle-right' size={25} color='#A3A3A3' />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.settingItem}>
                        <Text style={styles.textTitleItem}>Background Blur</Text>
                        <View style={styles.rightViewItem}>
                            <Slider
                                style={{ width: 70 }}
                                maximumValue={1}
                                step={0.1}
                                thumbTintColor='#34B089'
                                value={0}
                                onValueChange={null}
                            />
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.title}>Account Settings</Text>
                    <TouchableOpacity style={styles.settingItem}>
                        <Text style={styles.textTitleItem}>Sign Out</Text>
                        <View style={styles.rightViewItem}>
                            <Icon name='angle-right' size={25} color='#A3A3A3' />
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    },
    infoContainer: {
        alignItems: 'center',
        marginTop: 30
    },
    avatartStyle: {
        width: 90,
        height: 90,
        marginBottom: 10,
        borderRadius: 90
    },
    settingItem: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 7
    },
    rightViewItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    title: {
        flex: 1,
        paddingLeft: 10,
        backgroundColor: '#34B089'
    },
    textTitleItem: {

    },
    textSetting: {
        color: '#A3A3A3',
        marginRight: 10
    }
});
