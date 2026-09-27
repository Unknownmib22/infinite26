import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import events from "../data/events";

function Registration() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const eventId = searchParams.get("event");

  const event = useMemo(
    () => events.find((item) => item.id === eventId),
    [eventId]
  );

  /*
    ============================================================
    INFINITE'26 REGISTRATION MEMORY CACHE
    ============================================================

    This uses sessionStorage so that participant details are
    remembered during the current browser session.

    It remembers:
    - Name
    - Phone
    - Email
    - College
    - Team size
    - Team member details

    It does NOT permanently store the information.
  */

  const CACHE_KEY = "infinite26_registration_cache";

  const getRegistrationCache = () => {
    try {
      const cached = sessionStorage.getItem(CACHE_KEY);

      if (!cached) {
        return {
          organizer: {
            name: "",
            phone: "",
            email: "",
            college: "",
          },
          eventDrafts: {},
        };
      }

      const parsed = JSON.parse(cached);

      return {
        organizer: {
          name: parsed?.organizer?.name || "",
          phone: parsed?.organizer?.phone || "",
          email: parsed?.organizer?.email || "",
          college: parsed?.organizer?.college || "",
        },
        eventDrafts: parsed?.eventDrafts || {},
      };
    } catch {
      return {
        organizer: {
          name: "",
          phone: "",
          email: "",
          college: "",
        },
        eventDrafts: {},
      };
    }
  };

  const initialCache = getRegistrationCache();

  /*
    ============================================================
    ORGANIZER / PARTICIPANT DETAILS
    ============================================================
  */

  const [organizer, setOrganizer] = useState(
    initialCache.organizer
  );

  /*
    ============================================================
    EVENT-SPECIFIC DRAFT
    ============================================================

    Team information is stored separately for each event.

    This prevents a team from one event accidentally appearing
    when the user registers for another event.
  */

  const cachedEventDraft =
    eventId && initialCache.eventDrafts
      ? initialCache.eventDrafts[eventId]
      : null;

  const [teamSize, setTeamSize] = useState(
    cachedEventDraft?.teamSize ||
      event?.minMembers ||
      1
  );

  const [members, setMembers] = useState(
    cachedEventDraft?.members || []
  );

  /*
    ============================================================
    DECLARATIONS
    ============================================================
  */

  const [declarationAccuracy, setDeclarationAccuracy] =
    useState(false);

  const [declarationGuidelines, setDeclarationGuidelines] =
    useState(false);

  /*
    ============================================================
    SAVE REGISTRATION MEMORY
    ============================================================
  */

  useEffect(() => {
    if (!eventId) return;

    try {
      const currentCache = getRegistrationCache();

      currentCache.organizer = organizer;

      currentCache.eventDrafts = {
        ...currentCache.eventDrafts,
        [eventId]: {
          teamSize,
          members,
        },
      };

      sessionStorage.setItem(
        CACHE_KEY,
        JSON.stringify(currentCache)
      );
    } catch {
      // Ignore storage errors.
    }
  }, [
    organizer,
    members,
    teamSize,
    eventId,
  ]);

  /*
    ============================================================
    INVALID EVENT
    ============================================================
  */

  if (!event) {
    return (
      <div className="site">
        <Navbar />

        <main className="registration-page">
          <section className="registration-error">
            <p className="section-kicker">
              REGISTRATION
            </p>

            <h1>Select an Event First</h1>

            <p>
              Please choose an event from the Events page
              before starting registration.
            </p>

            <Link
              to="/events"
              className="btn btn-primary"
            >
              Browse Events
            </Link>
          </section>
        </main>

        <Footer />
      </div>
    );
  }

  /*
    ============================================================
    EVENT CALCULATIONS
    ============================================================
  */

  const isTeam = event.type === "team";
  const isPerHead = event.pricing === "per_head";

  const requiredMembers = isTeam
    ? teamSize
    : 1;

  const totalAmount = isPerHead
    ? event.fee * requiredMembers
    : event.fee;

  /*
    ============================================================
    UPDATE INDIVIDUAL TEAM MEMBER
    ============================================================
  */

  const updateMember = (
    index,
    field,
    value
  ) => {
    setMembers((current) => {
      const updated = [...current];

      if (!updated[index]) {
        updated[index] = {
          name: "",
          phone: "",
          email: "",
          college: organizer.college,
        };
      }

      updated[index] = {
        ...updated[index],
        [field]: value,
      };

      return updated;
    });
  };

  /*
    ============================================================
    CHANGE TEAM SIZE
    ============================================================
  */

  const handleTeamSizeChange = (size) => {
    setTeamSize(size);

    setMembers((current) => {
      const updated = [...current];

      while (updated.length < size) {
        updated.push({
          name: "",
          phone: "",
          email: "",
          college: organizer.college,
        });
      }

      return updated.slice(0, size);
    });
  };

  /*
    ============================================================
    CONTINUE TO PAYMENT
    ============================================================
  */

  const handleSubmit = (e) => {
    e.preventDefault();

    /*
      Both declarations must be accepted.
    */

    if (
      !declarationAccuracy ||
      !declarationGuidelines
    ) {
      alert(
        "Please accept both declarations before continuing."
      );

      return;
    }

    /*
      Store the complete registration temporarily.

      This is separate from the small memory cache above.

      Payment.jsx receives this data through:
      "infinite26_registration"
    */

    const registrationData = {
      event: {
        id: event.id,
        name: event.name,
        dynasty: event.dynasty,
        category: event.category,
        fee: event.fee,
        pricing: event.pricing,
      },

      organizer,

      members: isTeam
        ? members.slice(0, teamSize)
        : [
            {
              name: organizer.name,
              phone: organizer.phone,
              email: organizer.email,
              college: organizer.college,
            },
          ],

      teamSize: requiredMembers,

      totalAmount,

      createdAt:
        new Date().toISOString(),
    };

    sessionStorage.setItem(
      "infinite26_registration",
      JSON.stringify(registrationData)
    );

    /*
      IMPORTANT:
      Do NOT clear the registration memory cache here.

      The user may come back from the payment page and
      should still have their details available.
    */

    // Go to payment page
    navigate("/payment");
  };

  /*
    ============================================================
    UI
    ============================================================
  */

  return (
    <div className="site">
      <Navbar />

      <main className="registration-page">

        {/* HEADER */}

        <section className="registration-header">
          <Link
            to="/events"
            className="back-link"
          >
            <ArrowLeft size={16} />
            Back to Events
          </Link>

          <p className="section-kicker">
            BEGIN YOUR CHRONICLE
          </p>

          <h1>Registration</h1>

          <p>
            Register for{" "}
            <strong>{event.name}</strong>
          </p>
        </section>

        <form
          className="registration-form"
          onSubmit={handleSubmit}
        >

          {/* EVENT SUMMARY */}

          <section className="registration-section event-summary">

            <div>
              <span className="section-kicker">
                SELECTED EVENT
              </span>

              <h2>{event.name}</h2>

              <p>
                {event.dynasty} · {event.category}
              </p>
            </div>

            <div className="registration-price">
              <span>
                REGISTRATION FEE
              </span>

              <strong>
                ₹{event.fee}

                {event.pricing === "per_head" &&
                  " / head"}

                {event.pricing === "per_team" &&
                  " / team"}

                {event.pricing === "per_entry" &&
                  " / entry"}
              </strong>
            </div>

          </section>

          {/* ORGANIZER / PARTICIPANT */}

          <section className="registration-section">

            <div className="form-section-heading">

              <span className="section-number">
                01
              </span>

              <div>
                <p className="section-kicker">
                  REGISTRATION DETAILS
                </p>

                <h2>
                  Participant Details
                </h2>
              </div>

            </div>

            <p className="form-help">
              {isTeam
                ? "Enter the details of the person coordinating this registration."
                : "Enter your details exactly as they should appear in the registration record."}
            </p>

            <div className="form-grid">

              {/* NAME */}

              <div className="form-field">

                <label>
                  Full Name *
                </label>

                <input
                  type="text"
                  required
                  value={organizer.name}
                  onChange={(e) =>
                    setOrganizer({
                      ...organizer,
                      name: e.target.value,
                    })
                  }
                  placeholder="Enter full name"
                />

              </div>

              {/* PHONE */}

              <div className="form-field">

                <label>
                  Phone Number *
                </label>

                <input
                  type="tel"
                  required
                  value={organizer.phone}
                  onChange={(e) =>
                    setOrganizer({
                      ...organizer,
                      phone: e.target.value,
                    })
                  }
                  placeholder="10-digit mobile number"
                  pattern="[0-9]{10}"
                />

              </div>

              {/* EMAIL */}

              <div className="form-field">

                <label>
                  Email ID *
                </label>

                <input
                  type="email"
                  required
                  value={organizer.email}
                  onChange={(e) =>
                    setOrganizer({
                      ...organizer,
                      email: e.target.value,
                    })
                  }
                  placeholder="example@email.com"
                />

              </div>

              {/* COLLEGE */}

              <div className="form-field">

                <label>
                  College Name *
                </label>

                <input
                  type="text"
                  required
                  value={organizer.college}
                  onChange={(e) => {
                    const college =
                      e.target.value;

                    setOrganizer({
                      ...organizer,
                      college,
                    });

                    /*
                      Automatically update
                      existing team colleges.
                    */

                    setMembers((current) =>
                      current.map((member) => ({
                        ...member,
                        college,
                      }))
                    );
                  }}
                  placeholder="Enter college name"
                />

              </div>

            </div>

          </section>

          {/* TEAM SIZE */}

          {isTeam && (
            <section className="registration-section">

              <div className="form-section-heading">

                <span className="section-number">
                  02
                </span>

                <div>
                  <p className="section-kicker">
                    TEAM
                  </p>

                  <h2>
                    Team Members
                  </h2>
                </div>

              </div>

              <div className="team-size-row">

                <div>

                  <label>
                    Number of Members
                  </label>

                  <p className="form-help">
                    This event allows{" "}
                    {event.minMembers}–
                    {event.maxMembers}{" "}
                    members.
                  </p>

                </div>

                <select
                  value={teamSize}
                  onChange={(e) =>
                    handleTeamSizeChange(
                      Number(e.target.value)
                    )
                  }
                >

                  {Array.from({
                    length:
                      event.maxMembers -
                      event.minMembers +
                      1,
                  }).map(
                    (_, index) => {
                      const size =
                        event.minMembers +
                        index;

                      return (
                        <option
                          key={size}
                          value={size}
                        >
                          {size} Members
                        </option>
                      );
                    }
                  )}

                </select>

              </div>

              <div className="member-list">

                {Array.from({
                  length: teamSize,
                }).map((_, index) => {

                  const member =
                    members[index] || {
                      name: "",
                      phone: "",
                      email: "",
                      college:
                        organizer.college,
                    };

                  return (
                    <div
                      className="member-card"
                      key={index}
                    >

                      <div className="member-card-header">

                        <div>

                          <span>
                            MEMBER{" "}
                            {index + 1}
                          </span>

                          <h3>
                            {index === 0
                              ? "Team Lead / Participant"
                              : `Participant ${
                                  index + 1
                                }`}
                          </h3>

                        </div>

                      </div>

                      <div className="form-grid">

                        {/* MEMBER NAME */}

                        <div className="form-field">

                          <label>
                            Name *
                          </label>

                          <input
                            type="text"
                            required
                            value={
                              member.name
                            }
                            onChange={(e) =>
                              updateMember(
                                index,
                                "name",
                                e.target.value
                              )
                            }
                            placeholder="Full name"
                          />

                        </div>

                        {/* MEMBER PHONE */}

                        <div className="form-field">

                          <label>
                            Phone *
                          </label>

                          <input
                            type="tel"
                            required
                            value={
                              member.phone
                            }
                            onChange={(e) =>
                              updateMember(
                                index,
                                "phone",
                                e.target.value
                              )
                            }
                            placeholder="10-digit mobile number"
                            pattern="[0-9]{10}"
                          />

                        </div>

                        {/* MEMBER EMAIL */}

                        <div className="form-field">

                          <label>
                            Email *
                          </label>

                          <input
                            type="email"
                            required
                            value={
                              member.email
                            }
                            onChange={(e) =>
                              updateMember(
                                index,
                                "email",
                                e.target.value
                              )
                            }
                            placeholder="Email address"
                          />

                        </div>

                        {/* MEMBER COLLEGE */}

                        <div className="form-field">

                          <label>
                            College *
                          </label>

                          <input
                            type="text"
                            required
                            value={
                              member.college ||
                              organizer.college
                            }
                            onChange={(e) =>
                              updateMember(
                                index,
                                "college",
                                e.target.value
                              )
                            }
                            placeholder="College name"
                          />

                        </div>

                      </div>

                    </div>
                  );
                })}

              </div>

            </section>
          )}

          {/* PAYMENT SUMMARY */}

          <section className="registration-section">

            <div className="form-section-heading">

              <span className="section-number">
                {isTeam ? "03" : "02"}
              </span>

              <div>
                <p className="section-kicker">
                  PAYMENT
                </p>

                <h2>
                  Registration Summary
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
                  Participants
                </span>

                <strong>
                  {requiredMembers}
                </strong>

              </div>

              <div className="summary-line">

                <span>
                  Rate
                </span>

                <strong>

                  ₹{event.fee}

                  {isPerHead
                    ? " / head"
                    : event.pricing ===
                      "per_team"
                    ? " / team"
                    : " / entry"}

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

            <p className="payment-note">
              Payment will be completed on the
              next step. Keep your transaction
              details ready.
            </p>

          </section>

          {/* DECLARATION */}

          <section className="registration-section">

            <div className="form-section-heading">

              <span className="section-number">
                {isTeam ? "04" : "03"}
              </span>

              <div>

                <p className="section-kicker">
                  DECLARATION
                </p>

                <h2>
                  Before You Submit
                </h2>

              </div>

            </div>

            <div className="declaration-box">

              {/* DECLARATION 1 */}

              <label className="checkbox-row">

                <input
                  type="checkbox"
                  required
                  checked={
                    declarationAccuracy
                  }
                  onChange={(e) =>
                    setDeclarationAccuracy(
                      e.target.checked
                    )
                  }
                />

                <span>
                  I confirm that the information
                  provided in this registration
                  form is accurate and complete.
                  I agree to abide by the official
                  rules and regulations of the event
                  and accept the decisions of the
                  Organizing Committee and Judges
                  as final.
                </span>

              </label>

              {/* DECLARATION 2 */}

              <label className="checkbox-row">

                <input
                  type="checkbox"
                  required
                  checked={
                    declarationGuidelines
                  }
                  onChange={(e) =>
                    setDeclarationGuidelines(
                      e.target.checked
                    )
                  }
                />

                <span>
                  I confirm that I have read and
                  understood the event guidelines
                  before submitting this
                  registration.
                </span>

              </label>

            </div>

            <p className="submission-warning">
              Before submitting, please verify all
              details carefully. Registration once
              submitted cannot be edited unless
              permitted by the Organizing Committee.
            </p>

            <button
              type="submit"
              className="btn btn-primary registration-submit"
            >
              Continue to Payment
              <ArrowRight size={18} />
            </button>

          </section>

        </form>

      </main>

      <Footer />
    </div>
  );
}

export default Registration;