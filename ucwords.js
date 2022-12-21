   function ucwords(str,force){
  str=force ? str.toLowerCase() : str;  
  //return str.replace(/(\b)([a-zA-Z-đĐ])/g,
  return str.replace(/(^([a-zA-Z-đĐ\p{M}]))|([ -][a-zA-Z-đĐ\p{M}])/g,
           function(firstLetter){
              return   firstLetter.toUpperCase();
           });
}

$('input[type="hoten"]').keyup(function(evt){

		var cp_value= ucwords($(this).val(),true) ;

      $(this).val(cp_value);

   });

$('input[class="cau"]').keyup(function(evt){

		var cp_value= ucwords($(this).val(),true) ;

      $(this).val(cp_value);

   });
