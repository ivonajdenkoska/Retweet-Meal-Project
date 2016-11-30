(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['aboutTemp'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <li>\r\n            <h3>Name: "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + " </h3>\r\n            <h2>Age: "
    + alias4(((helper = (helper = helpers.age || (depth0 != null ? depth0.age : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"age","hash":{},"data":data}) : helper)))
    + " </h2>\r\n            <h2>Email: "
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + " </h2>\r\n            <h2>Some change alright!</h2>\r\n            <h3 style=\"color:red\">Next change</h3>\r\n        </li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", buffer = 
  "<h1>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\r\n<ul>\r\n";
  stack1 = ((helper = (helper = helpers.people || (depth0 != null ? depth0.people : depth0)) != null ? helper : alias2),(options={"name":"people","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.people) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</ul>";
},"useData":true});
templates['calendarTemp'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});
templates['contactTemp'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "\r\n<h1>Ova mi e contact</h1>\r\n<button type=\"button\" class=\"btn btn-danger\">Action</button>\r\n";
},"useData":true});
templates['homeTemp'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"row\">\r\n<img src=\"img/background1.png\" class=\"main-img\">\r\n    <div class=\"buttons-group\">\r\n      <div class=\"btn-postion\">\r\n        <button class=\"btn btns-style doniraj-btn\">ДОНИРАЈ</button>\r\n      </div>\r\n      <div>\r\n         <button class=\"btn btns-style zgotvi-btn\">ЗГОТВИ</button>\r\n      </div>\r\n    </div>\r\n</div>\r\n<div class=\"row row-position\">\r\n    <div class=\"col-md-4 steps-title-style\">\r\n         Како функционираме?\r\n    </div>\r\n</div>\r\n<div class=\"row imgs-pos\">\r\n\r\n        <div class=\"col-md-2\">\r\n            <img src=\"img/steps/1.png\" class=\"img-steps-style\" >\r\n            <p class=\"step-txt\">Пријави се</p>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n            <img src=\"img/steps/2.png\" class=\"img-steps-style\" >\r\n            <p class=\"step-txt\">Подготви ги намирниците</p>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n            <img src=\"img/steps/3.png\" class=\"img-steps-style\" >\r\n            <p class=\"step-txt\">Донирај</p>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n            <img src=\"img/steps/4.png\" class=\"img-steps-style\" >\r\n            <p class=\"step-txt\">Зготви</p>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n            <img src=\"img/steps/5.png\" class=\"img-steps-style\" >\r\n            <p class=\"step-txt\">Сподели оброк</p>\r\n        </div>\r\n    </div>";
},"useData":true});
})();