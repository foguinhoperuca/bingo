define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["app/templates/about.tpl"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<ul class=\"nav nav-tabs\" role=\"tablist\">\n  <li class=\"active\"><a href=\"#bingo\" role=\"tab\" data-toggle=\"tab\"><span class=\"glyphicon glyphicon-usd\"></span></a></li>\n  <li><a href=\"#backup\" role=\"tab\" data-toggle=\"tab\"><span class=\"glyphicon glyphicon-floppy-disk\"></span></a></li>\n  <li><a href=\"#settings\" role=\"tab\" data-toggle=\"tab\"><span class=\"glyphicon glyphicon-wrench\"></span></a></li>\n</ul>\n\n<div class=\"tab-content\">\n  <div class=\"tab-pane active\" id=\"expense\">\n  <div class=\"tab-pane\" id=\"bingo\">\n	<h2>Bingo</h2>\n	<a href=\"#bingos\" class=\"btn btn-primary btn-lg btn-block\"><span class=\"glyphicon glyphicon-time\"></span> List Bingo</a>\n	<a href=\"#bingo/new\" class=\"btn btn-success btn-lg btn-block\"><span class=\"glyphicon glyphicon-time\"></span> New Bingo</a>\n	<a href=\"#bingo/play\" class=\"btn btn-warning btn-lg btn-block\"><span class=\"glyphicon glyphicon-time\"></span> Play</a>\n  </div>\n  <div class=\"tab-pane\" id=\"backup\">\n	<h2>Backup</h2>\n	<a href=\"#backup\" class=\"btn btn-primary btn-lg btn-block\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Take Control of Your Data</a>\n  </div>\n  <div class=\"tab-pane\" id=\"settings\">\n	<h2>Settings</h2>\n	<a href=\"#settings\" class=\"btn btn-primary btn-lg btn-block\"><span class=\"glyphicon glyphicon-wrench\"></span> Setup your app</a>\n  </div>\n</div>\n";
  });

