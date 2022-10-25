import React, { useEffect } from "react";
import styles from "../styles/table.module.css";
import { useDispatch, useSelector } from "react-redux";
import { load } from "../redux/dataSlice";

const UniTable = () => {
  const uniTable = useSelector((state) => state.uniTable);

  return (
    <div>
      <table className={styles.tb}>
        <thead>
          <tr className={styles.tr}>
            <th className={styles.th}>Domains</th>
            <th className={styles.th}>Country</th>
            <th className={styles.th}>State province</th>
            <th className={styles.th}>Web pages</th>
            <th className={styles.th}>name</th>
            <th className={styles.th}>Alpha two code</th>
          </tr>
        </thead>
        <tbody>
          {uniTable.unis?.map((uni, index) => (
            <tr key={index}>
              <td className={styles.td}>{uni.domains}</td>
              <td className={styles.td}>{uni.country}</td>
              <td className={styles.td}>{uni.state_province}</td>
              <td className={styles.td}>{uni.web_pages}</td>
              <td className={styles.td}>{uni.name}</td>
              <td className={styles.td}>{uni.alpha_two_code}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UniTable;
