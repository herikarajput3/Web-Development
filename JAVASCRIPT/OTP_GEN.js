function OTP(num) {
    // console.log(Math.floor(Math.random() * 1000000) + 1);
    let otp = "";
    for (let i = 0; i < num; i++) {
        otp += Math.floor(Math.random() * 10).toString();
    }
    return otp;
}

let generateOtpBtn = document.querySelector("#generateOtpBtn");

generateOtpBtn.addEventListener("click", () => {
    let otpValue = document.querySelector("#otpValue");
    otpValue.textContent = OTP(6);

    const otpDisplay = document.querySelector("#otpDisplay");
    otpDisplay.classList.remove("d-none");
})

