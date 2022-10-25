import React, { useEffect, useState } from "react";
import UniTable from "../component/table";
import styles from "../styles/home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { load,addItem,deleteItem } from "../redux/dataSlice";


const fake = {
  "domains": [
      "acs.edu.au"
  ],
  "country": "Australia",
  "state-province": null,
  "web_pages": [
      "http://www.acs.edu.au/"
  ],
  "name": "Australian Correspondence Schools",
  "alpha_two_code": "AU"
}
const Home = () => {

  // const [unis, setUnis] = useState();
  const dispatch = useDispatch(); 

  const handleLoad = async () => {
    try {
      const res = await fetch(
        "http://universities.hipolabs.com/search?country=Australia"
      ).then((response) => response.json());
      // setUnis(res);
      res.map((uni) => dispatch(load(uni)));

    } catch (err) {
      console.log(err);
    }
  };

  const handleAdd = () => {
    dispatch(addItem());
  }

  const handleDelete = () => {
    dispatch(deleteItem());
  }

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.table_container}>
          <div>
            <UniTable/>
          </div>
        </div>
        <div className={styles.button_container}>
          <button type="button" className={styles.button} onClick={handleLoad}>
            Load
          </button>
          <button type="button" className={styles.button} onClick={handleAdd}>
            Add
          </button>
          <button type="button" className={styles.button} onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
