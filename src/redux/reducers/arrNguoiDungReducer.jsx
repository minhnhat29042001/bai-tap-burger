// Đối với state là reference value thì khi thay đổi state phải return về state mới bằng cách clone state ra vùng nhớ mới
const stateDefault =[
    {taiKhoan:'khaiDo',matKhau:'123'},
    {taiKhoan:'sangng',matKhau:'321'}

]


export const arrNguoiDungReducer= (state=stateDefault,action)=>{
    switch (action.type){
        case 'THEM_NGUOI_DUNG':{
            state.push(action.payload);
            return [...state];
        }
        default: return state
    }
}