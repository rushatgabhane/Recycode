import { useState } from 'react'
const ProductGeneration = () => {

    const [values, setValue] = useState({
        product_type: "type1"
    })
    const [qr,Setqr]=('')
    const {product_type } = values;
    const handelChange = field => e => {
        setValue({ ...values, [field]: e.target.value })
    }
    const handelClick = e => {
        e.preventDefault();
        console.log(values);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({product_type})
        };

        //TODO: Set our Backend End Point
        fetch('http://localhost:5000/api/qrcode', requestOptions)
            .then(response => response.json())
            .then(data => {
                Setqr(data.url)
            })
            .catch((err) => {
               console.log(err);
            })
    }

    const checkValidity=()=>{

        return ((product_type.length > 0))
    }
    return (
        <div>
            <div className="mx-5 md:mx-16 lg:mx-20 flex justify-around">
                <div className="p-6 sm:p-10 bg-green-300 rounded-3xl shadow-lg">
                    <p>Qr Code Scanned</p>
                    <h>1242</h>
                </div>
                <div className="p-6 sm:p-10 bg-green-300 rounded-3xl shadow-lg">
                    <p>Items Recycled</p>
                    <h>1242</h>
                </div>
            </div>
        
        <form  className="w-full">
            <div className="my-20 ml-5 md:ml-16 lg:ml-20">
                <h1 className="text-3xl sm:tex-4xl md:text-5xl font-semibold line-height-sm">Generate Qr Code</h1>
                <label className="mt-10 block text-xl sm:tex-xl md:text-xl font-semibold line-height-sm">Product Type</label>
                
                <select
                    className="w-2/3 md:w-1/3 h-10 bg-gray-100 rounded-2xl"
                    value={product_type}
                    onChange={handelChange("product_type")}
                >
                    <option value="1">type1</option>
                    <option value="2">type2</option>
                    <option value="3">type3</option>
                </select>
                <button type="submit" className=" ml-5 md:ml-10 bg-green-400 mt-6 px-3 py-2 rounded-sm text-white hover:bg-green-500 text-center rounded-2xl shadow-lg" onClick={handelClick} disabled={!checkValidity()}>Generate</button>
            </div>
        </form>

        {
           /*To generate Qr code*/
        }


        </div>
    );
}

export default ProductGeneration;