import saveCookie from './saveCookie';

const getAnniList = (userId) => (
    // eslint-disable-next-line no-undef
    fetch(`https://date-now.herokuapp.com/celebrations?user_id=${userId}.json`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then((response) => {
            saveCookie(response.headers.get('set-cookie'));
            return response.json();
        })
);

module.exports = getAnniList;
