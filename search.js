import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import React, { useState, useEffect} from 'react';
import { Dropdown } from 'primereact/dropdown';
import '../assets/style.css'
import axios from 'axios'

const DropdownDemo = () => {

    const [setLazyItems] = useState([]);
    const [setLazyLoading] = useState(false);
    const [selectedCity1, setSelectedCity1] = useState(null);
    const [position,setPosition] = useState()
    useEffect(() => {
        axios.get("http://localhost:3001/agency")
          .then((res) => {
            setPosition(res.data)
        })
          .catch((error) => {
            console.log(error)
          });
      }, []);
    //console.log("22222",position[0])
    //   position.forEach(i => {
    //     const functionObject = [ 
    //         {po_name: position[i],
    //     }]
    //     console.log('33333',functionObject)
    //   });

      
    // const cities = [
    //     { name: 'New Yorkkkkkkkkkkkkkk', code: 'NY' },
    //     { name: 'Rome', code: 'RM' },
    //     { name: 'London', code: 'LDN' },
    //     { name: 'Istanbul', code: 'IST' },
    //     { name: 'Paris', code: 'PRS' }
    // ];
    // console.log("7777",cities[0])

    useEffect(() => {
        setLazyItems(Array.from({ length: 100000 }));
        setLazyLoading(false);
    },[]); // eslint-disable-line react-hooks/exhaustive-deps

    const onCityChange = (e) => {
        setSelectedCity1(e.value);
    }

    
    return (
        <div className="dropdown-demo">
            {/* <div className="card"> */}
                <Dropdown value={selectedCity1} options={position} onChange={onCityChange} optionLabel="a_name" placeholder="select" />
            {/* </div> */}
        </div>
    );
}

export default DropdownDemo 