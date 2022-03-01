function totalIt() {
    var input = document.getElementsByClassName("form-check-input");
    var total = 0;
    for (var i = 0; i < input.length; i++) {
        if (input[i].checked) {
            total += parseFloat(input[i].value);
        }
    }
    document.getElementsByName("total")[0].value = "$" + total.toFixed(2);
}
