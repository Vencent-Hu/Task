import React from "react";
import styles from "../styles/table.module.css";
import { useSelector } from "react-redux";

const UniTable = () => {
  const uniTable = useSelector((state) => state.uniTable);

  //The property name: state-province might be an error from the API, since dash key is iilegal in documentation.
  //So I just use state_province to avoid the error.
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
