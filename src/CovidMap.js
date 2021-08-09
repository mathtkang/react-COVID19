import React, {useState, useEffect} from "react";
import {
  Seoul,
  Gyeonggi,
  Incheon,
  Gangwon,
  Chungnam,
  Chungbuk,
  Sejong,
  Daejeon,
  Gyeongnam,
  Gyeongbuk,
  Jeonbuk,
  Jeonnam,
  Ulsan,
  Busan,
  Daegu,
  Gwangju,
  Jeju,
} from "./area/all_area";

import { BrowserRouter as Router, Switch,Route,Link } from "react-router-dom";

import axios from "axios";

const fillColor=["#4088da", "#ffb911", "#fc7001", "#e60000"]

function CovidInfo({area,num,level,updated_data}) {
  return (
    <div>
      <h1>대한민국 코로나 현황</h1>
      <h2>{area}</h2>
      <p>확진자 수 : {num}</p>
      <p>거리두기 단계 : {level}</p>
      <p>{updated_data} (기준)</p>
    </div>
  );
}

function CovidSvg({covidData, onClick}){
  return(
    <svg width="700px" height="1000px" viewBox="0 0 800 1200">
        <Seoul
          fill={fillColor[covidData["서울"].level - 1]}
          onClick={onClick}
        />
        <Gyeonggi
          fill={fillColor[covidData["경기"].level - 1]}
          onClick={onClick}
        />
        <Gangwon
          fill={fillColor[covidData["강원"].level - 1]}
          onClick={onClick}
        />
        <Incheon
          fill={fillColor[covidData["인천"].level - 1]}
          onClick={onClick}
        />
        <Chungnam
          fill={fillColor[covidData["충남"].level - 1]}
          onClick={onClick}
        />
        <Chungbuk
          fill={fillColor[covidData["충북"].level - 1]}
          onClick={onClick}
        />
        <Sejong
          fill={fillColor[covidData["세종"].level - 1]}
          onClick={onClick}
        />
        <Daejeon
          fill={fillColor[covidData["대전"].level - 1]}
          onClick={onClick}
        />
        <Gyeongnam
          fill={fillColor[covidData["경남"].level - 1]}
          onClick={onClick}
        />
        <Gyeongbuk
          fill={fillColor[covidData["경북"].level - 1]}
          onClick={onClick}
        />
        <Jeonbuk
          fill={fillColor[covidData["전북"].level - 1]}
          onClick={onClick}
        />
        <Jeonnam
          fill={fillColor[covidData["전남"].level - 1]}
          onClick={onClick}
        />
        <Ulsan
          fill={fillColor[covidData["울산"].level - 1]}
          onClick={onClick}
        />
        <Busan
          fill={fillColor[covidData["부산"].level - 1]}
          onClick={onClick}
        />
        <Daegu
          fill={fillColor[covidData["대구"].level - 1]}
          onClick={onClick}
        />
        <Gwangju
          fill={fillColor[covidData["광주"].level - 1]}
          onClick={onClick}
        />
        <Jeju
          fill={fillColor[covidData["제주"].level - 1]}
          onClick={onClick}
        />
      </svg>
  )
}

