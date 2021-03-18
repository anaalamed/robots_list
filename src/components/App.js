import React, { useEffect, useState } from "react";
import List from "./List";
import Filter from "./Filter";
import Profile from "./Profile";
import styled from "styled-components";
// import robots_data from "../robots-data.json";

const App = () => {
  const [original_list, setOriginal] = useState([]);
  const [filtered_list, setFiltered] = useState([]);
  const [profile_data, setProfile] = useState({});
  const [is_loading, setLoading] = useState(true);
  const [error_msg, setErrMsg] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const data_url = "https://api.npoint.io/b8cdd8970e0d9028063a";
        const response = await fetch(data_url);
        const data = await response.json();
        // const data = await (await fetch(data_url)).json();

        setOriginal(data);
        setFiltered(data);
        setProfile(data[0]);
        setLoading(false);
        // console.log("fetchData function was called...");
      } catch (error) {
        console.error(`fetch operation failed: ${error.message}`);
        setErrMsg("Something went wrong...");
      }
    }
    fetchData();
  }, []);

  if (error_msg) return <h1>{error_msg}</h1>;
  return (
    <AppBox>
      {is_loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <Filter list_data={original_list} on_filter={setFiltered} />
          <ContentBox>
            <Profile {...profile_data} />
            <List list_data={filtered_list} pick={setProfile} />
          </ContentBox>
        </>
      )}
    </AppBox>
  );
};

export default App;

// ---------------------------- styled-components ----------------------
const AppBox = styled.div`
  background: Cornsilk;
  padding: 10.5rem 1.5rem 1.5rem;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0.4rem 1.5rem DimGrey;
  position: relative;
  margin-top: 7rem;
  min-width: 60rem;
`;

const ContentBox = styled.div`
  border-radius: 5px;
  display: flex;
`;
