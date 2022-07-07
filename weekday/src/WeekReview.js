import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const WeekReview = (props) => {
  let history = useHistory();
  console.log(props);
  const my_lists = Object.keys(props.list);

  const [avg, setAvg] = React.useState("0.0");

  React.useEffect(() => {
    let sum = 0;
    Object.values(props.list).map((x) => {
      sum += x;
    });
    setAvg((sum / 7).toFixed(1));
  }, [avg]);

  const scoreReset = () => {
    Object.keys(props.list).map((x) => {
      props.list[x] = 0;
    });
    props.setList(props.list);
    setAvg("0.0");
  };
  

  return (
    <ListStyle>
      <Container>
        <Title>내 일주일은?</Title>
        {my_lists.map((list, index) => {
          return (
            <ItemStyle>
              {list}
              {Array.from({ length: 5 }, (item, idx) => {
                return (
                  <div
                    key={idx}
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "30px",
                      margin: "5px",
                      backgroundColor:
                        props.list[list] < idx ? "#ddd" : "#ffeb3b",
                    }}
                  ></div>
                );
              })}
              <Try
                className="list_item"
                key={index}
                onClick={() => {
                  history.push(`/dayreview/${list}`);
                }}
              />
            </ItemStyle>
          );
        })}
        <Input>
          <div
            style={{
              width: "8rem",
              margin: "1rem auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              textAlign: "center",
              color: "blue",
              padding: "9px",
              fontSize: "25px",
              fontWeight: "bold",
            }}
          >
            평균 평점 {avg}
            <div
              style={{
                width: "inherit",
                height: "fit-content",
                backgroundColor: "dodgerblue",
                borderRadius: "6px",
                textAlign: "center",
                margin: "10px 0 0 0",
              }}
              onClick={scoreReset}
            >
              <p style={{ color: "white", fontSize: "18px" }}>Reset</p>
            </div>
          </div>
        </Input>
      </Container>
    </ListStyle>
  );
};

const ListStyle = styled.div`
  margin: 0px 0.5rem 0px 0px;
  font-weight: bold;
`;

const Container = styled.div`
  max-width: 350px;
  width: 80vw;
  height: 90vh;
  margin: 5vh auto;
  padding: 5vh 0px;
  border: 1px solid rgb(221, 221, 221);
  box-sizing: border-box;
  border-radius: 5px;
`;

const Title = styled.h3`
  text-align: center;
`;

const ItemStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0px;
  width: 100%;
`;

const Try = styled.div`
  appearance: none;
  background-color: transparent;
  border-color: transparent purple;
  width: 0px;
  height: 0px;
  border-top-width: 1rem;
  border-top-style: solid;
  border-bottom-width: 1rem;
  border-bottom-style: solid;
  border-left-width: 1.6rem;
  border-left-style: solid;
  color: rgb(255, 255, 255);
  cursor: pointer;
`;

const Input = styled.div`
  width: 8rem;
  margin: 1rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: blue;
  padding: 9px;
  font-size: 25px;
  font-weight: bold;
`;

export default WeekReview;
