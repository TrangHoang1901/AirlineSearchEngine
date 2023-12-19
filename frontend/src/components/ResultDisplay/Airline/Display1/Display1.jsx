import '../../index.scss';

const Display1 = ({rows}) => {
    return (
        <table className="basic-table">
            <tr>
                <th>i</th>
                <th>List of flights</th>
            </tr>
            {
                rows[0]["List_of_Flights"].map((row, i) => {
                    return <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{row}</td>
                    </tr>
                })
            }
        </table>
    );
}

export default Display1;