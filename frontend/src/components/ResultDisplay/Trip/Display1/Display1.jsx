import '../../index.scss';

const Display1 = ({rows}) => {
    return (
        <table className="basic-table">
            <tr>
                <th>Flight Order</th>
                <th>Trip</th>
            </tr>
            {
                rows[0]["Trip_Search"].map((row, i) => {
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