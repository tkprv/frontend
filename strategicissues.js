import 'primeicons/primeicons.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.css'
import 'primeflex/primeflex.css'
import { Button } from 'primereact/button';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext';

const StrategicIssues = () => {
    const [person, setPerson] = useState([])
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');
    const [value5, setValue5] = useState('');
    const [value6, setValue6] = useState('');
    const [value7, setValue7] = useState('');
    useEffect(() => {
        axios
          .get("http://localhost:3001/person",{})
          .then((res) => {
            setPerson(res.data)
        })
          .catch((error) => {
            console.log(error)
          });
      }, []);

      console.log("11111",person)


        
    return (
        <div align='left'>
            <div className="field col-12 md:col-6"style={{ marginTop: '2em' }} >
                <h4>แผนยุทธศาสตร์</h4>
                   <div className="field col-12 md:col-6">
                        <span>
                            <Dropdown value={value1} style={{ width: '30em' }} onChange={(e) => setValue1(e.target.value)} placeholder="-เลือก-" />
                        </span>
                    </div>
                    <div align='left'>
                        <hr width="1100"></hr>
                    </div>
                    <div className="field col-12 md:col-6">
                        <h4>ประเด็นยุทธศาสตร์</h4>
                        <InputText value={value2} style={{ width: '30em' }} onChange={(e) => setValue2(e.target.value)} placeholder="ประเด็นยุทธศาสตร์" />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button label="เพิ่ม" className="p-button-success" />
                        &nbsp;&nbsp;<Button label="แก้ไข" className="p-button-success" />
                    </div>
                    <div className="field col-12 md:col-6">
                        <h4>เป้าประสงค์</h4>
                        <InputText value={value3} style={{ width: '30em' }} onChange={(e) => setValue3(e.target.value)} placeholder="เป้าประสงค์" />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button label="เพิ่ม" className="p-button-success" />
                        &nbsp;&nbsp;<Button label="แก้ไข" className="p-button-success" />
                    </div>
                    <div className="field col-12 md:col-6">
                        <h4>ตัวชี้วัด</h4>
                        <InputText value={value4} style={{ width: '30em' }} onChange={(e) => setValue4(e.target.value)} placeholder="ตัวชี้วัด" />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button label="เพิ่ม" className="p-button-success" />
                        &nbsp;&nbsp;<Button label="แก้ไข" className="p-button-success" />
                    </div>
                    <div className="field col-12 md:col-6">
                        <h4>หน่วยนับ</h4>
                        <InputText value={value5} style={{ width: '30em' }} onChange={(e) => setValue5(e.target.value)} placeholder="หน่วยนับ" />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button label="เพิ่ม" className="p-button-success" />
                        &nbsp;&nbsp;<Button label="แก้ไข" className="p-button-success" />
                    </div>
                    <div className="field col-12 md:col-6">
                        <h4>ค่าเป้าหมาย</h4>
                        <InputText value={value6} style={{ width: '30em' }} onChange={(e) => setValue6(e.target.value)} placeholder="ค่าเป้าหมาย" />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button label="เพิ่ม" className="p-button-success" />
                        &nbsp;&nbsp;<Button label="แก้ไข" className="p-button-success" />
                    </div>
                    <div className="field col-12 md:col-6">
                        <h4>กลยุทธ์</h4>
                        <InputText value={value7} style={{ width: '30em' }} onChange={(e) => setValue7(e.target.value)} placeholder="กลยุทธ์" />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button label="เพิ่ม" className="p-button-success" />
                        &nbsp;&nbsp;<Button label="แก้ไข" className="p-button-success" />
                    </div>
                    <div align='left'>
                        <hr width="1100"></hr>
                    </div>
            </div>
        </div>
    );
}

export default StrategicIssues