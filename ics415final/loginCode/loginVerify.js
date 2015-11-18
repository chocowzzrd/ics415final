/**
 * Created by sam on 10/31/2015.
 */
$(document).ready(function() {
    $("#login").click(function () {//wait for button click to happen
        var nameArray = [];
        var infoArray = [];
        $.get('Account.json', '', function (data) {//get the json file
            //console.log(data);
            var arr = data['AccountInfo'];//take out Quote object from data in the file
            var len = arr.length;//get length number of elements in the quote object
            console.log("number of things in array: " + len);
            for (var i = 0; i < len; i++) {//for each index
                var line = arr[i]['Name'];//take the text attribute from each element
                var line2 = arr[i]['info'];
                console.log(line);
                console.log(line2);
                nameArray[i] = line;
                infoArray[i] = line2;
            }
        });
    })
});