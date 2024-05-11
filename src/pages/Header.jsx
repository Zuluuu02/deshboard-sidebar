import React from 'react';

const Header = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', borderBottom: '1px solid #ccc' }}>
                <h1>Dashboard</h1>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ marginRight: '20px' }}>
                        <img src="./picture/face.jpg" alt="Profile" style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} />
                        <span>Uy, Xyrille Clark F.</span>
                    </div>
                    <div>
                        <i className="fa fa-bell" style={{ fontSize: '24px' }}></i>
                    </div>
                </div>
            </header>
    </div>
  );
};


export default Header;