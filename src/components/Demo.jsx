//rfc: react function component
import React from 'react'

export default function Demo() { //Functional component 




    //Lệnh return sẽ chứa giao diện component
    //Lưu ý: Nội dung của component phải được bao phủ bởi 1 thẻ
    //<> </>: Thẻ fragment thẻ vô hình
    return (
        <>
            <button className='btn btn-danger mx-2'>button</button>
            <button className='btn btn-success'>button</button>
        </>
    )
}
