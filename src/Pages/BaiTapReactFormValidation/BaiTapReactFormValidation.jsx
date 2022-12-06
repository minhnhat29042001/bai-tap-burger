import React, { Component } from 'react'
import TableStudent from './TableStudent';

export default class BaiTapReactFormValidation extends Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        this.state ={
            formValue:{
                id:'',
                name:'',
                phone:'',
                email:''
            },
            formError:{
                id:'',
                name:'',
                phone:'',
                email:''
            },
            valid:false,
            arrSinhVien:[
                {id:'1',name:'Nhật Huỳnh',phone:'0916854821',email:'test@gmail.com'},
                {id:'2',name:'Long Huỳnh',phone:'0916854821',email:'test2@gmail.com'}
            ]
        }
    }

    static getDerivedStateFromProps(newProps, currentState) {
        //Hàm này dùng để xử lý state trước khi render ra giao diện
        console.log('getDerivedStateFromProps')
        return null; //return null là state giữ nguyên
    }

    shouldComponentUpdate(newProps, newState) {
        console.log('shouldComponentUpdate');
        return true;
    }
       
    

    
    

    handleUpdateSV =()=>{
            let {arrSinhVien,formValue} =this.state;
            let svUpdate =arrSinhVien.find(sv=> sv.id=== formValue.id);
            if(svUpdate){
                svUpdate.name=formValue.name;
                svUpdate.phone=formValue.phone;
                svUpdate.email=formValue.email;
                for(let key in svUpdate){
                    if(key!=='id'){
                        svUpdate[key]=formValue[key]
                    }
                }
            }
            this.setState({
                arrSinhVien:arrSinhVien
            })
    }
    handleEditSV =(svClick)=>{
        this.setState({
            formValue:svClick
        },()=>{
            this.setState({
                valid:this.checkFormValid()
            })
        })
    }
    checkFormValid=()=>{
        let {formError,formValue}=this.state;
        for(let key in formError){
            if(formError[key]!=='' || formValue[key]===''){
                return false;
            }
        }
        return true;
    }

    handleChangeInput =(e)=>{
        let value =e.target.value;
        let name =e.target.name;
        let dataType =e.target.getAttribute('data-type');
        let dataMaxLength = e.target.getAttribute('data-max-length')


        // lấy object formvalue ra
        let newFormValue =this.state.formValue;
        //dynamic key
        newFormValue[name]=value;


        // Xử lý formError
        let newFormError = this.state.formError;
        let message ='';
        if(value.trim()===''){
            message = name+ ' cannot be blank';
        }else{
            if(dataType=='number'){
                let regexNumber = /^\d+(,\d{1,2})?$/;
                if(!regexNumber.test(value)){
                    message = name+' is invalid';
                }
            }
            if (dataMaxLength !== null && value.length > dataMaxLength) {
                message = name + ` no more than  ${dataMaxLength} character !`;
            }
            if(dataType=='email'){
                let regexEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if(!regexEmail.test(value)){
                    message = name+' is valid'
                }
            }
            if(dataType=='text'){
                let regexText=/^[a-zA-Z ]+$/;
                if(!regexText.test(value)){
                    message = name+' is valid'
                }
            }
        }
        newFormError[name]=message;



        // set state
        this.setState({
            formValue:newFormValue,
            formError:newFormError
        },()=>{
            // Gọi hàm check lỗi sau mỗi lần cập nhật value
            this.setState({
                valid:this.checkFormValid()
            })
        })
    
    }

    handleSubmit =(e)=>{
        e.preventDefault();
        if(!this.checkFormValid()){
            alert('Form is invalid')
            return; // Form không hợp lệ => khoo7ng submit
        }
        // thêm sinh viên vào arrSinhVien ==> cập nhật state
        let {arrSinhVien} = this.state;
        let newSinhVien = { ...this.state.formValue };
        arrSinhVien.push(newSinhVien);
        this.setState({
            arrSinhVien:arrSinhVien
        })

    }
    handleDelSinhVien =(idClick)=>{
        let arrSinhVien =this.state.arrSinhVien.filter(sv=>sv.id !== idClick);
        this.setState({
            arrSinhVien:arrSinhVien
        })
    }
  render() {
    let {formValue} =this.state;
    return (
        <>
            <form className='container' onSubmit={this.handleSubmit}>

            <div className='bg-dark text-white mt-5 p-2'>
                <h3>Thông tin sinh viên</h3>
            </div>
            <div className='card'>
            <div className='card-body'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='form-group'>
                            <p>Mã sinh viên</p>
                            <input value={formValue.id}  data-max-length="6" className='form-control' name="id" onInput={this.handleChangeInput}  />
                            {this.state.formError.id && <div className='alert alert-danger mt-2'>{this.state.formError.id}</div>}
                        </div>
                    
                        <div className='form-group'>
                            <p>Số điện thoại</p>
                            <input value={formValue.phone}  data-type="number"
                               className='form-control' name="phone" onInput={this.handleChangeInput }  />
                           {this.state.formError.phone && <div className='alert alert-danger mt-2'>{this.state.formError.phone}</div>}
                        </div>
                 
                    </div>
                    <div className='col-6'>
                    <div className='form-group'>
                            <p>Họ tên</p>
                            <input value={formValue.name} data-type='text' className='form-control' name="name" onInput={this.handleChangeInput}  />
                            {this.state.formError.name && <div className='alert alert-danger mt-2'>{this.state.formError.name}</div>}
                        </div>
                        <div className='form-group'>
                            <p>Email</p>
                            <input value={formValue.email} data-type='email'
                               className='form-control' name="email" onInput={this.handleChangeInput}  />
                                {this.state.formError.email && <div className='alert alert-danger mt-2'>{this.state.formError.email}</div>}
                        </div>
                
                    </div>
                </div>
            </div>
            <div className='card-footer'>
                <button  type='submit' className='btn btn-success m-2' disabled={!this.state.valid} >Thêm sinh viên</button>
                <button onClick={()=>{
                    this.handleUpdateSV()
                }} type='button' className='btn btn-primary m-2' disabled={!this.state.valid} >Cập nhật sinh viên</button>
            </div>
        </div>
            </form>
            <div className='container mt-2'>
                <TableStudent handleEditSV={this.handleEditSV} handleDelSinhVien={this.handleDelSinhVien} arrSinhVien={this.state.arrSinhVien}/>
            </div>
        </>
    
         
           
        
       
      
    )
  }


}
