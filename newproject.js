import 'primeicons/primeicons.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.css'
import 'primeflex/primeflex.css'
import { Button } from 'primereact/button';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';

const Newproject = () => {
    const [person, setPerson] = useState([])
    const [report, setReport] = useState('');
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');
    const [value5, setValue5] = useState('');
    const [value6, setValue6] = useState('');
    const [value7, setValue7] = useState('');
    const [value8, setValue8] = useState('');
    const [value9, setValue9] = useState('');
    const [value10, setValue10] = useState('');
    const [value11, setValue11] = useState('');
    const [value12, setValue12] = useState('');
    const [value13, setValue13] = useState('');
    const [value14, setValue14] = useState('');
    const [value15, setValue15] = useState('');
    const [value16, setValue16] = useState('');
    const [value17, setValue17] = useState('');
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
                <h4>สร้างโครงการใหม่</h4>
                <div align='left'>
                    <hr width="1100"></hr>
                </div>
                   <div className="field col-12 md:col-6">
                        <h4>ปีงบประมาณ</h4>
                        <span>
                            <Dropdown value={value1} style={{ width: '40em' }} onChange={(e) => setValue1(e.target.value)} placeholder="-เลือก-" />
                        </span>
                    </div>
                    <div className="field col-12 md:col-6">
                        <h4>ชื่อโครงการ</h4>
                        <InputText value={value2} style={{ width: '50em' }} onChange={(e) => setValue2(e.target.value)} placeholder="ชื่อโครงการ" />
                    </div>
                    <div className="field col-12 md:col-6">
                        <h4>หน่วยงานที่รับผิดชอบโครงการ</h4>
                        <InputText value={value3} style={{ width: '50em' }} onChange={(e) => setValue3(e.target.value)} placeholder="หน่วยงานที่รับผิดชอบโครงการ" />
                    </div>
                    <div className="field col-12 md:col-6">
                        <h4>ผู้รับผิดชอบโครงการ</h4>
                        <span>
                            <Dropdown value={value4} style={{ width: '40em' }} onChange={(e) => setValue4(e.target.value)} placeholder="-เลือก-" />
                        </span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button label="เพิ่ม" className="p-button-success" />
                    </div>
                    <div className="field col-12 md:col-6">
                        <h4>แผนยุทธศาสตร์</h4>
                        <span>
                            <Dropdown value={value5} style={{ width: '40em' }} onChange={(e) => setValue5(e.target.value)} placeholder="-เลือก-" />
                        </span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button label="เพิ่ม" className="p-button-success" />
                    </div>
                    <div className="field col-12 md:col-6">
                        <h4>ประเด็นยุทธศาสตร์</h4>
                        <span>
                            <Dropdown value={value6} style={{ width: '40em' }} onChange={(e) => setValue6(e.target.value)} placeholder="-เลือก-" />
                        </span>
                    </div>
                    <div className="field col-12 md:col-6">
                        <h4>เป้าประสงค์</h4>
                        <span>
                            <Dropdown value={value7} style={{ width: '40em' }} onChange={(e) => setValue7(e.target.value)} placeholder="-เลือก-" />
                        </span>
                    </div>
                    <div className="field col-12 md:col-6">
                        <h4>กลยุทธ์</h4>
                        <span>
                            <Dropdown value={value8} style={{ width: '40em' }} onChange={(e) => setValue8(e.target.value)} placeholder="-เลือก-" />
                        </span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button label="เพิ่ม" className="p-button-success" />
                    </div>
                    <div className="field col-12 md:col-6">
                        <h4>ประเภทโครงการ</h4>
                        <span>
                            <Dropdown value={value9} style={{ width: '40em' }} onChange={(e) => setValue9(e.target.value)} placeholder="-เลือก-" />
                        </span>
                    </div>
                    <div className="field col-12 md:col-6">
                        <h4>ลักษณะโครงการ</h4>
                        <span>
                            <Dropdown value={value10} style={{ width: '40em' }} onChange={(e) => setValue10(e.target.value)} placeholder="-เลือก-" />
                        </span>
                    </div>
                    <div className="field col-12 md:col-6">
                        <h4>การบูรณาการโครงการ</h4>
                        <span>
                            <Dropdown value={value10} style={{ width: '40em' }} onChange={(e) => setValue10(e.target.value)} placeholder="-เลือก-" />
                        </span>
                    </div>
                    <div className="field col-12 md:col-6">
                        <h4>หลักการและเหตุผล</h4>
                        <InputTextarea value={value11} onChange={(e) => setValue11(e.target.value)} rows={10} cols={90} autoResize />
                    </div>
                    <div className="field col-12 md:col-6">
                        <h4>วัตุประสงค์</h4>
                        <InputTextarea value={value12} onChange={(e) => setValue12(e.target.value)} rows={10} cols={90} autoResize />
                    </div>
                    <div className="field col-12 md:col-6">
                        <h4>ตัวชี้วัดความสำเร็จระดับโครงการ</h4>
                        <InputTextarea value={value13} onChange={(e) => setValue13(e.target.value)} rows={10} cols={90} autoResize />
                    </div>
                    <div className="field col-12 md:col-6">
                        <h4>กลุ่มเป้าหมาย</h4>
                        <InputTextarea value={value14} onChange={(e) => setValue14(e.target.value)} rows={5} cols={90} autoResize />
                    </div>
                    <div className="field col-12 md:col-6">
                        <h4>ขั้นตอนดำเนินการ</h4>
                        <InputTextarea value={value15} onChange={(e) => setValue15(e.target.value)} rows={10} cols={90} autoResize />
                    </div>
                    <div className="field col-12 md:col-6">
                        <h4>แหล่งงบประมาณที่ใช้</h4>
                        <span>
                            <Dropdown value={value16} style={{ width: '40em' }} onChange={(e) => setValue16(e.target.value)} placeholder="-เลือก-" />
                        </span>
                    </div>
                    <div className="field col-12 md:col-6">
                        <h4>ประโยชน์ที่คาดว่าจะได้รับ</h4>
                        <InputTextarea value={value17} onChange={(e) => setValue17(e.target.value)} rows={10} cols={90} autoResize />
                    </div>
                    <div className="field col-12 md:col-6">
                        <h4>เอกสาร TOR/เอกสารที่เกี่ยวข้องกับโครงการ</h4>
                        <div className="field-radiobutton">
                            <RadioButton inputId="Report" name="report" value="มี" onChange={(e) => setReport(e.value)} checked={report === 'มี'} />
                            <label htmlFor="Report">มี</label>
                        </div>
                        <div className="field-radiobutton">
                            <RadioButton inputId="report" name="report" value="ไม่มี" onChange={(e) => setReport(e.value)} checked={report === 'ไม่มี'} />
                            <label htmlFor="report">ไม่มี</label>
                </div>
                </div>
                <div align='left'>
                    <hr width="1100"></hr>
                </div>
                <Button label="ส่ง" className="p-button-warning" />
                &nbsp;&nbsp;&nbsp;<Button label="ยกเลิก" className="p-button-danger" />
            </div>
        </div>
    );
}

export default Newproject