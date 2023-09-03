import React from 'react'
import ProductContainer from './ProductContainer'

export default function Filter() {
   check.onClick=toggel;
   if (check.checked) {
    return

   }
  return (
    <div>
      
        
          <div className="col-md-3 col-sm-0">
            <h3>Filter</h3>
            <h5 className='my-4 '>catogiries</h5>
             <div><input className='w-10'  id="check" type='checkbox'/>camera accosiries</div>
             <div><input className='w-10' id="check" type='checkbox'/>dailyuse</div>
             <div><input className='w-10' id="check" type='checkbox'/>mobile</div>
             <div><input className='w-10' id="check" type='checkbox'/>All</div>
             <hr/>
          </div>
          
          
                <ProductContainer/>
          </div>
        </div>
      </div>
    </div>
  )
}
