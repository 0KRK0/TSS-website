import React from 'react'
import { useState } from 'react'

function Apply() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phn, setPhn] = useState('');
    const [exp, setExp] = useState('');
    const [role, setRole] = useState('');
    const [resume, setResume] = useState('');
    const [desc, setDesc] = useState('');

    const handleSubmit = () => {
        console.log(name, email, phn.exp, role, resume, desc)
    }

    return (
        <>
            <div>Apply for a job</div>
            <form>

                <input
                    type='text'
                    placeholder='Name'
                    value={name}
                    maxLength={30}
                    minLength={3}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <input
                    type='email'
                    placeholder='Email'
                    value={email}
                    maxLength={30}
                    minLength={3}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <span>+91 </span>
                <input
                    type='text'
                    placeholder='Phone'
                    value={phn}
                    maxLength={10}
                    minLength={10}
                    onChange={(e) => setPhn(e.target.value)}
                    required
                />

                <label htmlFor='role'>Interested role</label>
                <input
                    type='text'
                    placeholder='Role'
                    value={role}
                    maxLength={30}
                    minLength={3}
                    onChange={(e) => setRole(e.target.value)}
                    required
                />

                <label htmlFor='experience'>Experience</label>
                <select name='experience' value={exp} onChange={(e) => setExp(e.target.value)}>
                    <option value="Fresher">Fresher</option>
                    <option value="Junior">Junior (1-3 years)</option>
                    <option value="sophomore">Mid level (3-5 years)</option>
                    <option value="senior">Senior (5-8 years)</option>
                </select>

                <label htmlFor='resume'>Resume</label>
                <input
                    type='file'
                    name='resume'
                    value={resume}
                    onChange={(e) => setResume(e.target.value)}
                    required
                />

                <label htmlFor='description'>Tell us about yourself</label>
                <textarea
                    placeholder='Provide any links of your portfolio or give a description of your previous roles'
                    maxLength={300}
                    rows={4}
                    cols={35}
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    required
                />

                <button onClick={handleSubmit}>Submit</button>

            </form>
        </>
    )
}

export default Apply