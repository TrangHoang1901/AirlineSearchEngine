import '../../index.scss';

const Display2 = ({rows}) => {
    return (
        <table className="basic-table">
            <tr>
                <th>i</th>
                <th>City</th>
                <th>Number of airlines</th>
                <th>List of airlines</th>
            </tr>
            {
                rows.map((row, i) => {
                    return <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{row["City"]}</td>
                        <td>{row["Num"]}</td>
                        <td>{row["List_of_Airlines"].join(', ')}</td>
                    </tr>
                })
            }
        </table>
    );
}

export default Display2;