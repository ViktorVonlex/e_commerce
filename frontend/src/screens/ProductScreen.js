import axios, { Axios } from 'axios';
import React, { useEffect } from 'react';
import { useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/detailsProduct';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating';
import { reducer } from '../reducers/productReducers';

export default function ProductScreen() {
  
  const params = useParams();
  const { id: productId } = params;

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;


  useEffect(() => {
  dispatch(detailsProduct(productId));
  }, [dispatch ,productId]);
  

/*
  const reducer = (state, action) => {
    switch (action.type) {
      case 'FETCH REQUEST':
        return { ...state, loading: true };
      case 'FETCH SUCCESS':
        return { ...state, product: action.payload, loading: false };
      case 'FETCH FAIL':
        return { ...state, error: action.payload, loading: false };
      default:
        return state;
    }
  }

  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: ''
  })

  useEffect(()=> {
    const fetchData = async () => {
      dispatch( {type: 'FETCH REQUEST'});
      try {
        const result = await axios.get(`/api/products/${productId}`);
        dispatch( {type: 'FETCH SUCCESS', payload: result.data});
      } catch (error) {
        dispatch( {type: 'FETCH FAIL', payload: error.message});
      }
    };
    fetchData()
  }, [productId])
  */

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <Link to="/">Back to result</Link>
          <div className="row top">
            <div className="col-2">
              <img
                className="large"
                src={product.image}
                alt={product.name}
              ></img>
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1>{product.name}</h1>
                </li>
                <li>
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  ></Rating>
                </li>
                <li>Pirce : ${product.price}</li>
                <li>
                  Description:
                  <p>{product.description}</p>
                </li>
              </ul>
            </div>
            <div className="col-1">
              <div className="card card-body">
                <ul>
                  <li>
                    <div className="row">
                      <div>Price</div>
                      <div className="price">${product.price}</div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Status</div>
                      <div>
                        {product.countInStock > 0 ? (
                          <span className="success">In Stock</span>
                        ) : (
                          <span className="danger">Unavailable</span>
                        )}
                      </div>
                    </div>
                  </li>
                  <li>
                    <button className="primary block">Add to Cart</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}