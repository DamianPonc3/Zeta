import React from 'react'
import "./pago.css"

function Pago() {
return (
    <div className='container-pago'>
        <div className='pago'>
            <div className='modos_de_pago'>
                <div className='data-pago'>
                    <a className='data-Icon'>
                        <img src='https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/credit-card.svg'/>
                    </a>
                    <div className='data-title'>
                        <h5>Ver tarjetas de crédito.</h5>
                    </div>
                    <div className='data-subtitle'>
                        <h6>Ver promociones bancarias.</h6>
                    </div>
                </div>
                <div className='data-pago'>
                    <a className='data-Icon'>
                        <img src='	https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/debit-card.svg'/>
                    </a>
                    <div className='data-title'>
                        <h5>Ver tarjeta de débito.</h5>
                    </div>
                    <div className='data-subtitle'>
                        <h6>Ver más.</h6>
                    </div>
                </div>
                <div className='data-pago'>
                    <a className='data-Icon'>
                        <img src='https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/mercado-creditsv2.svg'/>
                    </a>
                    <div className='data-title'>
                        <h5>Efectivo.</h5>
                    </div>
                    <div className='data-subtitle'>
                        <h6>Ver más.</h6>
                    </div>
                </div>
                <div className='data-pago'>
                    <a className='data-Icon'>
                        <img src='	https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/payment-agreement.svg'/>
                    </a>
                    <div className='data-title'>
                        <h5>Cuotas sin tarjeta.</h5>
                    </div>
                    <div className='data-subtitle'>
                        <h6>Conocé Mercado Crédito.</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Pago