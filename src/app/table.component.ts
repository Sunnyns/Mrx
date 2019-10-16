import { Component } from '@angular/core’;
@Component({

selector:'prop',
template:<h2 [textcontent]="title"></h2> 
<table [border]="5"> 
<tr>
<th>month</th> 
<th>collection</th>
<th>source</th> 
</tr> 
<tr> 
<td>may</td> 
<td>100000</td>
<td>ABC</td>
</tr>
<tr> 
<td>june</td> 
<td>100000</td>
<td>ABC</td>
</tr>
<tr>
<td>july</td>
<td>100000</td>
<td>ABC</td> 
</tr>
</table>
})

export class prop{
    title="Table";
}