import React from 'react';
import ImageAtom from '../../atoms/ImageAtom';
import SpanAtom from '../../atoms/SpanAtom';

const UserMolecule = ({ userThumbnail, userName }) => {
    return (
        <div className="UserMolecule">
            <ImageAtom src={userThumbnail} />
            <SpanAtom spanContent={userName} />
        </div>
    );
};

export default UserMolecule;
