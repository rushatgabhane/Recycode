import { useState } from 'react'
const ProductGeneration = () => {

    const [values, setValue] = useState({
        company_name: "",
        product_name: "",
        company_email: "",
        product_type: "type1"
    })
    const { company_name, product_name, company_email,product_type } = values;
    const handelChange = field => e => {
        setValue({ ...values, [field]: e.target.value })
    }
    const handelClick = e => {
        e.preventDefault();
        console.log(values);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ company_name, product_name, company_email,product_type })
        };

        //TODO: Set our Backend End Point
        // fetch('http://localhost:8000/', requestOptions)
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data);
        //     })
        //     .catch((err) => {
        //        console.log(err);
        //     })
    }

    const checkValidity=()=>{

        //To check all the fields are filled or not and entered email is valid or not
        let re = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;

        return ((company_name.length > 0) && (product_name.length > 0) && (company_email.length > 0) && re.test(company_email) )
    }
    return (
        <form>
            <div className="mb-3">
                <label className="form-label">Company_name</label>
                <input className="form-control" type="text" onChange={handelChange("company_name")} />
            </div>
            <div className="mb-3">
                <label className="form-label">Product Name</label>
                <input className="form-control" type="text" onChange={handelChange("product_name")} />
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input className="form-control" type="email" onChange={handelChange("company_email")} />
            </div>
            <div>
                <label className="form-label">Product Type</label>
                <select
                    value={product_type}
                    onChange={handelChange("product_type")}
                >
                    <option value="type1">type1</option>
                    <option value="type2">type2</option>
                    <option value="type3">type3</option>
                </select>
            </div>
            <button type="submit" className="submit_button" onClick={handelClick} disabled={!checkValidity()}>Submit</button>
        </form>
    );
}

export default ProductGeneration;