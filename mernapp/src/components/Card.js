import React from 'react'

export default function Card() {
    return (
        <div>
            <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "400px" }}>
                <img src="https://source.unsplash.com/random/900x700/?dosa" className="d-block w-100"  alt="third slide" />
                <img className="card-img-top" src="" alt="nothing to display" />
                {/* alt is used if image is failed to load --*/}
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Checking if card is working.</p>
                    <div className="container w-100">
                        <select className='m-2 h-100 bg-success'>
                            {(() => {
                                let options = [];
                                for (let i = 1; i <= 6; i++) {
                                    options.push(<option key={i} value={i}> {i} </option>);
                                }
                                return options;
                            })()}{/* "()=>{}"  is a function now we have made this function a block using () i.e 
                                "(()=>{})" is a functional block now to call any function we should call it using '()'
                                so the final structure has become like "(()=>{}()"
                                this concept is called immediate invoked function expressions (IIEF)*/}
                        </select>
                        <select className='m-2 h-100 bg-success rounded'>
                            <option key="half">Half</option>
                            <option key="full">Full</option>
                        </select>
                        <div className='d-inline h-100 fs-5'>Total Price</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
