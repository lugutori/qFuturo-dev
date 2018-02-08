
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
var department_arr = new Array("Amazonas","Antioquia","Arauca","Atlantico","Bolivar","Boyaca","Caldas","Caqueta","Casanare","Cauca","Cesar","Choco","Cordoba","Cundinamarca","Distrito Capital de Santa Fe de Bogota","Guainia","Guaviare","Huila","La Guajira","Magdalena","Meta","Narino","Norte de Santander","Putumayo","Quindio","Risaralda","San Andres y Providencia","Santander","Sucre","Tolima","Valle del Cauca","Vaupes","Vichada");

var s_a = new Array();
s_a[0]="";
s_a[1]="Leticia|Puerto Nariño";
s_a[2]="Abejorral|Abriaquí|Alejandria|Amagá|Amalfi|Andes|Angelópolis|Angostura|Anorí|Anzá|Apartadó|Arboletes|Argelia|Armenia|Barbosa|Bello|Belmira|Betania|Betulia|Bolívar|Briceño|Burítica|Caicedo|Caldas|Campamento|Caracolí|Caramanta|Carepa|Carmen de Viboral|Carolina|Caucasia|Cañasgordas|Chigorodó|Cisneros|Cocorná|Concepción|Concordia|Copacabana|Cáceres|Dabeiba|Don Matías|Ebéjico|El Bagre|Entrerríos|Envigado|Fredonia|Frontino|Giraldo|Girardota|Granada|Guadalupe|Guarne|Guatapé|Gómez Plata|Heliconia|Hispania|Itagüí|Ituango|Jardín|Jericó|La Ceja|La Estrella|La Pintada|La Unión|Liborina|Maceo|Marinilla|Medellín|Montebello|Murindó|Mutatá|Nariño|Nechí|Necoclí|Olaya|Peque|Peñol|Pueblorrico|Puerto Berrío|Puerto Nare|Puerto Triunfo|Remedios|Retiro|Ríonegro|Sabanalarga|Sabaneta|Salgar|San Andrés de Cuerquía|San Carlos|San Francisco|San Jerónimo|San José de Montaña|San Juan de Urabá|San Luís|San Pedro|San Pedro de Urabá|San Rafael|San Roque|San Vicente|Santa Bárbara|Santa Fé de Antioquia|Santa Rosa de Osos|Santo Domingo|Santuario|Segovia|Sonsón|Sopetrán|Tarazá|Tarso|Titiribí|Toledo|Turbo|Támesis|Uramita|Urrao|Valdivia|Valparaiso|Vegachí|Venecia|Vigía del Fuerte|Yalí|Yarumal|Yolombó|Yondó (Casabe)|Zaragoza";
s_a[3]="Arauca|Arauquita|Cravo Norte|Fortúl|Puerto Rondón|Saravena|Tame";
s_a[4]="Baranoa|Barranquilla|Campo de la Cruz|Candelaria|Galapa|Juan de Acosta|Luruaco|Malambo|Manatí|Palmar de Varela|Piojo|Polonuevo|Ponedera|Puerto Colombia|Repelón|Sabanagrande|Sabanalarga|Santa Lucía|Santo Tomás|Soledad|Suan|Tubará|Usiacuri";
s_a[5]="Achí|Altos del Rosario|Arenal|Arjona|Arroyohondo|Barranco de Loba|Calamar|Cantagallo|Cartagena|Cicuco|Clemencia|Córdoba|El Carmen de Bolívar|El Guamo|El Peñon|Hatillo de Loba|Magangué|Mahates|Margarita|María la Baja|Mompós|Montecristo|Morales|Norosí|Pinillos|Regidor|Río Viejo|San Cristobal|San Estanislao|San Fernando|San Jacinto|San Jacinto del Cauca|San Juan de Nepomuceno|San Martín de Loba|San Pablo|Santa Catalina|Santa Rosa|Santa Rosa del Sur|Simití|Soplaviento|Talaigua Nuevo|Tiquisio (Puerto Rico)|Turbaco|Turbaná|Villanueva|Zambrano";
s_a[6]="Almeida|Aquitania|Arcabuco|Belén|Berbeo|Beteitiva|Boavita|Boyacá|Briceño|Buenavista|Busbanza|Caldas|Campohermoso|Cerinza|Chinavita|Chiquinquirá|Chiscas|Chita|Chitaraque|Chivatá|Chíquiza|Chívor|Ciénaga|Coper|Corrales|Covarachía|Cubará|Cucaita|Cuitiva|Cómbita|Duitama|El Cocuy|El Espino|Firavitoba|Floresta|Gachantivá|Garagoa|Guacamayas|Guateque|Guayatá|Guicán|Gámeza|Izá|Jenesano|Jericó|La Capilla|La Uvita|La Victoria|Labranzagrande|Macanal|Maripí|Miraflores|Mongua|Monguí|Moniquirá|Motavita|Muzo|Nobsa|Nuevo Colón|Oicatá|Otanche|Pachavita|Paipa|Pajarito|Panqueba|Pauna|Paya|Paz de Río|Pesca|Pisva|Puerto Boyacá|Páez|Quipama|Ramiriquí|Rondón|Ráquira|Saboyá|Samacá|San Eduardo|San José de Pare|San Luís de Gaceno|San Mateo|San Miguel de Sema|San Pablo de Borbur|Santa María|Santa Rosa de Viterbo|Santa Sofía|Santana|Sativanorte|Sativasur|Siachoque|Soatá|Socha|Socotá|Sogamoso|Somondoco|Sora|Soracá|Sotaquirá|Susacón|Sutamarchán|Sutatenza|Sáchica|Tasco|Tenza|Tibaná|Tibasosa|Tinjacá|Tipacoque|Toca|Toguí|Topagá|Tota|Tunja|Tunungua|Turmequé|Tuta|Tutasá|Ventaquemada|Villa de Leiva|Viracachá|Zetaquirá|Úmbita";
s_a[7]="Aguadas|Anserma|Aranzazu|Belalcázar|Chinchiná|Filadelfia|La Dorada|La Merced|La Victoria|Manizales|Manzanares|Marmato|Marquetalia|Marulanda|Neira|Norcasia|Palestina|Pensilvania|Pácora|Risaralda|Río Sucio|Salamina|Samaná|San José|Supía|Villamaría|Viterbo";
s_a[8]="Albania|Belén de los Andaquíes|Cartagena del Chairá|Curillo|El Doncello|El Paujil|Florencia|La Montañita|Milán|Morelia|Puerto Rico|San José del Fragua|San Vicente del Caguán|Solano|Solita|Valparaiso";
s_a[9]="Aguazul|Chámeza|Hato Corozal|La Salina|Maní|Monterrey|Nunchía|Orocué|Paz de Ariporo|Pore|Recetor|Sabanalarga|San Luís de Palenque|Sácama|Tauramena|Trinidad|Támara|Villanueva|Yopal";
s_a[10]="Almaguer|Argelia|Balboa|Bolívar|Buenos Aires|Cajibío|Caldono|Caloto|Corinto|El Tambo|Florencia|Guachené|Guapí|Inzá|Jambaló|La Sierra|La Vega|López (Micay)|Mercaderes|Miranda|Morales|Padilla|Patía (El Bordo)|Piamonte|Piendamó|Popayán|Puerto Tejada|Puracé (Coconuco)|Páez (Belalcazar)|Rosas|San Sebastián|Santa Rosa|Santander de Quilichao|Silvia|Sotara (Paispamba)|Sucre|Suárez|Timbiquí|Timbío|Toribío|Totoró|Villa Rica";
s_a[11]="Aguachica|Agustín Codazzi|Astrea|Becerríl|Bosconia|Chimichagua|Chiriguaná|Curumaní|El Copey|El Paso|Gamarra|Gonzalez|La Gloria|La Jagua de Ibirico|La Paz (Robles)|Manaure Balcón del Cesar|Pailitas|Pelaya|Pueblo Bello|Río de oro|San Alberto|San Diego|San Martín|Tamalameque|Valledupar";
s_a[12]="Acandí|Alto Baudó (Pie de Pato)|Atrato (Yuto)|Bagadó|Bahía Solano (Mútis)|Bajo Baudó (Pizarro)|Belén de Bajirá|Bojayá (Bellavista)|Cantón de San Pablo|Carmen del Darién (CURBARADÓ)|Condoto|Cértegui|El Carmen de Atrato|Istmina|Juradó|Lloró|Medio Atrato|Medio Baudó|Medio San Juan (ANDAGOYA)|Novita|Nuquí|Quibdó|Río Iró|Río Quito|Ríosucio|San José del Palmar|Santa Genoveva de Docorodó|Sipí|Tadó|Unguía|Unión Panamericana (ÁNIMAS)";
s_a[13]="Ayapel|Buenavista|Canalete|Cereté|Chimá|Chinú|Ciénaga de Oro|Cotorra|La Apartada y La Frontera|Lorica|Los Córdobas|Momil|Montelíbano|Monteria|Moñitos|Planeta Rica|Pueblo Nuevo|Puerto Escondido|Puerto Libertador|Purísima|Sahagún|San Andrés Sotavento|San Antero|San Bernardo del Viento|San Carlos|San José de Uré|San Pelayo|Tierralta|Tuchín|Valencia";
s_a[14]="Agua de Dios|Albán|Anapoima|Anolaima|Apulo|Arbeláez|Beltrán|Bituima|Bojacá|Cabrera|Cachipay|Cajicá|Caparrapí|Carmen de Carupa|Chaguaní|Chipaque|Choachí|Chocontá|Chía|Cogua|Cota|Cucunubá|Cáqueza|El Colegio|El Peñón|El Rosal|Facatativá|Fosca|Funza|Fusagasugá|Fómeque|Fúquene|Gachalá|Gachancipá|Gachetá|Gama|Girardot|Granada|Guachetá|Guaduas|Guasca|Guataquí|Guatavita|Guayabal de Siquima|Guayabetal|Gutiérrez|Jerusalén|Junín|La Calera|La Mesa|La Palma|La Peña|La Vega|Lenguazaque|Machetá|Madrid|Manta|Medina|Mosquera|Nariño|Nemocón|Nilo|Nimaima|Nocaima|Pacho|Paime|Pandi|Paratebueno|Pasca|Puerto Salgar|Pulí|Quebradanegra|Quetame|Quipile|Ricaurte|San Antonio de Tequendama|San Bernardo|San Cayetano|San Francisco|San Juan de Río Seco|Sasaima|Sesquilé|Sibaté|Silvania|Simijaca|Soacha|Sopó|Subachoque|Suesca|Supatá|Susa|Sutatausa|Tabio|Tausa|Tena|Tenjo|Tibacuy|Tibirita|Tocaima|Tocancipá|Topaipí|Ubalá|Ubaque|Ubaté|Une|Venecia (Ospina Pérez)|Vergara|Viani|Villagómez|Villapinzón|Villeta|Viotá|Yacopí|Zipacón|Zipaquirá|Útica";
s_a[15]="Bogotá D.C.";
s_a[16]="Inírida";
s_a[17]="Calamar|El Retorno|Miraflores|San José del Guaviare";
s_a[18]="Acevedo|Agrado|Aipe|Algeciras|Altamira|Baraya|Campoalegre|Colombia|Elías|Garzón|Gigante|Guadalupe|Hobo|Isnos|La Argentina|La Plata|Neiva|Nátaga|Oporapa|Paicol|Palermo|Palestina|Pital|Pitalito|Rivera|Saladoblanco|San Agustín|Santa María|Suaza|Tarqui|Tello|Teruel|Tesalia|Timaná|Villavieja|Yaguará|Íquira";
s_a[19]="Albania|Barrancas|Dibulla|Distracción|El Molino|Fonseca|Hatonuevo|La Jagua del Pilar|Maicao|Manaure|Riohacha|San Juan del Cesar|Uribia|Urumita|Villanueva";
s_a[20]="Algarrobo|Aracataca|Ariguaní (El Difícil)|Cerro San Antonio|Chivolo|Ciénaga|Concordia|El Banco|El Piñon|El Retén|Fundación|Guamal|Nueva Granada|Pedraza|Pijiño|Pivijay|Plato|Puebloviejo|Remolino|Sabanas de San Angel (SAN ANGEL)|Salamina|San Sebastián de Buenavista|San Zenón|Santa Ana|Santa Bárbara de Pinto|Santa Marta|Sitionuevo|Tenerife|Zapayán (PUNTA DE PIEDRAS)|Zona Bananera (PRADO - SEVILLA)";
s_a[21]="Acacías|Barranca de Upía|Cabuyaro|Castilla la Nueva|Cubarral|Cumaral|El Calvario|El Castillo|El Dorado|Fuente de Oro|Granada|Guamal|La Macarena|Lejanías|Mapiripan|Mesetas|Puerto Concordia|Puerto Gaitán|Puerto Lleras|Puerto López|Puerto Rico|Restrepo|San Carlos de Guaroa|San Juan de Arama|San Juanito|San Martín|Uribe|Villavicencio|Vista Hermosa";
s_a[22]="Albán (San José)|Aldana|Ancuya|Arboleda (Berruecos)|Barbacoas|Belén|Buesaco|Chachaguí|Colón (Génova)|Consaca|Contadero|Cuaspud (Carlosama)|Cumbal|Cumbitara|Córdoba|El Charco|El Peñol|El Rosario|El Tablón de Gómez|El Tambo|Francisco Pizarro|Funes|Guachavés|Guachucal|Guaitarilla|Gualmatán|Iles|Imúes|Ipiales|La Cruz|La Florida|La Llanada|La Tola|La Unión|Leiva|Linares|Magüi (Payán)|Mallama (Piedrancha)|Mosquera|Nariño|Olaya Herrera|Ospina|Policarpa|Potosí|Providencia|Puerres|Pupiales|Ricaurte|Roberto Payán (San José)|Samaniego|San Bernardo|San Juan de Pasto|San Lorenzo|San Pablo|San Pedro de Cartago|Sandoná|Santa Bárbara (Iscuandé)|Sapuyes|Sotomayor (Los Andes)|Taminango|Tangua|Tumaco|Túquerres|Yacuanquer";
s_a[23]="Arboledas|Bochalema|Bucarasica|Chinácota|Chitagá|Convención|Cucutilla|Cáchira|Cácota|Cúcuta|Durania|El Carmen|El Tarra|El Zulia|Gramalote|Hacarí|Herrán|La Esperanza|La Playa|Labateca|Los Patios|Lourdes|Mutiscua|Ocaña|Pamplona|Pamplonita|Puerto Santander|Ragonvalia|Salazar|San Calixto|San Cayetano|Santiago|Sardinata|Silos|Teorama|Tibú|Toledo|Villa Caro|Villa del Rosario|Ábrego";
s_a[24]="Colón|Mocoa|Orito|Puerto Asís|Puerto Caicedo|Puerto Guzmán|Puerto Leguízamo|San Francisco|San Miguel|Santiago|Sibundoy|Valle del Guamuez|Villagarzón";
s_a[25]="Armenia|Buenavista|Calarcá|Circasia|Cordobá|Filandia|Génova|La Tebaida|Montenegro|Pijao|Quimbaya|Salento";
s_a[26]="Apía|Balboa|Belén de Umbría|Dos Quebradas|Guática|La Celia|La Virginia|Marsella|Mistrató|Pereira|Pueblo Rico|Quinchía|Santa Rosa de Cabal|Santuario";
s_a[27]="Providencia";
s_a[28]="Aguada|Albania|Aratoca|Barbosa|Barichara|Barrancabermeja|Betulia|Bolívar|Bucaramanga|Cabrera|California|Capitanejo|Carcasí|Cepita|Cerrito|Charalá|Charta|Chima|Chipatá|Cimitarra|Concepción|Confines|Contratación|Coromoro|Curití|El Carmen|El Guacamayo|El Peñon|El Playón|Encino|Enciso|Floridablanca|Florián|Galán|Girón|Guaca|Guadalupe|Guapota|Guavatá|Guepsa|Gámbita|Hato|Jesús María|Jordán|La Belleza|La Paz|Landázuri|Lebrija|Los Santos|Macaravita|Matanza|Mogotes|Molagavita|Málaga|Ocamonte|Oiba|Onzaga|Palmar|Palmas del Socorro|Pie de Cuesta|Pinchote|Puente Nacional|Puerto Parra|Puerto Wilches|Páramo|Rio Negro|Sabana de Torres|San Andrés|San Benito|San Gíl|San Joaquín|San José de Miranda|San Miguel|San Vicente del Chucurí|Santa Bárbara|Santa Helena del Opón|Simacota|Socorro|Suaita|Sucre|Suratá|Tona|Valle de San José|Vetas|Villanueva|Vélez|Zapatoca";
s_a[29]="Buenavista|Caimito|Chalán|Colosó (Ricaurte)|Corozal|Coveñas|El Roble|Galeras (Nueva Granada)|Guaranda|La Unión|Los Palmitos|Majagual|Morroa|Ovejas|Palmito|Sampués|San Benito Abad|San Juan de Betulia|San Marcos|San Onofre|San Pedro|Sincelejo|Sincé|Sucre|Tolú|Tolú Viejo";
s_a[30]="Alpujarra|Alvarado|Ambalema|Anzoátegui|Armero (Guayabal)|Ataco|Cajamarca|Carmen de Apicalá|Casabianca|Chaparral|Coello|Coyaima|Cunday|Dolores|Espinal|Falan|Flandes|Fresno|Guamo|Herveo|Honda|Ibagué|Icononzo|Lérida|Líbano|Mariquita|Melgar|Murillo|Natagaima|Ortega|Palocabildo|Piedras|Planadas|Prado|Purificación|Rioblanco|Roncesvalles|Rovira|Saldaña|San Antonio|San Luis|Santa Isabel|Suárez|Valle de San Juan|Venadillo|Villahermosa|Villarrica";
s_a[31]="Alcalá|Andalucía|Ansermanuevo|Argelia|Bolívar|Buenaventura|Buga|Bugalagrande|Caicedonia|Calima (Darién)|Calí|Candelaria|Cartago|Dagua|El Cairo|El Cerrito|El Dovio|El Águila|Florida|Ginebra|Guacarí|Jamundí|La Cumbre|La Unión|La Victoria|Obando|Palmira|Pradera|Restrepo|Riofrío|Roldanillo|San Pedro|Sevilla|Toro|Trujillo|Tulúa|Ulloa|Versalles|Vijes|Yotoco|Yumbo|Zarzal";
s_a[32]="Carurú|Mitú|Taraira";
s_a[33]="Cumaribo|La Primavera|Puerto Carreño|Santa Rosalía";
$(function(){
	var option_str = document.getElementById('department');
	option_str.length=0;
	option_str.options[0] = new Option('Seleccionar Departamento','');
	option_str.selectedIndex = 0;
	for (var i=0; i<department_arr.length; i++) {
		option_str.options[option_str.length] = new Option(department_arr[i],department_arr[i]);
	}
});

$('#department').on("change", function () {
	var option2_str = document.getElementById('city');
	var city_index = this.selectedIndex;
	option2_str.length=0;
	option2_str.options[0] = new Option('Seleccionar Ciudad','');
	var city_arr = s_a[city_index].split("|");
	for (var i=0; i<city_arr.length; i++) {
		option2_str.options[option2_str.length] = new Option(city_arr[i],city_arr[i]);
	}
	$('#city').prop('selectedIndex', 0).selectmenu('refresh', true);
});

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
/**-------Actions for header: TheHeader-------**/
