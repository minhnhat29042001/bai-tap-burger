import React, { Component } from 'react'
import TableProduct from './TableProduct';
import axios from 'axios';
export default class ReactForm extends Component {

    state = {
        formValue: {
            id: '1',
            name: 'abc',
            price: '',
            image: '',
            description: '',
            productType: 'phone'
        },
        formError: {
            id: '',
            name: '',
            price: '',
            image: '',
            description: '',
        },
        valid: false,
        arrProduct: [
            { id: '1', name: 'iphone x', image: 'https://i.pravatar.cc?u=1', price: 1000, productType: 'phone', description: 'product 1' },
            { id: '2', name: 'iphone xs', image: 'https://i.pravatar.cc?u=2', price: 2000, productType: 'tablet', description: 'product 2' }
        ]
    }

    handleUpdateProduct = () => {
        console.log('abc');
        //Tìm ra sản phẩm chứa mã tương đương formValue.id
        let { arrProduct, formValue } = this.state;
        let prodUpdate = arrProduct.find(pro => pro.id === formValue.id);

        if (prodUpdate) {
            // prodUpdate.name = formValue.name;
            // prodUpdate.name = formValue.name;
            // prodUpdate.name = formValue.name;
            for (let key in prodUpdate) {
                if (key !== 'id') {
                    prodUpdate[key] = formValue[key];
                }
            }
        }

        //Cập nhật lại state sau khi chỉnh sửa
        this.setState({
            arrProduct: arrProduct
        })

    }

    handleEditProduct = (prodClick) => {
        //Click vào product nào thì state của formvalue sẽ thay đổi giá trị thành product đó
        this.setState({
            formValue: prodClick
        }, () => {
            this.setState({
                valid: this.checkFormValid()
            })
        })

    }


    checkFormValid = () => {
        //return true | false : true khi form hợp lệ, false khi form không hợp lệ
        /*
            form hợp lệ khi: Các trường formError = rỗng, và các trường value tưng ứng phải khác rỗng 
        */
        let { formError, formValue } = this.state;
        for (let key in formError) {
            if (formError[key] !== '' || formValue[key] === '') {
                return false;
            }
        }


        return true;
    }

    handleChangeInput = (e) => {
        /*
            Trên 1 thẻ html sẽ có 2 dạng thuộc tính
            properties : là các thuộc tính có sẵn của thẻ như id, className,name, value,style ...
            attribute (thuộc tính mở rộng): Do mình thêm vào -> không thể dùng dom.thuocTinh => dom.getAttribute('tenAttribute');        
        */

        let { value, name } = e.target; //image, '' | abc
        let dataType = e.target.getAttribute('data-type');
        let dataMaxLength = e.target.getAttribute('data-max-length');
        //Lấy object form value ra xử lý riêng
        let newFormValue = this.state.formValue;
        //dynamic key
        newFormValue[name] = value;

        /*Xử lý cho formError */
        let newFromError = this.state.formError;
        let message = '';
        if (value.trim() === '') {
            message = name + ' cannot be blank !';
        } else {
            if (dataType == 'number') {
                let regexNumber = /^\d+(,\d{1,2})?$/;
                if (!regexNumber.test(value)) {
                    message = name + ' is invalid!';
                }
            }
            if (dataMaxLength !== null && value.length > dataMaxLength) {
                message = name + ` no more than  ${dataMaxLength} character !`;
            }
            // if(dataType == 'email') 
            // {

            // }
        }
        newFromError[name] = message;


        //setState
        this.setState({
            formValue: newFormValue,
            formError: newFromError
        }, () => {

            //Gọi hàm check lỗi sau mỗi lần cập nhật value và error từ người dùng nhập
            this.setState({
                valid: this.checkFormValid()
            })
        })


        console.log(name, value);
    }
    handleSubmit = (e) => {
        //Ngăn sự kiện reload browser
        e.preventDefault();
        if (!this.checkFormValid()) {
            alert('Form is invalid!');
            return; //Nếu form không hợp lệ => không submit
        }
        //Thêm sản phẩm vào arrProduct => cập nhật state arrProduct
        let arrProduct = this.state.arrProduct;
        let newProduct = { ...this.state.formValue };
        arrProduct.push(newProduct);
        //arrPrudct = [{001},{002},{003},{003}]
        this.setState({
            arrProduct: arrProduct
        })
        // console.log('submit',this.state.formValue);
    }
    handleDelProduct = (idClick) => {
        //Lấy ra các sản phẩm có mã khác sản phẩm mình xoá
        let arrProduct = this.state.arrProduct.filter(prod => prod.id !== idClick);
        //Cập nhật lại state
        this.setState({
            arrProduct: arrProduct
        })
    }