this["JST"]["app/templates/backup.tpl"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<ul class=\"nav nav-tabs\" role=\"tablist\">\n  <li class=\"active\"><a href=\"#status\" role=\"tab\" data-toggle=\"tab\"><span class=\"glyphicon glyphicon-stats\"></span></a></li>\n  <li><a href=\"#cloud\" role=\"tab\" data-toggle=\"tab\"><span class=\"glyphicon glyphicon-cloud\"></span></a></li>\n  <li><a href=\"#disk\" role=\"tab\" data-toggle=\"tab\"><span class=\"glyphicon glyphicon-floppy-disk\"></span></a></li>\n  <li><a href=\"#login\" role=\"tab\" data-toggle=\"tab\"><span class=\"glyphicon glyphicon-user\"></span></a></li>\n</ul>\n<div class=\"tab-content\">\n    <div id=\"status\" class=\"tab-pane active\">\n        <h1>Status</h1>\n        <table class=\"table table-striped table-bordered table-hover\">\n            <tr>\n                <th>Entity</th>\n                <th><i class=\"glyphicon glyphicon-cloud-upload\"></i></th>\n                <th><i class=\"glyphicon glyphicon-cloud-download\"></i></th>\n            </tr>\n            <tr>\n                <td><span class=\"glyphicon glyphicon-usd\"></span></td>\n                <td id=\"tdExpenseUpload\"><span class=\"glyphicon glyphicon-minus\"</span></td>\n                <td id=\"tdExpenseDownload\"><span class=\"glyphicon glyphicon-minus\"</span></td>\n            </tr>\n            <tr>\n                <td><span class=\"glyphicon glyphicon-cutlery\"></span></td>\n                <td id=\"tdFoodUpload\"><span class=\"glyphicon glyphicon-minus\"</span></td>\n                <td id=\"tdFoodDownload\"><span class=\"glyphicon glyphicon-minus\"</span></td>\n            </tr>\n            <tr>\n                <td><span class=\"glyphicon glyphicon-shopping-cart\"></span></td>\n                <td id=\"tdGroceryUpload\"><span class=\"glyphicon glyphicon-minus\"</span></td>\n                <td id=\"tdGroceryDownload\"><span class=\"glyphicon glyphicon-minus\"</span></td>\n            </tr>\n            <tr>\n                <td><span class=\"glyphicon glyphicon-flag\"></span></td>\n                <td id=\"tdGymUpload\"><span class=\"glyphicon glyphicon-minus\"</span></td>\n                <td id=\"tdGymDownload\"><span class=\"glyphicon glyphicon-minus\"</span></td>\n            </tr>\n            <tr>\n                <td><span class=\"glyphicon glyphicon-road\"></span></td>\n                <td id=\"tdMotorcycleUpload\"><span class=\"glyphicon glyphicon-minus\"</span></td>\n                <td id=\"tdMotorcycleDownload\"><span class=\"glyphicon glyphicon-minus\"</span></td>\n            </tr>\n            <tr>\n                <td><span class=\"glyphicon glyphicon-time\"></span></td>\n                <td id=\"tdTimesheetUpload\"><span class=\"glyphicon glyphicon-minus\"</span></td>\n                <td id=\"tdTimesheetDownload\"><span class=\"glyphicon glyphicon-minus\"</span></td>\n            </tr>\n            <tr>\n                <td><span class=\"glyphicon glyphicon-wrench\"></span></td>\n                <td id=\"tdSettingsUpload\"><span class=\"glyphicon glyphicon-minus\"</span></td>\n                <td id=\"tdSettingsDownload\"><span class=\"glyphicon glyphicon-minus\"</span></td>\n            </tr>\n            <tr>\n                <td><span class=\"glyphicon glyphicon-euro\"></span></td>\n                <td id=\"tdOwnerUpload\"><span class=\"glyphicon glyphicon-minus\"</span></td>\n                <td id=\"tdOwnerDownload\"><span class=\"glyphicon glyphicon-minus\"</span></td>\n            </tr>\n            <tr>\n                <td><span class=\"glyphicon glyphicon-user\"></span></td>\n                <td id=\"tdCreditUpload\"><span class=\"glyphicon glyphicon-minus\"</span></td>\n                <td id=\"tdCreditDownload\"><span class=\"glyphicon glyphicon-minus\"</span></td>\n            </tr>\n        </table>\n    </div>\n    <div id=\"cloud\" class=\"tab-pane\">\n        <h2>Cloud</h2>\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <a id=\"btnSaveOnCloud\" href=\"#\" class=\"btn btn-primary col-xs-12 disabled\"><i class=\"glyphicon glyphicon-cloud-upload\"></i> Save on Cloud!</a>\n                <br />\n                <br />\n                <a id=\"btnSyncWithCloud\" href=\"#\" class=\"btn btn-primary col-xs-12 disabled\"><i class=\"glyphicon glyphicon-cloud-download\"></i> Sync with Cloud!</a>\n            </div>\n        </div>\n    </div>\n    <div id=\"disk\" class=\"tab-pane\">\n        <h2>Disk</h2>\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <a id=\"btnSaveOnDisk\" href=\"#\" class=\"btn btn-info col-xs-12\"><i class=\"glyphicon glyphicon-save\"></i> Save on Disk!</a>\n                <br />\n                <br />\n                <a id=\"btnSyncWithDisk\" href=\"#\" class=\"btn btn-info col-xs-12\"><i class=\"glyphicon glyphicon-open\"></i> Sync with Disk!</a>\n            </div>\n        </div>\n    </div>\n    <div id=\"login\" class=\"tab-pane\">\n        <h2>Login</h2>\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <label for=\"inputEmail\">E-mail</label><br />\n                <input type=\"text\" id=\"inputEmail\" class=\"col-xs-12\" placeholder=\"your_email@jeffersoncampos.eti.br\" />\n            </div>\n            <div class=\"row\">\n                <label for=\"inputPassword\">Password</label><br />\n                <input type=\"password\" id=\"inputPassword\" class=\"col-xs-12\" placeholder=\"your_secret\" />\n            </div>\n            <br />\n            <div class=\"row\">\n                <a id=\"btnLogin\" href=\"#\" class=\"btn btn-warning col-xs-12\"><i class=\"glyphicon glyphicon-user\"></i> Login</a>\n                <br />\n                <br />\n                <a href=\"#\" id=\"btnHideShowPassword\" class=\"btn btn-warning col-xs-12\"><i class=\"glyphicon glyphicon-eye-close\"></i> Password</a>\n                <br />\n                <br />\n                <a href=\"#\" id=\"btnEnable\" class=\"btn btn-danger col-xs-12\"><i class=\"glyphicon glyphicon-exclamation-sign\"></i> Force Enable</a>\n            </div>\n        </div>\n    </div>\n</div>\n<br />\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <span id=\"spanMessage\" class=\"col-xs-12 text-center\"></span> \n    </div>\n</div>\n";
  });

