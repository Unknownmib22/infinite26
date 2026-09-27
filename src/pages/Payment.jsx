import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle,
  ExternalLink,
  Upload,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


// =====================================================
// GOOGLE APPS SCRIPT BACKEND
// =====================================================

const BACKEND_URL =
  "https://script.google.com/macros/s/AKfycbyQWyEUChcG4N98FjFfBPhufG_-wxdWnWiKbq4EavkH74rr56qVkScT136GGhujwSRXBg/exec";


// =====================================================
// WHATSAPP COMMUNITY
// =====================================================

const WHATSAPP_URL =
  "https://chat.whatsapp.com/FHCFQ0ghv7pAWdUvjy3S3M";


// =====================================================
// PAYMENT PAGE
// =====================================================

function Payment() {

  // ---------------------------------------------------
  // GET REGISTRATION DATA FROM SESSION STORAGE
  // ---------------------------------------------------

  const [registration] = useState(() => {
    try {
      return JSON.parse(
        sessionStorage.getItem("infinite26_registration")
      );
    } catch {
      return null;
    }
  });


  // ---------------------------------------------------
  // STATE
  // ---------------------------------------------------

  const [transactionId, setTransactionId] = useState("");
  const [screenshot, setScreenshot] = useState(null);

  const [submitting, setSubmitting] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const [registrationId, setRegistrationId] = useState("");

  const [error, setError] = useState("");


  // ---------------------------------------------------
  // NO REGISTRATION FOUND
  // ---------------------------------------------------

  if (!registration) {

    return (
      <>
        <Navbar />

        <main className="payment-page">

          <section className="payment-error">

            <p className="section-kicker">
              PAYMENT
            </p>

            <h1>
              No Registration Found
            </h1>

            <p>
              Please start your registration from the
              Events page.
            </p>

            <Link
              to="/events"
              className="btn btn-primary"
            >
              BROWSE EVENTS
            </Link>

          </section>

        </main>

        <Footer />
      </>
    );
  }


  // ---------------------------------------------------
  // REGISTRATION DATA
  // ---------------------------------------------------

  const {
    event,
    organizer,
    members,
    teamSize,
    totalAmount,
  } = registration;


  // ---------------------------------------------------
  // FILE → BASE64
  // ---------------------------------------------------

  const convertFileToBase64 = (file) => {

    return new Promise((resolve, reject) => {

      const reader = new FileReader();

      reader.onload = () => {
        resolve(reader.result);
      };

      reader.onerror = () => {
        reject(
          new Error(
            "Could not read payment screenshot."
          )
        );
      };

      reader.readAsDataURL(file);

    });

  };


  // ---------------------------------------------------
  // HANDLE FILE SELECTION
  // ---------------------------------------------------

  const handleScreenshotChange = (e) => {

    const file =
      e.target.files?.[0] || null;

    setError("");

    if (!file) {
      setScreenshot(null);
      return;
    }


    // JPG / JPEG only

    if (
      file.type !== "image/jpeg" &&
      file.type !== "image/jpg"
    ) {

      setScreenshot(null);

      setError(
        "Please upload a JPG or JPEG image."
      );

      e.target.value = "";

      return;
    }


    // Maximum 5 MB

    if (file.size > 5 * 1024 * 1024) {

      setScreenshot(null);

      setError(
        "Payment screenshot must be smaller than 5 MB."
      );

      e.target.value = "";

      return;
    }


    setScreenshot(file);

  };


  // ---------------------------------------------------
  // SUBMIT REGISTRATION
  // ---------------------------------------------------

  const handleSubmit = async (e) => {

    e.preventDefault();

    setError("");


    // Transaction ID

    if (!transactionId.trim()) {

      setError(
        "Please enter your transaction ID / UTR."
      );

      return;
    }


    // Screenshot

    if (!screenshot) {

      setError(
        "Please upload your payment screenshot."
      );

      return;
    }


    setSubmitting(true);


    try {

      // -----------------------------------------------
      // Convert screenshot to Base64
      // -----------------------------------------------

      const screenshotBase64 =
        await convertFileToBase64(screenshot);


      // -----------------------------------------------
      // Create payload
      // -----------------------------------------------

      const payload = {

        event: event,

        organizer: organizer,

        members: members,

        teamSize: teamSize,

        totalAmount: totalAmount,

        transactionId:
          transactionId.trim(),

        paymentScreenshot:
          screenshotBase64,

        declarationAccuracy: true,

        declarationGuidelines: true,

      };


      console.log(
        "Submitting registration..."
      );


      // -----------------------------------------------
      // Send to Google Apps Script
      // -----------------------------------------------

      const response = await fetch(
        BACKEND_URL,
        {
          method: "POST",

          redirect: "follow",

          headers: {
            "Content-Type":
              "text/plain;charset=utf-8",
          },

          body: JSON.stringify(payload),
        }
      );


      // -----------------------------------------------
      // Read backend response
      // -----------------------------------------------

      const result =
        await response.json();


      console.log(
        "Backend response:",
        result
      );


      // -----------------------------------------------
      // Backend returned an error
      // -----------------------------------------------

      if (!result.success) {

        throw new Error(
          result.error ||
          "Registration submission failed."
        );

      }


      // -----------------------------------------------
      // SUCCESS
      // -----------------------------------------------

      setRegistrationId(
        result.registrationId
      );

      setSubmitted(true);


      // Registration data no longer needed

      // Registration data no longer needed

    sessionStorage.removeItem(
     "infinite26_registration"
     );


     sessionStorage.removeItem(
     "infinite26_registration_cache"
     );

    } catch (err) {

      console.error(
        "Registration error:",
        err
      );

      setError(
        err.message ||
        "Something went wrong while submitting your registration."
      );

    } finally {

      setSubmitting(false);

    }

  };


  // =====================================================
  // SUCCESS SCREEN
  // =====================================================

  if (submitted) {

    return (
      <>
        <Navbar />

        <main className="payment-page">

          <section className="payment-success">

            <CheckCircle
              size={64}
              strokeWidth={1.5}
            />


            <p className="section-kicker">
              REGISTRATION SUBMITTED
            </p>


            <h1>
              You're In.
            </h1>


            <p>
              Your registration has been successfully
              submitted and is currently awaiting
              payment verification.
            </p>


            {/* REGISTRATION ID */}

            <div className="registration-id-box">

              <span>
                REGISTRATION ID
              </span>

              <strong>
                {registrationId}
              </strong>

              <small>
                Save this ID for future communication.
              </small>

            </div>


            {/* STATUS */}

            <div className="pending-box">

              <strong>
                STATUS: PENDING
              </strong>

              <p>
                Our organizing team will verify your
                payment and update your registration
                status to CONFIRMED.
              </p>

            </div>


            {/* ACTIONS */}

            <div className="payment-success-actions">

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                JOIN WHATSAPP COMMUNITY

                <ExternalLink
                  size={17}
                />
              </a>


              <Link
                to="/"
                className="btn btn-secondary"
              >
                BACK TO HOME
              </Link>

            </div>

          </section>

        </main>

        <Footer />
      </>
    );

  }


  // =====================================================
  // PAYMENT FORM
  // =====================================================

  return (
    <>
      <Navbar />

      <main className="payment-page">


        {/* ============================================
            HEADER
        ============================================ */}

        <section className="payment-header">

          <Link
            to="/events"
            className="back-link"
          >

            <ArrowLeft
              size={16}
            />

            BACK TO EVENTS

          </Link>


          <p className="section-kicker">
            COMPLETE YOUR REGISTRATION
          </p>


          <h1>
            Payment
          </h1>


          <p>
            Complete the payment and submit your
            transaction details.
          </p>

        </section>



        <form
          className="payment-form"
          onSubmit={handleSubmit}
        >


          {/* ==========================================
              01 — ORDER SUMMARY
          ========================================== */}

          <section className="payment-section">

            <div className="form-section-heading">

              <span className="section-number">
                01
              </span>

              <div>

                <p className="section-kicker">
                  REGISTRATION
                </p>

                <h2>
                  Order Summary
                </h2>

              </div>

            </div>


            <div className="payment-summary">


              <div className="summary-line">

                <span>
                  Event
                </span>

                <strong>
                  {event.name}
                </strong>

              </div>


              <div className="summary-line">

                <span>
                  Dynasty
                </span>

                <strong>
                  {event.dynasty}
                </strong>

              </div>


              <div className="summary-line">

                <span>
                  Participants
                </span>

                <strong>
                  {teamSize}
                </strong>

              </div>


              <div className="summary-total">

                <span>
                  TOTAL PAYABLE
                </span>

                <strong>
                  ₹{totalAmount}
                </strong>

              </div>


            </div>

          </section>



          {/* ==========================================
              02 — QR PAYMENT
          ========================================== */}

          <section className="payment-section">

            <div className="form-section-heading">

              <span className="section-number">
                02
              </span>

              <div>

                <p className="section-kicker">
                  UPI PAYMENT
                </p>

                <h2>
                  Scan & Pay
                </h2>

              </div>

            </div>


            <div className="qr-payment">


              {/* QR */}

              <img
                src="/payment-qr.jpeg"
                alt="INFINITE'26 payment QR code"
                className="payment-qr"
              />


              {/* UPI INFORMATION */}

              <div className="upi-details">

                <p>
                  PAY TO UPI ID
                </p>

                <strong>
                  5logashravi@oksbi
                </strong>

                <p className="payment-instruction">
                  Pay exactly ₹{totalAmount} and
                  keep your transaction reference
                  number.
                </p>

              </div>


            </div>

          </section>



          {/* ==========================================
              03 — TRANSACTION DETAILS
          ========================================== */}

          <section className="payment-section">

            <div className="form-section-heading">

              <span className="section-number">
                03
              </span>

              <div>

                <p className="section-kicker">
                  PAYMENT DETAILS
                </p>

                <h2>
                  Transaction Details
                </h2>

              </div>

            </div>


            <div className="form-field">

              <label htmlFor="transactionId">
                Transaction ID / UTR *
              </label>


              <input
                id="transactionId"
                type="text"
                required
                value={transactionId}
                onChange={(e) => {
                  setTransactionId(
                    e.target.value
                  );
                  setError("");
                }}
                placeholder="Enter your UPI transaction ID"
              />

            </div>

          </section>



          {/* ==========================================
              04 — SCREENSHOT UPLOAD
          ========================================== */}

          <section className="payment-section">

            <div className="form-section-heading">

              <span className="section-number">
                04
              </span>

              <div>

                <p className="section-kicker">
                  PAYMENT PROOF
                </p>

                <h2>
                  Upload Screenshot
                </h2>

              </div>

            </div>


            <div className="upload-box">


              <Upload
                size={30}
              />


              <label
                htmlFor="paymentScreenshot"
                className="upload-button"
              >
                CHOOSE PAYMENT SCREENSHOT
              </label>


              <p>
                JPG or JPEG only · Maximum 5 MB
              </p>


              {/* Hidden real file input */}

              <input
                id="paymentScreenshot"
                type="file"
                accept="image/jpeg,.jpg,.jpeg"
                onChange={
                  handleScreenshotChange
                }
              />


              {/* Selected filename */}

              {screenshot && (

                <span className="selected-file">

                  ✓ {screenshot.name}

                </span>

              )}


            </div>

          </section>



          {/* ==========================================
              ERROR MESSAGE
          ========================================== */}

          {error && (

            <div className="payment-error-message">

              {error}

            </div>

          )}



          {/* ==========================================
              SUBMIT
          ========================================== */}

          <button
            type="submit"
            className="btn btn-primary payment-submit"
            disabled={submitting}
          >

            {submitting
              ? "SUBMITTING..."
              : "SUBMIT REGISTRATION"}

          </button>


        </form>

      </main>


      <Footer />

    </>
  );
}


export default Payment;