
/*
document.getElementById('italiano').addEventListener('click', function(){
    document.getElementById('subTranslation').innerHTML = "Dove e la vita";
    document.getElementById('prenota').innerHTML = "Prenota Ora!";
    document.getElementById('prenotazione').innerHTML = "Prenota Ora in: ";
;})



document.getElementById('english').addEventListener('click', function(){
    document.getElementById('subTranslation').innerHTML = "Is where life happens";
    document.getElementById('prenota').innerHTML = "Book Now!";
    document.getElementById('prenotazione').innerHTML = "Book Now in: ";
;})
*/

    $('#prenota').click(function(event) {
    
        event.preventDefault();

        let n = $(document).height();
        $('html, body').animate({ scrollTop: n }, 1000);

    });

    
