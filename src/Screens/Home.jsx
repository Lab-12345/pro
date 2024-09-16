import React from 'react';

export default function Home() {
  return (
    <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text.</p>
        <div className='form-group'>
          <select className='form-control m-2'>
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              )
            })}
          </select>
        </div>
      </div>
    </div>
  )
};