function OTP(num) {
    // console.log(Math.floor(Math.random() * 1000000) + 1);
    let otp = "";
    for (let i = 0; i < num; i++) {
        otp += Math.floor(Math.random() * 10).toString();
    }
    return otp;
}
console.log(OTP(6));
