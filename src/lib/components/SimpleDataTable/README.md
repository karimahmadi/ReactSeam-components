# SimpleDataTable component

## properties
- dataRows : arrays of data of type  that defined in rowColDef
- rowColDef : arrays of column definition of data rows 
- dataFooters : arrays of data of type that defined in footerColDef
- footerColDef : arrays of column definition of footer datas

## rowColDef
[
...
{
	field: string,   (ex. 'id' , 'title', 'code', ..)
	headerName : string , (ex. 'شناسه'  , 'عنوان' ,'کد')
	headerAlign : string, ( ex. 'right','left','center') 
	align : string, ( ex. 'right','left','center')
	width : string , (ex. '20%')
	formatter:function, (ex. value =>  numeral(value).format('0,0') ) 
}
...
]   

## footerColDef
[
...
{
	field: string,   (ex. 'total' , 'sum', 'count', ..)
  align : string, ( ex. 'right','left','center')
  formatter:function, (ex. value =>  numeral(value).format('0,0') )
  colSpan : number , 
}
...
]

## example
example exists in tatareact-components-sample project 
