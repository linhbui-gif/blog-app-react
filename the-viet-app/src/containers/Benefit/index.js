import ApiHelper from "service/services";
import { useState } from "react";
import { useEffect } from "react";
import TypoComponent from "components/Typography";
const BenefitContainer = () => {
  const [benefit, setBenefit] = useState({});

  useEffect(() => {
    getBenefit();
  }, []);
  const getBenefit = async () => {
    try {
      const response = await ApiHelper.get({ path: "common-data", params: {} });

      if (response.success) {
        setBenefit(response.data);
      }
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <div className="why-choose-us-area pb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="why-choose-us-img">
              <img src={benefit?.bannerWhyChooseUs?.picture} alt="Image" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="why-choose-us-content mb-removed">
              <div className="row justify-content-center text-center">
                <div className="col-lg-8 col-md-12 mb-50">
                  <TypoComponent
                    name={benefit?.bannerWhyChooseUs?.name}
                    titleBdr
                  ></TypoComponent>
                </div>
              </div>

              <ul>
                <li>
                  <h3
                    dangerouslySetInnerHTML={{
                      __html: benefit?.bannerWhyChooseUs?.description,
                    }}
                  ></h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BenefitContainer;