this["JST"]["app/templates/bingo/list-item.tpl"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<td id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"edit-td\">\n  <div class=\"container-fluid\">\n	<div class=\"col-xs-11\">\n	  ";
  if (helper = helpers.date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n	</div>\n	<div class=\"col-xs-1 text-right\">\n	  <span class=\"glyphicon glyphicon-chevron-right\"></span>\n	</div>\n  </div>\n</td>\n<td><a id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#\" class=\"btn btn&#45;danger col-xs-12\" data&#45;entity=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><span class=\"glyphicon glyphicon&#45;trash\"></a></td>\n";
  return buffer;
  });

this["JST"]["app/templates/bingo/list.tpl"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n	  <option value=\"";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\n	  ";
  return buffer;
  }

  buffer += "<div class=\"row\">\n  <div class=\"col-xs-6\">\n	<a href=\"#timesheet/new\" class=\"btn btn-success\"><i class=\"icon-plus icon-white\"></i> New</a>\n	<a id=\"btnSync\" href=\"#\" class=\"btn btn-warning\"><i class=\"icon-refresh icon-white\"></i> Sync</a>\n	<a id=\"btnDeleteAll\" href=\"#\" class=\"btn btn-danger\"><i class=\"icon-refresh icon-white\"></i> Del All</a>\n  </div>\n  <div class=\"col-xs-6\">\n	<select id=\"selectMonth\" data-bind=\"value:category,events:['change']\">\n	  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.selectMonth), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</select>\n  </div>\n</div>\n<br />\n<ul class=\"nav nav-tabs\" role=\"tablist\">\n  <li class=\"active\"><a href=\"#painel\" role=\"tab\" data-toggle=\"tab\"><span class=\"glyphicon glyphicon-stats\"></span></a></li>\n  <li><a href=\"#timesheets\" role=\"tab\" data-toggle=\"tab\"><span class=\"glyphicon glyphicon-time\"></span></a></li>\n</ul>\n<div class=\"tab-content\">\n  <div id=\"painel\" class=\"tab-pane active\">\n	<h1>Timesheets</h1>\n	<div id=\"divPainel01\" class=\"row\">\n	  <div class=\"col-xs-6\">\n		Days Late to Work <br />\n		<span class=\"label label-";
  if (helper = helpers.status) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.status); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.totalDaysLateToWork) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.totalDaysLateToWork); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n	  </div>\n	  <div class=\"col-xs-6\">\n		Time After Start <br />\n		<span class=\"label label-";
  if (helper = helpers.status) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.status); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.totalMinutesLaterAfterStart) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.totalMinutesLaterAfterStart); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n	  </div>\n	</div> \n	<div id=\"divPainel02\" class=\"row\">\n	  <div class=\"col-xs-6\">\n		Total Extra Time / Rule 30<br />\n		<span class=\"label label-info\">";
  if (helper = helpers.totalExtraTime) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.totalExtraTime); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span> / <span class=\"label label-info\">";
  if (helper = helpers.totalExtraTimeRule30) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.totalExtraTimeRule30); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n	  </div>\n	  <div class=\"col-xs-6\">\n		Leaving Early <br />\n		<span class=\"label label-default\">";
  if (helper = helpers.totalLeavingEarly) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.totalLeavingEarly); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n	  </div>\n	</div> \n	<div id=\"divPainel03\" class=\"row\">\n	  <div class=\"col-xs-6\">\n		Balance <br />\n		<span class=\"label label-primary\">";
  if (helper = helpers.balance) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.balance); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n	  </div>\n	  <div class=\"col-xs-6\">\n		Status <br />\n		<span class=\"label label-";
  if (helper = helpers.status) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.status); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.status) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.status); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n	  </div>\n	</div>\n  </div>\n\n  <div id=\"messages\">\n	<span id=\"spanMessages\">\n	</span>\n  </div>\n\n  <div id=\"timesheets\" class=\"tab-pane\">\n	<table class=\"table table-striped table-bordered table-hover\">\n      <caption>\n		<strong><em>Timesheets</em></strong>\n	  </caption>\n	  <thead>\n		<tr>\n		  <th>Date</th>\n		  <!-- <th>Edit</th> -->\n		  <th>Delete</th>\n		  <!-- <th>Time Start</th> -->\n          <!-- <th>Time End</th> -->\n		</tr>\n	  </thead>\n	  <tbody id=\"tbodyItem\"></tbody>\n	</table>\n  </div>\n</div>\n";
  return buffer;
  });

