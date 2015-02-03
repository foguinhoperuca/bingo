define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["app/templates/about.tpl"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<ul class=\"nav nav-tabs\" role=\"tablist\">\r\n  <li class=\"active\"><a href=\"#bingo\" role=\"tab\" data-toggle=\"tab\"><span class=\"glyphicon glyphicon-usd\"></span></a></li>\r\n  <li><a href=\"#backup\" role=\"tab\" data-toggle=\"tab\"><span class=\"glyphicon glyphicon-floppy-disk\"></span></a></li>\r\n  <li><a href=\"#settings\" role=\"tab\" data-toggle=\"tab\"><span class=\"glyphicon glyphicon-wrench\"></span></a></li>\r\n</ul>\r\n\r\n<div class=\"tab-content\">\r\n  <div class=\"tab-pane active\" id=\"expense\">\r\n  <div class=\"tab-pane\" id=\"bingo\">\r\n	<h2>Bingo</h2>\r\n	<a href=\"#bingos\" class=\"btn btn-primary btn-lg btn-block\"><span class=\"glyphicon glyphicon-time\"></span> List Bingo</a>\r\n	<a href=\"#bingo/new\" class=\"btn btn-success btn-lg btn-block\"><span class=\"glyphicon glyphicon-time\"></span> New Bingo</a>\r\n	<a href=\"#bingo/play\" class=\"btn btn-warning btn-lg btn-block\"><span class=\"glyphicon glyphicon-time\"></span> Play</a>\r\n  </div>\r\n  <div class=\"tab-pane\" id=\"backup\">\r\n	<h2>Backup</h2>\r\n	<a href=\"#backup\" class=\"btn btn-primary btn-lg btn-block\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Take Control of Your Data</a>\r\n  </div>\r\n  <div class=\"tab-pane\" id=\"settings\">\r\n	<h2>Settings</h2>\r\n	<a href=\"#settings\" class=\"btn btn-primary btn-lg btn-block\"><span class=\"glyphicon glyphicon-wrench\"></span> Setup your app</a>\r\n  </div>\r\n</div>\r\n";
  });

