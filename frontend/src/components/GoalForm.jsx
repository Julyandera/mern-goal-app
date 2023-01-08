import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {createGoal} from '../features/goals/goalSlice';

function GoalForm() {
  const dispatch = useDispatch();

  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createGoal({ text }));
    setText('');
  };

  return (
    <section>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Goal</label>
          <input
            type='text'
            name='text'
            id='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Submit Goal
          </button>
        </div>
      </form>
    </section>
  );
}

export default GoalForm;
