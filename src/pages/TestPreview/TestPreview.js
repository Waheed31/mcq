import React from "react";
import "./TestPreview.css";

const TestPreview = () => {
  return (
    <>
      <div className="overall"></div>
      <div className="Html">Html</div>
      <div className="mat-card">
        <form className="form">
          <div className="div">
            <div className="div-left">
              <label className="describtion">
                Describe yourself as you generally are now, not as you wish to
                be in the future. Describe yourself as you honestly see
                yourself, in relation to your peers.
              </label>
            </div>
            <div className="div-right">
              <label className="select">select only one</label>
              <div className="card-mcq">
                <div className="option1">
                  <div className="option1-1">
                    <div className="option1-2">
                      <label className="text-option1">
                        I rarely display signs of affection.
                      </label>
                    </div>
                    <div className="point-option1"></div>
                  </div>
                </div>
                <div className="option2">
                  <div className="option2-1">
                    <div className="option2-1-1">
                      <label className="text-option2">
                        I am not afraid to display signs of affection.
                      </label>
                    </div>
                    <div className="option2-1-2">
                      <label className="eclipse"></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="btn">
        <div>
          <button className="btn-exit">
            <label className="label-exit">Exit</label>
          </button>
        </div>
        <div>
          <button className="btn-next">
            <label className="label-next">Next</label>
          </button>
        </div>
      </div>
    </>
  );
};

export default TestPreview;
