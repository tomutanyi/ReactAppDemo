

const DataItem = ({name,employees,net}) =>{
    return(
        <div className="dataItem">
            NAME: {name}
            <br></br>
            NETWORTH: {net}
            <br></br>
            NUMBER OF EMPLOYEES:{employees}
        </div>
    )
}

export default DataItem;