import React from 'react';
import Heading2Atom from '../../atoms/Heading2Atom';
import ParagraphAtom from '../../atoms/ParagraphAtom';

const IntroMolecule = ({ h2Content, pContent }) => {
    return (
        <div className="IntroMolecule">
            <Heading2Atom h2Content={h2Content} />
            <ParagraphAtom pContent={pContent} />
        </div>
    );
};

export default IntroMolecule;
