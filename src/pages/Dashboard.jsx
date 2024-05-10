import React from 'react';

const Dashboard = () => {
    return (
        <div>
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

            <div style={{ padding: '20px' }}>
                <h2>Buyers</h2>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Address</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Product</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Uy, Xyrille Clark</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Purok 2b-GUSA</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Pencil</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;
