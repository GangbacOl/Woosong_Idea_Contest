import React from 'react';
import LinkAtom from '../../atoms/LinkAtom';

const NavMolecule = () => {
    return (
        <div className="NavMolecule">
            <LinkAtom path="/login" LinkContent="로그인 / 회원가입" />
            <LinkAtom path="/introduce" LinkContent="소개" />
        </div>
    );
};

export default NavMolecule;