this["JST"]["app/templates/bingo/play-item.tpl"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<td class=\"tdSpeech\">\n    "
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n</td>\n";
  return buffer;
  });

this["JST"]["app/templates/bingo/play.tpl"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"divRegister\" class=\"container\">\n    <h1>Prenda: <strong><em>";
  if (helper = helpers.gift) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.gift); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " </em></strong><small>";
  if (helper = helpers.secondGift) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.secondGift); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</small></h1>\n  <table class=\"table table-striped table-bordered table-hover\">\n    <caption>\n	  <strong><em>Aten&ccedil;&atilde;o! N&atilde;o coma broa...</em></strong>\n	</caption>\n	<thead>\n	  <tr>\n		<th>B</th>\n		<th>I</th>\n		<th>N</th> \n		<th>G</th>\n		<th>O</th>\n        <!-- <th>Bingo</th> -->\n        <!-- <th>Divertido</th> -->\n        <!-- <th>do</th> -->\n        <!-- <th>Tio</th> -->\n        <!-- <th>Klarosk</th> -->\n	  </tr>\n	</thead>\n    <tbody id=\"tbodyItem\"></tbody>\n  </table>\n</div>\n<br />\n<span id=\"spanMessage\"></span>\n<!-- <br /> -->\n<!-- <br /> -->\n<!-- <a href=\"#timesheets\" class=\"btn btn-default\"><i class=\"icon-home icon-white\"></i> Go Back!</a> -->\n<!-- <a href=\"#\" id=\"btnPersist\" type=\"submit\" class=\"btn btn-primary\"><i class=\"icon-ok icon-white\"></i> Send</a> -->\n";
  return buffer;
  });

