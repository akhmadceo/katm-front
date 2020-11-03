import React from "react";


import RequestsUserInfo  from "./RequestsUserInfo";
import { RequestsTable, UserInfoBox } from "../../components";

import { Switch } from "@material-ui/core";

import TableLoader from '../../components/Loaders/TableLoader'


import "../views.scss";


function Requests({ match }) {
  const [visible, setVisible] = React.useState(true);
  const [activeIndex, setActiveIndex] = React.useState(null);

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const blocksRightRef = React.useRef()
  const toggleRef = React.useRef()

  const setUserInfo = (index) => {
    setActiveIndex(index);
    setVisible(true);
  }

  const toggleVisible = () => {
    setVisible(!visible);
  }

  const handleOutSideClick = (e) => {
    if(!e.path.includes(blocksRightRef.current)){
      setVisible(false);
    }
  }

  React.useEffect(() => {
    document.body.addEventListener("click", handleOutSideClick);
  }, [])

    return (
      <div className={`blocks ${visible ? null : "opened"}`}>
        <div className="blocks__left">
          <div className="block__header">
            <h2>Список заявок</h2>
            {/* <button onClick={toggleVisible}>toggle</button> */}
            <div style={{display: "flex", alignItems: "center"}}>
              <h2>Физ. Лицо</h2>
              <Switch
                ref={toggleRef}
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
            </div>
          </div>
          <div ref={blocksRightRef} className="table">
       
            <RequestsTable setVisible={setVisible} setUserInfo={setUserInfo} activeIndex={activeIndex} />
          </div>
        </div>
        {visible && <RequestsUserInfo toggleRef={toggleRef} />}
      </div>
    );
}

export default Requests
