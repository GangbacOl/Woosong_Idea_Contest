import React from 'react';
import InputMolecule from '../molecules/InputMolecule';

const RegisterOrganism = () => {
    return (
        <div className="RegisterOrganism">
            <InputMolecule htmlFor="account" LabelContent="Account" type="text" value={null} />
            <InputMolecule htmlFor="password" LabelContent="Password" type="password" value={null} />
            <InputMolecule htmlFor="email" LabelContent="Email" type="text" value={null} />
            <InputMolecule htmlFor="name" LabelContent="Name(실명을 입력해주세요.)" type="text" value={null} />
            <InputMolecule htmlFor="nickname" LabelContent="Nickname" type="text" value={null} />
        </div>
    );
};

export default RegisterOrganism;