    render() {
        let { formValue } = this.state;

        return (
            <>
                <form className='container' onSubmit={this.handleSubmit}>
                    <h3>Create product</h3>
                    <div className='card'>
                        <div className='card-header'>
                            Product info
                        </div>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-6'>
                                    <div className='form-group'>
                                        <p>id</p>
                                        <input value={formValue.id} data-max-length="6" className='form-control' name="id" onInput={this.handleChangeInput} />
                                        {this.state.formError.id && <div className='alert alert-danger mt-2'>{this.state.formError.id}</div>}
                                    </div>
                                    <div className='form-group'>
                                        <p>name</p>
                                        <input value={formValue.name} className='form-control' name="name" onInput={this.handleChangeInput} />
                                        {this.state.formError.name && <div className='alert alert-danger mt-2'>{this.state.formError.name}</div>}
                                    </div>
                                    <div className='form-group'>
                                        <p>price</p>
                                        <input value={formValue.price} data-type="number" className='form-control' name="price" onInput={this.handleChangeInput} />
                                        {this.state.formError.price && <div className='alert alert-danger mt-2'>{this.state.formError.price}</div>}
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className='form-group'>
                                        <p>image</p>
                                        <input
                                            value={formValue.image} className='form-control' name="image" onInput={this.handleChangeInput} />
                                        {this.state.formError.image && <div className='alert alert-danger mt-2'>{this.state.formError.image}</div>}
                                    </div>
                                    <div className='form-group'>
                                        <p>productType</p>
                                        <select value={formValue.productType} name="productType" className='form-control' onInput={this.handleChangeInput}>
                                            <option value="phone">phone</option>
                                            <option value="tablet">tablet</option>
                                            <option value="laptop">laptop</option>
                                        </select>
                                    </div>
                                    <div className='form-group'>
                                        <p>description</p>
                                        <input value={formValue.description} className='form-control' name="description" onInput={this.handleChangeInput} />
                                        {this.state.formError.description && <div className='alert alert-danger mt-2'>{this.state.formError.description}</div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card-footer'>
                            <button type='submit' className='btn btn-success m-2' disabled={!this.state.valid}>Create</button>
                            <button onClick={() => {
                                this.handleUpdateProduct()
                            }} type='button' className='btn btn-primary m-2' disabled={!this.state.valid}>Update</button>
                        </div>
                    </div>
                </form>
                <div className='container mt-2'>
                    <TableProduct handleEditProduct={this.handleEditProduct} arrProduct={this.state.arrProduct} handleDelProduct={this.handleDelProduct} />
                </div>
            </>
        )
    }



    componentDidMount() {
        //Gọi api sau khi render thực thi xong (tại sao gọi ở didmount vì didmount chỉ chạy 1 lần duy nhất sau khi render)

        let promise = axios({
            url:'https://svcy.myclass.vn/api/Product/GetAll',
            method:'GEt'
        });

        promise.then(result => {
            //renderTableSinhVien(); => thay đổi state 
            this.setState({
                arrProduct: result.data
            })
        })
    }
}
