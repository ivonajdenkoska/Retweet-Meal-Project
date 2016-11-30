$(document).ready(function () {
    $(".list-group-item").click(function () {
        $(".list-group-item.active").removeClass("active");
        $(this).addClass("active");
    });

    $("#kopceForma").click(function () {
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


});