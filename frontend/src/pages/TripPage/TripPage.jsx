import { useRef, useState } from 'react';
import TextInput from '../../components/TextInput/TextInput';
import Title from '../../components/Title/Title';
import Actions from '../../components/Actions/Actions';
import Display1 from '../../components/ResultDisplay/Trip/Display1/Display1';
import Display2 from '../../components/ResultDisplay/Trip/Display2/Display2';
import axios from 'axios';

const TripPage = () => {
    const form1 = useRef({
        src: '', dest: ''
    });

    const form2 = useRef({
        city: '', dhops: '', limit: ''
    });

    const [data1, setData1] = useState(undefined);
    const [data2, setData2] = useState(undefined);

    const onSubmit1 = async () => {
        const src = form1.current.src.trim();
        if(src === '') return;

        const dst = form1.current.dest.trim();
        if(dst === '') return;

        const res = await axios
        .post(`tripRecommendation/findATrip?srcCity=${src}&dstCity=${dst}`);

        setData1(res.data);
    }

    const onSubmit2 = async () => {
        const city = form2.current.city.trim();
        if(city === '') return;
        const dHops = form2.current.dhops.trim();
        if(dHops === '') return;
        let limit = form2.current.limit.trim();
        if(limit === '') limit = "10";

        const res = await axios
        .post(`tripRecommendation/findCitiesWithDHops?srcCity=${city}&dHops=${dHops}&limit=${limit}`);

        setData2(res.data);
    }

    return (
        <div className='main-page'>
            <div className='query'>
                <Title title={"Find A Trip That Connects Two Cities"} />
                <div className='page-inputs'>
                    <TextInput field={"Source"} initVal={form1.current.src}
                    onChange={(val) => form1.current.src = val} />
                    <TextInput field={"Destination"} initVal={form1.current.dest}
                    onChange={(val) => form1.current.dest = val} />
                </div>
                <Actions onQuery={onSubmit1} onClear={() => setData1(undefined)} />
                {data1 && <Display1 rows={data1} />}
            </div>

            <div className='query'>
                <Title title={"Find All The Cittes Reachable Within D Hops Of A City"} />
                <div className='page-inputs'>
                    <TextInput field={"City"} initVal={form2.current.city}
                    onChange={(val) => form2.current.city = val} />
                    <TextInput field={"D Hops"} initVal={form2.current.dhops}
                    onChange={(val) => form2.current.dhops = val} />
                    <TextInput field={"Limit"} initVal={form2.current.limit}
                    onChange={(val) => form2.current.limit = val} />
                </div>
                <Actions onQuery={onSubmit2} onClear={() => setData2(undefined)} />
                {data2 && <Display2 rows={data2} />}
            </div>
        </div>
    );
}

export default TripPage;