this["JST"]["app/templates/backup.tpl"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<ul class=\"nav nav-tabs\" role=\"tablist\">\r\n  <li class=\"active\"><a href=\"#status\" role=\"tab\" data-toggle=\"tab\"><span class=\"glyphicon glyphicon-stats\"></span></a></li>\r\n  <li><a href=\"#cloud\" role=\"tab\" data-toggle=\"tab\"><span class=\"glyphicon glyphicon-cloud\"></span></a></li>\r\n  <li><a href=\"#disk\" role=\"tab\" data-toggle=\"tab\"><span class=\"glyphicon glyphicon-floppy-disk\"></span></a></li>\r\n  <li><a href=\"#login\" role=\"tab\" data-toggle=\"tab\"><span class=\"glyphicon glyphicon-user\"></span></a></li>\r\n</ul>\r\n<div class=\"tab-content\">\r\n    <div id=\"status\" class=\"tab-pane active\">\r\n        <h1>Status</h1>\r\n        <table class=\"table table-striped table-bordered table-hover\">\r\n            <tr>\r\n                <th>Entity</th>\r\n                <th><i class=\"glyphicon glyphicon-cloud-upload\"></i></th>\r\n                <th><i class=\"glyphicon glyphicon-cloud-download\"></i></th>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"glyphicon glyphicon-usd\"></span></td>\r\n                <td id=\"tdExpenseUpload\"><span class=\"glyphicon glyphicon-minus\"</span></td>\r\n                <td id=\"tdExpenseDownload\"><span class=\"glyphicon glyphicon-minus\"</span></td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"glyphicon glyphicon-cutlery\"></span></td>\r\n                <td id=\"tdFoodUpload\"><span class=\"glyphicon glyphicon-minus\"</span></td>\r\n                <td id=\"tdFoodDownload\"><span class=\"glyphicon glyphicon-minus\"</span></td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"glyphicon glyphicon-shopping-cart\"></span></td>\r\n                <td id=\"tdGroceryUpload\"><span class=\"glyphicon glyphicon-minus\"</span></td>\r\n                <td id=\"tdGroceryDownload\"><span class=\"glyphicon glyphicon-minus\"</span></td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"glyphicon glyphicon-flag\"></span></td>\r\n                <td id=\"tdGymUpload\"><span class=\"glyphicon glyphicon-minus\"</span></td>\r\n                <td id=\"tdGymDownload\"><span class=\"glyphicon glyphicon-minus\"</span></td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"glyphicon glyphicon-road\"></span></td>\r\n                <td id=\"tdMotorcycleUpload\"><span class=\"glyphicon glyphicon-minus\"</span></td>\r\n                <td id=\"tdMotorcycleDownload\"><span class=\"glyphicon glyphicon-minus\"</span></td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"glyphicon glyphicon-time\"></span></td>\r\n                <td id=\"tdTimesheetUpload\"><span class=\"glyphicon glyphicon-minus\"</span></td>\r\n                <td id=\"tdTimesheetDownload\"><span class=\"glyphicon glyphicon-minus\"</span></td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"glyphicon glyphicon-wrench\"></span></td>\r\n                <td id=\"tdSettingsUpload\"><span class=\"glyphicon glyphicon-minus\"</span></td>\r\n                <td id=\"tdSettingsDownload\"><span class=\"glyphicon glyphicon-minus\"</span></td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"glyphicon glyphicon-euro\"></span></td>\r\n                <td id=\"tdOwnerUpload\"><span class=\"glyphicon glyphicon-minus\"</span></td>\r\n                <td id=\"tdOwnerDownload\"><span class=\"glyphicon glyphicon-minus\"</span></td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"glyphicon glyphicon-user\"></span></td>\r\n                <td id=\"tdCreditUpload\"><span class=\"glyphicon glyphicon-minus\"</span></td>\r\n                <td id=\"tdCreditDownload\"><span class=\"glyphicon glyphicon-minus\"</span></td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n    <div id=\"cloud\" class=\"tab-pane\">\r\n        <h2>Cloud</h2>\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <a id=\"btnSaveOnCloud\" href=\"#\" class=\"btn btn-primary col-xs-12 disabled\"><i class=\"glyphicon glyphicon-cloud-upload\"></i> Save on Cloud!</a>\r\n                <br />\r\n                <br />\r\n                <a id=\"btnSyncWithCloud\" href=\"#\" class=\"btn btn-primary col-xs-12 disabled\"><i class=\"glyphicon glyphicon-cloud-download\"></i> Sync with Cloud!</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div id=\"disk\" class=\"tab-pane\">\r\n        <h2>Disk</h2>\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <a id=\"btnSaveOnDisk\" href=\"#\" class=\"btn btn-info col-xs-12\"><i class=\"glyphicon glyphicon-save\"></i> Save on Disk!</a>\r\n                <br />\r\n                <br />\r\n                <a id=\"btnSyncWithDisk\" href=\"#\" class=\"btn btn-info col-xs-12\"><i class=\"glyphicon glyphicon-open\"></i> Sync with Disk!</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div id=\"login\" class=\"tab-pane\">\r\n        <h2>Login</h2>\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <label for=\"inputEmail\">E-mail</label><br />\r\n                <input type=\"text\" id=\"inputEmail\" class=\"col-xs-12\" placeholder=\"your_email@jeffersoncampos.eti.br\" />\r\n            </div>\r\n            <div class=\"row\">\r\n                <label for=\"inputPassword\">Password</label><br />\r\n                <input type=\"password\" id=\"inputPassword\" class=\"col-xs-12\" placeholder=\"your_secret\" />\r\n            </div>\r\n            <br />\r\n            <div class=\"row\">\r\n                <a id=\"btnLogin\" href=\"#\" class=\"btn btn-warning col-xs-12\"><i class=\"glyphicon glyphicon-user\"></i> Login</a>\r\n                <br />\r\n                <br />\r\n                <a href=\"#\" id=\"btnHideShowPassword\" class=\"btn btn-warning col-xs-12\"><i class=\"glyphicon glyphicon-eye-close\"></i> Password</a>\r\n                <br />\r\n                <br />\r\n                <a href=\"#\" id=\"btnEnable\" class=\"btn btn-danger col-xs-12\"><i class=\"glyphicon glyphicon-exclamation-sign\"></i> Force Enable</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<br />\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <span id=\"spanMessage\" class=\"col-xs-12 text-center\"></span> \r\n    </div>\r\n</div>\r\n";
  });

