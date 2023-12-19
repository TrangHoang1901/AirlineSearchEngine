import { useRef, useState } from 'react';
import TextInput from '../../components/TextInput/TextInput';
import Title from '../../components/Title/Title';
import Actions from '../../components/Actions/Actions';
import Display1 from '../../components/ResultDisplay/Airport/Display1/Display1';
import Display2 from '../../components/ResultDisplay/Airport/Display2/Display2';
import axios from 'axios';

const AirportPage = () => {
    const formRef = useRef({country: '', limit: ''});

    const [data1, setData1] = useState(undefined);
    const [data2, setData2] = useState(undefined);

    const onSubmit1 = async () => {
        const res = await axios
        .get(`airportSearch/read_TopCountry_w_HighestAirports`);

        setData1(res.data);
    }

    const onSubmit2 = async () => {
        const country = formRef.current.country.trim();
        if(country === '') return;
        let limit = formRef.current.limit.trim();
        if(limit === '') limit = "10";

        const res = await axios
        .post(`airportSearch/read_List_Of_Airports_In_Country?country=${country}&num=${limit}`);

        setData2(res.data);
    }

    return (
        <div className='main-page'>
            <div className='query'>
                <Title title={"Which Country (Or) Territory Has The Highest Number Of Airports?"} />
                <Actions onQuery={onSubmit1} onClear={() => setData1(undefined)} />
                {data1 && <Display1 rows={data1} />}
            </div>

            <div className='query'>
                <Title title={"Find List Of Airports Operating In The Country X"} />
                <div className='page-inputs'>
                    <TextInput field={"Country"} initVal={formRef.current.country}
                    onChange={(val) => formRef.current.country = val} />
                    <TextInput field={"Limit"} initVal={formRef.current.limit}
                    onChange={(val) => formRef.current.limit = val} />
                </div>
                <Actions onQuery={onSubmit2} onClear={() => setData2(undefined)} />
                {data2 && <Display2 rows={data2} />}
            </div>
        </div>
    );
}

export default AirportPage;