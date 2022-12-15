import React, { useEffect, useState } from "react";
import MatchSection1 from "./MatchSection1";
import MatchSection2 from "./MatchSection2";
import MatchSection3 from "./MatchSection3";
import Styles from "./Filter.module.css";

const Matches = () => {
  const [data, setData] = useState([]);

  const [btnClicked, setButtonClicked] = useState(null);

  const [selected, setSelected] = useState("");

  const handleChange = (event) => {
    setSelected(event.target.value);
    // console.log(event.target.value);
    if (event.target.value === "all") {
      setData(data);
      
    } else {
      setButtonClicked(event.target.value);
      const filterData = data.filter(
        (el) => el.t1 === event.target.value || el.t2 === event.target.value
      );
      // console.log(filterData);
      setData(filterData);
    }
  };

  const handleClick = (btn) => {
    setButtonClicked(btn);

    if (btn === "women") {
      const filterData = data.filter(
        (el) =>
          el.t1 === "Birmingham Phoenix Women [BPW]" ||
          el.t1 === "London Spirit Women [LSW]"
      );
      // console.log(filterData);
      setData(filterData);
    } else if (btn === "men") {
      const filterData = data.filter(
        (el) =>
          el.t1 !== "Birmingham Phoenix Women [BPW]" &&
          el.t1 !== "Manchester Originals Women [MOW]" &&
          el.t1 !== "London Spirit Women [LSW]"
      );
      // console.log(filterData);
      setData(filterData);
    } else {
      const filterData = data.filter((el) => el.matchType === btn);
      // console.log(filterData);
      setData(filterData);
    }
  };

  const handleReset = () => {
    getData();
    setButtonClicked(null);
    setSelected("Select Team");
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch("http://localhost:8080/liveScore");
    const payload = await res.json();
    // console.log(payload);

    setData(payload);
  };

  return (
    <div>
      <div className={Styles.main2}>
        <div className={Styles.heading2}>
          <select name="" id="" value={selected} onChange={handleChange} className={Styles.select}>
            <option value="all">Select Team</option>
            <option value="Kenya [KEN]">Kenya</option>
            <option value="Nepal [NEP]">Nepal</option>
            <option value="Birmingham Phoenix [BRM]">
              Birmingham Phoenix Women
            </option>
            <option value="Manchester Originals [MO]">
              Manchester Originals Women
            </option>
            <option value="London Spirit [LDN]">London Spirit Women</option>
            <option value="Oval Invincibles [OVL]">
              Oval Invincibles Women
            </option>
            <option value="Glamorgan [GLAM]">Glamorgan</option>
            <option value="Worcestershire [WRCS]">Worcestershire</option>
          </select>
        </div>
      </div>
      <div className={Styles.main}>
        <h5
          className={Styles.reset}
          onClick={handleReset}
          style={
            btnClicked !== null
              ? { color: "rgb(3,169,244)" }
              : { color: "lightGrey" }
          }
        >
          Reset
        </h5>
        <button
          className={Styles.btns}
          value="t20"
          onClick={(e) => handleClick(e.target.value)}
          style={
            btnClicked === "t20"
              ? { backgroundColor: "rgb(3,169,244)", color: "white" }
              : { backgroundColor: "white" }
          }
        >
          T20s
        </button>
        <button
          className={Styles.btns}
          value="odi"
          onClick={(e) => handleClick(e.target.value)}
          style={
            btnClicked === "odi"
              ? { backgroundColor: "rgb(3,169,244)", color: "white" }
              : { backgroundColor: "white" }
          }
        >
          ODI
        </button>
        <button
          className={Styles.btns}
          value="test"
          onClick={(e) => handleClick(e.target.value)}
          style={
            btnClicked === "test"
              ? { backgroundColor: "rgb(3,169,244)", color: "white" }
              : { backgroundColor: "white" }
          }
        >
          Test
        </button>
        <button
          className={Styles.btns}
          value="men"
          onClick={(e) => handleClick(e.target.value)}
          style={
            btnClicked === "men"
              ? { backgroundColor: "rgb(3,169,244)", color: "white" }
              : { backgroundColor: "white" }
          }
        >
          Men
        </button>
        <button
          className={Styles.btns}
          value="women"
          onClick={(e) => handleClick(e.target.value)}
          style={
            btnClicked === "women"
              ? { backgroundColor: "rgb(3,169,244)", color: "white" }
              : { backgroundColor: "white" }
          }
        >
          Women
        </button>
      </div>

      <MatchSection1 data={data} title="Top Events" />

      <MatchSection2 data={data} title="Nepal tour of Kenya" />
      <MatchSection3 data={data} title="Second Eleven Championship" />
    </div>
  );
};

export default Matches;
