
import ApiHelper from 'service/services';
import { useState } from "react";
import { useEffect } from "react";
const CounterUpContainer = () => {
   const [countUp,setCountUp]= useState({});
  
   useEffect(()=>{
    getCountUp();
   
},[]);
const getCountUp = async ()=>{
    try {
        const response = await ApiHelper.get({ path:'home-config', params: {}});
        
        if(response.success){
            setCountUp(response.data)
        }
    } catch (error) {
        console.log('error');
    }
}
    return (
        
        <div className="counterup_aera d-flex flex-wrap pt-100 pb-100">
              <div className="counterup_text  mb-lm-30px">
                        <h3 className="counterup">{countUp?.content?.thong_ke_khoi_1?.number}</h3>
                        <p>
                        <i className="las la-user" />
                        </p>
                        <p>{countUp?.content?.thong_ke_khoi_1?.name}</p>
                </div>
                    <div className="counterup_text  mb-lm-30px">
                        <h3 className="counterup">{countUp?.content?.thong_ke_khoi_2?.number}</h3>
                        <p>
                        <i className="las la-ambulance" />
                        </p>
                        <p>{countUp?.content?.thong_ke_khoi_2?.number}</p>
                    </div>
                    <div className="counterup_text ">
                        <h3 className="counterup">{countUp?.content?.thong_ke_khoi_3?.number}</h3>
                        <p>
                        <i className="lab la-firefox" />
                        </p>
                        <p>{countUp?.content?.thong_ke_khoi_3?.number}</p>
                    </div>
                    <div className="counterup_text ">
                        <h3 className="counterup">{countUp?.content?.thong_ke_khoi_4?.number}</h3>
                        <p>
                        <i className="lab la-github-alt" />
                        </p>
                        <p>{countUp?.content?.thong_ke_khoi_4?.number}</p>
                    </div>
        </div>
    )
}
export default CounterUpContainer;