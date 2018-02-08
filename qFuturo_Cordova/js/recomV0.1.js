
/**-------Actions for page: login-------**/

//Add header to all divs
$('.withHeader').load('index.html #theHeader');
//Add click event to Registry Button
$('#registry').on("click",function() { 
	$.mobile.changePage("#localizacion");
	return false;
});
//Add click event to Skip_Registry Button
$('#skip_registry').on("click",function() { 
	$.mobile.changePage("#omit_registro");
	return false;
});
/**-------Actions for page: localizacion-------**/
$('#recom_gps').on("click", function () {
	$('#city').prop('selectedIndex', 1).selectmenu('refresh', true);
	$('#department').prop('selectedIndex', 1).selectmenu('refresh', true);

});
$('#local_next').on("click", function () {
	$.mobile.changePage("#industrias_cercanas");
	return false;
});
/**-------Actions for page: industrias_cercanas-------**/
$('#indust_no').on("click", function () {
	$.mobile.changePage("#omit_cuestionario");
	return false;
});
$('#indust_si').on("click", function () {
	$.mobile.changePage("#perfil");
	return false;
});

/**-------Actions for page: perfil-------**/

$('#profile_no').on("click", function () {
	$.mobile.changePage("#omit_registro");
	return false;
});
$('#profile_si').on("click", function () {
	$.mobile.changePage("#cuestionario");
	return false;
});
$('#profile_fb').on("click", function () {
	return false;
});


/**-------Actions for page: omit_cuestionario-------**/
$('#omit_ques_btn').on("click", function () {
	$.mobile.changePage("#resultados");
	return false;
});

/**-------Actions for page: omit_registro-------**/
$('#omit_reg_no').on("click", function () {
	$.mobile.changePage("#resultados");
	return false;
});
$('#omit_reg_si').on("click", function () {
	$.mobile.changePage("#cuestionario");
	return false;
});

/**-------Actions for page: cuestionario-------**/
$('#quest_next').on("click", function () {
	$.mobile.changePage("#resultados");
	return false;
});