this["JST"]["app/templates/bingo/register.tpl"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n          <option value=\"";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\n          ";
  return buffer;
  }

  buffer += "<div id=\"divRegister\" class=\"container\">\n  <h1>Timesheet</h1>\n  <div class=\"row\">\n    <div class=\"col-xs-6\">\n      <label for=\"inputDate\">Date</label><br />\n      <input type=\"text\" id=\"inputDate\" class=\"col-xs-12 dateMask\" value=\"";
  if (helper = helpers.date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" placeholder=\"dd/mm/yyyy\" data-bind=\"value:date,events:['keyup']\" />\n    </div>\n    <div class=\"col-xs-6\">\n      <label for=\"inputLeavingEarly\">Leaving Early</label><br />\n      <input type=\"text\" id=\"inputLeavingEarly\" class=\"col-xs-12\" value=\"";
  if (helper = helpers.leavingEarly) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.leavingEarly); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" placeholder=\"00:00\" data-bind=\"value:leavingEarly,events:['keyup']\" disabled />\n    </div>\n  </div>\n  <div id=\"row\">\n    <div class=\"col-xs-6\">\n      <div class=\"checkbox\">\n        <label>\n          <input id=\"inputDiscountAllDay\" type=\"checkbox\" value=\"\"> Discount all day!\n        </label>\n      </div>\n    </div>\n    <div class=\"col-xs-6\">\n      <div class=\"checkbox\">\n        <label>\n          <input id=\"inputOfficialShift\" type=\"checkbox\" data-bind=\"checked:officialShift\" />Official Shift? \n        </label>\n      </div>\n    </div>\n  </div>\n  <div id=\"divStartEndDay\" class=\"tab-content\">\n    <ul class=\"nav nav-tabs\" role=\"tablist\">\n      <li class=\"active\"><a href=\"#checkin\" role=\"tab\" data-toggle=\"tab\"><span class=\"glyphicon glyphicon-play\"> Chekin</span></a></li>\n      <li><a href=\"#checkout\" role=\"tab\" data-toggle=\"tab\"><span class=\"glyphicon glyphicon-stop\"> Checkout</span></a></li>\n    </ul>\n    <div id=\"checkin\" class=\"tab-pane active\">\n      <div class=\"form-group\">\n        <label>Checkin Time</label><br />\n        <input type=\"text\" id=\"inputStartTime\" class=\"col-xs-4 timeMask\" value=\"";
  if (helper = helpers.startTime) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.startTime); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" placeholder=\"hh:mm\" data-bind=\"value:startTime,events:['keyup']\"/><br />\n      </div>\n      <div class=\"form-group\">\n        <label for=\"selectStartTimeMachine\">Checkin Machine</label><br />\n        <select id=\"selectStartTimeMachine\" data-bind=\"value:startTimeMachine,events:['change']\">\n          ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.selectStartTimeMachine), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"txtStartTimeMotive\">Chekin Motive</label><br />\n        <textarea type=\"text\" id=\"txtStartTimeMotive\" rows=\"5\" class=\"col-xs-12\" placeholder=\"Motive to start early...\" data-bind=\"value:startTimeMotive,events:['keyup']\">";
  if (helper = helpers.startTimeMotive) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.startTimeMotive); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</textarea>\n      </div>\n    </div>\n    <div id=\"checkout\" class=\"tab-pane\">\n      <div class=\"form-group\">\n        <label for=\"inputEndTime\">Chekout Time</label><br />\n        <input type=\"text\" id=\"inputEndTime\" class=\"col-xs-4 timeMask\" value=\"";
  if (helper = helpers.endTime) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.endTime); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" placeholder=\"hh:mm\" data-bind=\"value:endTime,events:['keyup']\" /><br />\n      </div>\n      <div class=\"form-group\">\n        <label for=\"selectEndTimeMachine\">Chekout Machine</label><br />\n        <select id=\"selectEndTimeMachine\" data-bind=\"value:endTimeMachine,events:['change']\">\n	      ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.selectEndTimeMachine), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"txtEndTimeMotive\">Chekout Motive</label><br />\n        <textarea type=\"text\" id=\"txtEndTimeMotive\" rows=\"5\" class=\"col-xs-12\" placeholder=\"Motive to stay latter...\" data-bind=\"value:endTimeMotive,events:['keyup']\">";
  if (helper = helpers.endTimeMotive) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.endTimeMotive); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</textarea>\n      </div>\n    </div>\n  </div>\n</div>\n<br />\n<span id=\"spanMessage\"></span>\n<br />\n<br />\n<a href=\"#timesheets\" class=\"btn btn-default\"><i class=\"icon-home icon-white\"></i> Go Back!</a>\n<a href=\"#\" id=\"btnPersist\" type=\"submit\" class=\"btn btn-primary\"><i class=\"icon-ok icon-white\"></i> Send</a>\n";
  return buffer;
  });

