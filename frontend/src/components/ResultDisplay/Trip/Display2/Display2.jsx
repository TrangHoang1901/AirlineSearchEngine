import '../../index.scss';

const Display2 = ({rows}) => {
    return (
        <table className="basic-table">
            <tr>
                <th>i</th>
                <th>Reachable cities</th>
            </tr>
            {
                rows[0]["Cities"].map((row, i) => {
                    return <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{row}</td>
                    </tr>
                })
            }
        </table>
    );
}

export default Display2;