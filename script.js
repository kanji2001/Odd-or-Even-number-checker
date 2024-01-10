function check() {
    var value = document.getElementById('number').value;
    
    if (value % 2 == 0){
        // even
        ans = (`${value} is an even number`);

    }else {
        // odd
        ans = (`${value} is an odd number`);
    }

    document.getElementById('ans').innerText = ans;
}