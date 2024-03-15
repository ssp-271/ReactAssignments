import { useState } from "react";

function ProdDeets(){

 const[prodArray,setProdArray] = useState([]);
 const[pname,setPname] = useState("");
 const[price,setPrice] = useState(0);
 const[qty,setQty] = useState(0);
 const[total,setTotal] = useState(0);
 const[totalquant,setTotalQuant] = useState(0);
 const[disc,setDiscount] = useState(0);

 
 function addProd(){

    let prods= {};
    prods.pname=pname;
    prods.price=price;
    prods.qty=qty;

    let tempArray =[...prodArray];
    tempArray.push(prods);
    setProdArray(tempArray);
    
 }

 function deleteProd(pn)
 
 {
    let tempArray = [...prodArray];
    let index = tempArray.findIndex(item => item.pname == pn);
    tempArray.slice(index,1);
    setProdArray(tempArray);

 }

 function TotalPrice()
 {
    let tempArray=[...prodArray];
    let total = 0;
    let prices =tempArray.map(item =>(item.price)*(item.qty));
    for(let i=0;i<prices.length;i++){
        total+=prices[i];
    }
    setTotal(total);
 }

 function discountprod()
 {
    let tempArray = [...prodArray];
    let quantity = tempArray.map(item => (item.qty));
    var totquantity = 0;
    for(let i=0;i<quantity.length;i++)
    {
       totquantity+=Number(quantity[i]);
    }
    setTotalQuant(totquantity);
    var discount=0;
    if (totalquant>10) 
    {
       discount=(0.95)*total;

    }
    if (totalquant>20)
    {
      discount=(0.90)*total;
    }
    if (totalquant>30)
    {
      discount=(0.85)*total;
    }
    setDiscount(discount);


 }

let resultArray = prodArray.map((item, index) => {
    return <tr key={index}>
                    <td>   {item.pname}  </td>
                    <td>   {item.price}  </td>
                    <td>   {item.qty}  </td>
                    <td>   {(item.qty)*(item.price)}</td>
                    <td>
                        <a  onClick={() => deleteProd(item.pname)} href="javascript:void(0);">Delete</a>
                    </td>
            </tr>
       });

return(<>


    <h3>Product Details</h3>
        <hr />

        <input type="text" placeholder="Product Name" value={pname}   onChange={(e) => setPname(e.target.value)} />
        <input type="text" placeholder="Price" value={price}   onChange={(e) => setPrice(e.target.value)} />
        <input type="text" placeholder="Quantity" value={qty}  onChange={(e) => setQty(e.target.value)} />
        <hr />

        <input type="button" onClick={addProd} value="Add Products" />
        <input type="button" onClick={deleteProd} value="Delete" />
        <input type="button" onClick={TotalPrice} value="Total" />
        <input type="button" onClick={discountprod} value="Discount" />

        <hr />

        <table border="2" width="500" cellspacing="0" cellpadding="5">
            <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th></th>
            </tr>
            {resultArray}
        </table>
        <hr/>
        <h3> Total Price : {total}</h3>
        <hr/>
        <h3>Discounted Price : {disc}</h3>
        

       
 
    
    
    
    
    
    
    
    
    </>)
}





export default ProdDeets;