import Select from '@material-ui/core/Select';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';

const PersonalDetails = () => {
    const [state, setState] = useState({
        age: '',
        name: 'hai',
      });
    
      const handleChange = (event) => {
        const name = event.target.name;
        setState({
          ...state,
          [name]: event.target.value,
        });
      };

    return <div className="personal-details-main">
    <label>Title</label>
    <Select
          native
          value={state.age}
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'age-native-simple',
          }}
        >
          <option value={10}>Mr</option>
          <option value={20}>Miss</option>
          <option value={30}>Mrs</option>
        </Select>

        <TextField id="outlined-basic" label="First name" variant="outlined" />
        <TextField id="outlined-basic" label="Last name" variant="outlined" />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Phone number" variant="outlined" />
    </div>
}

export default PersonalDetails;
