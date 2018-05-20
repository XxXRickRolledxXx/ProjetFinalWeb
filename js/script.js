//Page 2
$('.img-fluid').hover(function () {
    $(this).addClass('zoom');
}, function () {
    $(this).removeClass('zoom');
});
//Page 3
window.onbeforeprint = function () {
    $('#enlever_1').attr("class", "d-none")
    $('#enlever_2').attr("class", "d-none")
}
window.onafterprint = function () {
    $('#enlever_1').attr("class", "d-block")
    $('#enlever_2').attr("class", "d-block")
}
$('#username').keyup(function () {//||
    if($('#username').val().length > 20 || $('#username').val().length <= 3) {
        ('#username').attr("class", "form-control is-invalid");$
    }
    else if($('#username').val().length >3) {
        $('#username').attr("class", "form-control is-valid");
    }
    else {
        $('#username').attr("class", "form-control");
    }
})
$('#password').keyup(function () {
    if ($('#password').val().length < 8){
        $('#weak').attr("class","d-block red")
        $('#medium').attr("class","d-none yellow")
        $('#strong').attr("class","d-none green")
    }
    else if ($('#password').val().length >= 8 && $('#password').val().length < 15 ){
        $('#weak').attr("class","d-none red")
        $('#medium').attr("class","d-block yellow")
        $('#strong').attr("class","d-none green")
    }
    else if ($('#password').val().length >= 15){
        $('#weak').attr("class","d-none red")
        $('#medium').attr("class","d-none yellow")
        $('#strong').attr("class","d-block green")
    }
})
$('#confirmpwd').keyup(function () {
    if($('#confirmpwd').val() != $('#password').val() ){
        $('#confirmpwd').attr("class", "form-control is-invalid");
    }
    else if($('#confirmpwd').val() == $('#password').val()){
        $('#confirmpwd').attr("class", "form-control is-valid");
    }
    else {
        $('#confirmpwd').attr("class", "form-control");
    }

})
//Page 4
var e = $('#catID')
$('#boutonGauche').click(function () {
    $(e).animate({left: "-=300"}, 1000);
})
$('#boutonDroite').click(function () {
    $(e).animate({left: "+=300"}, 1000);
})
$('#boutonEnleverImage').click(function () {
    $(e).fadeOut()
})
$('#boutonAjouterImage').click(function () {
    $(e).fadeIn()
})
$('#boutonDupliquer').click(function () {
    $(e).clone().attr('id', "clone").insertAfter(e)
})
$('#boutonEnleverClone').click(function () {
    $(e).next('img').remove()
})
$('#boutonGrossirImage').click(function () {
    $(e).animate(
        {
            "width": 500
        })
})
$('#boutonRapetisserImage').click(function () {
    $(e).animate(
        {
            "width": 100
        })
})
$('#boutonRetablirImage').click(function () {
    $(e).animate(
        {
            "width": 200
        })
})