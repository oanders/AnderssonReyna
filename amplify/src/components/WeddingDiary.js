import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import oskar_steffy from "./../images/oskar_steffy.png";
import wedding_logo from "./../images/wedding_logo.png";
import wedding_bells from "./../images/wedding_bells.png";
import wedding_reception from "./../images/wedding_reception.png";
import wedding_party from "./../images/wedding_party.png";

function WeeklyNews() {
  return <div>WEEKLY NEWS SHOULD COME HERE</div>;
}
function WeddingRegistration() {
  return (
    <div class="container">
      <h3 class="display-4">
        <em>Registration</em>
      </h3>
      <p class="text-justify">
        Enter your details below to register for our wedding invitation card. We
        will make the submit available as soon as all
        <strong> Save-the-Date</strong> cards have been sent out to our
        beautiful guests.
      </p>
      <br></br>
      <div>
        <form>
          <div class="row form-group">
            <div class="col">
              <label for="inputName">Name </label>
              <input
                type="text"
                class="form-control input-lg"
                placeholder="Full Name"
                id="inputName"
              />
            </div>
            <div class="col">
              <label for="inputAddress">Address </label>
              <input
                type="text"
                class="form-control input-lg"
                placeholder="Street Nr, Postcode, City, Country"
                id="inputAddress"
              />
            </div>
          </div>
          <div class="row form-group">
            <div class="col">
              <label for="inputEmail">Email </label>
              <input
                type="text"
                class="form-control input-lg"
                placeholder="Email Address"
                id="inputEmail"
              />
            </div>
            <div class="col inputlg">
              <label for="inputMobile">Mobile </label>
              <input
                type="text"
                class="form-control input-lg"
                placeholder="Mobile Number"
                id="inputMobile"
              />
            </div>
          </div>
        </form>

        <form>
          <label for="row form-group">Attendance Response </label>
          <div class="row form-group">
            <div class="col">
              <select class="custom-select" id="inputGroupSelect01">
                <option selected>What will you be attending?</option>
                <option value="1">1. Ceremony</option>
                <option value="2">2. Reception</option>
                <option value="3">3. Party</option>
                <option value="4">4. All of The Above</option>
              </select>
            </div>
            <div class="col">
              <select class="custom-select" id="inputGroupSelect02">
                <option selected>
                  Number of seats you would like to reserve?
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">I will bring children</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
function WeddingDiary() {
  return (
    <div className="Wedding-Home">
      <div class="container">
        <div class="jumbotron text-center">
          <Image src={wedding_logo} rounded />
          <p class="lead">
            <italic>15th May 2021</italic>
          </p>
          <br></br>
          <Image src={oskar_steffy} roundedCircle />
          <blockquote class="blockquote text-right">
            <p class="mb-5">
              <em>
                "Por enseñarme a ver el cielo mas azul. Por ser mi compañero y
                darme tu energía. Por aguantar mis malos ratos y manias ... Vivo
                cada segundo, la primera vez. Sabiendo que me quisiste y todo
                aquello que me diste."
              </em>
            </p>
          </blockquote>
          <h1 class="display-2">Welcome to our Wedding's website!</h1>
          <h4>
            Here you will find information about our wedding and weekly updates
            on the preparations for our special day. Soon, we will give you the
            option of registering your details so you can attend our wedding. We
            hope you enjoy this journey as much as we do!
          </h4>
          <p class="text-right">-- Steffy and Oskar --</p>

          <div class="container">
            <h3 class="display-4">
              <em>When & Where</em>
            </h3>
            <div class="row">
              <div class="col-sm">
                <Image src={wedding_bells} width={174} height={180} />
                <h4>Wedding Ceremony</h4>
                <dl>
                  <dt>Date</dt>
                  <dd>Saturday, 15th May 2021</dd>
                  <dt>Time</dt>
                  <dd>15:00 - 15:40</dd>
                  <dt>Address</dt>
                  <dd>Tvetaberg 9, Södertälje</dd>
                </dl>
                <p className="Ceremony-Column">
                  The wedding ceremony will be held at Tveta Church (Kyrka) in
                  Södertälje. All guests attending are encouraged to arrive 10
                  minutes prior to the ceremony. The Bride & Groom will have a
                  photoshoot outside the Church directly after the ceremony.
                </p>
              </div>
              <div class="col-sm">
                <Image src={wedding_reception} width={176} height={180} />
                <h4>Wedding Reception</h4>
                <dl>
                  <dt>Date</dt>
                  <dd>Saturday, 15th May 2021</dd>
                  <dt>Time</dt>
                  <dd>17:00 - 19:00</dd>
                  <dt>Address</dt>
                  <dd>To be announced</dd>
                </dl>
                <p className="Ceremony-Column">
                  Guests will be able to sign the Guest-book at the venue's
                  entrance. They will also enjoy a welcome drink while waiting
                  for the Bride & Groom to arrive at the venue.
                </p>
                <p class="text-left font-italic">
                  <strong>
                    <u>NOTE:</u>
                  </strong>{" "}
                  In case of any food allergies, please contact us.
                </p>
              </div>
              <div class="col-sm">
                <Image src={wedding_party} width={178} height={174} />
                <h4>Wedding Party</h4>
                <dl>
                  <dt>Date</dt>
                  <dd>Saturday, 15th May 2021</dd>
                  <dt>Time</dt>
                  <dd>20:00 - 23:00</dd>
                  <dt>Address</dt>
                  <dd>To be announced</dd>
                </dl>
                <p className="Ceremony-Column">
                  All guests are invited to join us for our wedding celebration
                  Party. Limited snacks and drinks will be served during the
                  night. Our dedicated DJ will set the mood with both
                  Latin-Spanish and Swedish music. Guest are welcomed to make
                  song requests on site.
                </p>
              </div>
            </div>

            <WeddingRegistration />
            <WeeklyNews />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeddingDiary;
