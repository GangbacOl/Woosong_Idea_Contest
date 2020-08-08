import React from 'react';
import { Link } from 'react-router-dom';

const LinkAtom = ({ path, LinkContent }) => <Link to={path}>{LinkContent}</Link>;

export default LinkAtom;