this["JST"]["app/templates/bingo/list-item.tpl"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<td id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"edit-td\">\r\n  <div class=\"container-fluid\">\r\n	<div class=\"col-xs-11\">\r\n	  ";
  if (helper = helpers.date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n	</div>\r\n	<div class=\"col-xs-1 text-right\">\r\n	  <span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n	</div>\r\n  </div>\r\n</td>\r\n<td><a id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#\" class=\"btn btn&#45;danger col-xs-12\" data&#45;entity=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><span class=\"glyphicon glyphicon&#45;trash\"></a></td>\r\n";
  return buffer;
  });

this["JST"]["app/templates/bingo/list.tpl"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n	  <option value=\"";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\r\n	  ";
  return buffer;
  }

  buffer += "<div class=\"row\">\r\n  <div class=\"col-xs-6\">\r\n	<a href=\"#timesheet/new\" class=\"btn btn-success\"><i class=\"icon-plus icon-white\"></i> New</a>\r\n	<a id=\"btnSync\" href=\"#\" class=\"btn btn-warning\"><i class=\"icon-refresh icon-white\"></i> Sync</a>\r\n	<a id=\"btnDeleteAll\" href=\"#\" class=\"btn btn-danger\"><i class=\"icon-refresh icon-white\"></i> Del All</a>\r\n  </div>\r\n  <div class=\"col-xs-6\">\r\n	<select id=\"selectMonth\" data-bind=\"value:category,events:['change']\">\r\n	  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.selectMonth), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	</select>\r\n  </div>\r\n</div>\r\n<br />\r\n<ul class=\"nav nav-tabs\" role=\"tablist\">\r\n  <li class=\"active\"><a href=\"#painel\" role=\"tab\" data-toggle=\"tab\"><span class=\"glyphicon glyphicon-stats\"></span></a></li>\r\n  <li><a href=\"#timesheets\" role=\"tab\" data-toggle=\"tab\"><span class=\"glyphicon glyphicon-time\"></span></a></li>\r\n</ul>\r\n<div class=\"tab-content\">\r\n  <div id=\"painel\" class=\"tab-pane active\">\r\n	<h1>Timesheets</h1>\r\n	<div id=\"divPainel01\" class=\"row\">\r\n	  <div class=\"col-xs-6\">\r\n		Days Late to Work <br />\r\n		<span class=\"label label-";
  if (helper = helpers.status) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.status); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.totalDaysLateToWork) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.totalDaysLateToWork); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n	  </div>\r\n	  <div class=\"col-xs-6\">\r\n		Time After Start <br />\r\n		<span class=\"label label-";
  if (helper = helpers.status) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.status); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.totalMinutesLaterAfterStart) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.totalMinutesLaterAfterStart); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n	  </div>\r\n	</div> \r\n	<div id=\"divPainel02\" class=\"row\">\r\n	  <div class=\"col-xs-6\">\r\n		Total Extra Time / Rule 30<br />\r\n		<span class=\"label label-info\">";
  if (helper = helpers.totalExtraTime) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.totalExtraTime); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span> / <span class=\"label label-info\">";
  if (helper = helpers.totalExtraTimeRule30) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.totalExtraTimeRule30); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n	  </div>\r\n	  <div class=\"col-xs-6\">\r\n		Leaving Early <br />\r\n		<span class=\"label label-default\">";
  if (helper = helpers.totalLeavingEarly) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.totalLeavingEarly); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n	  </div>\r\n	</div> \r\n	<div id=\"divPainel03\" class=\"row\">\r\n	  <div class=\"col-xs-6\">\r\n		Balance <br />\r\n		<span class=\"label label-primary\">";
  if (helper = helpers.balance) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.balance); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n	  </div>\r\n	  <div class=\"col-xs-6\">\r\n		Status <br />\r\n		<span class=\"label label-";
  if (helper = helpers.status) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.status); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.status) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.status); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n	  </div>\r\n	</div>\r\n  </div>\r\n\r\n  <div id=\"messages\">\r\n	<span id=\"spanMessages\">\r\n	</span>\r\n  </div>\r\n\r\n  <div id=\"timesheets\" class=\"tab-pane\">\r\n	<table class=\"table table-striped table-bordered table-hover\">\r\n      <caption>\r\n		<strong><em>Timesheets</em></strong>\r\n	  </caption>\r\n	  <thead>\r\n		<tr>\r\n		  <th>Date</th>\r\n		  <!-- <th>Edit</th> -->\r\n		  <th>Delete</th>\r\n		  <!-- <th>Time Start</th> -->\r\n          <!-- <th>Time End</th> -->\r\n		</tr>\r\n	  </thead>\r\n	  <tbody id=\"tbodyItem\"></tbody>\r\n	</table>\r\n  </div>\r\n</div>\r\n";
  return buffer;
  });

