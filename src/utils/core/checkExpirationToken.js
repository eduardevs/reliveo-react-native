export default checkExpirationToken = (tokenTime) => {
    // const expirationTokenTime = decodedJwt.exp;

    // console.log(expirationTokenTime);

    // 10 min en secondes
    const tenMin = 600;

    const seconds = new Date().getTime() / 1000;

    const compareTime = seconds - expirationTokenTime;

    if (compareTime > tenMin) {
        console.log('token expiré');

        checkToken();
    } else {
        console.log('token is alive');
    }
};
