const signIn = (_email, _password) => (
    // eslint-disable-next-line no-undef
    fetch('https://date-now.herokuapp.com/users/sign_in.json', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user: {
                email: _email,
                password: _password
            }
        })
    })
        .then((response) => response.json())
);

module.exports = signIn;
