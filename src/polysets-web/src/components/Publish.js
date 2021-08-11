import React from 'react';
import 'primeflex/primeflex.css';
import { Button } from 'primereact/button';

const Publish = (props) => {
  return (
    <div>
      <h3 className='p-mt-5'>{props.state.createName}</h3>
      <h5 className='textgray'>{props.state.createSymbol}</h5>
      <h4> $ {props.state.createStartingPrice} </h4>
      <section>
        <div className='p-grid'>
          <div className='p-col'>
            <strong>Tokens</strong>
          </div>
          <div className='p-col text-right'>
            <strong>Allocation</strong>
          </div>
        </div>
        {props.state.tokenList
          ? props.state.tokenList.map((value, index) => {
              return (
                <div className='p-grid'>
                  <div className='p-col'>
                    {value.symbol}
                    <br />
                    {value.name}
                  </div>
                  <div className='p-col text-right'>{value.alloc}%</div>
                </div>
              );
            })
          : null}
      </section>
      <Button
        label='Edit Set'
        className='p-button p-component p-button-outlined p-button-secondary p-col-12 p-mt-2 p-ml-1'
        onClick={() => props.onChange({ activeIndex: 0 })}
      />
      <h3 className='p-mt-5'>Publish your Set</h3>
      <article className='p-mt-3'>
        To publish your Set, you'll need to pay ETH to cover the Smart contract
        creation costs. We do not charge fees to create Sets, these costs are
        Etherem Network Fees.
      </article>
      <div class='alert alert-danger p-mt-3'>
        Before proceeding, please review our Set Creation Guide as on all ERC20
        token are compatible with the Set Protocol. Incorrectly configuring Set
        with illiquid or obscure tokens can result in locked funds and lost of
        network fees.
      </div>
      <article className='p-mt-3'>
        I have read agree to the <a href='#'>TokenSets Terms of Services</a>
      </article>
      <div className='p-col-12 p-md-12'>
        <div className='p-grid'>
          <div className='p-col'>Price to Publish Set</div>
          <div className='p-col'>0.108000 ETH</div>
        </div>
      </div>
      <div className='p-field p-col-12 p-md-12'>
        <div className='p-grid'>
          <div className='p-col textgray'>in USD</div>
          <div className='p-col textgray'>$125.93</div>
        </div>
        <Button
          label='Publish'
          className='p-button p-component p-button-info p-col-12 p-mt-2 p-ml-1'
        />
      </div>
    </div>
  );
};
export default Publish;