this["JST"]["app/templates/bingo/play-item.tpl"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<td class=\"tdSpeech\">\r\n    "
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n</td>\r\n";
  return buffer;
  });

this["JST"]["app/templates/bingo/play.tpl"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<div id=\"divRegister\" class=\"container\">\r\n    <h1>Prenda: <strong><em>";
  if (helper = helpers.gift) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.gift); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " </em></strong><small>";
  if (helper = helpers.secondGift) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.secondGift); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</small></h1>\r\n  <table class=\"table table-striped table-bordered table-hover\">\r\n    <caption>\r\n	  <strong><em>Aten&ccedil;&atilde;o! N&atilde;o coma broa...</em></strong>\r\n	</caption>\r\n	<thead>\r\n        <tr>\r\n            <th>Bingo</th>\r\n            <th>do</th>\r\n            <th>Klarosk</th>\r\n	    </tr>\r\n	</thead>\r\n    <tbody id=\"tbodyItem\">\r\n        "
    + escapeExpression((helper = helpers.printBingoCard || (depth0 && depth0.printBingoCard),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.row), options) : helperMissing.call(depth0, "printBingoCard", (depth0 && depth0.row), options)))
    + "\r\n    </tbody>\r\n  </table>\r\n</div>\r\n<br />\r\n<span id=\"spanMessage\"></span>\r\n<!-- <br /> -->\r\n<!-- <br /> -->\r\n<!-- <a href=\"#timesheets\" class=\"btn btn-default\"><i class=\"icon-home icon-white\"></i> Go Back!</a> -->\r\n<!-- <a href=\"#\" id=\"btnPersist\" type=\"submit\" class=\"btn btn-primary\"><i class=\"icon-ok icon-white\"></i> Send</a> -->\r\n";
  return buffer;
  });

