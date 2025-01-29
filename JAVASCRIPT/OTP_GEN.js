function OTP(num) {
    // console.log(Math.floor(Math.random() * 1000000) + 1);
    let otp;
    for (let i = 0; i < num; i++) {
        otp = Math.floor(Math.random() * num) + 1;
    }
    return otp;
}
console.log(OTP(6));


// OTP(6)