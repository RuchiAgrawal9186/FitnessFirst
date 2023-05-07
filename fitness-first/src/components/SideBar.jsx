import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialGender = searchParams.getAll("gender");
  const [gender, selectGender] = useState(initialGender || []);
  const initialCategory = searchParams.getAll("category");
  
  const [category, selectCategory] = useState(initialCategory || []);

  const initialOrder = searchParams.get("order")
  const [order, setOrder]= useState(initialOrder ||'')

  const initialLimit = searchParams.get("limit");
  const [limit, setLimit]  = useState(initialLimit || 6)

  const initialPage = searchParams.get("page");
  const [page, setPage]  = useState(initialPage || 1)



  useEffect(() => {
    let params = {
      gender,
      category,
    };
    order && (params.order =order)
    page && (params.page=page)
    limit && (params.limit=limit)
    setSearchParams(params);
  }, [gender, category, order,page]);

  // const handleGender = (e) => {
  //   const { value } = e.target;
  //   let newGender = [...gender];
  //   if (newGender.includes(value)) {
  //     newGender = newGender.filter((el) => el !== value);
  //   } else {
  //     newGender.push(value);
  //   }
  //   selectGender(newGender);
  // };

  const handleCategory = (e) => {
    const { value } = e.target;
    let newCategory = [...category];
    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((el) => el !== value);
    } else {
      newCategory.push(value);
    }
    selectCategory(newCategory);
  };



       

  // return (
  //   <div>
  //   {/* <h3>Filter by Gender</h3>
  //   <div>
  //       <input type="checkbox" value={"male"}onChange={handleGender} checked={gender.includes("male")}/>
  //       <label>Men</label>
  //   </div>
  //   <div>
  //       <input type="checkbox" value={"female"}onChange={handleGender} checked={gender.includes("female")}/>
  //       <label>woman</label>
  //   </div>
  //   <div>
  //       <input type="checkbox" value={"kids"}onChange={handleGender} checked={gender.includes("kids")}/>
  //       <label>kids</label>
  //   </div>
  //   <br/> */}

  //   <h3>Filter by Category</h3>
  //   <div>
  //       <input type="checkbox" value={"Stretch"} onChange={handleCategory} checked={category.includes("Stretch")}/>
  //       <label>Stretch</label>
  //   </div>
  //   <div>
  //       <input type="checkbox" value={"strength"} onChange={handleCategory} checked={category.includes("strength")}/>
  //       <label>strength</label>
  //   </div>
  //   {/* <div>
  //       <input type="checkbox" value={"shoes"} onChange={handleCategory} checked={category.includes("shoes")}/>
  //       <label>shoes</label>
  //   </div> */}
  //   <br/>

  //   <h3>sort by price</h3>
  //   <div onChange={handleSort}>
  //       <input type="radio" name="order" value={"asc"} defaultChecked={order==="asc"}/>
  //       <label>Ascending</label>
  //       <input type="radio" name="order" value={"desc"} defaultChecked={order==="desc"}/>
  //       <label>Descending</label>
  //   </div>

  //   <br/>

  //  <h3>page no {page}</h3>
  //   <button onClick={() => setpage(page-1)}>prev</button>
  //   <button onClick={() => setpage(page+1)}>next</button>    
  //   </div>
  // )
  const handleOrder = (e)=>{
const {value} = e.target
setOrder(value)
}

 const handleNext = ()=>{
    setPage(p=>p+1)
  }
  const handlePrev = ()=>{
    setPage(p=>p-1)
  }


 return (
    <div>
      <h3>Filter</h3>
      {/* <div>
        <input
          value={"female"}
          onChange={handleGender}
          type="checkbox"
          checked={gender.includes("female")}
        ></input>
        <label>Women</label>
      </div>
      <div>
        <input
          value={"men"}
          onChange={handleGender}
          type="checkbox"
          checked={gender.includes("men")}
        ></input>
        <label>Men</label>
      </div>
      <div>
        <input
          value={"kids"}
          onChange={handleGender}
          type="checkbox"
          checked={gender.includes("kids")}
        ></input>
        <label>Kids</label>
      </div> */}
      <br />
      <br />
      <h3>Filter By Category</h3>
      <div>
        <input
          value={"strength"}
          onChange={handleCategory}
          type="checkbox"
          checked={category.includes("strength")}
        ></input>
        <label>Strength</label>
      </div>
      <div>
        <input
          value={"Stretch"}
          onChange={handleCategory}
          type="checkbox"
          checked={category.includes("Stretch")}
        ></input>
        <label>Stretch</label>
      </div>
      <div>
        <input
          value={"shoees"}
          onChange={handleCategory}
          type="checkbox"
          checked={category.includes("shoees")}
        ></input>
        <label>Shoees</label>
        <br />
        <br />
        <h3>Sort By Price</h3>
      </div>
      <div>
        <div onChange={handleOrder}>
          <input name="sort" type="radio" id="asc" value={'asc'} defaultChecked={order==="asc"} />
          <label htmlFor="asc">Ascending</label>
        </div>
        <div onChange={handleOrder}>
          <input type="radio" name="sort" id="desc" value={'desc'} defaultChecked={order==="desc"} />
          <label htmlFor="desc">descending</label>
        </div>
      </div>
      <div>
        <button disabled={page<=1} onClick={handlePrev}>Prev</button>
        <h3>{page}</h3>
        <button disabled={page>=4} onClick={handleNext}>Next</button>

      </div>
    </div>
  );
    }

export default Sidebar;
