import 'primeicons/primeicons.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.css'
import 'primeflex/primeflex.css'
import { Button } from 'primereact/button'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { InputText } from 'primereact/inputtext';
import { ToggleButton } from 'primereact/togglebutton';
import { Row } from 'primereact/row';

const Strategicplan = () => {
    const [person, setPerson] = useState([])
    const [value1, setValue1] = useState('')
    const [checked1, setChecked1] = useState(false)
    const action = (node, column) => {
        return <div>
            <ToggleButton checked={checked1} onChange={(e) => setChecked1(e.value)} onLabel="เปิด" offLabel="ปิด" onIcon="pi pi-eye" offIcon="pi pi-eye-slash" style={{width: '5em'}} aria-label="Confirmation" />
        </div>;
    }
    const actionTemplate = (node, column) => {
        return <div>
            <Button type="button" icon="pi pi-pencil" className="p-button-warning" style={{ marginRight: '.5em' }}></Button>
            <Button type="button" icon="pi pi-trash" className="p-button-danger" ></Button>
        </div>;
    }
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
                    <div align='left'>
                        <hr width="1100"></hr>
                    </div>
                   <div className="field col-12 md:col-6">
                        <span>
                            <InputText value={value1} style={{ width: '40em' }} onChange={(e) => setValue1(e.target.value)} placeholder="แผนยุทธศาสตร์" />
                        </span>
                            &nbsp;&nbsp;&nbsp;<Button label="เพิ่ม" className="p-button-success" /><br/>
                    </div>
                <div >
                    <DataTable value={person} colGroupMode="colspan" columnResizeMode="fit" showGridlines responsiveLayout="scroll" >
                        <Column field="p_id" header="ลำดับ" style={{width:'3%'}} />
                        <Column field="p_email" header="แผนยุทธศาสตร์" />
                        <Column field={"p_firstname" && "p_lastname"} header="ปีงบประมาณ"/>
                        <Column field="a_name" header="ผ่านมติกรรมการบริหาร"/>
                        <Column field="inventoryStatus" header="ผ่านมติกรรมการประจำ" />
                        <Column body={action} header="สถานะ" style={{ textAlign: 'center', width: '15%' }}/>
                        <Column body={actionTemplate} header="วิธีการ" style={{ textAlign: 'center', width: '15%' }} />
                    </DataTable>
                </div>
            </div>
        </div>
    );
}

export default Strategicplan