
import saveCookie from './saveCookie';

const updateUser = (_cookie, userId, update) => (
    // eslint-disable-next-line no-undef
    fetch(`https://date-now.herokuapp.com/users/${userId}.json`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            cookie: _cookie,
        },
        body: JSON.stringify(update)
    })
        .then((response) => {
            saveCookie(response.headers.get('set-cookie'));
            return response.json();
        })
);

module.exports = updateUser;
