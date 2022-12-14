import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCryptoData, selectCryptoData } from '../../redux/cryptoData.redux';
import Home from './Home';

const MainList = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const crypto = useSelector(selectCryptoData);

  useEffect(() => {
    dispatch(fetchCryptoData());
  }, [dispatch]);

  const filtered = crypto.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="main_section">
      <div className="search_bar">
        <input className="search" type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
      </div>
      <ul className="main_list">
        {filtered.map((item) => (
          <Home
            key={item.id}
            id={item.id}
            item={item}
            name={item.name}
            symbol={item.symbol}
            rank={item.rank}
            logo={item.logo}
            price={item.price}
            price_date={item.price_date}
            price_timestamp={item.price_timestamp}
            circulating_supply={item.circulating_supply}
            max_supply={item.max_supply}
            market_cap={item.market_cap}
            num_exchanges={item.num_exchanges}
            num_pairs={item.num_pairs}
            num_pairs_unmapped={item.num_pairs_unmapped}
            first_candle={item.first_candle}
            first_trade={item.first_trade}
            first_order_book={item.first_order_book}
            rank_delta={item.rank_delta}
            high={item.high}
            high_timestamp={item.high_timestamp}
            one_day={item['1d']}
            seven_day={item['7d']}
          />
        ))}
      </ul>
      <footer>
        <h5><a href="https://nomics.com" target="_blank" rel="noreferrer">Crypto Market Cap & Pricing Data Provided By Nomics</a></h5>
      </footer>
    </div>
  );
};

export default MainList;
