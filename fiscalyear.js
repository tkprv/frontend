import 'primeicons/primeicons.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.css'
import 'primeflex/primeflex.css'
import { Button } from 'primereact/button';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Dropdown } from 'primereact/dropdown'

const Fiscalyear = () => {
    const [person, setPerson] = useState([])
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
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
                <h4>ปีงบประมาณ</h4>
                    <div align='left'>
                        <hr width="1100"></hr>
                    </div>
                   <div className="field col-12 md:col-6">
                        <span>
                            <Dropdown value={value1} style={{ width: '40em' }} onChange={(e) => setValue1(e.target.value)} placeholder="ปีงบประมาณ" />
                        </span>
                            &nbsp;&nbsp;&nbsp;<Button label="ตั้งค่า" className="p-button-success" /><br/>
                    </div>
                    <div align='left'>
                        <hr width="1100"></hr>
                    </div>
                    <h4>แหล่งงบประมาณ</h4>
                    <div align='left'>
                        <hr width="1100"></hr>
                    </div>
                   <div className="field col-12 md:col-6">
                        <span>
                            <Dropdown value={value2} style={{ width: '40em' }} onChange={(e) => setValue2(e.target.value)} placeholder="แหล่งงบประมาณ" />
                        </span>
                            &nbsp;&nbsp;&nbsp;<Button label="ตั้งค่า" className="p-button-success" /><br/>
                    </div>
                </div>
            </div>
    );
}

export default Fiscalyear