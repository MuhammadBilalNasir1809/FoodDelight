import React, { useState, useEffect } from 'react';
import './Add.css';
import upload_area from '../../assets/upload_area.png';
import axios from 'axios';

const Add = () => {
  const url = 'http://localhost:4000';
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad"
  });

  const ChangeHandler = (e) => {
    const { name, value } = e.target;
    setData(data => ({ ...data, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    try {
      const response = await axios.post(`${url}/api/food/add`, formData);
      if (response.data.success) {
        alert("Food added to the database");
      } else {
        alert("Not Added");
      }
    } catch (error) {
      console.error("There was an error adding the food:", error);
      alert("An error occurred. Please try again.");
    }
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className='add'>
      <form onSubmit={onSubmit} className='flex-col'>
        <div className="add-productname">
          <p>Product Name</p>
          <input onChange={ChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' />
        </div>
        <div className="add-productdescription">
          <p>Description</p>
          <textarea onChange={ChangeHandler} value={data.description} name="description" rows="6" placeholder='Type here'></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category">
            <p>Product Category</p>
            <select onChange={ChangeHandler} value={data.category} name="category">
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Pasta">Pasta</option>
              <option value="Noddles">Noodles</option>
              <option value="Cake">Cake</option>
              <option value="Pureveg">Pureveg</option>
              <option value="Sandwich">Sandwich</option>
            </select>
          </div>
          <div className="add-product-price">
            <p>Product Price</p>
            <input onChange={ChangeHandler} value={data.price} type="number" name="price" />
          </div>
        </div>
        <div className="add-img-upload">
          <p>Upload Image</p>
          <label htmlFor='image'>
            <img src={image ? URL.createObjectURL(image) : upload_area} alt="Upload area" />
          </label>
          <input
            type="file"
            id='image'
            hidden
            required
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <button type='submit' className='AddButton'>ADD</button>
      </form>
    </div>
  );
}

export default Add;
