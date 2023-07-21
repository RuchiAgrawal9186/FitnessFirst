import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialCategory = searchParams.getAll("category");

  const [category, selectCategory] = useState(initialCategory || []);

  const initialOrder = searchParams.get("order");
  const [order, setOrder] = useState(initialOrder || "");

  const initialLimit = searchParams.get("limit");
  const [limit, setLimit] = useState(initialLimit || 6);

  const initialPage = searchParams.get("page");
  const [page, setPage] = useState(initialPage || 1);

  useEffect(() => {
    let params = {
      category,
    };
    order && (params.order = order);
    page && (params.page = page);
    limit && (params.limit = limit);
    setSearchParams(params);
  }, [category, order, page]);

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

  const handleOrder = (e) => {
    const { value } = e.target;
    setOrder(value);
  };

  const handleNext = () => {
    setPage((p) => +p + 1);
  };
  const handlePrev = () => {
    setPage((p) => +p - 1);
  };

  return (
    <div className="flex flex-col justify-center items-start pt-4 p-1 bg-zinc-400 h-full rounded-3xl m-[auto] ">
      <h3 className="font-semibold">Filter By Category</h3>
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
        <br />
        <br />
        <h3 className="font-semibold">Sort By Price</h3>
      </div>
      <div className="flex flex-col">
        <div onChange={handleOrder}>
          <input
            name="sort"
            type="radio"
            id="asc"
            value={"asc"}
            defaultChecked={order === "asc"}
          />
          <label htmlFor="asc">Ascending</label>
        </div>
        <div onChange={handleOrder}>
          <input
            type="radio"
            name="sort"
            id="desc"
            value={"desc"}
            defaultChecked={order === "desc"}
          />
          <label htmlFor="desc">descending</label>
        </div>
      </div>
      <div className=" flex flex-col md:flex-row mt-6">
        <button disabled={page <= 1} onClick={handlePrev}>
          Prev
        </button>
        <h3 className="m-3">Page: {page}</h3>
        <button disabled={page >= 4} onClick={handleNext}>
          Next
        </button>
      </div>
      <br />
    </div>
  );
};

export default Sidebar;
