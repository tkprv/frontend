import 'primeicons/primeicons.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.css'
import 'primeflex/primeflex.css'
import Logo from '../assets/logo2.png'
import { Button } from 'primereact/button';
import {Row,Col,Container,Alert} from 'reactstrap'
import React, { useState, useEffect } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import DropdownDemo from '../component/search'
import DataTableCrudDemo from '../component/adduser'
import axios from 'axios'


const DataTableColResizeDemo = () => {
    const [person, setPerson] = useState([])

    

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
            
    
      <Col xs='12' >
          <div className = 'text-left'> 
          <div className = 'mt-4' >
            <Row>
                <Col xs='3' >
                    <DropdownDemo/>
                </Col>
                <Col xs='2'>
                    <div className = 'text-left'>                    
                        <Button label="ค้นหา" className="p-button-success" /> 
                    </div>

                </Col>
                <Col xs='7'>
                    <div className = 'text-right'>
                        <DataTableCrudDemo />
                    </div>
                </Col>
            </Row>
            <div/>
          <br/>
          <div >
                <DataTable value={person} columnResizeMode="fit" showGridlines responsiveLayout="scroll" >
                    <Column field="p_id" header="ลำดับ"style={{width:'3%'}} />
                    <Column field="p_email" header="Username" />
                    <Column field={"p_firstname" && "p_lastname"} header="ชื่อ"/>
                    {/* <Column field="p_lastname"    header="นามสกุล"/> */}
                    <Column field="a_name" header="หน่วยงาน" />
                    <Column field="inventoryStatus" header="สิทธิผู้ใช้งาน" />
                    <Column body={actionTemplate} header="แก้ไข" style={{ textAlign: 'center', width: '15%' }} />
                </DataTable>
            </div>
          </div>
          </div>
      </Col>
 

            

    );
}

export default DataTableColResizeDemo 