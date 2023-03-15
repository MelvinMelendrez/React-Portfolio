import React, { useState, useEffect } from 'react';
import { client, urlFor } from '../../client';


const Image = () => {
const [images, setImages] = useState([]);

useEffect(() => {
const fetchData = async () => {
const query = '*[_type == "img"]';
const data = await client.fetch(query);
setImages(data);
};
fetchData();
}, []);

return (
<div>
{images.length > 0 && (
<img src={urlFor(images[1].imagen).url()} alt={images[0].titulo} />
)}
</div>
);
};

export default Image;






