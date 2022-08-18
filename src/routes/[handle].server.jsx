import client from "../lib/sanity-client";
import {useQuery} from '@shopify/hydrogen';


export default function Index(props) {  

  const {data} = useQuery(['unique', 'key'], async () => {
    const request = await client.fetch(`*[_type == 'pet']`);
    return await request;
  });

  console.log(data);
  
  console.log(props.params.handle);
  const actualPet = data.some( pet => pet?.name?.toLowerCase() == props?.params?.handle);

  console.log(actualPet);

  return (
    <div>
      <h1>{props.params.handle}</h1>
      <div>
        
      </div>
    </div>    

  );
}
