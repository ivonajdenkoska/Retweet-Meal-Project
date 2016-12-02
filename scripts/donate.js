/*
$(document).ready(function () {

    $(".list-group-item").click(function () {
        $(".list-group-item.active").removeClass("active");
        $(this).addClass("active");
    })

    $("#listaDatumi1").on('click', 'li', function () {
        console.log("lalalala");
        $(".list-group-item.active").removeClass("active");
        $(this).addClass("active");
    });

    $("#listaDatumi1 li").click(function () {
        console.log("lalalala");
        $(".list-group-item.active").removeClass("active");
        $(this).addClass("active");
    });
});
*/


function checkbox1Change() {
    $("#listaNam").toggle();
}
function checkbox2Change() {
    $("#listaGot").toggle();
}
function checkbox3Change() {
    $("#listaNamKom").toggle();
}
function checkbox4Change() {
    $("#listaGotKom").toggle();
}
function dodadiHrana1() {
    $("#tableNam tr:last").after("<tr><td class=" + '"input input--hoshi"' + "><input class=" + '"input__field input__field--hoshi"' + "type=" + '"email"' + "id=" + '"input-4"' + "/><label class=" + '"input__label input__label--hoshi input__label--hoshi-color-1"' + "for=" + '"input-4"' + "><span class=" + '"input__label-content input__label-content--hoshi"' + ">Име :</span> </label> </td> <td class=" + '"input input--hoshi kolicina"' + "> <input class=" + '"input__field input__field--hoshi"' + "type=" + '"number"' + "id=" + '"input-4"' + "/> <label class=" + '"input__label input__label--hoshi input__label--hoshi-color-1 kolicina"' + " for=" + '"input-4"' + "> <span class=" + '"input__label-content input__label-content--hoshi"' + ">Количина :</span> </label> </td> </tr>");
}
function dodadiHrana2() {
    $("#tableGot tr:last").after("<tr><td class=" + '"input input--hoshi"' + "><input class=" + '"input__field input__field--hoshi"' + "type=" + '"email"' + "id=" + '"input-4"' + "/><label class=" + '"input__label input__label--hoshi input__label--hoshi-color-1"' + "for=" + '"input-4"' + "><span class=" + '"input__label-content input__label-content--hoshi"' + ">Храна :</span> </label> </td> <td class=" + '"input input--hoshi kolicina"' + "> <input class=" + '"input__field input__field--hoshi"' + "type=" + '"number"' + "id=" + '"input-4"' + "/> <label class=" + '"input__label input__label--hoshi input__label--hoshi-color-1 kolicina"' + " for=" + '"input-4"' + "> <span class=" + '"input__label-content input__label-content--hoshi"' + ">Количина :</span> </label> </td> </tr>");
}
function dodadiHrana3() {
    $("#tableNamKom tr:last").after("<tr><td class=" + '"input input--hoshi"' + "><input class=" + '"input__field input__field--hoshi"' + "type=" + '"email"' + "id=" + '"input-4"' + "/><label class=" + '"input__label input__label--hoshi input__label--hoshi-color-1"' + "for=" + '"input-4"' + "><span class=" + '"input__label-content input__label-content--hoshi"' + ">Име :</span> </label> </td> <td class=" + '"input input--hoshi kolicina"' + "> <input class=" + '"input__field input__field--hoshi"' + "type=" + '"number"' + "id=" + '"input-4"' + "/> <label class=" + '"input__label input__label--hoshi input__label--hoshi-color-1 kolicina"' + " for=" + '"input-4"' + "> <span class=" + '"input__label-content input__label-content--hoshi"' + ">Количина :</span> </label> </td> </tr>");
}
function dodadiHrana4() {
    $("#tableGotKom tr:last").after("<tr><td class=" + '"input input--hoshi"' + "><input class=" + '"input__field input__field--hoshi"' + "type=" + '"email"' + "id=" + '"input-4"' + "/><label class=" + '"input__label input__label--hoshi input__label--hoshi-color-1"' + "for=" + '"input-4"' + "><span class=" + '"input__label-content input__label-content--hoshi"' + ">Храна :</span> </label> </td> <td class=" + '"input input--hoshi kolicina"' + "> <input class=" + '"input__field input__field--hoshi"' + "type=" + '"number"' + "id=" + '"input-4"' + "/> <label class=" + '"input__label input__label--hoshi input__label--hoshi-color-1 kolicina"' + " for=" + '"input-4"' + "> <span class=" + '"input__label-content input__label-content--hoshi"' + ">Количина :</span> </label> </td> </tr>");
}
function onActionForm1(event) {
    event.preventDefault();
    console.log("onActionForm1 was called");
    var ime = $("#input-1").val();
    var prez = $("#input-2").val();
    var broj = $("#input-3").val();
    var mail = $("#input-4").val();
    var datum = document.getElementById("labelaDatum1").textContent;
    console.log(datum);
    var but = $("#kopceNam").is(":checked") || $("#kopceGot").is(":checked");
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
    else {
        $("#input-1").val("");
        $("#input-2").val("");
        $("#input-3").val("");
        $("#input-4").val("");
        $("#input-10").val("");
        $("#input-20").val("");
        $("#input-30").val("");
        $("#input-40").val("");
        $("#labelaDatum1").val("");
        $("#donateForm").hide();
        $("#krajnaForma").show();
        setTimeout(function redirect() {
            window.location = "#/";
        }, 3000);

    }
}

function onActionForm2(event) {
    event.preventDefault();

    var ime = $("#input-5").val();
    var adr = $("#input-6").val();
    var broj = $("#input-7").val();
    var mail = $("#input-8").val();
    var but = $("#kopceNamKom").is(":checked") || $("#kopceGotKom").is(":checked");
    var datum = document.getElementById("labelaDatum2").textContent;
    if (ime.length == 0 || adr.length == 0 || broj.length == 0 || mail.length == 0 || datum.length == 0  || !but) {
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
    else {
        $("#input-5").val("");
        $("#input-6").val("");
        $("#input-7").val("");
        $("#input-8").val("");
        $("#input-22").val("");
        $("#input-33").val("");
        $("#input-44").val("");
        $("#input-55").val("");
        $("#labelaDatum2").val();
        $("#donateForm").hide();

        $("#krajnaForma").show();
        setTimeout(function redirect() {
            window.location = "#/";
        }, 3000);
    }
}
function onDataClick1(event){
    var text = $(event.target).text();
    $("#labelaDatum1").text(text);
}
function onDataClick2(event){
    var text = $(event.target).text();
    $("#labelaDatum2").text(text);
}
function prvTab() {
    $("#naslov").text("Индивидуа");
}
function vtorTab() {
    $("#naslov").text("Компанија");
}