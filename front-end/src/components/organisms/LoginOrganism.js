import React from 'react';
import InputMolecule from '../molecules/InputMolecule';

const LoginOrganism = () => {
    return (
        <div className="LoginOrganism">
            <InputMolecule htmlFor="account" LabelContent="Account" type="text" value={null} />
            <InputMolecule htmlFor="password" LabelContent="Password" type="password" value={null} />
        </div>
    );
};

export default LoginOrganism;