this["JST"]["app/templates/bingo/register.tpl"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n          <option value=\"";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\r\n          ";
  return buffer;
  }

  buffer += "<div id=\"divRegister\" class=\"container\">\r\n  <h1>Timesheet</h1>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-6\">\r\n      <label for=\"inputDate\">Date</label><br />\r\n      <input type=\"text\" id=\"inputDate\" class=\"col-xs-12 dateMask\" value=\"";
  if (helper = helpers.date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" placeholder=\"dd/mm/yyyy\" data-bind=\"value:date,events:['keyup']\" />\r\n    </div>\r\n    <div class=\"col-xs-6\">\r\n      <label for=\"inputLeavingEarly\">Leaving Early</label><br />\r\n      <input type=\"text\" id=\"inputLeavingEarly\" class=\"col-xs-12\" value=\"";
  if (helper = helpers.leavingEarly) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.leavingEarly); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" placeholder=\"00:00\" data-bind=\"value:leavingEarly,events:['keyup']\" disabled />\r\n    </div>\r\n  </div>\r\n  <div id=\"row\">\r\n    <div class=\"col-xs-6\">\r\n      <div class=\"checkbox\">\r\n        <label>\r\n          <input id=\"inputDiscountAllDay\" type=\"checkbox\" value=\"\"> Discount all day!\r\n        </label>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xs-6\">\r\n      <div class=\"checkbox\">\r\n        <label>\r\n          <input id=\"inputOfficialShift\" type=\"checkbox\" data-bind=\"checked:officialShift\" />Official Shift? \r\n        </label>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div id=\"divStartEndDay\" class=\"tab-content\">\r\n    <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n      <li class=\"active\"><a href=\"#checkin\" role=\"tab\" data-toggle=\"tab\"><span class=\"glyphicon glyphicon-play\"> Chekin</span></a></li>\r\n      <li><a href=\"#checkout\" role=\"tab\" data-toggle=\"tab\"><span class=\"glyphicon glyphicon-stop\"> Checkout</span></a></li>\r\n    </ul>\r\n    <div id=\"checkin\" class=\"tab-pane active\">\r\n      <div class=\"form-group\">\r\n        <label>Checkin Time</label><br />\r\n        <input type=\"text\" id=\"inputStartTime\" class=\"col-xs-4 timeMask\" value=\"";
  if (helper = helpers.startTime) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.startTime); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" placeholder=\"hh:mm\" data-bind=\"value:startTime,events:['keyup']\"/><br />\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"selectStartTimeMachine\">Checkin Machine</label><br />\r\n        <select id=\"selectStartTimeMachine\" data-bind=\"value:startTimeMachine,events:['change']\">\r\n          ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.selectStartTimeMachine), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </select>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"txtStartTimeMotive\">Chekin Motive</label><br />\r\n        <textarea type=\"text\" id=\"txtStartTimeMotive\" rows=\"5\" class=\"col-xs-12\" placeholder=\"Motive to start early...\" data-bind=\"value:startTimeMotive,events:['keyup']\">";
  if (helper = helpers.startTimeMotive) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.startTimeMotive); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</textarea>\r\n      </div>\r\n    </div>\r\n    <div id=\"checkout\" class=\"tab-pane\">\r\n      <div class=\"form-group\">\r\n        <label for=\"inputEndTime\">Chekout Time</label><br />\r\n        <input type=\"text\" id=\"inputEndTime\" class=\"col-xs-4 timeMask\" value=\"";
  if (helper = helpers.endTime) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.endTime); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" placeholder=\"hh:mm\" data-bind=\"value:endTime,events:['keyup']\" /><br />\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"selectEndTimeMachine\">Chekout Machine</label><br />\r\n        <select id=\"selectEndTimeMachine\" data-bind=\"value:endTimeMachine,events:['change']\">\r\n	      ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.selectEndTimeMachine), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </select>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"txtEndTimeMotive\">Chekout Motive</label><br />\r\n        <textarea type=\"text\" id=\"txtEndTimeMotive\" rows=\"5\" class=\"col-xs-12\" placeholder=\"Motive to stay latter...\" data-bind=\"value:endTimeMotive,events:['keyup']\">";
  if (helper = helpers.endTimeMotive) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.endTimeMotive); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</textarea>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<br />\r\n<span id=\"spanMessage\"></span>\r\n<br />\r\n<br />\r\n<a href=\"#timesheets\" class=\"btn btn-default\"><i class=\"icon-home icon-white\"></i> Go Back!</a>\r\n<a href=\"#\" id=\"btnPersist\" type=\"submit\" class=\"btn btn-primary\"><i class=\"icon-ok icon-white\"></i> Send</a>\r\n";
  return buffer;
  });

