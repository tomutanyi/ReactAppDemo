

const DataItem = ({date, description, amount, category}) =>{
    return(
        <div className="dataItem">
            DATE: {date}
            <br></br>
            DESCRIPTION: {description}
            <br></br>
            AMOUNT: {amount}
            <br></br>
            CATEGORY: {category}
            <br></br>
            <button>Click me!</button>
        </div>
    )
}

export default DataItem;