this["JST"]["app/templates/menu.tpl"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<!-- <nav class=\"navbar navbar&#45;static&#45;top\" role=\"navigation\"> -->\n<nav class=\"navbar navbar-default\" role=\"navigation\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <!-- <button type=\"button\" class=\"navbar&#45;toggle\" data&#45;toggle=\"collapse\" data&#45;target=\"#bs&#45;example&#45;navbar&#45;collapse&#45;1\"> -->\n      <!--   <span class=\"sr&#45;only\">Toggle navigation</span> -->\n      <!--   <span class=\"icon&#45;bar\"></span> -->\n      <!--   <span class=\"icon&#45;bar\"></span> -->\n      <!--   <span class=\"icon&#45;bar\"></span> -->\n      <!-- </button> -->\n      <a class=\"navbar-brand\" href=\"#\"><img src=\"app/img/logo.png\" id=\"logo\" width=\"35px\"></img></a>\n      <!-- <a class=\"navbar&#45;brand\" href=\"#\"><span class=\"glyphicon glyphicon&#45;info&#45;sign\"></span></a> -->\n      <ul class=\"navbar-nav list-inline\">\n		<li><a href=\"#bingos\"><span class=\"glyphicon glyphicon-time\"></span></a></li>\n		<li><a href=\"#backup\"><span class=\"glyphicon glyphicon-floppy-disk\"></span></a></li>\n		<li><a href=\"#settings\"><span class=\"glyphicon glyphicon-wrench\"></span></a></li>\n      </ul>\n    </div>\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <!-- <div class=\"collapse navbar&#45;collapse\" id=\"bs&#45;example&#45;navbar&#45;collapse&#45;1\"> -->\n    <!-- </div> -->\n  </div>\n</nav>\n";
  });

