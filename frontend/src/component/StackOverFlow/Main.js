import React from 'react';
import Allquestion from './Allquestion';

export default function Main({ questions }) {
  return (
    <>
      <div>
        {questions.map((_q) => (
          <Allquestion key={_q.index} data={_q} />
        ))}
      </div>
    </>
  );
}
