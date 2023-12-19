import '../../index.scss';

const Display1 = ({rows}) => {
    return (
        <table className="basic-table">
            <tr>
                <th>Country</th>
                <th>Number of airports</th>
            </tr>
            {
                rows.map((row, i) => {
                    return <tr key={i}>
                        <td>{row["Top_Country"]}</td>
                        <td>{row["Num"]}</td>
                    </tr>
                })
            }
        </table>
    );
}

export default Display1;