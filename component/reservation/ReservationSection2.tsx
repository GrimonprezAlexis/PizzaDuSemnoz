import React from 'react'

const ReservationSection2 = () => {
  return (
    <section className="position-relative">
        <div className="reservation-page">
          <div className="reservation-page-title-container">
            <img src="/img/aida-images/service-icon.png" alt="" />
            <h4 className='ad-title-text'>Make a reservation</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              aspernatur ipsa veritatis<br className="d-none d-md-block" />
              consectetur cupiditate minima quasi eius ipsa aspernatur
              adipisicing elit veritatis
            </p>

            <p></p>
          </div>

          <div className="reservation-page-direction-container">
            <div className="reservation-page-single-direction">
              <p>01</p>
              <h6>Booking</h6>
            </div>
            <div className="reservation-page-direction">
              <img
                src="/img/aida-images/reservation-page-direction-image1.png"
                alt=""
              />
            </div>
            <div
              className="reservation-page-single-direction reservation-page-single-middle-direction"
            >
              <p>02</p>
              <h6>Give Your Details</h6>
            </div>
            <div className="reservation-page-right-direction">
              <img
                src="/img/aida-images/reservation-page-direction-image2.png"
                alt=""
              />
            </div>
            <div className="reservation-page-single-direction">
              <p>03</p>
              <h6>Confirmation</h6>
            </div>
          </div>
        </div>

        <form className="reservation-page-form">
          <div className="reservation-page-form-container">
            <select 
            name="" 
            id="" className="reservation-page-select-field"
            defaultValue="0"
            >
              <option value="0"  disabled hidden>
                Which Branch Of Our Restaurant?
              </option>
              <option value="1">Mirpur</option>
              <option value="2">Uttara</option>
              <option value="3">Dhanmondi</option>
              <option value="4">Gulshan</option>
              <option value="4+">Nikunja</option>
            </select>
            <input
              placeholder="Select Your Reservation Date*"
              className="textbox-n"
              type="date"
              required
            />
            <input placeholder="Start Time *" type="time" required />
            <select
              name=""
              id=""
              className="reservation-page-select-field"
              required
              defaultValue='0'
            >
              <option value="0" disabled hidden>
                How many people are coming? *
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="4+">5+</option>
            </select>
          </div>
          <a href="#">
            <button>Next</button>
          </a>
        </form>
      </section>
  )
}

export default ReservationSection2