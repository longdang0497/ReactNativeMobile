import saveCookie from './saveCookie';

const deleteAnni = (anniId) => (
    // eslint-disable-next-line no-undef
    fetch(`https://date-now.herokuapp.com/celebrations/${anniId}.json`, {
        method: 'DELETE',
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

module.exports = deleteAnni;
