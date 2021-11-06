import React from 'react';
const Notes = ({ data }) => {

 return (
    <div>
       
        {data && data.map((item, index) => <p key={index}>{item.source}</p>)}
     
    </div>
  );
};
export default Notes;
