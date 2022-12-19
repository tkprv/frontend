import "primeicons/primeicons.css"
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.css"
import "primeflex/primeflex.css"
import { Button } from 'primereact/button'
import React, { useState, useEffect } from "react"
import Logo from '../assets/kmutnblogo.jpg'
import { InputText } from 'primereact/inputtext';
import TreeDemo from "../page/slidebar"

const Login = () => {
  const [selectedKey] = useState();
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  useEffect(()=>{
      console.log('select',typeof selectedKey)
  },[selectedKey])

return (
   
    <div align='center'>
        <div className="grid formgrid" >
            <div className="field col-12 md:col-6">
                <img src={Logo} alt={"Logo"} width="200px" /> 
            </div>
            <div className="field col-12 md:col-6"> 
                <h1>ระบบบริหารและประเมินผลโครงการ</h1>
            </div>
        </div>
            <div className="card text-center" style={{ width: '30em' }}>
            <div className="field col-12 md:col-6"style={{ marginTop: '2em' }} >
                <h4>สำหรับบุคลากรและผู้บริหารในส่วนงาน</h4>
                   <div className="field col-12 md:col-6">
                        <span className="p-input-icon-right">
                            <i className="pi pi-user"/>
                            <InputText value={value1} style={{ width: '20em' }} onChange={(e) => setValue1(e.target.value)} placeholder="ชื่อผู้ใช้งาน" />
                        </span>
                    </div>
                    <div className="field col-12 md:col-6">
                        <span className="p-input-icon-right">
                            <i className="pi pi-lock" />
                            <InputText value={value2} style={{ width: '20em' }} onChange={(e) => setValue2(e.target.value)} placeholder="รหัสผ่าน" />
                        </span>
                    </div>
                    <div align='center'>
                        <hr width="325"></hr>
                    </div>
                    <div className="field col-12 md:col-6">
                        <Button label="เข้าสู่ระบบ" className="p-button-rounded" style={{backgroundColor: 'var(--orange-500)'}}/>
                    </div>
                    <script src="slidebar.js"></script>
                </div>
            </div>
        </div>
  );
};

export default Login