this["JST"]["app/templates/menu.tpl"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<!-- <nav class=\"navbar navbar&#45;static&#45;top\" role=\"navigation\"> -->\r\n<nav class=\"navbar navbar-default\" role=\"navigation\">\r\n  <div class=\"container-fluid\">\r\n    <!-- Brand and toggle get grouped for better mobile display -->\r\n    <div class=\"navbar-header\">\r\n      <!-- <button type=\"button\" class=\"navbar&#45;toggle\" data&#45;toggle=\"collapse\" data&#45;target=\"#bs&#45;example&#45;navbar&#45;collapse&#45;1\"> -->\r\n      <!--   <span class=\"sr&#45;only\">Toggle navigation</span> -->\r\n      <!--   <span class=\"icon&#45;bar\"></span> -->\r\n      <!--   <span class=\"icon&#45;bar\"></span> -->\r\n      <!--   <span class=\"icon&#45;bar\"></span> -->\r\n      <!-- </button> -->\r\n      <a class=\"navbar-brand\" href=\"#\"><img src=\"app/img/logo.png\" id=\"logo\" width=\"35px\"></img></a>\r\n      <!-- <a class=\"navbar&#45;brand\" href=\"#\"><span class=\"glyphicon glyphicon&#45;info&#45;sign\"></span></a> -->\r\n      <ul class=\"navbar-nav list-inline\">\r\n		<li><a href=\"#bingos\"><span class=\"glyphicon glyphicon-time\"></span></a></li>\r\n		<li><a href=\"#backup\"><span class=\"glyphicon glyphicon-floppy-disk\"></span></a></li>\r\n		<li><a href=\"#settings\"><span class=\"glyphicon glyphicon-wrench\"></span></a></li>\r\n      </ul>\r\n    </div>\r\n    <!-- Collect the nav links, forms, and other content for toggling -->\r\n    <!-- <div class=\"collapse navbar&#45;collapse\" id=\"bs&#45;example&#45;navbar&#45;collapse&#45;1\"> -->\r\n    <!-- </div> -->\r\n  </div>\r\n</nav>\r\n";
  });

