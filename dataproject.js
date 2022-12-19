import 'primeicons/primeicons.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.css'
import 'primeflex/primeflex.css'
import { Button } from 'primereact/button'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Row, Col} from 'reactstrap'
import { Dropdown } from 'primereact/dropdown'

const Dataproject = () => {
    const [person, setPerson] = useState([])
    const [value1, setValue1] = useState('')
    const actionTemplate = (node, column) => {
      return <div>
            <Button type="button" icon="pi pi-pencil" className="p-button-warning" style={{ marginRight: '.5em' }}></Button>
            <Button type="button" icon="pi pi-trash" className="p-button-danger" ></Button>
        </div>;
    }
    const action = (node, column) => {
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
            <div className="field col-12 md:col-6"style={{ marginTop: '2em' }}>
              <Row>
                <Col xs='2'>
                <h4>ปีงบประมาณ</h4>
                <Dropdown value={value1} style={{ width: '10em' }} onChange={(e) => setValue1(e.target.value)} placeholder="-เลือก-" />
                </Col>
              </Row>
              </div>
              <div align='left'>
                <hr width="1100"></hr>
              </div>
              <div>
                <DataTable value={person} columnResizeMode="fit" showGridlines responsiveLayout="scroll" >
                  <Column field="p_id" header="ชื่อโครงการ"/>
                  <Column field="p_email" header="สถานะ" />
                  <Column field="p_email" header="สถานะการจัดซื้อจัดจ้าง" />
                  <Column field="a_name" header="รายงานความก้าวหน้า" />
                  <Column field="inventoryStatus" header="วันที่สร้าง" />
                  <Column body={actionTemplate} header="วิธีการ" style={{ textAlign: 'center', width: '15%' }}/>
                  <Column body={action} header="เอกสารประเมินโครงการ" style={{ textAlign: 'center', width: '15%' }}/>
                </DataTable>
              </div>
          </div>
    );
}

export default Dataproject