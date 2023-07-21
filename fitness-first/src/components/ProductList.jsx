import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { getData } from "../Redux/DataReducer/action";
import { useLocation, useSearchParams } from "react-router-dom";
import Spinner from "./spinner/Spinner";

const ProductList = () => {
  const products = useSelector((state) => state.dataReducer.products);
  const isLoading = useSelector((state) => state.dataReducer.isLoading);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const location = useLocation();
  let params = {
    category: searchParams.getAll("category"),
    _sort: searchParams.get("order") && "price",
    _order: searchParams.get("order"),
    _page: searchParams.get("page") || 1,
    _limit: searchParams.get("limit") || 6,
  };
  useEffect(() => {
    dispatch(getData(params));
  }, [location.search]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-4">
          {products.length > 0 &&
            products.map((el) => <Card key={el.id} {...el} />)}
        </div>
      )}
    </>
  );
};

export default ProductList;
