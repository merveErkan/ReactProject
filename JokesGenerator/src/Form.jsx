import React from 'react'
import './Form.css'
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';

const Form = () => {
    return (
        <form className="">
            <h2>Form İn React</h2>
            <label>First Name:</label>
            <input type="text" placeholder="Enter your name" />
            <label>Last Name:</label>
            <input type="text" placeholder="Enter your last name" />
            <label>Email:</label>
            <input type="email" placeholder="Enter your email" />
            <label>Contact:</label>
            <textarea placeholder="Enter mobile number"></textarea>

            <label>Gender:</label>
            <div style={{ display: 'flex', gap: '10px' }}>
                <label><input type="radio" name="gender" value="male" /> Male</label>
                <label><input type="radio" name="gender" value="female" /> Female</label>
                <label><input type="radio" name="gender" value="other" /> Other</label>
            </div>

            <label>Hobbies:</label>
            <div style={{ display: 'flex', gap: '15px', marginTop: '5px' }}>
                <label><input type="checkbox" name="hobi" value="kodlama" />Kodlama</label>
                <label><input type="checkbox" name="hobi" value="oyun" />Oyun</label>
                <label><input type="checkbox" name="hobi" value="spor" />Spor</label>
            </div>

            <label>Upload Ressume</label>
            <input type="file" name="resume" />

            <label>Enter URl</label>
            <input type="url" name="website" placeholder="https://example.com" />

            <label>Select your choose</label>
            <select>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="vue">Vue</option>
                <option value="svelte">Svelte</option>
            </select>


            <label>About</label>
            <textarea placeholder="About yourself"></textarea>

            <button type="reset">Reset</button>
            <button type="submit">Submit</button>
        </form>

    )
}

export default Form