import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './components/Card';
import Demo from './components/Demo';
import HomeLayout from './components/HomeLayout/HomeLayout';
import DataBinding from './databinding/DataBinding';
import HandleEvent from './handleEvent/HandleEvent';
import DemoLogin from './State/DemoLogin';
//import css: Ảnh hưởng toàn bộ ứng dụng
import './index.scss';
import TangGiamFontSize from './State/TangGiamFontSize/TangGiamFontSize';
import DemoProps from './props/DemoProps/DemoProps';
import BaiTapShop from './props/BaiTapShop/BaiTapShop';
import BaiTapXemChiTiet from './props/BaiTapXemChiTiet/BaiTapXemChiTiet';
//Cấu hình react router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import HomeTemplate from './templates/HomeTemplate';
import Page404 from './Pages/Page404/Page404';
import BaiTapGioHang from './Pages/BaiTapGioHang/BaiTapGioHang';
import ReactForm from './Pages/Form/ReactForm';
import ReactLifeCycle from './Pages/ReactLifeCycle/ReactLifeCycle';
import DemoRedux from './Pages/DemoRedux/DemoRedux';

// Cấu hình redux store
import { Provider }  from 'react-redux';
import { store } from './redux/configStore';
import BaiTapGame from './Pages/DemoRedux/BaiTapGame/BaiTapGame';
import BaiTapReactFormValidation from './Pages/BaiTapReactFormValidation/BaiTapReactFormValidation';
import BaiTapBurger from './props/BaiTapBurger/BaiTapBurger';


const root = ReactDOM.createRoot(document.getElementById('root'));

//JSX 
root.render(
  <>
  <Provider store={store}>
  <BrowserRouter>
      <Routes>
        <Route path='' element={<HomeTemplate />}>
          <Route index element={<Home />} ></Route>
          <Route path='home' element={<Home />} ></Route>
          <Route path='register' element={<Register />} ></Route>
          <Route path='login' element={<Login />} ></Route>
          <Route path='btgiohang' element={<BaiTapGioHang />} ></Route>
          <Route path='form' element={<ReactForm />} ></Route>
          <Route path='reactlifecycle' element={<ReactLifeCycle />}></Route>
          <Route path='redux' element={<DemoRedux />} ></Route>
          <Route path='demogame' element={<BaiTapGame />} ></Route>
          <Route path='reactformvalidation' element={<BaiTapReactFormValidation />} ></Route>
          <Route path='baitapburger' element={<BaiTapBurger/>} ></Route>
          {/* <Route path='*' element={<Page404 />}></Route> */}
          <Route path='*' element={<Navigate to="" />}></Route>
 

        </Route>

      </Routes>
    </BrowserRouter>
  </Provider>
  
  </>

)