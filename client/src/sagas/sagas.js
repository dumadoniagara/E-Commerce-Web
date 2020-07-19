import { all, takeEvery, put, call } from 'redux-saga/effects';
import * as actions from '../actions';
import axios from 'axios';

const API_URL = 'http://localhost:3001/api/'
const request = axios.create({
   baseURL: API_URL,
   timeout: 1000
});
const PATH = 'product'

const read = async (path) => {
   await request.get(path)
      .then(response => {
         console.log('response fetch data from API in sagas:', response.data)
         return response.data;
      })
      .catch(err => { throw err })
}

function* loadProduct() {
   try {
      const data = yield call(read, PATH)
      yield put(actions.loadProductSuccess(data));
   }
   catch (error) {
      yield put(actions.loadProductFail());
   }
}


export default function* rootSaga() {
   yield all([
      takeEvery('LOAD_PRODUCT', loadProduct)
   ]);
}
