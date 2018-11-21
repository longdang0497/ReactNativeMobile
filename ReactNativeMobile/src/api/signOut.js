const signOut = (_email) => (
    // eslint-disable-next-line no-undef
    fetch('https://date-now.herokuapp.com/users/sign_out.json', {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user: {
                email: _email
            }
        })
    })
        .then((response) => response.json())
);

module.exports = signOut;
