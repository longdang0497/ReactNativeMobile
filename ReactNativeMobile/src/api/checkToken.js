const checkToken = (token) => (
    // eslint-disable-next-line no-undef
    fetch('https://date-now.herokuapp.com/users/check_token', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user: {
                authentication_token: token
            }
        })
    })
        .then((response) => response.json())
);

module.exports = checkToken;
