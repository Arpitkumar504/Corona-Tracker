import React from 'react'

const Coronadata = (props) => {
    return (
        <tr>
            <td>{props.index}</td>
            <td>{props.state}</td>
            <td>{props.confirmed}</td>
            <td>{props.recovered}</td>
            <td>{props.deaths}</td>
            <td>{props.active}</td>
            <td>{props.lastupdatedtime}</td>
        </tr>
    )
}

export default Coronadata
