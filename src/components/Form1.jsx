import { useNavigate } from 'react-router-dom';
import{useContext} from "react"
import {RegistrationContext} from "../context/RegistrationContext"

export const Form1 = () => {
  const { name,age,dateofbirth, dispatch } = useContext(RegistrationContext);

  const navigate = useNavigate();

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) =>
          dispatch({ type: 'CHANGE_NAME', payload: e.target.value })
        }
      />
      <input
        type="number"
        placeholder="Enter Age"
        value={age}
        onChange={(e) =>
          dispatch({ type: 'CHANGE_AGE', payload: e.target.value })
        }
      />
      <input
        type="date"
        placeholder="Enter DateofBirth"
        value={dateofbirth}
        onChange={(e) =>
          dispatch({ type: 'CHANGE_DATEOFBIRTH', payload: e.target.value })
        }
      />
      <button disabled={!name && !age && !dateofbirth} onClick={() => navigate('/registration/two')}>next</button>
    </div>
  );
};