function CovidMap() {
  //받아온 데이터를 보관하자, 어디에? state에.
  const [covidData, setCovidData] = useState(null);
  // const [area, setArea] = useState("");
  const [selectData, setSelectData] = useState(null);

  //state가 정상적으로 들어왔다는 걸 확인하려면? update를 활용해서 값이 정상적으로 들어왔는지 확인할 수 있다.
  //업데이트 되었는지 감시할 데이터를 두번째 인자로 넣자
  useEffect(() => {
    console.log("업데이트 된 항목", covidData);
  }, [covidData]);

  function fetch() {
    axios.post("http://127.0.0.1:5000/covidData").then((response) => {
      //마운트가 될 때 해당 요청을 하고,
      //then안의 코드 : 요청 성공시 실행되는 코드
      setCovidData(response.data);
    }); //내에서만 response가 존재하고 다른 데로 이동하는 데이터는 covidData만 전달
  }

  useEffect(()=>{
    const timer = setInterval(() => {
      fetch();
    }, 1000);

    return () => {
      clearInterval(timer); 
    }
  }, []);

  useEffect(() => {
    fetch();
  }, []);

  // useEffect(() => {
  //   if(covidData !== null) {
  //     // console.log(covidData.data[area]);
  //     setSelectData(covidData.data[area]);
  //   }
  // }, [area, covidData]);

  function handleClick(e) {
    // setArea(e.target.id); //state변경->랜더링이 된다 (지역설정시 한번에 랜더링 되도록, 랜더링을 2번에서 1번으로 줄임)
    const area = e.target.id;
    setSelectData({
      area,
      num: covidData.data[area].num,
      level: covidData.data[area].level,
    });
  }

  return covidData === null ? (
    <div>Loading</div>
  ) : (
    <div>
              {/* {selectData && <p>{selectData.area}</p>}
              {selectData && <p>확진자 수 : {selectData.num}</p>}
              {selectData && <p>거리두기 단계 : {selectData.level}</p>}
              <p>{covidData.updated_data} (기준)</p> */}
      {selectData && <CovidInfo 
        area={selectData.area} 
        num={selectData.num}
        level={selectData.level}
        updated_data={covidData.updated_data}
      />}
      <CovidSvg 
        covidData={covidData.data} 
        onClick={handleClick}
      />
              {/* <svg width="700px" height="1000px" viewBox="0 0 800 1200">
                <Seoul
                  fill={fillColor[covidData.data["서울"].level - 1]}
                  // onClick={() => setArea("서울")}
                  // onClick={(e) => setArea(e.target.id)}
                  onClick={handleClick}
                />
                <Gyeonggi
                  fill={fillColor[covidData.data["경기"].level - 1]}
                  onClick={handleClick}
                />
                <Gangwon
                  fill={fillColor[covidData.data["강원"].level - 1]}
                  onClick={handleClick}
                />
                <Incheon
                  fill={fillColor[covidData.data["인천"].level - 1]}
                  onClick={handleClick}
                />
                <Chungnam
                  fill={fillColor[covidData.data["충남"].level - 1]}
                  onClick={handleClick}
                />
                <Chungbuk
                  fill={fillColor[covidData.data["충북"].level - 1]}
                  onClick={handleClick}
                />
                <Sejong
                  fill={fillColor[covidData.data["세종"].level - 1]}
                  onClick={handleClick}
                />
                <Daejeon
                  fill={fillColor[covidData.data["대전"].level - 1]}
                  onClick={handleClick}
                />
                <Gyeongnam
                  fill={fillColor[covidData.data["경남"].level - 1]}
                  onClick={handleClick}
                />
                <Gyeongbuk
                  fill={fillColor[covidData.data["경북"].level - 1]}
                  onClick={handleClick}
                />
                <Jeonbuk
                  fill={fillColor[covidData.data["전북"].level - 1]}
                  onClick={handleClick}
                />
                <Jeonnam
                  fill={fillColor[covidData.data["전남"].level - 1]}
                  onClick={handleClick}
                />
                <Ulsan
                  fill={fillColor[covidData.data["울산"].level - 1]}
                  onClick={handleClick}
                />
                <Busan
                  fill={fillColor[covidData.data["부산"].level - 1]}
                  onClick={handleClick}
                />
                <Daegu
                  fill={fillColor[covidData.data["대구"].level - 1]}
                  onClick={handleClick}
                />
                <Gwangju
                  fill={fillColor[covidData.data["광주"].level - 1]}
                  onClick={handleClick}
                />
                <Jeju
                  fill={fillColor[covidData.data["제주"].level - 1]}
                  onClick={handleClick}
                />
              </svg> */}
    </div>
  );
}

function Test() {
  return (
    <div>
      Hello React
    </div>
  )
}

function Select() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">CovidMap</Link>
          </li>
          <li>
            <Link to="/test">Test</Link>
          </li>
        </ul>
      </nav>

      {/* 바뀌는 부분 : Switch, Route */}
      <Switch>
        <Route exact path="/">
            <CovidMap />
        </Route>
        <Route path="/test">
            <Test />
        </Route>
      </Switch>
    </Router>
  )
}

export default Select;