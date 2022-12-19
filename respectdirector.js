import 'primeicons/primeicons.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.css'
import 'primeflex/primeflex.css'
import { Button } from 'primereact/button';
import {Col} from 'reactstrap'
import React, { useState, useEffect } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import axios from 'axios'

const Respectdirector = () => {
    const [person, setPerson] = useState([])

    const actionTemplate = () => {
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
          </div>
          <br/>
          <div >
                <DataTable value={person} columnResizeMode="fit" showGridlines responsiveLayout="scroll" >
                    <Column field="p_id" header="พิจารณาโครงการ"style={{width:'3%'}} />
                    <Column body={actionTemplate} style={{ textAlign: 'center', width: '15%' }} />
                </DataTable>
            </div>
          </div>
      </Col>
    );
}

export default Respectdirector