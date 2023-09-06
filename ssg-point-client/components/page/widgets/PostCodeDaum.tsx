'use client'
import React from 'react'
import DaumPostcode from "react-daum-postcode";

function PostCodeDaum({isView, setIsView, setAddress}: {isView: boolean, setIsView: any, setAddress: React.Dispatch<React.SetStateAction<any>>}) {

    const complete = (data : any) =>{
        // let fullAddress = data.address;
        // let extraAddress = '';

        // if (data.addressType === 'R') {
        //     if (data.bname !== '') {
        //         extraAddress += data.bname;
        //     }
        //     if (data.buildingName !== '') {
        //         extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
        //     }
        //     fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        // }
       
        setAddress(data)
    }

  return (
    <div >
        {
            isView &&
            <DaumPostcode
                className="postmodal"
                autoClose
                onComplete={complete} 
            />
        }
    </div>
  )
}

export default PostCodeDaum