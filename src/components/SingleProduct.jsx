import React from 'react'

const SingleProduct = () => {
    return (
        <section className="product-details flex justify-between">
          <div className="single-img w-40 min-w-[40rem]">
            <img src="img/pro-f1.jpg" alt="product img" id="mainImg" width="100%" />
          </div>
    
          <div className="product-des w-50 pt-20">
            <h6 className="text-1.2rem">home / t-shirt</h6>
            <h4 className="text-2.2rem font-bold pb-1.1rem">men's fashion t shirt</h4>
            <h2 className="text-2.3rem font-medium">$140.00</h2>
            <select name="size" id="#" className="block mb-1.3rem">
              <option>select size</option>
              <option>small</option>
              <option>large</option>
              <option>XL</option>
              <option>XXL</option>
            </select>
            <input type="number" value="1" className="w-3.7rem h-3.7rem line-height-[3.7rem] pl-0.5rem border-1 border-#088178 rounded-0.5rem" />
            <button className="primary-btn text-white bg-#088178 font-normal ml-0.8rem py-0.81rem px-2rem mt-2">add to cart</button>
            <h4 className="text-1.5rem mt-2">product details</h4>
            <p className="text-1.5rem leading-2.5rem text-#465b52">The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featured a taped neck and shoulder, and a seamless double-needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package.</p>
          </div>
        </section>
      );
    };

export default SingleProduct
