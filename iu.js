import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../../index.css';
import ReactDOM from 'react-dom';

import React, { useState } from 'react';
import { Checkbox } from 'primereact/checkbox';

const CheckboxDemo = () => {
    const [cities, setCities] = useState([]);

    const onCityChange = (e) => {
        let selectedCities = [...cities];

        if (e.checked)
            selectedCities.push(e.value);
        else
            selectedCities.splice(selectedCities.indexOf(e.value), 1);

        setCities(selectedCities);
    }

    return (
        <div>
            <div className="card">
                

                <h5>Multiple</h5>
                <div className="field-checkbox">
                    <Checkbox inputId="city1" name="city" value="Chicago" onChange={onCityChange} checked={cities.indexOf('Chicago') !== -1} />
                    <label htmlFor="city1">Chicago</label>
                </div>
                <div className="field-checkbox">
                    <Checkbox inputId="city2" name="city" value="Los Angeles" onChange={onCityChange} checked={cities.indexOf('Los Angeles') !== -1} />
                    <label htmlFor="city2">Los Angeles</label>
                </div>
                <div className="field-checkbox">
                    <Checkbox inputId="city3" name="city" value="New York" onChange={onCityChange} checked={cities.indexOf('New York') !== -1} />
                    <label htmlFor="city3">New York</label>
                </div>
                <div className="field-checkbox">
                    <Checkbox inputId="city4" name="city" value="San Francisco" onChange={onCityChange} checked={cities.indexOf('San Francisco') !== -1} />
                    <label htmlFor="city4">San Francisco</label>
                </div>

            </div>
        </div>
    )
}
                
const rootElement = document.getElementById("root");
ReactDOM.render(<CheckboxDemo />, rootElement);