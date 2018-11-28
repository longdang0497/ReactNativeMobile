// import React, { Component } from 'react';
// import {
//     View, Dimensions,
//     Text, Image,
//     StyleSheet,
//     ScrollView,
//     TouchableOpacity
// } from 'react-native';
// import { connect } from 'react-redux';
// import Geocoder from 'react-native-geocoding';
// import { fetchID } from '../../../../redux/actions/RecommendAction';

// Geocoder.init('X7eREXdzKvjwsa9blQMby1QYPBeRANBq/kdxmb8VhZDUHHU3Gtp+lfp6s8YcvJerUG7rAcSbjcvXKjsKQLngvNY6OUI2dlKHhtImVhDOXAADWncyUa1/sY+/6L532iHTRDMf4s72XLa7ULibM1HW380noN2mWhLxRNy90Tm25oaCsQa4qv8pKj9D7jPcHCr2oKG4o59F0KlpdsJafAHU+oom7mplekv6hGiUQ1pLOuNEYlxkf5qyXwl0tBWMswnVl9WRnrVE7WxJwM7km27GEDPfUmwo0xxIS3cM6VcXUxv8Bwn3D0d23UGBSp/K23PnKAPMiBS8PqnFfcB+TwClYORpH+eTf+xdbP0pfgQn0fCYvZt4/zJDPzV3n07BQcn2eDmfIJspAkdQnhF/sWP5jOxqVdVjC+G6YFDtaH5qrrt1nRfKLBRbBjlFAaoVA/PPWuhRG3HTzBkyQU7Ea5UeaFzE1XBsEkPQVbvF5G2XxsaddIeueLFemXoy4U/l7uNC+b7I88JZvYPN3iZrLw078UvgRxj54tYak40sWkmAM7Y/PYN03zLkJWqIEKAWWzQ+v5VhWsf/CHvueam8FyTqy96JjNLkdfsHsBCWy7mBqvNJDHIrHFPUErVWMTZGIfwUS+4XmAhVrWFf/yWkkgXQIY+1YxxyYusmb0tLeLMt+4Y='); // use a valid API key

// Geocoder.from("Colosseum")
//         .then(json => {
//             var location = json.results[0].geometry.location;
//             console.log(location);
//         })
//         .catch(error => console.warn(error));

// class GeoLocation extends Component {
//     render() {
//         return (
            
//         );
//     }
// }

// function mapStateToProps(state) {
//     return {
//         MyItems: state.fetchData.itemsID,
//         isFetching: state.fetchData.isFetching,
//     };
// }

// export default connect (mapStateToProps, { fetchID })(GeoLocation);