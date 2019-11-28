import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const Rocket = ({data}) => {
  const rocketData = data.spacexLaunches;
  return (
    <Layout>
      <div className="container">
        <h1>{rocketData.mission_name}</h1>
        {rocketData.links && rocketData.links.mission_patch_small &&
          <img src={rocketData.links.mission_patch_small} alt={rocketData.mission_name}/>
        }
      </div>
    </Layout>
  );
};

Rocket.prototypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($RocketId: Int!) {
    spacexLaunches(flight_number: {eq: $RocketId}) {
      id
      flight_number
      mission_name
      links {
        mission_patch_small
      }
    }
  }
`;

export default Rocket;