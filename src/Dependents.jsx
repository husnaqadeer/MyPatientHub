import { useState } from "react";
import "./Dependents.css";

function Dependents() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    month: "February",
    day: "1",
    year: "2021",
    relation: "",
    gender: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const sendForm = () => {
    alert("Profile submitted successfully!");
  };

  return (
    <div className="profile-page">

      <div className="page-heading">
        <h1>Build Your Profile</h1>
        <p>
          This information will let us know more about your Family.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="progress-section">

        <div className="progress-line">
          <div
            className={`progress-filled ${
              step === 1
                ? "step-one"
                : step === 2
                ? "step-two"
                : "step-three"
            }`}
          ></div>

          <div
            className={`progress-circle ${
              step >= 1 ? "active" : ""
            }`}
          ></div>

          <div
            className={`progress-circle second ${
              step >= 2 ? "active" : ""
            }`}
          ></div>

          <div
            className={`progress-circle third ${
              step >= 3 ? "active" : ""
            }`}
          ></div>
        </div>

        <div className="step-labels">

          <div className={step === 1 ? "current" : ""}>
            Dependents Registration
          </div>

          <div className={step === 2 ? "current" : ""}>
            Dependents Health
            <br />
            Records
          </div>

          <div className={step === 3 ? "current" : ""}>
            Family Care Plan
          </div>

        </div>
      </div>

      {/* Main Content */}
      <div className="main-card">

        {/* STEP 1 */}
        {step === 1 && (
          <div className="registration-step">

            <h2>Let's start with the basic information</h2>

            <p className="description">
              Let us know With name and last name. contacting you at
            </p>

            <div className="two-columns">

              <div className="input-group">
                <label>First Name</label>

                <input
                  type="text"
                  name="firstName"
                  placeholder="Eg. Michael"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">
                <label>Last Name</label>

                <input
                  type="text"
                  name="lastName"
                  placeholder="Eg. Tomson"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>

            </div>

            <div className="input-group birth-group">

              <label>Birth Date</label>

              <div className="birth-inputs">

                <select
                  name="month"
                  value={formData.month}
                  onChange={handleChange}
                >
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </select>

                <select
                  name="day"
                  value={formData.day}
                  onChange={handleChange}
                >
                  {Array.from({ length: 31 }, (_, index) => (
                    <option key={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>

                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                >
                  <option>2026</option>
                  <option>2025</option>
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                  <option>2021</option>
                  <option>2020</option>
                  <option>2019</option>
                  <option>2018</option>
                  <option>2017</option>
                  <option>2016</option>
                  <option>2015</option>
                  <option>2014</option>
                  <option>2013</option>
                  <option>2012</option>
                  <option>2011</option>
                  <option>2010</option>
                  <option>2009</option>
                  <option>2008</option>
                  <option>2007</option>
                  <option>2006</option>
                  <option>2005</option>
                  <option>2004</option>
                  <option>2003</option>
                  <option>2002</option>
                  <option>2001</option>
                </select>

              </div>
            </div>

            <div className="two-columns">

              <div className="input-group">

                <label>Relation</label>

                <select
                  name="relation"
                  value={formData.relation}
                  onChange={handleChange}
                >
                  <option value="">
                    Eg. Brother/Child
                  </option>
                  <option>Brother</option>
                  <option>Sister</option>
                  <option>Child</option>
                  <option>Father</option>
                  <option>Mother</option>
                  <option>Other</option>
                </select>

              </div>

              <div className="input-group">

                <label>I'm</label>

                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Male</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>

              </div>

            </div>

            <div className="button-container next-container">

              <button
                className="next-button"
                onClick={nextStep}
              >
                NEXT
              </button>

            </div>

          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="health-step">

            <h2>Dependents Health Records</h2>

            <p className="description">
              Let us know about your dependent's health information.
            </p>

            <div className="health-form">

              <div className="input-group">

                <label>Health Condition</label>

                <input
                  type="text"
                  placeholder="Enter health condition"
                />

              </div>

              <div className="input-group">

                <label>Medical Information</label>

                <textarea
                  placeholder="Enter medical information"
                ></textarea>

              </div>

            </div>

            <div className="button-container">

              <button
                className="back-button"
                onClick={previousStep}
              >
                BACK
              </button>

              <button
                className="next-button"
                onClick={nextStep}
              >
                NEXT
              </button>

            </div>

          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="plan-step">

            <div className="plans">

              <div className="plan-card">

                <h2>
                  Standard
                  <br />
                  Plan
                </h2>

                <div className="plan-line"></div>

                <div className="detail">
                  <span>✓</span>
                  <p>
                    Detail One
                    <br />
                    Detail
                    <br />
                    Two
                  </p>
                </div>

                <div className="detail">
                  <span>✓</span>
                  <p>
                    Detail
                    <br />
                    Three
                  </p>
                </div>

              </div>

              <div className="plan-card">

                <h2>
                  Premium
                  <br />
                  Plan
                </h2>

                <div className="plan-line"></div>

                <div className="detail">
                  <span>✓</span>
                  <p>
                    Detail One
                    <br />
                    Detail
                    <br />
                    Two
                  </p>
                </div>

                <div className="detail">
                  <span>✓</span>
                  <p>
                    Detail
                    <br />
                    Three
                  </p>
                </div>

              </div>

              <div className="plan-card">

                <h2>Super Plan</h2>

                <div className="plan-line"></div>

                <div className="detail">
                  <span>✓</span>
                  <p>Detail One</p>
                </div>

                <div className="detail">
                  <span>✓</span>
                  <p>
                    Detail
                    <br />
                    Two
                  </p>
                </div>

                <div className="detail">
                  <span>✓</span>
                  <p>
                    Detail
                    <br />
                    Three
                  </p>
                </div>

              </div>

            </div>

            <div className="button-container">

              <button
                className="back-button"
                onClick={previousStep}
              >
                BACK
              </button>

              <button
                className="send-button"
                onClick={sendForm}
              >
                SEND
              </button>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default Dependents;