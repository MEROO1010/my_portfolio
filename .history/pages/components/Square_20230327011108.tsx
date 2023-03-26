import React from 'react'
import Image from 'next/image'

const Square = () => {
  return (
    <div>
      {/*logo design*/}
       <div className="absolute py-40 mx-40 my-18 left-8 top-14 ">
       <Image src="/assets/images/logodesign.png" alt="laptop" width={200} height={200}/>
       </div>

        {/*programming*/}
       <div className="absolute py-20 px-40 mx-80 my-18 right-80 bottom-40 ">
       <Image src="/assets/images/programming.png" alt="laptop" width={200} height={200}/>
       </div>

       {/*ui-ux design*/}  
       <div className="absolute py-20 mx-80 my-18 right-4 bottom-40 ">
       <Image src="/assets/images/uiux.png" alt="laptop" width={200} height={200}/>
       </div>
       
       {/*web design*/}
       <div className="absolute  mx-40 my-40 left-80 top-50 ">
       <Image src="/assets/images/webdesign.png" alt="laptop" width={200} height={200}/>
       </div>
       
       {/*video editing*/}
       <div className="absolute px-80 mx-20 my-40 right-40 top-50 ">
       <Image src="/assets/images/videoediting.png" alt="laptop" width={200} height={200}/>
       </div>
    </div>
  )
}

export default Square