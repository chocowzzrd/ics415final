/**
 * Created by sam on 10/31/2015.
 */
$(document).ready(function() {
    $("#login").click(function () {//wait for button click to happen
        var name = $("input[name='name']");//values of username
        var password = $("input[name='passwd']");//values of password
        var nameValue = name.val();
        var passwordValue = password.val();
        var nameArray = [];
        var passArray = [];
        var infoArray = [];
        currentUser = 999;
        $.get('Account.json', '', function (data) {//get the json file
            console.log(data);
            var arr = data['AccountInfo'];//take out Quote object from data in the file
            var len = arr.length;//get length number of elements in the quote object
            console.log("number of things in array: " + len);
            for (var i = 0; i < len; i++) {//for each index
                var line = arr[i]['Name'];//take the text attribute from each element
                var lineM = arr[i]['pass'];
                var line2 = arr[i]['info'];
               // console.log(line);
               // console.log(lineM);
               // console.log(line2);
                nameArray[i] = line;
                passArray[i] = lineM;
                infoArray[i] = line2;
            }
            for ( var i = 0; i < len; i++) {
                if (nameArray[i] == nameValue && passArray[i] == passwordValue) {
                    currentUser = i;
                }
            }
            if(currentUser == 999) {
                window.location.assign("invalidUser.html")
            }
            else {
                window.location.assign("firstContent.html")
            }
        });
    })
});