this["JST"]["app/templates/settings.tpl"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<ul class=\"nav nav-tabs\" role=\"tablist\">\n  <li class=\"active\"><a href=\"#basic\" role=\"tab\" data-toggle=\"tab\"><span class=\"glyphicon glyphicon-wrench\"></span></a></li>\n  <li><a href=\"#dateTimePicker\" role=\"tab\" data-toggle=\"tab\"><span class=\"glyphicon glyphicon-calendar\"></span></a></li>\n  <li><a href=\"#bingo\" role=\"tab\" data-toggle=\"tab\"><span class=\"glyphicon glyphicon-time\"></span></a></li>\n  <li><a href=\"#cloudAuth\" role=\"tab\" data-toggle=\"tab\"><span class=\"glyphicon glyphicon-cloud\"></span></a></li>\n  <li><a href=\"#motorcycle\" role=\"tab\" data-toggle=\"tab\"><span class=\"glyphicon glyphicon-road\"></span></a></li>\n</ul>\n<div id=\"divRegister\">\n  <div class=\"tab-content\">\n	<div id=\"basic\" class=\"tab-pane active\">\n      <h1>Settings</h1>\n      <div class=\"form-group\">\n        <label for=\"inputEnvironment\">Environment</label>\n		<input type=\"text\" id=\"inputEnvironment\" class=\"col-xs-12\" value=\"";
  if (helper = helpers.env) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.env); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" placeholder=\"[local|test|homolog|prod]\" data-bind=\"value:env,events:['keyup']\"/>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"inputApp\">App</label>\n    	<input type=\"text\" id=\"inputApp\" class=\"col-xs-12\" value=\"";
  if (helper = helpers.app) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.app); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" placeholder=\"james\" data-bind=\"value:app,events:['keyup']\"/>\n      </div>\n      <div class=\"form-group\">\n		<label for=\"inputBackend\">Backend</label>\n		<input type=\"text\" id=\"inputBackend\" class=\"col-xs-12\" value=\"";
  if (helper = helpers.backend) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.backend); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" placeholder=\"your backend URL.\" data-bind=\"value:backend,events:['keyup']\"/>\n      </div>\n      <br />\n      <div id=\"form-group\">\n        <div class=\"checkbox\">\n          <label>\n            <input id=\"inputDiscountAllDay\" type=\"checkbox\" value=\"\" data-bind=\"checked:isProtected\" /> is protected?\n	      </label>\n        </div>\n      </div>\n	</div>\n\n	<div id=\"dateTimePicker\" class=\"tab-pane\">\n	  <h2>DateTimePicker Configuration</h2>\n	  <!-- <div class=\"form-group\"> -->\n	  TODO implement custom binding\n	  <!-- </div> -->\n	</div>\n\n	<div id=\"bingo\" class=\"tab-pane\">\n	  <h2>Bingo</h2>\n	  <div class=\"form-group\">\n	    <label for=\"inputId\">ID</label>\n	    <input type=\"text\" id=\"inputId\" class=\"col-xs-12\" placeholder=\"1\" data-bind=\"objectHandler:bingo,events:['keyup']\" data-property=\"id\" />\n	  </div>\n	  <div class=\"form-group\">\n	    <label for=\"inputStartTime\">Start Time</label>\n	    <input type=\"text\" id=\"inputStartTime\" class=\"col-xs-12\" placeholder=\"08:00\" data-bind=\"objectHandler:timesheet,events:['keyup']\" data-property=\"startTime\" />\n	  </div>\n	  <div class=\"form-group\">\n	    <label for=\"inputEndTime\">End Time</label>\n	    <input type=\"text\" id=\"inputEndTime\" class=\"col-xs-12\" placeholder=\"14:00\" data-bind=\"objectHandler:timesheet,events:['keyup']\" data-property=\"endTime\" />\n	  </div>\n	  <div class=\"form-group\">\n	    <label for=\"inputWorkload\">Workload</label>\n	    <input type=\"text\" id=\"inputWorkload\" class=\"col-xs-12\" placeholder=\"06:00\" data-bind=\"objectHandler:timesheet,events:['keyup']\" data-property=\"workload\" />\n	  </div>\n	  <div class=\"form-group\">\n	    <label for=\"inputTimesheetBackendURL\">Timesheet Backend URL</label>\n	    <input type=\"text\" id=\"inputTimesheetBackendURL\" class=\"col-xs-12\" placeholder=\"TIMESHEET BACKEND URL\" data-bind=\"objectHandler:timesheet,events:['keyup']\" data-property=\"timesheetBackendURL\" />\n	  </div>\n	</div>\n\n	<div id=\"cloudAuth\" class=\"tab-pane\">\n	  <h2>Cloud Auth</h2>\n	  <div class=\"form-group\">\n	    <label for=\"inputCloudAuthEmail\">E-mail</label>\n	    <input type=\"text\" id=\"inputCloudAuthEmail\" class=\"col-xs-12\" placeholder=\"<YOUR_EMAIL_HERE>@<SOME_DOMAIN>\" data-bind=\"objectHandler:cloudAuth,events:['keyup']\" data-property=\"email\" />\n	  </div>\n	  <div class=\"form-group\">\n	    <label for=\"inputCloudAuthPassword\">Password</label>\n	    <input type=\"password\" id=\"inputCloudAuthPassword\" class=\"col-xs-12\" placeholder=\"<YOUR_PASSWORD_HERE>\" data-bind=\"objectHandler:cloudAuth,events:['keyup']\" data-property=\"password\" />\n	  </div>\n	  <br />\n	  <div class=\"form-group\">\n		<a href=\"#\" id=\"btnHideShowPassword\" class=\"btn btn-warning\"><i class=\"glyphicon glyphicon-eye-close\"></i> Passwd</a>\n	  </div>\n	</div>\n  </div>\n</div>\n<br />\n<span id=\"spanMessage\"></span>\n<br />\n<br />\n<a href=\"#\" id=\"btnPersist\" type=\"submit\" class=\"btn btn-primary\"><i class=\"glyphicon glyphicon-ok\"></i> Send</a>\n<a href=\"#\" id=\"btnDeleteSettings\" class=\"btn btn-danger\"><i class=\"glyphicon glyphicon-trash\"></i> Delete</a>\n<a href=\"#\" id=\"btnCleanLocalStorage\" class=\"btn btn-danger\"><i class=\"glyphicon glyphicon-trash\"></i> Local</a>\n";
  return buffer;
  });

return this["JST"];

});