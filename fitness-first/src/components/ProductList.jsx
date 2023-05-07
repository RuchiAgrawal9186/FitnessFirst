import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import styled from "styled-components";
import { getData } from "../Redux/DataReducer/action";
import { useLocation, useSearchParams } from "react-router-dom";
import Spinner from "./spinner/Spinner";

const ProductList = () => {
  const products = useSelector((store) => store.dataReducer.products);
  const isLoading= useSelector((store) => store.dataReducer.isLoading);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  // console.log(searchParams.getAll("gender"))

  const location = useLocation();

  useEffect(() => {
    let params = {
      // gender:searchParams.getAll("gender"),
      category: searchParams.getAll("category"),
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order"),
        _page: searchParams.get('page'),
        _limit: searchParams.get('limit'),
    };
    dispatch(getData(params));
  }, [location.search]);

  return (
    <>
    {
      isLoading? <Spinner/>:<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-4">
      {products.length > 0 &&
        products.map((el) => <Card key={el.id} {...el} />)}
    </div>
    }

   </>
  );
};

export default ProductList;
