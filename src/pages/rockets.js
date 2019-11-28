import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

const Rockets = ({data}) => {
  const rockets = data.allSpacexLaunches.nodes;
  return (
    <Layout>
      <div className="container">
        {rockets.map(rocket => (
          <Link to={`/rockets/${rocket.flight_number}`} key={rocket.id}>
            <h2>{ rocket.mission_name }</h2>
            {rocket.links && rocket.links.mission_patch_small &&
              <img src={rocket.links.mission_patch_small} alt={ rocket.mission_name }/>
            }
          </Link>
        ))}
      </div>
    </Layout>
  );
}

Rockets.prototypes = {
  data: PropTypes.object.isRequired,
};

export const data = graphql`
  {
    allSpacexLaunches(sort: {fields: launch_year, order: ASC}) {
      nodes {
        id
        mission_name
        flight_number
        links {
          mission_patch_small
        }
      }
    }
  }
`;

export default Rockets;