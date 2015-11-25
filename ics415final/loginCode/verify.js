/**
 * Created by sam on 10/28/2015.
 */

$(document).ready(function(){
    $("#verify").click(function () {//wait for button click to happen
        $("#errors").empty();
        $("input[name='passwd2']").removeClass("red");
        $("input[name='passwd']").removeClass("red");
        var name = $("input[name='name']");
        var password = $("input[name='passwd']");
        var password2 = $("input[name='passwd2']");//grabs the input object whos name is phone_number
        var nameValue = name.val();
        var passwordValue = password.val();//grabs value from the input object and puts it in phone_number
        var passwordValue2 = password2.val();

        var match = passwordValue.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}/i);
        console.log(match);

        //CHECK FOR USER NAME AVAILABILITY HERE

        if(passwordValue == passwordValue2) {
            $("input[name='passwd2']").removeClass("red");
            $("input[name='passwd']").removeClass("red");
            if(match != null) {
                //$("#errors").append("Username:" + nameValue + " Password: " + passwordValue);
                //Add data to json file here
                window.location.assign("confirmPage.html")
            }
            else {
                $("input[name='passwd']").addClass("red");
                $("input[name='passwd2']").addClass("red");
                $("#errors").append("passwords must contain one lowercase letter, one upper case letter, one number, and be 8-12 chars");
            }
        }
        else {
            $("input[name='passwd']").removeClass("red");
            $("input[name='passwd2']").addClass("red");
            $("#errors").append("passwords are not the same");
        }
    });
});


$(document).ready(function(){
    $("#verify").click(function () {
        //VERIFY THAT THE USER INPUTS VALID USERNAME AND PASSWORD
    });
});