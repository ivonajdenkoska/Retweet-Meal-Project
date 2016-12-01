(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['aboutTemp'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<link rel=\"stylesheet\" href=\"./styles/about.css\"/>\r\n\r\n<div class=\"container main-padding\">\r\n<div class=\"rows\">\r\n    <h1 style=\"opacity: 0.5;\">#заРетвитниОброк</h1>\r\n</div>\r\n    <div class=\"row rows-padding\">\r\n        <div class=\"col-md-3 about-img-1 elements-margin col-centered \">\r\n            <img src=\"img/about/2.png\" class=\"img-circle about-img-1\">\r\n        </div>\r\n        <div class=\"col-md-6 about-cells-2 elements-margin col-centered\">\r\n            <p class=\"text-style about-text\">\r\n                <strong class=\"main-words\">Ретвитни оброк</strong> е иницијатива (формирана на Твитер) на аматери готвачи\r\n                кои сакаат да споделуваат храна, не само на Интернет. <br/>\r\n\r\n            </p>\r\n        </div>\r\n        <div class=\"col-md-3 about-img-1 elements-margin col-centered\">\r\n            <img src=\"img/about/4.png\" class=\"img-circle about-img-1\">\r\n        </div>\r\n    </div>\r\n    <div class=\"row rows-padding\">\r\n        <div class=\"col-md-3 about-img-1 elements-margin col-centered\">\r\n            <img src=\"img/about/1.png\" class=\"img-circle about-img-1\">\r\n        </div>\r\n        <div class=\"col-md-6 about-cells-2 elements-margin col-centered\">\r\n            <p class=\"text-style about-text\">\r\n                <strong class=\"main-words\">Што сакаме да направиме?</strong><br/> Да ја подигнеме свеста на луѓето и да стигнеме до момент храната која останува при готвење\r\n                да не се фрла, туку да се споделува со оние кои немаат.\r\n            </p>\r\n        </div>\r\n        <div class=\"col-md-3 about-img-1 elements-margin col-centered\">\r\n            <img src=\"img/about/5.png\" class=\"img-circle about-img-1\">\r\n        </div>\r\n    </div>\r\n    <div class=\"row rows-padding\">\r\n        <div class=\"col-md-3 about-img-1 elements-margin col-centered\">\r\n            <img src=\"img/about/3.png\" class=\"img-circle about-img-1\">\r\n        </div>\r\n        <div class=\"col-md-3 about-cells-1 elements-margin col-centered\">\r\n            <p class=\"text-style about-text\">\r\n                <strong class=\"main-words\">Локација</strong>: Пред спомен-куќата на Мајка Тереза. <br/>\r\n                <strong class=\"main-words\">Ден</strong>: Секоја сабота. <br/>\r\n                <strong class=\"main-words\">Време</strong>: 13:00  <br/>\r\n            </p>\r\n        </div>\r\n        <div class=\"col-md-3 about-cells-1 elements-margin col-centered\">\r\n            <p class=\"text-style-last about-text\">\r\n                <strong class=\"main-words\">37</strong> недели готвење.<br/>\r\n                <strong class=\"main-words\">110</strong> оброци неделно.<br/>\r\n                До сега <strong class=\"main-words\">4070</strong> споделени оброци.\r\n            </p>\r\n        </div>\r\n        <div class=\"col-md-3 about-img-1 elements-margin col-centered\">\r\n            <img src=\"img/about/6.png\" class=\"img-circle about-img-1\">\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n";
},"useData":true});
templates['addIngTemp'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<link rel=\"stylesheet\" href=\"./styles/addIngs.css\">\r\n<link rel=\"stylesheet\" href=\"./styles/set1.css\">\r\n\r\n<div class=\"container\" id=\"donateForm\">\r\n    <ul id=\"listaTabovi\" class=\"nav nav-pills\">\r\n        <li class=\"active\"><a data-toggle=\"pill\" href=\"#indiv\">Индивидуа</a></li>\r\n        <li><a data-toggle=\"pill\" href=\"#komp\" >Компанија</a></li>\r\n    </ul>\r\n\r\n    <div class=\"tab-content\">\r\n        <div id=\"indiv\" class=\"tab-pane fade in active col-lg-12\">\r\n            <form id=\"donirajForma\" class=\"forma\" onsubmit=\"onActionForm1(event)\">\r\n                <span class=\"input input--hoshi\">\r\n					<input class=\"input__field input__field--hoshi\" type=\"text\" id=\"input-1\"/>\r\n					<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"input-1\">\r\n						<span class=\"input__label-content input__label-content--hoshi\">Име :</span>\r\n					</label>\r\n				</span>\r\n                <br>\r\n                <h6 id=\"warning1\" style=\"display:none;\">Полето е задолжително!</h6>\r\n                <span class=\"input input--hoshi\">\r\n					<input class=\"input__field input__field--hoshi\" type=\"text\" id=\"input-2\"/>\r\n					<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"input-2\">\r\n						<span class=\"input__label-content input__label-content--hoshi\">Презиме :</span>\r\n					</label>\r\n				</span>\r\n                <br>\r\n                <h6 id=\"warning2\" style=\"display:none;\">Полето е задолжително!</h6>\r\n                <span class=\"input input--hoshi\">\r\n					<input class=\"input__field input__field--hoshi\" type=\"number\" id=\"input-3\"/>\r\n					<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"input-3\">\r\n						<span class=\"input__label-content input__label-content--hoshi\">Тел. Број :</span>\r\n					</label>\r\n				</span>\r\n                <br>\r\n                <h6 id=\"warning3\" style=\"display:none;\">Полето е задолжително!</h6>\r\n                <span class=\"input input--hoshi\">\r\n					<input class=\"input__field input__field--hoshi\" type=\"email\" id=\"input-4\"/>\r\n					<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"input-4\">\r\n						<span class=\"input__label-content input__label-content--hoshi\">Е-Маил :</span>\r\n					</label>\r\n				</span>\r\n                <br>\r\n                <h6 id=\"warning4\" style=\"display:none;\">Полето е задолжително!</h6>\r\n                <br>\r\n                <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseExample\"\r\n                        aria-expanded=\"false\" aria-controls=\"collapseExample\">\r\n                    Одбери датум\r\n                </button>\r\n\r\n                <div class=\"collapse\" id=\"collapseExample\">\r\n                    <div class=\"well well-sm \">\r\n                        <div class=\"list-group\">\r\n                            <a href=\"#\" class=\"list-group-item\" value=\"nesto\">First item</a>\r\n                            <a href=\"#\" class=\"list-group-item\">Second item</a>\r\n                            <a href=\"#\" class=\"list-group-item\">Third item</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <h6 id=\"warning5\" style=\"display:none;\">Немате одбрано датум!</h6>\r\n                <br>\r\n                <br>\r\n                <label>Донирај :</label>\r\n                <div class=\"checkbox\">\r\n                    <label><input type=\"checkbox\" id=\"kopceNam\">Намирници</label>\r\n                </div>\r\n                <div class=\"checkbox\">\r\n                    <label><input type=\"checkbox\" id=\"kopceGot\">Готова Храна</label>\r\n                </div>\r\n                <h6 id=\"warning6\" style=\"display:none;\">Немате донирано ништо!</h6>\r\n                <div id=\"listaNam\">\r\n                    <ul>\r\n                        <li>\r\n                            <table id=\"tableNam\">\r\n                                <tr>\r\n                                    <td class=\"input input--hoshi\">\r\n                                        <input class=\"input__field input__field--hoshi\" type=\"email\" id=\"input-10\"/>\r\n                                        <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\"\r\n                                               for=\"input-10\">\r\n                                            <span class=\"input__label-content input__label-content--hoshi\">Име :</span>\r\n                                        </label>\r\n                                    </td>\r\n                                    <td class=\"input input--hoshi kolicina\">\r\n                                        <input class=\"input__field input__field--hoshi \" type=\"number\" id=\"input-20\"/>\r\n                                        <label class=\"input__label input__label--hoshi input__label--hoshi-color-1 kolicina\"\r\n                                               for=\"input-20\">\r\n                                            <span class=\"input__label-content input__label-content--hoshi\">Количина :</span>\r\n                                        </label>\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                        </li>\r\n                    </ul>\r\n                    <button id=\"addNamir\">Додади намирници</button>\r\n                </div>\r\n                <div id=\"listaGot\">\r\n                    <ul>\r\n                        <li>\r\n                            <table id=\"tableGot\">\r\n                                <tr>\r\n                                    <td class=\"input input--hoshi\">\r\n                                        <input class=\"input__field input__field--hoshi\" type=\"email\" id=\"input-30\"/>\r\n                                        <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\"\r\n                                               for=\"input-30\">\r\n                                            <span class=\"input__label-content input__label-content--hoshi\">Храна :</span>\r\n                                        </label>\r\n                                    </td>\r\n                                    <td class=\"input input--hoshi kolicina\">\r\n                                        <input class=\"input__field input__field--hoshi\" type=\"number\" id=\"input-40\"/>\r\n                                        <label class=\"input__label input__label--hoshi input__label--hoshi-color-1 kolicina\"\r\n                                               for=\"input-40\">\r\n                                            <span class=\"input__label-content input__label-content--hoshi\">Количина :</span>\r\n                                        </label>\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                        </li>\r\n                    </ul>\r\n                    <button id=\"addHrana\">Додади храна</button>\r\n                </div>\r\n                <br>\r\n                <button class=\"btn btn-default\" id=\"kopceForma1\">Submit</button>\r\n            </form>\r\n        </div>\r\n        <div id=\"komp\" class=\"tab-pane fade col-lg-12\">\r\n            <form class=\"forma\" onsubmit=\"onActionForm2(event)\">\r\n                <span class=\"input input--hoshi\">\r\n					<input class=\"input__field input__field--hoshi\" type=\"text\" id=\"input-5\"/>\r\n					<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"input-5\">\r\n						<span class=\"input__label-content input__label-content--hoshi\">Име :</span>\r\n					</label>\r\n				</span><br>\r\n                <h6 id=\"warning7\" style=\"display:none;\">Полето е задолжително!</h6>\r\n                <span class=\"input input--hoshi\">\r\n					<input class=\"input__field input__field--hoshi\" type=\"text\" id=\"input-6\"/>\r\n					<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"input-6\">\r\n						<span class=\"input__label-content input__label-content--hoshi\">Адреса :</span>\r\n					</label>\r\n				</span><br>\r\n                <h6 id=\"warning8\" style=\"display:none;\">Полето е задолжително!</h6>\r\n                <span class=\"input input--hoshi\">\r\n					<input class=\"input__field input__field--hoshi\" type=\"number\" id=\"input-7\"/>\r\n					<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"input-7\">\r\n						<span class=\"input__label-content input__label-content--hoshi\">Тел. Број :</span>\r\n					</label>\r\n				</span><br>\r\n                <h6 id=\"warning9\" style=\"display:none;\">Полето е задолжително!</h6>\r\n                <span class=\"input input--hoshi\">\r\n					<input class=\"input__field input__field--hoshi\" type=\"email\" id=\"input-8\"/>\r\n					<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"input-8\">\r\n						<span class=\"input__label-content input__label-content--hoshi\">Е-Маил :</span>\r\n					</label>\r\n				</span>\r\n                <br><br>\r\n                <h6 id=\"warning10\" style=\"display:none;\">Полето е задолжително!</h6>\r\n                <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#kalendar2\"\r\n                        aria-expanded=\"false\" aria-controls=\"kalendar2\">\r\n                    Одбери датум\r\n                </button>\r\n                <div class=\"collapse\" id=\"kalendar2\">\r\n                    <div class=\"well well-sm\">\r\n                        <ul class=\"list-group\" id=\"listaDatumi\">\r\n                            <li><a href=\"#\" class=\"list-group-item\">First item</a></li>\r\n                            <li><a href=\"#\" class=\"list-group-item\">Second item</a></li>\r\n                            <li><a href=\"#\" class=\"list-group-item\">Third item</a></li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n                <br><br>\r\n                <h6 id=\"warning11\" style=\"display:none;\">Немате одбрано датум!</h6>\r\n                <label>Донирај :</label>\r\n                <div class=\"checkbox\">\r\n                    <label><input type=\"checkbox\" value=\"\" id=\"kopceNamKom\">Намирници</label>\r\n                </div>\r\n                <div class=\"checkbox\">\r\n                    <label><input type=\"checkbox\" value=\"\" id=\"kopceGotKom\">Готова Храна</label>\r\n                </div>\r\n                <h6 id=\"warning12\" style=\"display:none;\">Немате донирано ништо!</h6>\r\n                <div id=\"listaNamKom\">\r\n                    <ul>\r\n                        <li>\r\n                            <table id=\"tableNamKom\">\r\n                                <tr>\r\n                                    <td class=\"input input--hoshi\">\r\n                                        <input class=\"input__field input__field--hoshi\" type=\"text\" id=\"input-22\"/>\r\n                                        <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\"\r\n                                               for=\"input-22\">\r\n                                            <span class=\"input__label-content input__label-content--hoshi\">Храна :</span>\r\n                                        </label>\r\n                                    </td>\r\n                                    <td class=\"input input--hoshi kolicina\">\r\n                                        <input class=\"input__field input__field--hoshi\" type=\"number\" id=\"input-33\"/>\r\n                                        <label class=\"input__label input__label--hoshi input__label--hoshi-color-1 kolicina\"\r\n                                               for=\"input-33\">\r\n                                            <span class=\"input__label-content input__label-content--hoshi\">Количина :</span>\r\n                                        </label>\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                        </li>\r\n                    </ul>\r\n                    <button id=\"addNamirKom\">Додади намирници</button>\r\n                </div>\r\n                <div id=\"listaGotKom\">\r\n                    <ul>\r\n                        <li>\r\n                            <table id=\"tableGotKom\">\r\n                                <tr>\r\n                                    <td class=\"input input--hoshi\">\r\n                                        <input class=\"input__field input__field--hoshi\" type=\"text\" id=\"input-44\"/>\r\n                                        <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\"\r\n                                               for=\"input-44\">\r\n                                            <span class=\"input__label-content input__label-content--hoshi\">Храна :</span>\r\n                                        </label>\r\n                                    </td>\r\n                                    <td class=\"input input--hoshi kolicina\">\r\n                                        <input class=\"input__field input__field--hoshi\" type=\"number\" id=\"input-55\"/>\r\n                                        <label class=\"input__label input__label--hoshi input__label--hoshi-color-1 kolicina\"\r\n                                               for=\"input-55\">\r\n                                            <span class=\"input__label-content input__label-content--hoshi\">Количина :</span>\r\n                                        </label>\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                        </li>\r\n                    </ul>\r\n                    <button id=\"addHranaKom\">Додади храна</button>\r\n                </div>\r\n                <br>\r\n                <button type=\"submit\" class=\"btn btn-default\" id=\"kopceForma2\">Submit</button>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n";
},"useData":true});
templates['calendarTemp'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "               <tr>\r\n";
  stack1 = ((helper = (helper = helpers.row || (depth0 != null ? depth0.row : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"row","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},options) : helper));
  if (!helpers.row) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "               </tr>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                   <td class=\"calendar-cell data-cell\">\r\n                       "
    + container.escapeExpression(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"date","hash":{},"data":data}) : helper)))
    + "\r\n                   </td>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<link rel=\"stylesheet\" href=\"./styles/calendar.css\"/>\r\n\r\n<div class=\"container\">\r\n    <div id=\"title\" class=\"row\">\r\n        <!--<i class=\"glyphicon glyphicon-triangle-left\"></i>-->\r\n        <label id=\"month\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.currentMonth : depth0)) != null ? stack1.name : stack1), depth0))
    + "</label>\r\n        <!--<i class=\"glyphicon glyphicon-triangle-right\"></i>-->\r\n    </div>\r\n    <div class=\"row row-calendar\">\r\n        <ul class=\"list-group col-md-2\">\r\n            <li class=\"list-group-item\">First item</li>\r\n            <li class=\"list-group-item\">Second item</li>\r\n            <li class=\"list-group-item\">Third item</li>\r\n        </ul>\r\n        <table class=\"col-md-10\">\r\n            <thead>\r\n            <tr>\r\n                <th class=\"calendar-cell\">Пон</th>\r\n                <th class=\"calendar-cell\">Вто</th>\r\n                <th class=\"calendar-cell\">Сре</th>\r\n                <th class=\"calendar-cell\">Чет</th>\r\n                <th class=\"calendar-cell\">Пет</th>\r\n                <th class=\"calendar-cell\">Саб</th>\r\n                <th class=\"calendar-cell\">Нед</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n";
  stack1 = ((helper = (helper = helpers.rows || (depth0 != null ? depth0.rows : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"rows","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},options) : helper));
  if (!helpers.rows) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n";
},"useData":true});
templates['contactTemp'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "\r\n<h1>Ova mi e contact</h1>\r\n";
},"useData":true});
templates['cookTemp'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"container\">\r\n    <ul class=\"nav nav-pills\">\r\n        <li class=\"active\"><a data-toggle=\"pill\" href=\"#home\">Готвач</a></li>\r\n    </ul>\r\n\r\n\r\n    <div class=\"tab-content\">\r\n        <div id=\"home\" class=\"tab-pane fade in active\">\r\n            <form class=\"forma\">\r\n                <span class=\"input input--hoshi\">\r\n					<input class=\"input__field input__field--hoshi\" type=\"text\" id=\"input-1\"/>\r\n					<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"input-1\">\r\n						<span class=\"input__label-content input__label-content--hoshi\">Име</span>\r\n					</label>\r\n				</span><br>\r\n                <span class=\"input input--hoshi\">\r\n					<input class=\"input__field input__field--hoshi\" type=\"text\" id=\"input-2\"/>\r\n					<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"input-2\">\r\n						<span class=\"input__label-content input__label-content--hoshi\">Презиме</span>\r\n					</label>\r\n				</span><br>\r\n                <span class=\"input input--hoshi\">\r\n					<input class=\"input__field input__field--hoshi\" type=\"number\" id=\"input-3\"/>\r\n					<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"input-3\">\r\n						<span class=\"input__label-content input__label-content--hoshi\">Телефонски Број</span>\r\n					</label>\r\n				</span><br>\r\n                <span class=\"input input--hoshi\">\r\n					<input class=\"input__field input__field--hoshi\" type=\"email\" id=\"input-4\"/>\r\n					<label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"input-4\">\r\n						<span class=\"input__label-content input__label-content--hoshi\">Е-Маил</span>\r\n					</label>\r\n				</span>\r\n                <br>\r\n                <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseExample\"\r\n                        aria-expanded=\"false\" aria-controls=\"collapseExample\">\r\n                    Одбери датум\r\n                </button>\r\n                <div class=\"collapse\" id=\"collapseExample\">\r\n                    <div class=\"well well-sm \">\r\n                        <div class=\"list-group\">\r\n                            <a href=\"#\" class=\"list-group-item\">First item</a>\r\n                            <a href=\"#\" class=\"list-group-item\">Second item</a>\r\n                            <a href=\"#\" class=\"list-group-item\">Third item</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <br>\r\n                <br>\r\n                <button type=\"submit\" class=\"btn btn-default\" id=\"kopceForma\">Submit</button>\r\n            </form>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                <h4 class=\"modal-title\">Modal Header</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <h5>Немате внесено :</h5><br>\r\n                <ul id=\"listModal\">\r\n\r\n                </ul>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<script src=\"../scripts/cookScript.js\"></script>\r\n";
},"useData":true});
templates['galleryTemp'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <figure>\r\n            <img src=\""
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "\" data-toggle=\"modal\" data-target=\"#"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\r\n            <figcaption>"
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "</figcaption>\r\n        </figure>\r\n        <!-- Modal -->\r\n        <div class=\"modal fade\" id=\""
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" role=\"dialog\">\r\n            <div class=\"modal-dialog\">\r\n\r\n                <!-- Modal content-->\r\n                <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                        <h4 class=\"modal-title\">"
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "</h4>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                        <img src=\""
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "\" style=\"max-width: 100%;max-height: 100%;\">\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<link rel=\"stylesheet\" href=\"./styles/gallery.css\"/>\r\n\r\n<div class=\"rows\">\r\n    <h1 style=\"opacity: 0.5;\">#ретвитниГалерија</h1>\r\n</div>\r\n\r\n<div id=\"columns\">\r\n\r\n";
  stack1 = ((helper = (helper = helpers.images || (depth0 != null ? depth0.images : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"images","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},options) : helper));
  if (!helpers.images) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n\r\n\r\n</div>\r\n</div>";
},"useData":true});
templates['homeTemp'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\r\n<div class=\"row\">\r\n<img src=\"img/background1.png\" class=\"main-img\">\r\n    <div class=\"buttons-group container\">\r\n      <div class=\"btn-postion row\">\r\n        <a href=\""
    + alias4(((helper = (helper = helpers.donateLink || (depth0 != null ? depth0.donateLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"donateLink","hash":{},"data":data}) : helper)))
    + "\" class=\"btn btns-style doniraj-btn\">\r\n            <i class=\"glyphicon glyphicon-heart\"></i>\r\n            ДОНИРАЈ\r\n        </a>\r\n      </div>\r\n      <div>\r\n          <a href=\""
    + alias4(((helper = (helper = helpers.cookLink || (depth0 != null ? depth0.cookLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cookLink","hash":{},"data":data}) : helper)))
    + "\" class=\"row btn btns-style zgotvi-btn\">\r\n              <i class=\"glyphicon glyphicon-cutlery\"></i>\r\n              ЗГОТВИ\r\n         </a>\r\n      </div>\r\n    </div>\r\n</div>\r\n<div class=\"row row-position\" style=\"text-align: center;\">\r\n    <h3 class=\"steps-title-style\">\r\n         Како функционираме?\r\n    </h3>\r\n</div>\r\n<div class=\"row imgs-pos\">\r\n        <div class=\"col-md-2\">\r\n            <img src=\"img/steps/1.png\" class=\"img-steps-style\" >\r\n            <p class=\"step-txt\">Пријави се</p>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n            <img src=\"img/steps/2.png\" class=\"img-steps-style\" >\r\n            <p class=\"step-txt\">Подготви ги намирниците</p>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n            <img src=\"img/steps/3.png\" class=\"img-steps-style\" >\r\n            <p class=\"step-txt\">Донирај</p>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n            <img src=\"img/steps/4.png\" class=\"img-steps-style\" >\r\n            <p class=\"step-txt\">Зготви</p>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n            <img src=\"img/steps/5.png\" class=\"img-steps-style\" >\r\n            <p class=\"step-txt\">Сподели оброк</p>\r\n        </div>\r\n</div>";
},"useData":true});
})();