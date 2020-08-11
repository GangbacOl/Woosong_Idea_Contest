import React from 'react';
import InputAtom from '../../atoms/InputAtom';

const ActionMolecule = () => {
    return (
        <div className="ActionMolecule">
            <InputAtom type="button" value="Share" />
            <InputAtom type="button" value="Good" />
            <InputAtom type="button" value="Chat" />
        </div>
    );
};

export default ActionMolecule;
