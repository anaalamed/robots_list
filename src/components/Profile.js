import React from "react";
import styled from "styled-components";
import ImageLoader from "./ImageLoader";

// prettier-ignore
const Profile = ({id,first_name,last_name,email,country,description,avatar=''}) => {
avatar = avatar.replace("100x100", "300x300")
  
return (
    <ProfileBox>
      <ProfileImageBox>
        <img src={avatar} alt="avatar" />
        {/* <ImageLoader src={avatar}/> */}

      </ProfileImageBox>
      <ProfileDetailsBox>
        <ProfileTitle>
          {first_name} {last_name}
        </ProfileTitle>
        <GradLine className="mt20" />
        <ProfileDetail className=" mt20">id: {id}</ProfileDetail>
        <ProfileDetail>country: {country}</ProfileDetail>
        <ProfileDetail>email: {email}</ProfileDetail>
        <ProfileDescription className="mt20">{description}</ProfileDescription>
      </ProfileDetailsBox>
    </ProfileBox>
  );
};

export default Profile;

// ---------------------------- styled-components ----------------------
const ProfileBox = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  padding-right: 15px;
  align-items: center;
`;

const GradLine = styled.div`
  display: block;
  width: 100%;
  border: none;
  height: 1px;
  background: -webkit-gradient(
    radial,
    50% 50%,
    0,
    50% 50%,
    200,
    from(midnightblue),
    to(Cornsilk)
  );
`;

const ProfileImageBox = styled.div`
  background: peachpuff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 30rem;
  height: 30rem;
`;

const ProfileDetailsBox = styled.div`
  padding: 10px;
  font-family: "Expletus Sans";
  text-align: left;
  color: slategray;
  font-weight: 400;
`;

const ProfileTitle = styled.div`
  font-size: 3.5rem;
  font-weight: inherit;
  text-align: center;
`;

const ProfileDetail = styled.div`
  font-size: 2.2rem;
  font-weight: inherit;
  color: darkslateblue;
`;

const ProfileDescription = styled.div`
  font-family: "Raleway";
  font-size: 1.8rem;
  max-width: 40rem;
`;
