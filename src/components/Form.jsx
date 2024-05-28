import React, { Component } from 'react';


export default class Form extends Component {
    render() {
        
        return (
            <>
                <div className="main">
                    <div className="form">
                        <div className="formBody " style={{ color: 'rgb(73, 74, 74)', fontFamily: 'Karla-VariableFont_wght', width:'90%' , fontWeight:"500" }}>
                            <h3 style={{ paddingBottom: '15px', color: 'rgb(43, 63, 64 , 0.95)', fontWeight: '700' }}>Contact Us</h3>
                            <div className="row g-2-5" style={{ paddingBottom: '15px' }}>
                                <div className="col">
                                    <label htmlFor="firstname" className="form-label mb-1" style={{fontSize:'13px'}}>First Name <span style={{color:'rgb(47, 191, 191)'}}>{this.props.astric}</span></label>
                                    <input type="text" className="form-control" aria-label="First name" id='firstname' style={{borderColor:'rgb(151, 157, 159)'}}  />
                                </div>
                                <div className="col">
                                    <label htmlFor="lastname" className="form-label mb-1" style={{fontSize:'13px'}}>Last Name <span style={{color:'rgb(47, 191, 191)'}}>{this.props.astric}</span></label>
                                    <input type="text" className="form-control" aria-label="Last name" id='lastname'style={{borderColor:'rgb(151, 157, 159)'}} />
                                </div>
                            </div>
                            <div className="col-md-12" style={{ paddingBottom: '15px' }}>
                                <label htmlFor="inputEmail4" className="form-label mb-1" style={{fontSize:'13px'}}>Email Address <span style={{color:'rgb(47, 191, 191)'}}>{this.props.astric}</span></label>
                                <input type="email" className="form-control" id="inputEmail4" style={{borderColor:'rgb(151, 157, 159)'}}  />
                            </div>
                            <div className="row radio" style={{ paddingBottom: '20px' }}>
                                <div className='col'>
                                    <label htmlFor="radio" className="form-label mb-2" style={{fontSize:'13px'}}>Query Type <span style={{color:'rgb(47, 191, 191)'}}>{this.props.astric}</span></label>
                                    <div className="d-flex">
                                        <div className="rounded" style={{ flex: '1', marginRight: '6px', border:'1px solid rgb(151, 157, 159)', padding:'9px 9px 9px 20px'}}>
                                            <span className="rounded d-flex "  >
                                                <input type="radio" value="General Enquiry" id='generalEnquiry' className='me-2' />
                                                <label htmlFor="generalEnquiry"style={{fontSize:'13px'}}>General Enquiry</label>
                                            </span>
                                        </div>
                                        <div className="rounded" style={{ flex: '1', marginLeft: '6px', border:'1px solid rgb(151, 157, 159)', padding:'9px 9px 9px 20px'}}>
                                            <span className="rounded d-flex">
                                                <input type="radio" value="Support Request" id='supportRequest' className='me-2'  />
                                                <label htmlFor="supportRequest" style={{fontSize:'13px'}}>Support Request</label>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="msg" style={{ paddingBottom: '15px' }}>
                                <div className="mb-1">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label mb-1" style={{fontSize:'13px'}}>Message <span style={{color:'rgb(47, 191, 191)'}}>{this.props.astric}</span></label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" style={{borderColor:'rgb(151, 157, 159)', resize:'none', height:'100px'}} ></textarea>
                                </div>
                            </div>
                            <div className="check d-flex" style={{ paddingBottom: '25px' }}>
                                <input className="form-check-input me-2-5" type="checkbox" value="" id="flexCheckDefault" style={{borderColor:'rgb(155, 160, 160)' , borderRadius:'0', fontSize:'12px'}} />
                                <label className="form-check-label" htmlFor="flexCheckDefault" style={{fontSize:'13px'}}>
                                    I consent to being contacted by the team <span style={{color:'rgb(47, 191, 191)'}}>{this.props.astric}</span>
                                </label>
                            </div>
                            <button type="button" className="btn" style={{ width: '100%', backgroundColor: 'rgb(12, 125, 105)', color: 'white' }}>Submit</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
