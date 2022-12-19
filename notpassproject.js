import 'primeicons/primeicons.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.css'
import 'primeflex/primeflex.css'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Row, Col} from 'reactstrap'
import { Dropdown } from 'primereact/dropdown'

const Notpassproject = () => {
    const [person, setPerson] = useState([])
    const [value1, setValue1] = useState('')
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
                  <Column field="p_email" header="หมายเหตุ" />
                  <Column field="inventoryStatus" header="วันที่ยืนยันผลการอนุมัติ" />
                  <Column field="inventoryStatus" header="ผู้พิจารณาโครงการ" />
                </DataTable>
              </div>
          </div>
    );
}

export default Notpassproject