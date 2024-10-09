import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const NiftySensexChart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/hi/history',
                params: {
                    symbol: '^NSEI',
                    interval: '1d',
                    range: '1mo'
                },
                headers: {
                    'X-RapidAPI-Key': 'a55dd3a530msh84835d0d35ca10ep18ae19jsne58c0e92cfee',
                    'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com'
                }
            };

            try {
                const niftyResponse = await axios.request({ ...options, params: { symbol: '^NSEI', interval: '1d', range: '1mo' } });
                const sensexResponse = await axios.request({ ...options, params: { symbol: '^BSESN', interval: '1d', range: '1mo' } });

                const niftyData = niftyResponse.data.items;
                const sensexData = sensexResponse.data.items;

                // Combine and format the data for recharts
                const chartData = niftyData.map((item, index) => ({
                    date: new Date(item.date * 1000).toLocaleDateString(),
                    nifty: item.close,
                    sensex: sensexData[index]?.close || null, // Match dates; handle any mismatches
                }));

                setData(chartData);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };

        fetchData();
    }, []);

    return (
        <LineChart
            width={800}
            height={400}
            data={data}
            margin={{
                top: 5, right: 30, left: 20, bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="nifty" stroke="#8884d8" />
            <Line type="monotone" dataKey="sensex" stroke="#82ca9d" />
        </LineChart>
    );
};

export default NiftySensexChart;
