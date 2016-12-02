$(document).ready(function () {

    function triggerChange() {
        $("#kopceNam").trigger("change");
    }

    function triggerChange() {
        $("#kopceNamKom").trigger("change");
    }


    $("#kopceNam").change(function () {
        $("#listaNam").toggle();
    });

    $("#kopceGot").change(function () {
        $("#listaGot").toggle();
    });

    $("#addNamir").click(function () {
        $("#tableNam tr:last").after("<tr><td class=" + '"input input--hoshi"' + "><input class=" + '"input__field input__field--hoshi"' + "type=" + '"email"' + "id=" + '"input-4"' + "/><label class=" + '"input__label input__label--hoshi input__label--hoshi-color-1"' + "for=" + '"input-4"' + "><span class=" + '"input__label-content input__label-content--hoshi"' + ">Име :</span> </label> </td> <td class=" + '"input input--hoshi kolicina"' + "> <input class=" + '"input__field input__field--hoshi"' + "type=" + '"number"' + "id=" + '"input-4"' + "/> <label class=" + '"input__label input__label--hoshi input__label--hoshi-color-1 kolicina"' + " for=" + '"input-4"' + "> <span class=" + '"input__label-content input__label-content--hoshi"' + ">Количина :</span> </label> </td> </tr>");
    });

    $("#addHrana").click(function () {
        $("#tableGot tr:last").after("<tr><td class=" + '"input input--hoshi"' + "><input class=" + '"input__field input__field--hoshi"' + "type=" + '"email"' + "id=" + '"input-4"' + "/><label class=" + '"input__label input__label--hoshi input__label--hoshi-color-1"' + "for=" + '"input-4"' + "><span class=" + '"input__label-content input__label-content--hoshi"' + ">Храна :</span> </label> </td> <td class=" + '"input input--hoshi kolicina"' + "> <input class=" + '"input__field input__field--hoshi"' + "type=" + '"number"' + "id=" + '"input-4"' + "/> <label class=" + '"input__label input__label--hoshi input__label--hoshi-color-1 kolicina"' + " for=" + '"input-4"' + "> <span class=" + '"input__label-content input__label-content--hoshi"' + ">Количина :</span> </label> </td> </tr>");
    });


    $("#kopceNamKom").change(function () {
        $("#listaNamKom").toggle();
    });

    $("#kopceGotKom").change(function () {
        $("#listaGotKom").toggle();
    });

    $("#addNamirKom").click(function () {
        $("#tableNamKom tr:last").after("<tr><td class=" + '"input input--hoshi"' + "><input class=" + '"input__field input__field--hoshi"' + "type=" + '"email"' + "id=" + '"input-4"' + "/><label class=" + '"input__label input__label--hoshi input__label--hoshi-color-1"' + "for=" + '"input-4"' + "><span class=" + '"input__label-content input__label-content--hoshi"' + ">Име :</span> </label> </td> <td class=" + '"input input--hoshi kolicina"' + "> <input class=" + '"input__field input__field--hoshi"' + "type=" + '"number"' + "id=" + '"input-4"' + "/> <label class=" + '"input__label input__label--hoshi input__label--hoshi-color-1 kolicina"' + " for=" + '"input-4"' + "> <span class=" + '"input__label-content input__label-content--hoshi"' + ">Количина :</span> </label> </td> </tr>");
    });

    $("#addHranaKom").click(function () {
        $("#tableGotKom tr:last").after("<tr><td class=" + '"input input--hoshi"' + "><input class=" + '"input__field input__field--hoshi"' + "type=" + '"email"' + "id=" + '"input-4"' + "/><label class=" + '"input__label input__label--hoshi input__label--hoshi-color-1"' + "for=" + '"input-4"' + "><span class=" + '"input__label-content input__label-content--hoshi"' + ">Храна :</span> </label> </td> <td class=" + '"input input--hoshi kolicina"' + "> <input class=" + '"input__field input__field--hoshi"' + "type=" + '"number"' + "id=" + '"input-4"' + "/> <label class=" + '"input__label input__label--hoshi input__label--hoshi-color-1 kolicina"' + " for=" + '"input-4"' + "> <span class=" + '"input__label-content input__label-content--hoshi"' + ">Количина :</span> </label> </td> </tr>");
    });

    $(".list-group-item").click(function () {
        $(".list-group-item.active").removeClass("active");
        $(this).addClass("active");
    })
});

function onActionForm1(event) {
    event.preventDefault();

    console.log('ON ACTION FORM 1');
    var ime = $("#input-1").val();
    var prez = $("#input-2").val();
    var broj = $("#input-3").val();
    var mail = $("#input-4").val();
    var datum = $(".list-group-item.active").attr('value');
    if (typeof datum == 'undefined')
        datum = '';

    var but = $("#kopceNam").is(":checked") || $("#kopceGot").is(":checked");
    console.log("lenght of ime: " + ime.length + " ime = " + ime );
    if (ime.length == 0 || prez.length == 0 || broj.length == 0 || mail.length == 0 || datum.length == 0 || !but) {
        console.log('THERE IS SOMETHING WRONG');
        if (ime.length == 0)
            $("#warning1").show();
        else
            $("#warning1").hide();
        if (prez.length == 0)
            $("#warning2").show();
        else
            $("#warning2").hide();
        if (broj.length == 0)
            $("#warning3").show();
        else
            $("#warning3").hide();
        if (mail.length == 0)
            $("#warning4").show();
        else
            $("#warning4").hide();
        if (datum.length == 0)
            $("#warning5").show();
        else
            $("#warning5").hide();
        if (!but)
            $("#warning6").show();
        else
            $("#warning6").hide();

    }
}

function onActionForm2(event) {
    event.preventDefault();

    var ime = $("#input-5").val();
    var adr = $("#input-6").val();
    var broj = $("#input-7").val();
    var mail = $("#input-8").val();
    var but = $("#kopceNamKom").is(":checked") || $("#kopceGotKom").is(":checked");
    var datum = $(".list-group-item.active").attr('value');
    if (typeof datum == 'undefined')
        datum = '';

    if (ime.length == 0 || adr.length == 0 || broj.length == 0 || mail.length == 0 || datum.length == 0 || !but) {
        if (ime.length == 0)
            $("#warning7").show();
        else
            $("#warning7").hide();
        if (adr.length == 0)
            $("#warning8").show();
        else
            $("#warning8").hide();
        if (broj.length == 0)
            $("#warning9").show();
        else
            $("#warning9").hide();
        if (mail.length == 0)
            $("#warning10").show();
        else
            $("#warning10").hide();
        if (datum.length == 0)
            $("#warning11").show();
        else
            $("#warning11").hide();
        if (!but)
            $("#warning12").show();
        else
            $("#warning12").hide();

    }
}