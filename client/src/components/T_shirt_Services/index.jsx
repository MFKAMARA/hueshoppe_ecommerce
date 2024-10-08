// Define a functional component called T_shirt_Services
import { useState,useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_CATEGORIES, QUERY_PRODUCTS } from "../../utils/queries";

function T_shirt_Services() {
  const { data, loading } = useQuery(QUERY_CATEGORIES);
  const categoryTshirt = data?.categories || [];
  console.log(categoryTshirt);
  const { data: productData, loading: productLoading } =
    useQuery(QUERY_PRODUCTS,{
      variables:{
      
        name:"Custom T-Shirt Services"
      }
    });
  let products = productData?.products|| [];
  console.log(products);

  return (
    <>
      {/* Main fashion section */}
      <div class="fashion_section">
        {/* Carousel for T-shirt services */}
        <div id="main_slider" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            {/* First carousel item (active) */}
            <div class="carousel-item active">
              <div class="container">
                <h1 class="fashion_taital">Custom T-Shirt Services</h1>
                <div class="fashion_section_2">
                  <div class="row">
                    {/* First product: Man T-shirt */}
                    {loading && productLoading?"loading":
                    products.filter(product=>product.category===categoryTshirt[0]._id).map(product=>{
                      console.log(product)
                      return (
                        <div class="col-lg-4 col-sm-4">
                      <div class="box_main">
                        <h4 class="shirt_text">Graduation T-shirt</h4>
                        <p class="price_text">
                          Price <span style={{ color: "#262626" }}>$ 30</span>
                        </p>
                        <div class="tshirt_img">
                          <img src="/images/grad.jpeg" alt="Man T-shirt" />
                        </div>
                        <div class="btn_main">
                          <div class="buy_bt">
                            <a href="#">Buy Now</a>
                          </div>
                          <div class="seemore_bt">
                            <a href="#">See More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                      )
                    })
                    }
                    
                    {/* Second product: Man shirt */}
                    {/* <div class="col-lg-4 col-sm-4">
                      <div class="box_main">
                        <h4 class="shirt_text">
                          Wedding & Bachelorette T-shirt
                        </h4>
                        <p class="price_text">
                          Price <span style={{ color: "#262626" }}>$ 30</span>
                        </p>
                        <div class="tshirt_img">
                          <img src="/images/wed.jpeg" alt="Man shirt" />
                        </div>
                        <div class="btn_main">
                          <div class="buy_bt">
                            <a href="#">Buy Now</a>
                          </div>
                          <div class="seemore_bt">
                            <a href="#">See More</a>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    {/* Third product: Woman Scarf */}
                    {/* <div class="col-lg-4 col-sm-4">
                      <div class="box_main">
                        <h4 class="shirt_text">Baby Shower T-Shirt</h4>
                        <p class="price_text">
                          Price <span style={{ color: "#262626" }}>$ 30</span>
                        </p>
                        <div class="tshirt_img">
                          <img src="/images/bshower.jpeg" alt="Woman Scarf" />
                        </div>
                        <div class="btn_main">
                          <div class="buy_bt">
                            <a href="#">Buy Now</a>
                          </div>
                          <div class="seemore_bt">
                            <a href="#">See More</a>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            {/* Duplicate first carousel item structure for additional items */}
            <div class="carousel-item">
              <div class="container">
                <h1 class="fashion_taital">Custom T-Shirt Services</h1>
                <div class="fashion_section_2">
                  <div class="row">
                    <div class="col-lg-4 col-sm-4">
                      <div class="box_main">
                        <h4 class="shirt_text">Corporate events T-shirt</h4>
                        <p class="price_text">
                          Price <span style={{ color: "#262626" }}>$ 30</span>
                        </p>
                        <div class="tshirt_img">
                          <img src="/images/company.jpeg" alt="Man T-shirt" />
                        </div>
                        <div class="btn_main">
                          <div class="buy_bt">
                            <a href="#">Buy Now</a>
                          </div>
                          <div class="seemore_bt">
                            <a href="#">See More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-sm-4">
                      <div class="box_main">
                        <h4 class="shirt_text">Birthday parties T-shirt</h4>
                        <p class="price_text">
                          Price <span style={{ color: "#262626" }}>$ 30</span>
                        </p>
                        <div class="tshirt_img">
                          <img src="/images/birth.jpeg" alt="Man shirt" />
                        </div>
                        <div class="btn_main">
                          <div class="buy_bt">
                            <a href="#">Buy Now</a>
                          </div>
                          <div class="seemore_bt">
                            <a href="#">See More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-sm-4">
                      <div class="box_main">
                        <h4 class="shirt_text">Family Reunions T-shirt</h4>
                        <p class="price_text">
                          Price <span style={{ color: "#262626" }}>$ 30</span>
                        </p>
                        <div class="tshirt_img">
                          <img src="/images/reunion.jpeg" alt="Woman Scarf" />
                        </div>
                        <div class="btn_main">
                          <div class="buy_bt">
                            <a href="#">Buy Now</a>
                          </div>
                          <div class="seemore_bt">
                            <a href="#">See More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Duplicate first carousel item structure for additional items */}
            <div class="carousel-item">
              <div class="container">
                <h1 class="fashion_taital">Custom T-Shirt Services</h1>
                <div class="fashion_section_2">
                  <div class="row">
                    <div class="col-lg-4 col-sm-4">
                      <div class="box_main">
                        <h4 class="shirt_text">School events T-shirt</h4>
                        <p class="price_text">
                          Price <span style={{ color: "#262626" }}>$ 30</span>
                        </p>
                        <div class="tshirt_img">
                          <img
                            src="/images/schoolactivitiy.jpeg"
                            alt="Man T-shirt"
                          />
                        </div>
                        <div class="btn_main">
                          <div class="buy_bt">
                            <a href="#">Buy Now</a>
                          </div>
                          <div class="seemore_bt">
                            <a href="#">See More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-sm-4">
                      <div class="box_main">
                        <h4 class="shirt_text">Charity events T-shirt</h4>
                        <p class="price_text">
                          Price <span style={{ color: "#262626" }}>$ 30</span>
                        </p>
                        <div class="tshirt_img">
                          <img src="/images/fund.jpeg" alt="Man shirt" />
                        </div>
                        <div class="btn_main">
                          <div class="buy_bt">
                            <a href="#">Buy Now</a>
                          </div>
                          <div class="seemore_bt">
                            <a href="#">See More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-sm-4">
                      <div class="box_main">
                        <h4 class="shirt_text">Sport Teams Jersey</h4>
                        <p class="price_text">
                          Price <span style={{ color: "#262626" }}>$ 30</span>
                        </p>
                        <div class="tshirt_img">
                          <img src="images/soccer.jpeg" alt="Woman Scarf" />
                        </div>
                        <div class="btn_main">
                          <div class="buy_bt">
                            <a href="#">Buy Now</a>
                          </div>
                          <div class="seemore_bt">
                            <a href="#">See More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Carousel controls */}
          <a
            class="carousel-control-prev"
            href="#main_slider"
            role="button"
            data-slide="prev"
          >
            <i class="fa fa-angle-left"></i>
          </a>
          <a
            class="carousel-control-next"
            href="#main_slider"
            role="button"
            data-slide="next"
          >
            <i class="fa fa-angle-right"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default T_shirt_Services;
