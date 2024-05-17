import React, { useState, useEffect } from 'react';
import './List.css';
import axios from 'axios';

const List = () => {
  const [list, setList] = useState([]);
  const url = 'http://localhost:4000';

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        alert("Error fetching food list");
      }
    } catch (error) {
      console.error("Error fetching food list:", error);
      alert("Error fetching food list");
    }
  };

  const removefood = async (foodId) => {
    try {
      const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
      if (response.data.success) {
        fetchList(); // Fetch the updated list after deletion
      } else {
        alert("Error in removing food item");
      }
    } catch (error) {
      console.error("Error removing food item:", error);
      alert("Error removing food item");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className='list add flex-col'>
      <p>FOODS LIST</p>
      <div className="list-table">
        <div className="list-table-format header">
          <p>Image</p>
          <p>Name</p>
          <p>Category</p>
          <p>Price</p>
          <p>Action</p>
        </div>
        {list.map((item, index) => (
          <div key={index} className='list-table-format'>
            <img src={`${url}/images/${item.image}`} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>{item.price}</p>
            <button onClick={() => removefood(item._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
