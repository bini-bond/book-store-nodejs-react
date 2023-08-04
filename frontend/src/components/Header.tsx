import React from 'react';

interface HeaderProps {
  title: string;
  logo?: string;
}

function Header(props: HeaderProps) {
  const { title, logo } = props;
  return (
    <div style={{ fontSize: '25px', fontWeight: 'bold' }}>
      <h3>Books</h3>
    </div>
  );
}

export default Header;
