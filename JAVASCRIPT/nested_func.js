var name = "Herika"
function outerfunction() {
    function innerfunction() {
        console.log(name);
    }
    innerfunction()
}

outerfunction()

