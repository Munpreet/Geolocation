$('#button1').click(function() {

    $.ajax({
        url: "../php/weather.php",
        type: 'POST',
        //dataType: 'json',
        data: {
            //weather: $('#weather').val()
            //Gives information about Weather: $('#weatherInfo').val()
        },
        success: function(result) {

            console.log(result);

            if (result.status.name == "ok") {

                $('#Result').html(JSON.stringify(result['data']));
                

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // your error code
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        }
    }); 


});
$('#button2').click(function() {

    //Values of the <input> boxes.
    const latString = $('#lat').val();
    const lat = parseInt (latString);
    const longString = $('#long').val();
    const long = parseInt(longString);


//Create values for bounding box
const north = lat + 0.5;
const south = long - 0.5;

const east = lat + 0.5;
const west = long - 0.5;

    $.ajax({
        url: "/libs/php/earthquake.php",
        type: 'POST',
    
        data: {
            north,
            south,
            east,
            west
            
        },
        success: function(result) {

            console.log(result);

            if (result.status.name == "ok") {

                $('#Result').html(JSON.stringify(result['data']));

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // your error code
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        }
    }); 


});
$('#button3').click(function() {

    $.ajax({
        url: "/libs/php/timezone.php",
        type: 'POST',
        //dataType: 'json',
        data: {
            //timezone: $('#timezone').val()
            //Timezone Information: $('#timezoneInfo').val()
        },
        success: function(result) {

            console.log(result);

            if (result.status.name == "ok") {

                $('#Result').html(JSON.stringify(result['data']));

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // your error code
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        }
    }); 


});
