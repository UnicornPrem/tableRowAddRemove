var product_row = 0;

function addProduct() {
	html  = '<tbody id="product-row' + product_row + '">';
	html += '  <tr>'; 
  html += '    <td class="left"><select name="product[' + product_row + '][product_name]">';
  html += '      <option value="1">Default</option>';
  html += '    </select></td>';		
  html += '    <td class="right"><input type="text" name="product[' + product_row + '][quantity]" value="" size="2" /></td>';
  html += '    <td class="right"><input type="text" name="product[' + product_row + '][listing_priority]" value="" size="2" /></td>';
	html += '    <td class="right"><input type="text" name="product[' + product_row + '][price]" value="" /></td>';
  html += '    <td class="left"><input type="text" name="product[' + product_row + '][code]" value="" /></td>';
	html += '    <td class="left"><input type="text" name="product[' + product_row + '][added_date]" value="" class="added_date" /></td>';
	html += '    <td class="left"><a onclick="$(\'#product-row' + product_row + '\').remove();" class="button">Remove</a></td>';
	html += '  </tr>';	
  html += '</tbody>';
	
	$('#product tfoot').before(html);
		
	$('#product-row' + product_row + ' .added_date').datepicker({dateFormat: 'yy-mm-dd'});
	
	product_row++;
}

$( document ).ready(function() {
  $("input.added_date").datepicker();
});
