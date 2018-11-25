import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import CookieManager from 'react-native-cookies';
import { connect } from 'react-redux';

import Menu from './Menu';
import MainContent from './Content';
import updateUser from '../../api/updateUser';
import getCookie from '../../api/getCookie';
import * as userActions from '../../redux/actions/UserActions';

const { width } = Dimensions.get('window');

class Main extends Component {
  state = { isDateTimePickerVisible: false }

  componentWillMount() {
    if (!this.props.user.start_date) {
      this.showDateTimePicker();
    }  
  }

  onCancelPicker = () => {
    this.updateStartDate(moment.utc(new Date()).format());
    this.hideDateTimePicker();
  }

  updateStartDate(date) {
    const update = { start_date: date };
    CookieManager.clearAll()
            .then(() => {
                getCookie()
                    .then(cookie => {
                        updateUser(cookie, this.props.user.id, update)
                            .then(responseJson => {
                                console.log(responseJson);
                                if (responseJson.success) {
                                    this.props.addUser(responseJson.user);
                                }
                            })
                            .catch(err => console(err));
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
  }

  showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  handleDatePicked = (date) => {
    this.updateStartDate(moment.utc(date).format());
    console.log(moment.utc(date).format());
    this.hideDateTimePicker();
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.onCancelPicker}
        />
        <MyDrawer screenProps={navigation} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user
});

export default connect(mapStateToProps, userActions)(Main);

const MyDrawer = createDrawerNavigator({
  Main: MainContent
},
{ 
  contentComponent: Menu,
  drawerWidth: width * 0.55,
  drawerLockMode: 'locked-closed'
}
);
