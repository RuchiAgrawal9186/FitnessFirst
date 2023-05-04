import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Sidebar = () => {
    const [searchparam,setsearchparams] = useSearchParams();
    const initialorder = searchparam.get("order")
    const initialGender = searchparam.getAll("gender")
    const initialCategory = searchparam.getAll("category")
    const initialpage = searchparam.getAll("page")
    const [gender,setgender] = useState(initialGender || [])
    const [page,setpage] = useState(+initialpage || 1) 
    const [order,setOrder] = useState(initialorder || "")
    const [category,setcategory] = useState(initialCategory || [])
     // its used fot to despaly in url with key and value

    
    useEffect(()=>{
        let params = {
            gender,
            category,
            page,
            
        }
        order && (params.order= order)
        setsearchparams(params)
    },[gender,category,order,page])

    // this function is store selected values in arrau format
    const handleGender = (e) =>{
        const  {value} = e.target

        let  newGender = [...gender]
        
        if(newGender.includes(value))
        {
            newGender = newGender.filter((el)=> el !==value)
        }
        else
        {
            newGender.push(value)
        }
      setgender(newGender)
    }


    const handleCategory = (e) =>{
        const {value} = e.target

        let newCategory = [...category]

        if(newCategory.includes(value))
        {
            newCategory = newCategory.filter((el)=> el!==value)
        }
        else
        {
            newCategory.push(value)
        }
        setcategory(newCategory)
    }

    const handleSort = (e) =>{
        const {value} = e.target

        setOrder(value)
    }

  return (
    <div>
    <h3>Filter by Gender</h3>
    <div>
        <input type="checkbox" value={"male"}onChange={handleGender} checked={gender.includes("male")}/>
        <label>Men</label>
    </div>
    <div>
        <input type="checkbox" value={"female"}onChange={handleGender} checked={gender.includes("female")}/>
        <label>woman</label>
    </div>
    <div>
        <input type="checkbox" value={"kids"}onChange={handleGender} checked={gender.includes("kids")}/>
        <label>kids</label>
    </div>
    <br/>

    <h3>Filter by Category</h3>
    <div>
        <input type="checkbox" value={"top-wear"} onChange={handleCategory} checked={category.includes("top-wear")}/>
        <label>Top were</label>
    </div>
    <div>
        <input type="checkbox" value={"bottom-wear"} onChange={handleCategory} checked={category.includes("bottom-wear")}/>
        <label>Bottom were</label>
    </div>
    <div>
        <input type="checkbox" value={"shoes"} onChange={handleCategory} checked={category.includes("shoes")}/>
        <label>shoes</label>
    </div>
    <br/>

    <h3>sort by price</h3>
    <div onChange={handleSort}>
        <input type="radio" name="order" value={"asc"} defaultChecked={order==="asc"}/>
        <label>Ascending</label>
        <input type="radio" name="order" value={"desc"} defaultChecked={order==="desc"}/>
        <label>Descending</label>
    </div>

    <br/>

   <h3>page no {page}</h3>
    <button onClick={() => setpage(page-1)}>prev</button>
    <button onClick={() => setpage(page+1)}>next</button>    
    </div>
  )
}

export default Sidebar