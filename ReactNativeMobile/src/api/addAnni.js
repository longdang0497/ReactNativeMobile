import saveCookie from './saveCookie';

const getAnniList = (anni) => (
    // eslint-disable-next-line no-undef
    fetch('https://date-now.herokuapp.com/celebrations.json', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(anni)
    })
        .then((response) => {
            saveCookie(response.headers.get('set-cookie'));
            return response.json();
        })
);

module.exports = getAnniList;
