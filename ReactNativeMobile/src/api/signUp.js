const signUp = (_email, _password, _passwordConfirm, _name) => (
    // eslint-disable-next-line no-undef
    fetch('https://date-now.herokuapp.com/users/sign_up.json', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user: {
                email: _email,
                password: _password,
                password_confirmation: _passwordConfirm,
                name: _name
            }
        })
    })
        .then((response) => response.json())
);

module.exports = signUp;