this["JST"]["app/templates/settings.tpl"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<ul class=\"nav nav-tabs\" role=\"tablist\">\r\n  <li class=\"active\"><a href=\"#basic\" role=\"tab\" data-toggle=\"tab\"><span class=\"glyphicon glyphicon-wrench\"></span></a></li>\r\n  <li><a href=\"#dateTimePicker\" role=\"tab\" data-toggle=\"tab\"><span class=\"glyphicon glyphicon-calendar\"></span></a></li>\r\n  <li><a href=\"#bingo\" role=\"tab\" data-toggle=\"tab\"><span class=\"glyphicon glyphicon-time\"></span></a></li>\r\n  <li><a href=\"#cloudAuth\" role=\"tab\" data-toggle=\"tab\"><span class=\"glyphicon glyphicon-cloud\"></span></a></li>\r\n  <li><a href=\"#motorcycle\" role=\"tab\" data-toggle=\"tab\"><span class=\"glyphicon glyphicon-road\"></span></a></li>\r\n</ul>\r\n<div id=\"divRegister\">\r\n  <div class=\"tab-content\">\r\n	<div id=\"basic\" class=\"tab-pane active\">\r\n      <h1>Settings</h1>\r\n      <div class=\"form-group\">\r\n        <label for=\"inputEnvironment\">Environment</label>\r\n		<input type=\"text\" id=\"inputEnvironment\" class=\"col-xs-12\" value=\"";
  if (helper = helpers.env) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.env); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" placeholder=\"[local|test|homolog|prod]\" data-bind=\"value:env,events:['keyup']\"/>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"inputApp\">App</label>\r\n    	<input type=\"text\" id=\"inputApp\" class=\"col-xs-12\" value=\"";
  if (helper = helpers.app) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.app); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" placeholder=\"james\" data-bind=\"value:app,events:['keyup']\"/>\r\n      </div>\r\n      <div class=\"form-group\">\r\n		<label for=\"inputBackend\">Backend</label>\r\n		<input type=\"text\" id=\"inputBackend\" class=\"col-xs-12\" value=\"";
  if (helper = helpers.backend) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.backend); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" placeholder=\"your backend URL.\" data-bind=\"value:backend,events:['keyup']\"/>\r\n      </div>\r\n      <br />\r\n      <div id=\"form-group\">\r\n        <div class=\"checkbox\">\r\n          <label>\r\n            <input id=\"inputDiscountAllDay\" type=\"checkbox\" value=\"\" data-bind=\"checked:isProtected\" /> is protected?\r\n	      </label>\r\n        </div>\r\n      </div>\r\n	</div>\r\n\r\n	<div id=\"dateTimePicker\" class=\"tab-pane\">\r\n	  <h2>DateTimePicker Configuration</h2>\r\n	  <!-- <div class=\"form-group\"> -->\r\n	  TODO implement custom binding\r\n	  <!-- </div> -->\r\n	</div>\r\n\r\n	<div id=\"bingo\" class=\"tab-pane\">\r\n	  <h2>Bingo</h2>\r\n	  <div class=\"form-group\">\r\n	    <label for=\"inputId\">ID</label>\r\n	    <input type=\"text\" id=\"inputId\" class=\"col-xs-12\" placeholder=\"1\" data-bind=\"objectHandler:bingo,events:['keyup']\" data-property=\"id\" />\r\n	  </div>\r\n	  <div class=\"form-group\">\r\n	    <label for=\"inputStartTime\">Start Time</label>\r\n	    <input type=\"text\" id=\"inputStartTime\" class=\"col-xs-12\" placeholder=\"08:00\" data-bind=\"objectHandler:timesheet,events:['keyup']\" data-property=\"startTime\" />\r\n	  </div>\r\n	  <div class=\"form-group\">\r\n	    <label for=\"inputEndTime\">End Time</label>\r\n	    <input type=\"text\" id=\"inputEndTime\" class=\"col-xs-12\" placeholder=\"14:00\" data-bind=\"objectHandler:timesheet,events:['keyup']\" data-property=\"endTime\" />\r\n	  </div>\r\n	  <div class=\"form-group\">\r\n	    <label for=\"inputWorkload\">Workload</label>\r\n	    <input type=\"text\" id=\"inputWorkload\" class=\"col-xs-12\" placeholder=\"06:00\" data-bind=\"objectHandler:timesheet,events:['keyup']\" data-property=\"workload\" />\r\n	  </div>\r\n	  <div class=\"form-group\">\r\n	    <label for=\"inputTimesheetBackendURL\">Timesheet Backend URL</label>\r\n	    <input type=\"text\" id=\"inputTimesheetBackendURL\" class=\"col-xs-12\" placeholder=\"TIMESHEET BACKEND URL\" data-bind=\"objectHandler:timesheet,events:['keyup']\" data-property=\"timesheetBackendURL\" />\r\n	  </div>\r\n	</div>\r\n\r\n	<div id=\"cloudAuth\" class=\"tab-pane\">\r\n	  <h2>Cloud Auth</h2>\r\n	  <div class=\"form-group\">\r\n	    <label for=\"inputCloudAuthEmail\">E-mail</label>\r\n	    <input type=\"text\" id=\"inputCloudAuthEmail\" class=\"col-xs-12\" placeholder=\"<YOUR_EMAIL_HERE>@<SOME_DOMAIN>\" data-bind=\"objectHandler:cloudAuth,events:['keyup']\" data-property=\"email\" />\r\n	  </div>\r\n	  <div class=\"form-group\">\r\n	    <label for=\"inputCloudAuthPassword\">Password</label>\r\n	    <input type=\"password\" id=\"inputCloudAuthPassword\" class=\"col-xs-12\" placeholder=\"<YOUR_PASSWORD_HERE>\" data-bind=\"objectHandler:cloudAuth,events:['keyup']\" data-property=\"password\" />\r\n	  </div>\r\n	  <br />\r\n	  <div class=\"form-group\">\r\n		<a href=\"#\" id=\"btnHideShowPassword\" class=\"btn btn-warning\"><i class=\"glyphicon glyphicon-eye-close\"></i> Passwd</a>\r\n	  </div>\r\n	</div>\r\n  </div>\r\n</div>\r\n<br />\r\n<span id=\"spanMessage\"></span>\r\n<br />\r\n<br />\r\n<a href=\"#\" id=\"btnPersist\" type=\"submit\" class=\"btn btn-primary\"><i class=\"glyphicon glyphicon-ok\"></i> Send</a>\r\n<a href=\"#\" id=\"btnDeleteSettings\" class=\"btn btn-danger\"><i class=\"glyphicon glyphicon-trash\"></i> Delete</a>\r\n<a href=\"#\" id=\"btnCleanLocalStorage\" class=\"btn btn-danger\"><i class=\"glyphicon glyphicon-trash\"></i> Local</a>\r\n";
  return buffer;
  });

return this["JST"];

});