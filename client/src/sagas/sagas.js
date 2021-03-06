import { all, takeEvery, put, call } from 'redux-saga/effects';
import * as actions from '../actions';
import axios from 'axios';

const API_URL = 'http://localhost:3001/api/'
const request = axios.create({
   baseURL: API_URL,
   timeout: 1000
});

const PATH = 'product';

const read = async (path, params) =>
   await request.get(path, params)
      .then(response => {
         return response.data
      })
      .catch(err => { throw err })

const post = async (path, params) =>
   await request.post(path, params)
      .then(response => {
         return response.data
      })
      .catch(err => { throw err })

const detail = async (path, params) =>
   await request.get(path)
      .then(response => {
         return response.data
      })
      .catch(err => { throw err })

const postTestimoni = async (path, params) =>
   await request.put(path, params)
      .then(response => {
         return response.data
      })
      .catch(err => { throw err })


function* loadProduct(payload) {
   const { page } = payload;
   try {
      const data = yield call(read, PATH, {
         headers: {
            page,
            limit: 4
         }
      })
      console.log('DATA DI LOAD PRODUCT:', data);
      yield put(actions.loadProductSuccess(data));
   }
   catch (error) {
      yield put(actions.loadProductFail());
   }
}

function* postProduct(payload) {
   const { title, rate, description, price, brand, detailProduct, category, file, capacities, color, size, stock, fileId, history } = payload
   const formPost = { title, rate, description, price, brand, detailProduct, category, file, capacities, color, size, stock, fileId }
   const formData = new FormData();
   for (const key in formPost) {
      formData.append(key, formPost[key])
   }
   try {
      const data = yield call(post, PATH, formData, {
         headers: {
            'Content-Type': 'multipart/form-data'
         }
      });
      yield put(actions.postProductSuccess(data));
      history.push('/')
   }
   catch (error) {
      yield put(actions.postProductFail());
   }
}

function* loadDetails(payload) {
   const { id } = payload
   try {
      const data = yield call(detail, `${PATH}/${id}`);
      yield put(actions.loadDetailsSuccess(data));
   }
   catch (error) {
      yield put(actions.loadDetailsFail());
   }
}

function* addTestimonial(payload) {
   const { id, testimoni } = payload
   try {
      const data = yield call(postTestimoni, `${PATH}/${id}`, testimoni);
      console.log(data);
      yield put(actions.addTestimonialSuccess(data));
   }
   catch (error) {
      yield put(actions.addTestimonialFail());
   }
}

export default function* rootSaga() {
   yield all([
      takeEvery('LOAD_PRODUCT', loadProduct),
      takeEvery('POST_PRODUCT', postProduct),
      takeEvery('LOAD_DETAILS', loadDetails),
      takeEvery('ADD_TESTIMONIAL', addTestimonial)
   ]);
}
