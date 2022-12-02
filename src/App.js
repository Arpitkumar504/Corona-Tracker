import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RiVirusFill } from 'react-icons/ri';
import Coronadata from './component/Coronadata';

const App = () => {
    const [data, setdata] = useState([]);
    const getdata = async () => {
        const response = await fetch("https://data.covid19india.org/data.json");
        const data = await response.json();
        setdata(data.statewise);
        console.log(data.statewise);
    }
    useEffect(() => {
        getdata();
    }, [])
    return (
        <div className="coronadata">
            <h1><span>India</span> Covid-19 <RiVirusFill /> Dashboard</h1>
            <div className="table-responsive">
                <table className='table table-hover table-striped table-bordered'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>Index</th>
                            <th>State</th>
                            <th>Confimed</th>
                            <th>recovered</th>
                            <th>Deaths</th>
                            <th>Active</th>
                            <th>Spoted</th>
                        </tr>
                    </thead>
                    <tbody className='tablescroll'>
                        {
                            data.map((element, index) => {
                                const { state, active, recovered, deaths, confirmed, lastupdatedtime } = element;
                                return (
                                    <Coronadata
                                        key={index}
                                        index={index + 1}
                                        state={state}
                                        active={active}
                                        recovered={recovered}
                                        deaths={deaths}
                                        confirmed={confirmed}
                                        lastupdatedtime={lastupdatedtime}
                                    />
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default App