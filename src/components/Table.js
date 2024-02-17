import React, { useEffect, useState } from 'react';

const Table = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const cryptoIds = [90, 80, 70, 60, 50, 40];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const promises = cryptoIds.map(async (id) => {
          const response = await fetch(`https://api.coinlore.net/api/ticker/?id=${id}`);
          const data = await response.json();
          return data[0]; // Assuming the API returns an array with a single object
        });

        const cryptoResults = await Promise.all(promises);
        setCryptoData(cryptoResults);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to fetch data only once when the component mounts

  return (
    <table border="1" className='w-[1200px] mt-6 text-center '>
      <thead className='bg-[#27272a]'>
        <tr className=''>
          <th className='p-2 text-slate-200'>Name</th>
          <th className='p-2 text-slate-200'>Symbol</th>
          <th className='p-2 text-slate-200'>Price</th>
          <th className='p-2 text-slate-200'>Market Cap</th>
          <th className='p-2 text-slate-200'>1h Change</th>
          <th className='p-2 text-slate-200'>24h Change</th>
        </tr>
      </thead>
      <tbody className='w-[1200px] ml-6 text-center border-collapse border-b border-slate-200'>
        {cryptoData.map((crypto) => (
          <tr key={crypto.id}  className='border-collapse border-b border-[#27272a]'>
            <td className='p-5 text-slate-200'>{crypto.name}</td>
            <td className='p-5 text-slate-200'>{crypto.symbol}</td>
            <td className='p-5 text-slate-200'>{`$ ${crypto.price_usd}`}</td>
            <td className='p-5 text-slate-200'>{`$ ${crypto.market_cap_usd}`}</td>
            <td className='p-5 text-slate-200'>{`${crypto.percent_change_1h} %`}</td>
            <td className='p-5 text-slate-200'>{`${crypto.percent_change_24h} %`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
