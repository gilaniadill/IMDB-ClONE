import React from 'react';

const Results = ({ results }) => {
  return (
    <>
      {results.map((result) => (
        <div className="" key={result.id}>
          <h2>{result.title}</h2>
        </div>
      ))}
    </>
  );
};

export default Results;