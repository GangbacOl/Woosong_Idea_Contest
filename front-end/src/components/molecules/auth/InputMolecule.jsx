import React from 'react';
import LabelAtom from '../../atoms/LabelAtom';
import InputAtom from '../../atoms/InputAtom';

const InputMolecule = ({ htmlFor, LabelContent, type, value }) => {
    return (
        <div className="InputMolecule">
            <LabelAtom htmlFor={htmlFor} LabelContent={LabelContent} />
            <InputAtom type={type} value={value} />
        </div>
    );
};

export default InputMolecule;
