import { useRef, useState } from 'react';
import TextInput from '../../components/TextInput/TextInput';
import Title from '../../components/Title/Title';
import Actions from '../../components/Actions/Actions';
import axios from 'axios';
import Display2 from '../../components/ResultDisplay/Airline/Display2/Display2';
import Display1 from '../../components/ResultDisplay/Airline/Display1/Display1';
// import RadioBtns from '../../components/RadioBtns/RadioBtns';

const AirlinePage = () => {
    const airlineCode = useRef('');
    const topK = useRef('');
    
    const [data1, setData1] = useState(undefined);
    const [data2, setData2] = useState(undefined);

    const onSubmit1 = async () => {
        const code = airlineCode.current.trim();
        if(code === '') return;

        const res = await axios
        .post(`airlineSearch/read_List_Of_Routes_by_Airline?airline_name=${code}`);

        setData1(res.data);
    }

    const onSubmit2 = async () => {
        const k = topK.current.trim();
        if(k === '') return;

        const res = await axios
        .get(`airlineSearch/read_TopKCities_w_MostAirlines2?k=${k}`);

        setData2(res.data);
    }

    return (
        <div className='main-page'>
            <div className='query'>
                <Title title={"Find The List Of Airlines"} />
                <div className='page-inputs'>
                    <TextInput field={"Airline code"} initVal={airlineCode.current}
                    onChange={(val) => airlineCode.current = val} />

                    {/* <RadioBtns field={"Code Share?"} initVal={form1.current.codeShare}
                    onChange={(val) => form1.current.codeShare = val} />
                    <RadioBtns field={"Active?"} initVal={form1.current.active}
                    onChange={(val) => form1.current.active = val} /> */}
                </div>
                <Actions onQuery={onSubmit1} onClear={() => setData1(undefined)} />
                {data1 && <Display1 rows={data1} />}
            </div>

            <div className='query'>
                <Title title={"Top K Cites With Most Incoming/Outgoing Airlines"} />
                <div className='page-inputs'>
                    <TextInput field={"K"} initVal={topK.current}
                    onChange={(val) => topK.current = val} />
                </div>
                <Actions onQuery={onSubmit2} onClear={() => setData2(undefined)} />

                {data2 && <Display2 rows={data2} />}
            </div>
        </div>
    );
}

export default AirlinePage;