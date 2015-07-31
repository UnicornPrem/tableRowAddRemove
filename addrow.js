var product_row = 0;

function addProduct() {
html  = '<tbody id="product-row' + product_row + '">';
html += '  <tr>'; 
html += '    <td class="left"><input type="text" name="product[' + product_row + '][name]" value=""/></td>';		
html += '    <td class="right"><input type="text" name="product[' + product_row + '][quantity]" value="" size="2" /></td>';
html += '    <td class="right"><input type="text" name="product[' + product_row + '][listing_priority]" value="" size="2" /></td>';
html += '    <td class="right"><input type="text" name="product[' + product_row + '][price]" value="" /></td>';
html += '    <td class="left"><input type="text" name="product[' + product_row + '][code]" value="" /></td>';
html += '    <td class="left"><input type="text" name="product[' + product_row + '][added_by]" value=""/></td>';
html += '    <td class="left"><a onclick="$(\'#product-row' + product_row + '\').remove();" class="button">Remove</a></td>';
html += '  </tr>';	
html += '</tbody>';
	
$('#product tfoot').before(html);
product_row++;
}

