import { all, takeEvery, put, call } from 'redux-saga/effects';
import * as actions from '../actions';
import axios from 'axios';

const API_URL = 'http://localhost:3001/api/'
const request = axios.create({
   baseURL: API_URL,
   timeout: 1000
});

const PATH = 'product';

const read = async (path) =>
   await request.get(path)
      .then(response => {
         return response.data
      })
      .catch(err => { throw err })

const post = async (path, formPost) =>
   await request.post(path, { ...formPost })
      .then(response => {
         console.log('data masuk ke api sihh')
         return response.data
      })
      .catch(err => { throw err })


function* loadProduct() {
   try {
      const data = yield call(read, PATH);
      yield put(actions.loadProductSuccess(data));
   }
   catch (error) {
      yield put(actions.loadProductFail());
   }
}

function* postProduct(payload) {
   console.log('payload sagas:', payload)
   const { title, rate, description, price, brand, detailProduct, category } = payload
   const formPost = { title, rate, description, price, brand, detailProduct, category }
   yield put(actions.postProductRedux(title, rate, description, price, brand, detailProduct, category));
   try {
      const data = yield call(post, PATH, formPost);
      yield put(actions.postProductSuccess(data));
      // history.pushState('/')
   }
   catch (error) {
      yield put(actions.postProductFail());
   }
}


export default function* rootSaga() {
   yield all([
      takeEvery('LOAD_PRODUCT', loadProduct),
      takeEvery('POST_PRODUCT', postProduct)
   ]);
}
