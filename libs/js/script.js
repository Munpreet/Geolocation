$('#button1').click(function() {

    const latString = $('#lat').val();
    const lat = parseInt (latString);
    const longString = $('#long').val();
    const long = parseInt(longString);



    const north = lat 
    const south = long 
    
    const east = lat 
    const west = long 





    $.ajax({
        url: "libs/php/weather.php",
        type: 'POST',
        data: {
                north,
                south,
                east,
                west



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
        url: "libs/php/earthquake.php",
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

    const latString = $('#lat').val();
    const lat = parseInt(latString);
    const longString = $('#long').val();
    const long = parseInt(longString);





       $.ajax({
        url: "libs/php/timezone.php",
        type: 'POST',
        data: {
            lat,
            long

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
