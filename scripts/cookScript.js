$(document).ready(function () {

    $("#listaGot").hide();
    $("#listaNam").hide();
    $("#listaGotKom").hide();
    $("#listaNamKom").hide();


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

    $("#kopceForma1").click(function () {
        $("#listModal").empty();
        var ime = $("#input-1").val();
        var prez = $("#input-2").val();
        var broj = $("#input-3").val();
        var mail = $("#input-4").val();
        var datum = $(".list-group-item.active").attr('value');
        if(typeof datum == 'undefined')
            datum='';
        var but = $("#kopceNam").is(":checked") || $("#kopceGot").is(":checked");

        if(ime.length==0 || prez.length==0 || broj.length==0 || mail.length==0 || datum.length==0 || !but ){
            if(ime.length==0)
                $("#listModal").append("<li>Име</li>");
            if(prez.length==0)
                $("#listModal").append("<li>Презиме</li>");
            if(broj.length==0)
                $("#listModal").append("<li>Телефонски Број</li>");
            if(mail.length==0)
                $("#listModal").append("<li>Е-Маил</li>");
            if(datum.length==0)
                $("#listModal").append("<li>Одберете датум</li>");
            if(!but)
                $("#listModal").append("<li>Не донирате ништо</li>");

            $("#myModal").modal();

        }

    });

    $("#kopceForma2").click(function () {
        $("#listModal").empty();
        var ime = $("#input-5").val();
        var adr = $("#input-6").val();
        var broj = $("#input-7").val();
        var mail = $("#input-8").val();
        var but = $("#kopceNamKom").is(":checked") || $("#kopceGotKom").is(":checked");
        var datum = $(".list-group-item.active").attr('value');
        if(typeof datum == 'undefined')
            datum='';

        if(ime.length==0 || adr.length==0 || broj.length==0 || mail.length==0 || datum.length==0 || !but ){
            if(ime.length==0)
                $("#listModal").append("<li>Име</li>");
            if(adr.length==0)
                $("#listModal").append("<li>Адреса</li>");
            if(broj.length==0)
                $("#listModal").append("<li>Телефонски Број</li>");
            if(mail.length==0)
                $("#listModal").append("<li>Е-Маил</li>");
            if(datum.length==0)
                $("#listModal").append("<li>Одберете датум</li>");
            if(!but)
                $("#listModal").append("<li>Не донирате ништо</li>");

            $("#myModal").modal();
        }
    });

    $('#myModal').on('hidden.bs.modal', function () {
        $("#listModal").empty();
    })

});/**
 * Created by krste on 30-Nov-16.
 */
