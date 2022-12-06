import React, { Component } from 'react'
import DanhSachSanPham from './DanhSachSanPham'
import GioHang from './GioHang'

export default class BaiTapGioHang extends Component {

    state = {
        gioHang: [
            { maSP: 1, tenSP: 'I phone X', giaBan: 2000, hinhAnh: './img/sp_iphoneX.png', soLuong: 10 }
        ]
    }

    xoaGioHang = (maSPClick) => {
        console.log(maSPClick)
        //Cách 1:
        let gioHang = this.state.gioHang;
        let index = gioHang.findIndex(sp => sp.maSP == maSPClick);
        if(index !== -1){
            gioHang.splice(index,1);
        }
        //cách 2:
        // gioHang = gioHang.filter(sp => sp.maSP !== maSPClick);
        //setState
        this.setState({
            gioHang:gioHang
        })
    }

    themGioHang = (spClick) => {
        spClick = {...spClick,soLuong:1};

        console.log(spClick);
        let gioHang = this.state.gioHang;
        //Xét sản phẩm được có trong giỏ hàng hay chưa 
        let spGH = gioHang.find(sp => sp.maSP === spClick.maSP);
        if(spGH){
            spGH.soLuong = spGH.soLuong + 1;
        }else {
            gioHang.push(spClick);
        }

        //setState 
        this.setState({
            gioHang: gioHang
        })
    }

    render() {
        /*
            + Chia component khi nào ? 
            + yếu tố 1: Component đó tái sử dụng nhiều lần trên nhiều nơi (page,template,project khác ...) khác nhau
            + yếu tố 2: ví dụ component có nội dung html quá dài hơn 1000 dòng trên 1 file => chia component (là component chỉ sử dụng cho file này thôi). Không chia component quá nhỏ cho trường hợp này tối đa 3 cấp
        */
        return (
            <div className='container'>
                <h3 className='text-center mt-2'>Bài tập giỏ hàng</h3>
                <GioHang gioHang={this.state.gioHang} xoaGioHang={this.xoaGioHang}/>
                <DanhSachSanPham themGioHang={this.themGioHang} />
                {/* <button>Thêm giỏ hàng</button> */}
            </div>
        )
    }
}
