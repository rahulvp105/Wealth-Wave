import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const NiftySensexChart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const API_KEY = 'DQ9DABR3DWI6UMD7';

            try {
                // Fetch Nifty data
                const niftyResponse = await axios.get(
                    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=NSE:NIFTY_50&apikey=${API_KEY}`
                );

                // Fetch Sensex data
                const sensexResponse = await axios.get(
                    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=BSE:SENSEX&apikey=${API_KEY}`
                );

                const niftyData = niftyResponse.data['Time Series (Daily)'];
                const sensexData = sensexResponse.data['Time Series (Daily)'];

                // Format the data for recharts
                const chartData = Object.keys(niftyData).map(date => ({
                    date,
                    nifty: parseFloat(niftyData[date]['4. close']),
                    sensex: parseFloat(sensexData[date]['4. close']),
                }));

                setData(chartData.reverse()); // Reverse to show the latest date at the end
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };

        fetchData();
        console.log(data)
    }, []);

    return (
        <div>
            <h2>Nifty and Sensex Data</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Nifty</th>
                        <th>Sensex</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.date}</td>
                            <td>{entry.nifty}</td>
                            <td>{entry.sensex}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

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
        </div>
    );
};

export default NiftySensexChart;
