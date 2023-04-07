import axios from 'axios';
import StockListItem from '@/components/stock';

export default function StockPrice({ data }) {
  return (<>
   <h1 class="text-green-600 text-5xl mt-10 font-bold flex justify-center">
      Stocks
    </h1> 
    <div class="container mx-auto flex justify-center">
        <ul class="pb-3 sm:pb-4 m-12">
          {data.map((stock, index) => (
            <StockListItem key={index} stock={stock} />
          ))}
      </ul>
    </div>
  </>
    
  );
}

export async function getStaticProps() {
  try {
    const options = {
      method: 'GET',
      url: 'https://latest-stock-price.p.rapidapi.com/any',
      headers: {
        'X-RapidAPI-Key': '3370a1739dmsh58965d18ef789bfp19de1fjsn3a66fb586775',
        'X-RapidAPI-Host': 'latest-stock-price.p.rapidapi.com',
      },
    };
    const response = await axios.request(options);
    const data = response.data;

    return {
      props: { data },
      revalidate: 10, // revalidate every 10 seconds
    };
  } catch (error) {
    console.error(error);

    return {
      props: { data: [] },
      revalidate: 10, // revalidate every 10 seconds
    };
  }
}
